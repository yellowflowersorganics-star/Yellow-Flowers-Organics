# Phase 5: GitHub Workflows (20-30 min)

**Goal**: Set up automatic deployment workflows for DEV and PRODUCTION

---

## 📋 What You'll Do

- Create DEV deployment workflow (auto-deploy when pushing to `develop` branch)
- Create PROD deployment workflow (auto-deploy when pushing to `main` branch)
- Test that workflows run successfully

---

## Step 5.1: Create DEV Deployment Workflow

**Create `.github/workflows/deploy-dev.yml`**:

```yaml
name: Deploy to DEV

on:
  push:
    branches:
      - develop
  workflow_dispatch:

jobs:
  deploy-dev:
    runs-on: ubuntu-latest
    environment: development
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID_DEV }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY_DEV }}
          aws-region: ${{ secrets.AWS_REGION_DEV }}

      - name: Sync files to S3 (DEV)
        run: |
          aws s3 sync . s3://${{ secrets.S3_BUCKET_NAME_DEV }} \
            --exclude ".git/*" \
            --exclude ".github/*" \
            --exclude "node_modules/*" \
            --exclude ".gitignore" \
            --exclude "README.md" \
            --exclude "package.json" \
            --delete

      - name: Set content types
        run: |
          aws s3 cp s3://${{ secrets.S3_BUCKET_NAME_DEV }} s3://${{ secrets.S3_BUCKET_NAME_DEV }} \
            --recursive \
            --exclude "*" \
            --include "*.html" \
            --content-type "text/html; charset=utf-8" \
            --metadata-directive REPLACE

      - name: Deployment complete
        run: |
          echo "✅ DEV Deployment completed!"
          echo "🌐 DEV URL: http://${{ secrets.S3_BUCKET_NAME_DEV }}.s3-website-${{ secrets.AWS_REGION_DEV }}.amazonaws.com"
```

---

## Step 5.2: Create PROD Deployment Workflow

**Create `.github/workflows/deploy-prod.yml`**:

```yaml
name: Deploy to PRODUCTION

on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  deploy-prod:
    runs-on: ubuntu-latest
    environment: production
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID_PROD }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY_PROD }}
          aws-region: ${{ secrets.AWS_REGION_PROD }}

      - name: Sync files to S3 (PRODUCTION)
        run: |
          aws s3 sync . s3://${{ secrets.S3_BUCKET_NAME_PROD }} \
            --exclude ".git/*" \
            --exclude ".github/*" \
            --exclude "node_modules/*" \
            --exclude ".gitignore" \
            --exclude "README.md" \
            --exclude "package.json" \
            --delete \
            --cache-control "public, max-age=31536000"

      - name: Set content types
        run: |
          aws s3 cp s3://${{ secrets.S3_BUCKET_NAME_PROD }} s3://${{ secrets.S3_BUCKET_NAME_PROD }} \
            --recursive \
            --exclude "*" \
            --include "*.html" \
            --content-type "text/html; charset=utf-8" \
            --metadata-directive REPLACE

      - name: Deployment complete
        run: |
          echo "✅ PRODUCTION Deployment completed!"
          echo "🌐 Production URL: http://${{ secrets.S3_BUCKET_NAME_PROD }}.s3-website-${{ secrets.AWS_REGION_PROD }}.amazonaws.com"
```

---

## Step 5.3: Commit and Push Workflows

```bash
# Make sure you're on main branch
git checkout main

# Stage workflow files
git add .github/workflows/

# Commit
git commit -m "ci: Add deployment workflows for dev and prod environments"

# Push to GitHub
git push origin main
```

---

## Step 5.4: Watch First Deployment

1. Go to GitHub → Your Repository → **Actions** tab
2. You should see "Deploy to PRODUCTION" workflow running
3. Click on it to watch the deployment progress
4. Wait for it to complete (usually 30-60 seconds)

---

## ✅ Phase 5 Verification

- [ ] `deploy-dev.yml` file created
- [ ] `deploy-prod.yml` file created
- [ ] Workflows pushed to GitHub
- [ ] Can see workflows in GitHub Actions tab
- [ ] First production deployment triggered automatically
- [ ] Production deployment completed successfully
- [ ] No errors in workflow logs

**All checked?** ✅ CI/CD is ready!

---

## 🐛 Troubleshooting

### Issue: Workflow fails with "AWS credentials not found"

**Solution**: Check GitHub secrets
1. GitHub → Settings → Secrets and variables → Actions
2. Verify all 8 secrets are set correctly
3. Secret names must match exactly (case-sensitive!)

### Issue: Workflow fails with "Access Denied"

**Solution**: Check IAM permissions
1. AWS Console → IAM → Users
2. Verify user has correct policy attached
3. Check bucket name in policy matches your actual bucket

### Issue: Files not uploading to S3

**Solution**: Check workflow logs
1. GitHub → Actions → Click failed workflow
2. Expand "Sync files to S3" step
3. Read error message for clues
4. Common issue: Wrong bucket name or region

### Issue: Workflow not triggering

**Solution**: Check workflow file location and syntax
```bash
# Verify files are in correct location
ls -la .github/workflows/

# Check YAML syntax
# Use: https://www.yamllint.com/
```

---

## 💡 Understanding the Workflows

### What Each Section Does:

**`on:`** - When the workflow runs
```yaml
on:
  push:
    branches:
      - main  # Runs when code is pushed to main branch
  workflow_dispatch:  # Allows manual trigger from Actions tab
```

**`environment:`** - Groups secrets and provides deployment history
```yaml
environment: production  # Links to production GitHub environment
```

**`aws s3 sync`** - Uploads your files to S3
- `--exclude` - Don't upload these files
- `--delete` - Remove files from S3 that aren't in your repo
- `--cache-control` - Browser caching settings (PROD only)

**`workflow_dispatch`** - Allows manual deployment
- Go to Actions tab → Select workflow → "Run workflow"

---

## 📚 Next Reading

- **GitHub Actions**: [Official Documentation](https://docs.github.com/en/actions)
- **AWS CLI S3 Sync**: [AWS Documentation](https://docs.aws.amazon.com/cli/latest/reference/s3/sync.html)

---

## ➡️ Next Step

**Phase 5 Complete!** 🎉

Automatic deployment is working!

Continue to: **[Phase 6: Branch Protection](06-branch-protection.md)** (15-20 min)

---

[← Back to Index](README.md) | [← Previous: Phase 4](04-aws-infrastructure.md) | [Next: Phase 6 →](06-branch-protection.md)


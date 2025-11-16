# Phase 4: AWS Infrastructure (60-90 min)

**Goal**: Set up cloud hosting for both DEV and PRODUCTION environments

📖 **Full Detailed Guide**: [AWS Infrastructure Setup](../guides/deployment.md)

---

## 📋 What You'll Do

- Create AWS account
- Set up DEV S3 bucket for testing
- Set up PROD S3 bucket for live site
- Create IAM users with proper permissions
- Configure GitHub secrets for automatic deployment

---

## Step 4.1: Create AWS Account

1. Go to: https://aws.amazon.com/
2. Click **"Create an AWS Account"**
3. Enter email, password, account name
4. Enter payment information (credit card required)
5. Choose Support Plan: **Basic (Free)**
6. Verify identity (phone verification)

**💰 Cost**: ~$1-2/month for both environments

---

## Step 4.2: Set Up Development Environment

### Create DEV S3 Bucket

1. **AWS Console** → **S3** → **Create bucket**

   ```
   Bucket name: my-awesome-website-dev
   Region: us-east-1 (or your preferred region)
   
   ⚠️ UNCHECK "Block all public access"
   ✅ Acknowledge bucket will be public
   
   Tags:
     Environment: dev
     Project: my-awesome-website
   ```

2. **Enable Static Website Hosting**:
   - Bucket → **Properties** → **Static website hosting**
   - **Enable**
   - Index document: `index.html`
   - Error document: `index.html`
   - **Save** and **copy the endpoint URL** (you'll need this!)

3. **Set Bucket Policy** (make it publicly readable):
   - Bucket → **Permissions** → **Bucket policy**
   - Paste this (replace bucket name):

   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::my-awesome-website-dev/*"
       }
     ]
   }
   ```

---

## Step 4.3: Set Up Production Environment

### Create PROD S3 Bucket

**Repeat the same steps as DEV**, but with these changes:

```
Bucket name: my-awesome-website-prod  (note: -prod instead of -dev)
✅ Enable Bucket Versioning (for production safety)

Tags:
  Environment: production
  Project: my-awesome-website
```

**Important**: Use the **SAME region** as your DEV bucket!

---

## Step 4.4: Create IAM Users

You need separate IAM users for DEV and PROD deployments.

### DEV IAM User

1. **IAM Console** → **Users** → **Create user**

   ```
   User name: github-actions-deploy-dev
   Access type: Programmatic access
   ```

2. **Attach Policy** → **Create Inline Policy**:
   - Switch to **JSON** tab
   - Paste this (replace bucket name):

   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Action": [
           "s3:PutObject",
           "s3:GetObject",
           "s3:DeleteObject",
           "s3:ListBucket",
           "s3:PutObjectAcl"
         ],
         "Resource": [
           "arn:aws:s3:::my-awesome-website-dev",
           "arn:aws:s3:::my-awesome-website-dev/*"
         ]
       }
     ]
   }
   ```

3. **Save Credentials** (you'll only see these once!):
   - ✅ Access Key ID (DEV)
   - ✅ Secret Access Key (DEV)

### PROD IAM User

**Repeat the same steps** for production:

```
User name: github-actions-deploy-prod
Resource: arn:aws:s3:::my-awesome-website-prod
Resource: arn:aws:s3:::my-awesome-website-prod/*
```

Save PROD credentials separately!

---

## Step 4.5: Configure GitHub Secrets

Now add your AWS credentials to GitHub so workflows can deploy automatically.

1. **GitHub** → Your Repository → **Settings** → **Secrets and variables** → **Actions**

2. Click **"New repository secret"** for each:

### DEV Secrets (4 secrets):

```
Name: AWS_ACCESS_KEY_ID_DEV
Value: [your DEV access key ID]

Name: AWS_SECRET_ACCESS_KEY_DEV
Value: [your DEV secret access key]

Name: AWS_REGION_DEV
Value: us-east-1

Name: S3_BUCKET_NAME_DEV
Value: my-awesome-website-dev
```

### PROD Secrets (4 secrets):

```
Name: AWS_ACCESS_KEY_ID_PROD
Value: [your PROD access key ID]

Name: AWS_SECRET_ACCESS_KEY_PROD
Value: [your PROD secret access key]

Name: AWS_REGION_PROD
Value: us-east-1

Name: S3_BUCKET_NAME_PROD
Value: my-awesome-website-prod
```

**Total**: 8 GitHub secrets

---

## ✅ Phase 4 Verification

- [ ] AWS account created
- [ ] DEV S3 bucket created and configured
- [ ] DEV static website hosting enabled (URL saved)
- [ ] DEV bucket policy set (publicly readable)
- [ ] PROD S3 bucket created and configured
- [ ] PROD static website hosting enabled (URL saved)
- [ ] PROD bucket policy set (publicly readable)
- [ ] DEV IAM user created (credentials saved)
- [ ] PROD IAM user created (credentials saved)
- [ ] All 8 GitHub secrets configured
- [ ] Both S3 endpoint URLs saved somewhere safe

**Your URLs should look like**:
```
DEV:  http://my-awesome-website-dev.s3-website-us-east-1.amazonaws.com
PROD: http://my-awesome-website-prod.s3-website-us-east-1.amazonaws.com
```

**All checked?** ✅ AWS is ready!

---

## 🐛 Troubleshooting

### Issue: Bucket name already taken

**Solution**: Bucket names are globally unique across all AWS accounts.
```
Try adding your initials or numbers:
my-awesome-website-jdoe-dev
my-awesome-website-2024-dev
```

### Issue: Can't uncheck "Block public access"

**Solution**: You need to acknowledge the warning
- Scroll down and check the acknowledgment box
- "I acknowledge that the current settings might result in this bucket and the objects within becoming public"

### Issue: Forgot to save S3 endpoint URL

**Solution**: You can find it again
- Bucket → Properties → Static website hosting
- The URL is shown there

### Issue: Lost IAM credentials

**Solution**: Create new access keys
- IAM → Users → Select user → Security credentials
- Create new access key
- Update GitHub secrets with new values

---

## 💡 Pro Tips

1. **Save your URLs in a text file** for easy reference
2. **Use the same region for both environments** (simpler configuration)
3. **Don't mix up DEV and PROD credentials** (double-check bucket names)
4. **Test bucket access** by manually uploading a test file before setting up workflows

---

## 📚 Need More Help?

- **Detailed AWS Guide**: [Complete AWS Infrastructure Setup](../guides/deployment.md)
- **S3 Documentation**: [AWS S3 Static Website Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- **IAM Documentation**: [AWS IAM Best Practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)

---

## ➡️ Next Step

**Phase 4 Complete!** 🎉

AWS infrastructure is ready for deployment!

Continue to: **[Phase 5: GitHub Workflows](05-github-workflows.md)** (20-30 min)

---

[← Back to Index](README.md) | [← Previous: Phase 3](03-project-creation.md) | [Next: Phase 5 →](05-github-workflows.md)


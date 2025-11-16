# 🏗️ AWS Infrastructure Setup - Multi-Environment Guide

Complete guide for setting up AWS infrastructure for **Development** and **Production** environments.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Environment Strategy](#environment-strategy)
- [Prerequisites](#prerequisites)
- [Development Environment Setup](#development-environment-setup)
- [Production Environment Setup](#production-environment-setup)
- [IAM Users & Permissions](#iam-users--permissions)
- [GitHub Secrets Configuration](#github-secrets-configuration)
- [Cost Optimization](#cost-optimization)
- [Security Best Practices](#security-best-practices)
- [Troubleshooting](#troubleshooting)

---

## 🎯 Overview

### Why Multiple Environments?

| Environment | Purpose | Access | Updates |
|-------------|---------|--------|---------|
| **Development** | Testing, experimentation, QA | Team only | Frequent (every push) |
| **Production** | Live website for users | Public | Controlled (releases only) |

### Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                       GitHub Repository                      │
│                  Yellow-Flowers-Organics                     │
└───────────────────┬─────────────────┬───────────────────────┘
                    │                 │
         ┌──────────▼──────────┐     │
         │  develop branch     │     │
         │  (auto-deploy)      │     │
         └──────────┬──────────┘     │
                    │                │
         ┌──────────▼──────────┐     │
         │  GitHub Actions     │     │
         │  (CI/CD Pipeline)   │     │
         └──────────┬──────────┘     │
                    │                │
         ┌──────────▼──────────┐     │
         │  AWS DEV            │     │
         │  S3 Bucket          │     │
         │  + CloudFront       │     │
         └─────────────────────┘     │
                                     │
                          ┌──────────▼──────────┐
                          │  main branch        │
                          │  (manual releases)  │
                          └──────────┬──────────┘
                                     │
                          ┌──────────▼──────────┐
                          │  GitHub Actions     │
                          │  (Release Pipeline) │
                          └──────────┬──────────┘
                                     │
                          ┌──────────▼──────────┐
                          │  AWS PRODUCTION     │
                          │  S3 Bucket          │
                          │  + CloudFront       │
                          └─────────────────────┘
```

---

## 🔄 Environment Strategy

### Recommended Setup

```
Development Environment (DEV)
├── S3 Bucket: yellow-flowers-farm-dev
├── CloudFront: Optional (cost-saving)
├── Domain: dev.yellowflowersfarm.com (optional)
├── Deploys: Automatic on push to 'develop' branch
└── Access: Team only (IP whitelist or basic auth)

Production Environment (PROD)
├── S3 Bucket: yellow-flowers-farm-prod
├── CloudFront: Recommended (performance + HTTPS)
├── Domain: www.yellowflowersfarm.com
├── Deploys: Manual/controlled releases on 'main' branch
└── Access: Public
```

---

## ✅ Prerequisites

Before starting, ensure you have:

- [ ] AWS Account (Free tier works for initial setup)
- [ ] GitHub repository admin access
- [ ] AWS CLI installed (optional, for verification)
- [ ] Estimated time: **45-60 minutes** for both environments

---

## 🔧 Development Environment Setup

### Step 1: Create DEV S3 Bucket

1. **Go to AWS S3 Console**: https://console.aws.amazon.com/s3/

2. **Create Bucket**:
   ```
   Bucket name: yellow-flowers-farm-dev
   Region: ap-south-1 (Mumbai) or your preferred region
   
   ⚠️ UNCHECK "Block all public access" (for now)
   ✅ Acknowledge bucket will be public
   
   Tags (optional but recommended):
     - Environment: dev
     - Project: yellow-flowers-farm
     - ManagedBy: github-actions
   ```

3. **Click "Create bucket"**

### Step 2: Enable Static Website Hosting (DEV)

1. Go to bucket → **Properties** tab
2. Scroll to **Static website hosting** → Click "Edit"
3. Configure:
   ```
   Static website hosting: Enable
   Hosting type: Host a static website
   Index document: index.html
   Error document: index.html
   ```
4. **Save changes**
5. **Copy the endpoint URL**:
   ```
   Example: http://yellow-flowers-farm-dev.s3-website-ap-south-1.amazonaws.com
   ```

### Step 3: Set Bucket Policy (DEV)

1. Go to bucket → **Permissions** tab → **Bucket policy**
2. Paste this policy (replace bucket name):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::yellow-flowers-farm-dev/*"
    }
  ]
}
```

3. **Save changes**

### Step 4: (Optional) CloudFront for DEV

**Note**: CloudFront for DEV is optional to save costs. S3 website endpoint is usually sufficient for testing.

If you want CloudFront for DEV (for HTTPS or testing CDN behavior):
- Follow same steps as Production (see below)
- Use distribution comment: `yellow-flowers-farm-dev`
- No custom domain needed

---

## 🚀 Production Environment Setup

### Step 1: Create PROD S3 Bucket

1. **Go to AWS S3 Console**: https://console.aws.amazon.com/s3/

2. **Create Bucket**:
   ```
   Bucket name: yellow-flowers-farm-prod
   Region: ap-south-1 (Mumbai) - SAME region as DEV for consistency
   
   ⚠️ UNCHECK "Block all public access"
   ✅ Acknowledge bucket will be public
   
   ✅ Enable Bucket Versioning (for rollback capability)
   
   Tags:
     - Environment: production
     - Project: yellow-flowers-farm
     - ManagedBy: github-actions
   ```

3. **Click "Create bucket"**

### Step 2: Enable Static Website Hosting (PROD)

Same as DEV, but note the production endpoint:
```
Example: http://yellow-flowers-farm-prod.s3-website-ap-south-1.amazonaws.com
```

### Step 3: Set Bucket Policy (PROD)

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::yellow-flowers-farm-prod/*"
    }
  ]
}
```

### Step 4: CloudFront Distribution (PROD) - Recommended

#### Why CloudFront for Production?
- ✅ HTTPS support (free SSL certificate)
- ✅ Global CDN (faster load times worldwide)
- ✅ Caching (reduced S3 costs)
- ✅ Custom domain support
- ✅ DDoS protection

#### Setup CloudFront:

1. **Go to CloudFront Console**: https://console.aws.amazon.com/cloudfront/

2. **Create Distribution**:
   ```
   Origin domain: yellow-flowers-farm-prod.s3-website-ap-south-1.amazonaws.com
   
   ⚠️ Use the S3 WEBSITE endpoint, NOT the S3 REST endpoint!
   ```

3. **Configure Settings**:
   ```
   Origin Protocol Policy: HTTP Only
   
   Viewer Protocol Policy: Redirect HTTP to HTTPS
   
   Allowed HTTP Methods: GET, HEAD, OPTIONS
   
   Compress Objects Automatically: Yes
   
   Price Class: Use Only North America and Europe (or All Edge Locations)
   
   Alternate Domain Names (CNAMEs): www.yellowflowersfarm.com (if you have domain)
   
   SSL Certificate: 
     - Default CloudFront Certificate (*.cloudfront.net) OR
     - Request/Import custom certificate for your domain
   
   Default Root Object: index.html
   
   Standard logging: Off (or enable for analytics)
   
   IPv6: On
   
   Comment: yellow-flowers-farm-production
   
   Distribution State: Enabled
   ```

4. **Create Distribution** (takes 15-20 minutes to deploy)

5. **Copy CloudFront Domain**:
   ```
   Example: d1234567890abc.cloudfront.net
   ```

#### Configure Custom Error Pages (for SPA behavior):

1. Go to your distribution → **Error Pages** tab
2. **Create Custom Error Response**:
   ```
   HTTP Error Code: 403
   Customize Error Response: Yes
   Response Page Path: /index.html
   HTTP Response Code: 200
   ```
3. Repeat for **404 errors**

---

## 🔐 IAM Users & Permissions

### Option 1: Separate IAM Users (Recommended for Security)

Create two separate IAM users for better security and auditing:

#### A. Create DEV IAM User

1. **IAM Console** → **Users** → **Create user**
   ```
   User name: github-actions-deploy-dev
   Access type: Programmatic access
   ```

2. **Attach Custom Policy**:
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
           "arn:aws:s3:::yellow-flowers-farm-dev",
           "arn:aws:s3:::yellow-flowers-farm-dev/*"
         ]
       },
       {
         "Effect": "Allow",
         "Action": [
           "cloudfront:CreateInvalidation"
         ],
         "Resource": "arn:aws:cloudfront::*:distribution/DEV_DISTRIBUTION_ID"
       }
     ]
   }
   ```

3. **Save Credentials**:
   - Access Key ID (DEV)
   - Secret Access Key (DEV)

#### B. Create PROD IAM User

1. **IAM Console** → **Users** → **Create user**
   ```
   User name: github-actions-deploy-prod
   Access type: Programmatic access
   ```

2. **Attach Custom Policy**:
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
           "arn:aws:s3:::yellow-flowers-farm-prod",
           "arn:aws:s3:::yellow-flowers-farm-prod/*"
         ]
       },
       {
         "Effect": "Allow",
         "Action": [
           "cloudfront:CreateInvalidation"
         ],
         "Resource": "arn:aws:cloudfront::*:distribution/PROD_DISTRIBUTION_ID"
       }
     ]
   }
   ```

3. **Save Credentials**:
   - Access Key ID (PROD)
   - Secret Access Key (PROD)

### Option 2: Single IAM User (Simpler, Less Secure)

Create one IAM user with access to both environments:

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
        "arn:aws:s3:::yellow-flowers-farm-dev",
        "arn:aws:s3:::yellow-flowers-farm-dev/*",
        "arn:aws:s3:::yellow-flowers-farm-prod",
        "arn:aws:s3:::yellow-flowers-farm-prod/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": "cloudfront:CreateInvalidation",
      "Resource": "*"
    }
  ]
}
```

---

## 🔑 GitHub Secrets Configuration

### For Separate IAM Users (Recommended):

#### Development Secrets (for `develop` branch deployments):

Go to GitHub → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

Add these secrets:

```
AWS_ACCESS_KEY_ID_DEV
Value: <DEV IAM User Access Key ID>

AWS_SECRET_ACCESS_KEY_DEV
Value: <DEV IAM User Secret Access Key>

AWS_REGION_DEV
Value: ap-south-1

S3_BUCKET_NAME_DEV
Value: yellow-flowers-farm-dev

CLOUDFRONT_DISTRIBUTION_ID_DEV (optional)
Value: E1234567890ABC
```

#### Production Secrets (for `main` branch deployments):

```
AWS_ACCESS_KEY_ID_PROD
Value: <PROD IAM User Access Key ID>

AWS_SECRET_ACCESS_KEY_PROD
Value: <PROD IAM User Secret Access Key>

AWS_REGION_PROD
Value: ap-south-1

S3_BUCKET_NAME_PROD
Value: yellow-flowers-farm-prod

CLOUDFRONT_DISTRIBUTION_ID_PROD (if using CloudFront)
Value: E9876543210XYZ
```

### For Single IAM User (if using Option 2):

```
AWS_ACCESS_KEY_ID
Value: <IAM User Access Key ID>

AWS_SECRET_ACCESS_KEY
Value: <IAM User Secret Access Key>

AWS_REGION
Value: ap-south-1

S3_BUCKET_NAME_DEV
Value: yellow-flowers-farm-dev

S3_BUCKET_NAME_PROD
Value: yellow-flowers-farm-prod

CLOUDFRONT_DISTRIBUTION_ID_DEV (optional)
Value: E1234567890ABC

CLOUDFRONT_DISTRIBUTION_ID_PROD (optional)
Value: E9876543210XYZ
```

---

## 🔀 GitHub Actions Workflows

You'll need to update your workflows to support both environments.

### Create: `.github/workflows/deploy-dev.yml`

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
            --exclude "docs/*" \
            --exclude ".gitignore" \
            --exclude "README.md" \
            --exclude "package.json" \
            --exclude "package-lock.json" \
            --exclude "CHANGELOG.md" \
            --delete \
            --cache-control "public, max-age=3600" \
            --metadata-directive REPLACE

      - name: Set correct content types
        run: |
          aws s3 cp s3://${{ secrets.S3_BUCKET_NAME_DEV }} s3://${{ secrets.S3_BUCKET_NAME_DEV }} \
            --recursive \
            --exclude "*" \
            --include "*.html" \
            --content-type "text/html; charset=utf-8" \
            --metadata-directive REPLACE
          
          aws s3 cp s3://${{ secrets.S3_BUCKET_NAME_DEV }} s3://${{ secrets.S3_BUCKET_NAME_DEV }} \
            --recursive \
            --exclude "*" \
            --include "*.css" \
            --content-type "text/css; charset=utf-8" \
            --metadata-directive REPLACE
          
          aws s3 cp s3://${{ secrets.S3_BUCKET_NAME_DEV }} s3://${{ secrets.S3_BUCKET_NAME_DEV }} \
            --recursive \
            --exclude "*" \
            --include "*.js" \
            --content-type "application/javascript; charset=utf-8" \
            --metadata-directive REPLACE

      - name: Invalidate CloudFront cache (if using CloudFront)
        if: ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID_DEV != '' }}
        run: |
          aws cloudfront create-invalidation \
            --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID_DEV }} \
            --paths "/*"

      - name: Deployment complete
        run: |
          echo "✅ DEV Deployment completed successfully!"
          echo "🌐 DEV URL: http://${{ secrets.S3_BUCKET_NAME_DEV }}.s3-website-${{ secrets.AWS_REGION_DEV }}.amazonaws.com"
```

### Update: `.github/workflows/deploy-aws.yml` (Production)

Update your existing workflow to use PROD secrets:

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
    environment: production  # Requires approval (optional)
    
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
            --exclude "docs/*" \
            --exclude ".gitignore" \
            --exclude "README.md" \
            --exclude "package.json" \
            --exclude "package-lock.json" \
            --exclude "CHANGELOG.md" \
            --delete \
            --cache-control "public, max-age=31536000" \
            --metadata-directive REPLACE

      - name: Set correct content types
        run: |
          aws s3 cp s3://${{ secrets.S3_BUCKET_NAME_PROD }} s3://${{ secrets.S3_BUCKET_NAME_PROD }} \
            --recursive \
            --exclude "*" \
            --include "*.html" \
            --content-type "text/html; charset=utf-8" \
            --metadata-directive REPLACE
          
          aws s3 cp s3://${{ secrets.S3_BUCKET_NAME_PROD }} s3://${{ secrets.S3_BUCKET_NAME_PROD }} \
            --recursive \
            --exclude "*" \
            --include "*.css" \
            --content-type "text/css; charset=utf-8" \
            --metadata-directive REPLACE
          
          aws s3 cp s3://${{ secrets.S3_BUCKET_NAME_PROD }} s3://${{ secrets.S3_BUCKET_NAME_PROD }} \
            --recursive \
            --exclude "*" \
            --include "*.js" \
            --content-type "application/javascript; charset=utf-8" \
            --metadata-directive REPLACE

      - name: Invalidate CloudFront cache
        if: ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID_PROD != '' }}
        run: |
          aws cloudfront create-invalidation \
            --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID_PROD }} \
            --paths "/*"

      - name: Deployment complete
        run: |
          echo "✅ PRODUCTION Deployment completed successfully!"
          echo "🌐 Production URL: https://www.yellowflowersfarm.com"
```

---

## 💰 Cost Optimization

### Estimated AWS Costs

#### Development Environment:
```
S3 Storage (1 GB):           $0.023/month
S3 Requests (10K):           $0.005/month
Data Transfer (1 GB):        $0.09/month
CloudFront (optional):       Skip for cost-saving
────────────────────────────────────────────
TOTAL DEV:                   ~$0.12/month
```

#### Production Environment:
```
S3 Storage (1 GB):           $0.023/month
S3 Requests (100K):          $0.05/month
Data Transfer (via CF):      First 1TB free with CloudFront
CloudFront (10GB transfer):  $0.85/month
CloudFront Requests (100K):  $0.01/month
────────────────────────────────────────────
TOTAL PROD:                  ~$1.00/month
```

**Total for Both Environments: ~$1.12/month** 💰

### Cost-Saving Tips:

1. **Skip CloudFront for DEV** - Use S3 website endpoint directly
2. **Enable S3 Lifecycle Policies** - Auto-delete old versions after 30 days
3. **Use CloudFront Caching** - Reduce S3 requests significantly
4. **Monitor Usage** - Set AWS Billing Alarms (e.g., alert if > $5/month)
5. **Delete Unused Resources** - Clean up old distributions/buckets

---

## 🔒 Security Best Practices

### 1. IAM Security
- ✅ Use separate IAM users for dev and prod
- ✅ Principle of least privilege (minimal permissions)
- ✅ Rotate access keys every 90 days
- ✅ Enable MFA on root account
- ✅ Never commit AWS credentials to Git

### 2. S3 Security
- ✅ Enable versioning on production bucket (rollback capability)
- ✅ Enable server access logging for audit trails
- ✅ Use bucket policies (not ACLs) for access control
- ✅ Enable encryption at rest (S3 managed keys)

### 3. CloudFront Security
- ✅ Always use HTTPS (redirect HTTP → HTTPS)
- ✅ Enable AWS WAF for DDoS protection (optional, paid)
- ✅ Set security headers:
   ```
   Strict-Transport-Security: max-age=31536000
   X-Content-Type-Options: nosniff
   X-Frame-Options: SAMEORIGIN
   ```

### 4. GitHub Secrets
- ✅ Use GitHub Environments (dev, production)
- ✅ Enable required reviewers for production deployments
- ✅ Audit secret access logs regularly

---

## 🐛 Troubleshooting

### Issue: "Access Denied" when deploying

**Cause**: IAM user lacks permissions

**Solution**:
1. Verify IAM policy includes `s3:PutObject`, `s3:DeleteObject`, `s3:ListBucket`
2. Check bucket name in policy matches exactly
3. Verify GitHub secrets are correct

### Issue: CloudFront shows "AccessDenied" XML error

**Cause**: Using S3 REST endpoint instead of website endpoint

**Solution**:
- CloudFront origin should be: `bucket-name.s3-website-region.amazonaws.com`
- NOT: `bucket-name.s3.region.amazonaws.com`

### Issue: Changes not reflecting immediately

**Cause**: CloudFront caching

**Solution**:
1. Wait 5-10 minutes for cache TTL
2. Or create invalidation: `aws cloudfront create-invalidation --distribution-id XXX --paths "/*"`
3. Or use cache-busting (append `?v=timestamp` to file URLs)

### Issue: High S3 costs

**Cause**: Too many requests or data transfer

**Solution**:
1. Enable CloudFront (reduces S3 requests by 90%+)
2. Increase CloudFront cache TTL
3. Optimize asset sizes (compress images, minify JS/CSS)

### Issue: Deployment fails with "bucket does not exist"

**Cause**: Typo in bucket name or wrong region

**Solution**:
1. Verify S3 bucket name in GitHub secrets
2. Ensure AWS_REGION matches bucket region
3. Check bucket exists in AWS console

---

## 📊 Summary Checklist

### Development Environment:
- [ ] S3 bucket created: `yellow-flowers-farm-dev`
- [ ] Static website hosting enabled
- [ ] Bucket policy set (public read)
- [ ] IAM user created: `github-actions-deploy-dev`
- [ ] GitHub secrets configured (DEV)
- [ ] Deploy workflow created: `deploy-dev.yml`
- [ ] Test deployment works

### Production Environment:
- [ ] S3 bucket created: `yellow-flowers-farm-prod`
- [ ] Static website hosting enabled
- [ ] Bucket versioning enabled
- [ ] Bucket policy set (public read)
- [ ] CloudFront distribution created
- [ ] Custom domain configured (optional)
- [ ] IAM user created: `github-actions-deploy-prod`
- [ ] GitHub secrets configured (PROD)
- [ ] Deploy workflow updated: `deploy-aws.yml`
- [ ] Test deployment works
- [ ] Custom domain DNS configured (if applicable)

---

## 🎯 Next Steps

1. **Complete Setup**: Follow checklist above
2. **Test Deployments**:
   - Push to `develop` → Check DEV environment
   - Merge to `main` → Check PROD environment
3. **Configure Monitoring**: Set up AWS CloudWatch alarms
4. **Custom Domain** (optional): Configure Route 53 or your DNS provider
5. **Backup Strategy**: Set up S3 versioning and lifecycle policies

---

## 📚 Related Documentation

- [Quick Start Guide](../getting-started/QUICK_START.md) - Fast single-environment setup
- [Deployment Guide](DEPLOYMENT_GUIDE.md) - Detailed single-environment guide
- [Release Process](../release/RELEASE_PROCESS.md) - How to manage releases
- [Contributing](../development/CONTRIBUTING.md) - Development workflow

---

**Need Help?**

- 📖 AWS S3 Static Website: https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html
- 📖 CloudFront Documentation: https://docs.aws.amazon.com/cloudfront/
- 💬 Team Slack/Discord: [Your team communication channel]
- 🐛 Create Issue: [GitHub Issues](https://github.com/yellowflowersorganics-star/Yellow-Flowers-Organics/issues)

---

**Last Updated**: November 2025  
**Maintained By**: DevOps Team


# 🚀 AWS Deployment Guide for Yellow Flowers Organic Farm Website

This guide will help you deploy the Yellow Flowers Organic Farm website to AWS S3 with optional CloudFront CDN.

## 📋 Prerequisites

- AWS Account
- GitHub Repository
- Basic knowledge of AWS services

## 🏗️ AWS Setup

### Step 1: Create S3 Bucket

1. **Go to AWS S3 Console**
   - Navigate to https://console.aws.amazon.com/s3/

2. **Create Bucket**
   ```
   Bucket name: yellow-flowers-farm (or your preferred name)
   Region: Choose closest to your audience (e.g., ap-south-1 for India)
   
   ⚠️ Uncheck "Block all public access"
   ✅ Acknowledge that bucket will be public
   ```

3. **Enable Static Website Hosting**
   - Go to bucket → Properties → Static website hosting
   - Enable static website hosting
   - Index document: `index.html`
   - Error document: `index.html` (for SPA behavior)
   - Save changes
   - Note down the endpoint URL (e.g., `http://yellow-flowers-farm.s3-website-ap-south-1.amazonaws.com`)

4. **Set Bucket Policy**
   - Go to bucket → Permissions → Bucket Policy
   - Paste the following policy (replace `YOUR-BUCKET-NAME`):

   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
       }
     ]
   }
   ```

### Step 2: Create IAM User for GitHub Actions

1. **Go to IAM Console**
   - Navigate to https://console.aws.amazon.com/iam/

2. **Create New User**
   ```
   User name: github-actions-deploy
   Access type: ✅ Programmatic access
   ```

3. **Attach Policies**
   - Click "Attach policies directly"
   - Add the following policies:
     - `AmazonS3FullAccess` (or create custom policy below)
     - `CloudFrontFullAccess` (if using CloudFront)

   **Custom S3 Policy (Recommended - More Secure):**
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
           "arn:aws:s3:::YOUR-BUCKET-NAME",
           "arn:aws:s3:::YOUR-BUCKET-NAME/*"
         ]
       }
     ]
   }
   ```

4. **Save Credentials**
   - Download or copy:
     - Access Key ID
     - Secret Access Key
   - ⚠️ Store these securely - you won't see them again!

### Step 3: (Optional) Set Up CloudFront CDN

CloudFront provides:
- Global content delivery (faster loading worldwide)
- HTTPS/SSL support
- Custom domain support
- DDoS protection

1. **Go to CloudFront Console**
   - Navigate to https://console.aws.amazon.com/cloudfront/

2. **Create Distribution**
   ```
   Origin Domain: Select your S3 bucket website endpoint
   Origin Path: Leave empty
   Viewer Protocol Policy: Redirect HTTP to HTTPS
   Allowed HTTP Methods: GET, HEAD
   Cache Policy: CachingOptimized
   Default Root Object: index.html
   ```

3. **Configure Custom Error Pages** (Optional but recommended)
   - Go to Error Pages tab
   - Create custom error response:
     ```
     HTTP Error Code: 403, 404
     Response Page Path: /index.html
     HTTP Response Code: 200
     ```

4. **Save Distribution**
   - Wait 5-15 minutes for deployment
   - Note down:
     - Distribution ID (e.g., `E1234ABCD5678`)
     - CloudFront Domain Name (e.g., `d111111abcdef8.cloudfront.net`)

### Step 4: Configure GitHub Secrets

1. **Go to Your GitHub Repository**
   - Navigate to Settings → Secrets and variables → Actions

2. **Add Repository Secrets**
   Click "New repository secret" and add:

   | Secret Name | Value | Example |
   |-------------|-------|---------|
   | `AWS_ACCESS_KEY_ID` | Your IAM access key | `AKIAIOSFODNN7EXAMPLE` |
   | `AWS_SECRET_ACCESS_KEY` | Your IAM secret key | `wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY` |
   | `AWS_REGION` | Your S3 bucket region | `ap-south-1` |
   | `S3_BUCKET_NAME` | Your S3 bucket name | `yellow-flowers-farm` |
   | `CLOUDFRONT_DISTRIBUTION_ID` | Your CloudFront ID (optional) | `E1234ABCD5678` |

3. **Verify Secrets**
   - All secrets should show "Updated X minutes ago"
   - Values are hidden for security

## 🚀 Deployment Methods

### Method 1: Automatic Deployment (Recommended)

Every push to `main` branch automatically deploys to AWS:

```bash
git add .
git commit -m "Update website content"
git push origin main
```

GitHub Actions will:
1. ✅ Checkout code
2. ✅ Configure AWS credentials
3. ✅ Sync files to S3
4. ✅ Set correct content types
5. ✅ Invalidate CloudFront cache (if configured)
6. ✅ Deployment complete!

### Method 2: Manual Deployment

Trigger deployment manually from GitHub:

1. Go to Actions tab
2. Select "Deploy to AWS S3" workflow
3. Click "Run workflow"
4. Select `main` branch
5. Click "Run workflow"

### Method 3: Release Deployment

Create a versioned release:

```bash
# Create and push a version tag
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

This will:
1. ✅ Create a GitHub Release
2. ✅ Generate changelog
3. ✅ Package website as zip
4. ✅ Trigger AWS deployment
5. ✅ Publish release notes

**Version Tagging Convention:**
- `v1.0.0` - Major release (breaking changes)
- `v1.1.0` - Minor release (new features)
- `v1.1.1` - Patch release (bug fixes)

## 🔍 Verify Deployment

### Check S3 Website

Visit your S3 website endpoint:
```
http://YOUR-BUCKET-NAME.s3-website-REGION.amazonaws.com
```

Example:
```
http://yellow-flowers-farm.s3-website-ap-south-1.amazonaws.com
```

### Check CloudFront (if configured)

Visit your CloudFront domain:
```
https://YOUR-DISTRIBUTION-ID.cloudfront.net
```

### Check GitHub Actions

1. Go to Actions tab in GitHub
2. Click on latest workflow run
3. Check all steps are ✅ green
4. View deployment logs

## 🌐 Custom Domain Setup (Optional)

### Using Route 53 (AWS DNS)

1. **Register/Transfer Domain** to Route 53
   - Or use existing registrar and point nameservers to Route 53

2. **Create Hosted Zone**
   - Go to Route 53 → Hosted zones
   - Create zone for your domain (e.g., `yellowflowersfarm.com`)

3. **Create Record Sets**
   - For CloudFront:
     ```
     Type: A Record (Alias)
     Name: www (or @ for apex)
     Alias Target: Your CloudFront distribution
     ```
   
   - For S3 direct:
     ```
     Type: CNAME
     Name: www
     Value: YOUR-BUCKET-NAME.s3-website-REGION.amazonaws.com
     ```

4. **Request SSL Certificate** (CloudFront only)
   - Go to AWS Certificate Manager (ACM)
   - Request public certificate
   - Add domain names: `yellowflowersfarm.com`, `www.yellowflowersfarm.com`
   - Validate via DNS
   - Attach to CloudFront distribution

## 💰 Cost Estimation (Monthly)

### S3 Storage & Transfer
- Storage: ~50 MB website = **₹0.50 - ₹1**
- Data transfer: 10GB/month = **₹10 - ₹15**
- Requests: 100K/month = **₹5**

### CloudFront (Optional)
- Data transfer: 10GB/month = **₹8 - ₹12**
- Requests: 100K/month = **₹3**

### Route 53 (Optional)
- Hosted zone: **₹40/month**
- Queries: 1M/month = **₹30**

**Estimated Total:**
- S3 only: **₹15 - ₹20/month**
- S3 + CloudFront: **₹25 - ₹35/month**
- S3 + CloudFront + Domain: **₹95 - ₹105/month**

## 🛡️ Security Best Practices

1. **Enable S3 Versioning**
   - Protect against accidental deletions
   - Go to bucket → Properties → Versioning → Enable

2. **Enable S3 Server Access Logging**
   - Track who accesses your website
   - Create separate logging bucket
   - Enable logging in main bucket properties

3. **Use CloudFront with HTTPS**
   - Force HTTPS for better security
   - Protect data in transit

4. **Rotate IAM Credentials**
   - Change access keys every 90 days
   - Update GitHub secrets

5. **Enable MFA for AWS Root Account**
   - Protect your AWS account
   - Use Google Authenticator or hardware token

## 🐛 Troubleshooting

### Issue: 403 Forbidden Error

**Solution:**
- Check S3 bucket policy allows public read
- Verify bucket is not blocking public access
- Check IAM user has correct permissions

### Issue: 404 Not Found for Articles

**Solution:**
- Ensure `articles/` folder is uploaded
- Check S3 sync command includes all files
- Verify file paths in `index.html`

### Issue: CSS/JS Not Loading

**Solution:**
- Check content types are set correctly
- Verify deployment workflow sets MIME types
- Clear browser cache (Ctrl+F5)

### Issue: CloudFront Not Updating

**Solution:**
- Cache invalidation may take 5-10 minutes
- Create manual invalidation: `/*`
- Check distribution status is "Deployed"

### Issue: GitHub Actions Failing

**Solution:**
- Check all secrets are configured correctly
- Verify IAM user has required permissions
- Review workflow logs in Actions tab
- Check AWS service quotas

## 📞 Support

### AWS Support
- Free tier: Community forums
- Developer: $29/month
- Business: $100/month

### GitHub Support
- Free: Community forums
- Pro/Team: Email support

### Website Issues
Create an issue in GitHub repository with:
- Description of problem
- Screenshots
- Browser and device info
- Steps to reproduce

## 🎉 Success Checklist

- [ ] S3 bucket created and configured
- [ ] IAM user created with correct permissions
- [ ] GitHub secrets configured
- [ ] First deployment successful
- [ ] Website accessible via S3 endpoint
- [ ] CloudFront configured (optional)
- [ ] Custom domain configured (optional)
- [ ] SSL certificate installed (optional)
- [ ] Monitoring set up
- [ ] Backup strategy in place

---

**Need Help?** Check the [README.md](README.md) or create an issue in the repository!


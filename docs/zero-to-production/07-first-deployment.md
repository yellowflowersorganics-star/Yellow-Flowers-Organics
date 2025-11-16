# Phase 7: First Deployment (10-15 min)

**Goal**: Deploy to DEV, test, then promote to PRODUCTION

---

## 📋 What You'll Do

- Make a test change and deploy to DEV
- Verify DEV site works
- Create PR to promote to PRODUCTION
- Verify PRODUCTION site works
- Update README with deployment URLs

---

## Step 7.1: Test DEV Deployment

```bash
# Switch to develop branch
git checkout develop

# Make a small test change to index.html
# Add this line before </body>:
echo '<p style="text-align:center; margin-top:2rem;">🎉 DEV Deployment Successful!</p>' >> index.html

# Commit and push
git add index.html
git commit -m "test: Add deployment success message"
git push origin develop
```

---

## Step 7.2: Watch DEV Deployment

1. Go to **GitHub** → Your Repository → **Actions** tab
2. You should see **"Deploy to DEV"** workflow running
3. Click on it to watch progress
4. Wait for green checkmark ✅ (usually 30-60 seconds)

---

## Step 7.3: Verify DEV Site

Open your DEV URL in browser:
```
http://my-awesome-website-dev.s3-website-us-east-1.amazonaws.com
```

**✅ Check**:
- [ ] Website loads
- [ ] Shows your test message
- [ ] No errors in browser console (F12)
- [ ] All styling works

**🎉 DEV is live!**

---

## Step 7.4: Promote to Production via PR

Now let's promote to production:

1. **GitHub** → Your Repository → **Pull Requests**

2. Click **"New pull request"**

3. Configure:
   ```
   base: main  ←  compare: develop
   ```

4. Create PR with details:
   ```
   Title: Deploy tested changes to production
   
   Description:
   ## Changes
   - Added deployment success message
   
   ## Testing
   - ✅ Tested on DEV environment
   - ✅ All functionality working
   - ✅ No console errors
   
   ## Deployment
   This will trigger production deployment on merge.
   ```

5. Click **"Create pull request"**

6. **Review** and **Approve** (if you have permissions)

7. Click **"Merge pull request"**

8. Click **"Confirm merge"**

---

## Step 7.5: Watch PRODUCTION Deployment

1. Stay on **Actions** tab
2. Watch **"Deploy to PRODUCTION"** workflow run
3. Wait for completion ✅

---

## Step 7.6: Verify Production Site

Open your PRODUCTION URL:
```
http://my-awesome-website-prod.s3-website-us-east-1.amazonaws.com
```

**✅ Check**:
- [ ] Website loads on production
- [ ] Shows your changes
- [ ] No errors
- [ ] Everything looks perfect

**🚀 You're LIVE in production!**

---

## Step 7.7: Update README with Deployment Info

Now that deployment is working, update your `README.md`:

```bash
# Pull latest from main (after PR merge)
git checkout main
git pull origin main
```

**Edit `README.md`** - Replace the "## Next Steps" section with:

```markdown
## Deployment

This website automatically deploys to AWS S3:

### Development Environment
- **Branch**: `develop`
- **URL**: http://my-awesome-website-dev.s3-website-us-east-1.amazonaws.com
- **Trigger**: Automatic on push to `develop` branch

### Production Environment
- **Branch**: `main`  
- **URL**: http://my-awesome-website-prod.s3-website-us-east-1.amazonaws.com
- **Trigger**: Automatic on merge to `main` branch (via PR)

### Workflow
1. Create feature branch from `develop`
2. Make changes and test locally
3. Push to `develop` → Auto-deploys to DEV
4. Test on DEV environment
5. Create PR from `develop` to `main`
6. Merge PR → Auto-deploys to PRODUCTION
```

**Commit the updated README**:

```bash
git add README.md
git commit -m "docs: Update README with deployment URLs and workflow"
git push origin main
```

---

## ✅ Phase 7 Verification

- [ ] DEV deployment successful
- [ ] DEV site accessible and working
- [ ] PR created from develop to main
- [ ] PR merged successfully
- [ ] PROD deployment successful
- [ ] PROD site accessible and working
- [ ] Changes visible on both environments
- [ ] README updated with deployment information

**All checked?** ✅ You're fully deployed!

---

## 🎉 Success!

**Congratulations!** Your website is now:
- ✅ Live on AWS (both DEV and PROD)
- ✅ Auto-deploying on pushes
- ✅ Using proper Git workflow
- ✅ Protected with branch rules

### Your Live URLs:

```
🌐 Development:
http://my-awesome-website-dev.s3-website-us-east-1.amazonaws.com

🌐 Production:
http://my-awesome-website-prod.s3-website-us-east-1.amazonaws.com
```

---

## 💡 Daily Workflow (from now on)

```bash
# 1. Start new feature
git checkout develop
git pull origin develop
git checkout -b feature/my-new-feature

# 2. Make changes
# ... edit files ...

# 3. Test locally
npm start
# Check http://localhost:8000

# 4. Push to develop for DEV testing
git checkout develop
git merge feature/my-new-feature
git push origin develop
# ✅ Auto-deploys to DEV

# 5. Test on DEV
# Visit DEV URL

# 6. Promote to PROD
# Create PR: develop → main
# Review, approve, merge
# ✅ Auto-deploys to PRODUCTION

# 7. Verify PROD
# Visit PRODUCTION URL
```

---

## 🐛 Troubleshooting

### Issue: DEV site not showing changes

**Solutions**:
1. **Hard refresh browser**: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
2. **Check deployment**: GitHub Actions → Verify workflow succeeded
3. **Check S3**: AWS Console → S3 → Check files uploaded
4. **Wait**: Can take 10-30 seconds for changes to appear

### Issue: PROD deployment didn't trigger

**Check**:
1. PR was merged to `main` branch (not closed)
2. Workflow file exists in `main` branch
3. GitHub Actions is enabled (Settings → Actions)

**Fix**:
```bash
# Manually trigger workflow
# GitHub → Actions → "Deploy to PRODUCTION" → "Run workflow"
```

### Issue: Website shows old content

**Solution**: Browser cache
```bash
# Clear browser cache or use incognito mode
# Or add cache busting:
# mywebsite.com/index.html?v=2
```

---

## 📚 Next Reading

- **Contributing Guide**: Learn development best practices
- **Phase 8**: Optional team collaboration setup

---

## ➡️ Next Step (Optional)

**Phase 7 Complete!** 🎉🚀

Your website is fully deployed and operational!

**Want team collaboration?** Continue to: **[Phase 8: Team Collaboration](08-team-collaboration.md)** (30-60 min)

**Done for now?** You can stop here - your site is live! 🎊

---

[← Back to Index](README.md) | [← Previous: Phase 6](06-branch-protection.md) | [Next: Phase 8 →](08-team-collaboration.md) (Optional)


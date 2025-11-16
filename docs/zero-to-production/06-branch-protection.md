# Phase 6: Branch Protection (15-20 min)

**Goal**: Secure your workflow by protecting main and develop branches

📖 **Full Guide**: [Complete Branch Protection Setup](../guides/branch-protection.md)

---

## 📋 What You'll Do

- Create develop branch
- Protect main branch (require PRs, no direct pushes)
- Protect develop branch
- Set up code review requirements

---

## Step 6.1: Create Develop Branch

```bash
# Create and push develop branch
git checkout -b develop
git push -u origin develop

# Switch back to main
git checkout main
```

Now you have two branches:
- `main` - Production (live website)
- `develop` - Development (testing)

---

## Step 6.2: Protect Main Branch

1. **GitHub** → Your Repository → **Settings** → **Branches**

2. Click **"Add branch protection rule"**

3. **Configure protection**:

   ```
   Branch name pattern: main
   
   ✅ Require a pull request before merging
      ✅ Require approvals: 1
      ✅ Dismiss stale pull request approvals when new commits are pushed
   
   ✅ Require status checks to pass before merging
      (You can add specific checks later)
   
   ✅ Require conversation resolution before merging
   
   ✅ Require linear history
   
   ✅ Do not allow bypassing the above settings
   
   ❌ Allow force pushes: NO
   ❌ Allow deletions: NO
   ```

4. Click **"Create"** or **"Save changes"**

---

## Step 6.3: Protect Develop Branch

1. Click **"Add branch protection rule"** again

2. Configure with same settings:

   ```
   Branch name pattern: develop
   
   (Use same settings as main branch)
   ```

3. Click **"Create"**

---

## Step 6.4: Test Branch Protection

Try pushing directly to main (it should fail):

```bash
# Switch to main
git checkout main

# Try to make a change
echo "test" >> test.txt
git add test.txt
git commit -m "test: Testing branch protection"

# Try to push (this should fail!)
git push origin main
```

**Expected Result**: 
```
! [remote rejected] main -> main (protected branch hook declined)
error: failed to push some refs
```

✅ **This means branch protection is working!**

Clean up:
```bash
# Remove test file
git reset HEAD~1
rm test.txt
```

---

## ✅ Phase 6 Verification

- [ ] Develop branch created and pushed
- [ ] Main branch protected (cannot push directly)
- [ ] Develop branch protected
- [ ] Branch protection rules visible in Settings → Branches
- [ ] Test push to main fails as expected
- [ ] Understand you must now use Pull Requests

**All checked?** ✅ Workflow is secured!

---

## 💡 Understanding Branch Protection

### Why Protect Branches?

**Without Protection**:
```bash
# Anyone can push broken code directly to production
git push origin main  # ❌ Dangerous!
```

**With Protection**:
```bash
# Must go through review process
1. Create feature branch
2. Make changes
3. Push to feature branch
4. Create Pull Request
5. Get approval
6. Merge (automatic deployment)
```

### Workflow After Protection:

```
develop (DEV)  ←  feature branches
    ↓ (via PR)
main (PROD)
```

---

## 🐛 Troubleshooting

### Issue: Can't push to main anymore

**This is expected!** You must now use Pull Requests.

**New Workflow**:
```bash
# Create feature branch from develop
git checkout develop
git checkout -b feature/my-feature

# Make changes
git add .
git commit -m "feat: Add new feature"

# Push feature branch
git push origin feature/my-feature

# Create PR on GitHub:
# feature/my-feature → develop
```

### Issue: Need to push urgently (emergency)

**Options**:
1. **Best**: Create a hotfix branch and quick PR
2. **Admin Only**: Temporarily disable protection (Settings → Branches)
3. **Last Resort**: Use admin override (if enabled)

**After emergency**: Re-enable protection immediately!

### Issue: "Require approvals" but I'm the only developer

**Solutions**:
1. Set required approvals to 0 (still keeps other protections)
2. Ask a teammate/friend to be a reviewer
3. Keep it at 1 and approve your own PRs (GitHub allows this for personal repos)

---

## 📚 Additional Reading

- **Full Guide**: [Branch Protection Setup with Screenshots](../guides/branch-protection.md)
- **GitHub Docs**: [About Protected Branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)

---

## ➡️ Next Step

**Phase 6 Complete!** 🎉

Your branches are now protected!

Continue to: **[Phase 7: First Deployment](07-first-deployment.md)** (10-15 min)

---

[← Back to Index](README.md) | [← Previous: Phase 5](05-github-workflows.md) | [Next: Phase 7 →](07-first-deployment.md)


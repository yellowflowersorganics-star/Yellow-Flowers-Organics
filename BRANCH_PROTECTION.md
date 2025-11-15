# 🔒 Branch Protection Rules Guide

## 📋 Table of Contents

1. [Why Branch Protection?](#why-branch-protection)
2. [Quick Setup](#quick-setup)
3. [Main Branch Protection](#main-branch-protection)
4. [Develop Branch Protection](#develop-branch-protection)
5. [Testing Branch Protection](#testing-branch-protection)
6. [Troubleshooting](#troubleshooting)

## 🎯 Why Branch Protection?

Branch protection prevents:
- ❌ Direct commits to important branches
- ❌ Unreviewed code merging to production
- ❌ Accidental force pushes
- ❌ Deployment of untested code
- ❌ Breaking changes without review

Branch protection ensures:
- ✅ All code is reviewed before merging
- ✅ Tests pass before deployment
- ✅ Team collaboration and knowledge sharing
- ✅ Code quality standards maintained
- ✅ Audit trail of all changes

---

## 🚀 Quick Setup

### Step 1: Navigate to Settings

1. Go to your repository on GitHub
2. Click **Settings** (top navigation)
3. Click **Branches** (left sidebar under "Code and automation")

### Step 2: Add Protection Rules

You'll add protection for two branches:
- **main** (production) - Strictest rules
- **develop** (integration) - Moderate rules

---

## 🛡️ Main Branch Protection

### Recommended Rules for `main` Branch

Navigate to: **Settings → Branches → Add rule**

#### Branch Name Pattern
```
main
```

#### Protection Settings

##### ✅ 1. Require a pull request before merging

- **Required**: YES ✓
- **Description**: No direct commits to main - all changes via PR

**Sub-options**:
- ✓ **Require approvals**: 2 (for small team) or 1 (for very small team)
- ✓ **Dismiss stale pull request approvals when new commits are pushed**
- ✓ **Require review from Code Owners** (optional - if you have CODEOWNERS file)
- ✓ **Restrict who can dismiss pull request reviews** (optional)
- ✓ **Allow specified actors to bypass required pull requests** (optional - for emergency hotfixes)

---

##### ✅ 2. Require status checks to pass before merging

- **Required**: YES ✓ (when you add CI/CD checks)
- **Description**: Automated tests must pass before merge

**Sub-options**:
- ✓ **Require branches to be up to date before merging**

**Status checks to require**:
```
# When you add these workflows:
- deploy / deploy (for AWS deployment check)
- test / test (if you add automated tests)
- lint / lint (if you add linting workflow)
```

**Note**: Status checks won't appear until you run workflows at least once.

---

##### ✅ 3. Require conversation resolution before merging

- **Required**: YES ✓
- **Description**: All review comments must be resolved before merge

---

##### ✅ 4. Require signed commits

- **Required**: OPTIONAL (depends on team policy)
- **Description**: Commits must be signed with GPG/SSH keys
- **Recommendation**: Enable if security is critical

---

##### ✅ 5. Require linear history

- **Required**: YES ✓
- **Description**: Prevent merge commits, require rebase or squash
- **Benefit**: Cleaner commit history

---

##### ✅ 6. Require deployments to succeed before merging

- **Required**: OPTIONAL
- **Description**: Deployment to staging must succeed
- **Recommendation**: Enable if you have staging environment

---

##### ✅ 7. Lock branch

- **Required**: NO ✗
- **Description**: Makes branch read-only
- **Warning**: This prevents ALL commits, including via PR. Don't use this!

---

##### ✅ 8. Do not allow bypassing the above settings

- **Required**: YES ✓
- **Description**: Even admins must follow rules
- **Recommendation**: Enable for maximum protection

---

##### ✅ 9. Restrict who can push to matching branches

- **Required**: OPTIONAL
- **Description**: Only specific people/teams can push
- **Recommendation**: 
  - For small team: Leave unchecked
  - For large team: Restrict to senior developers only

---

##### ✅ 10. Allow force pushes

- **Required**: NO ✗
- **Description**: Prevent `git push --force`
- **Recommendation**: NEVER allow force pushes to main!

---

##### ✅ 11. Allow deletions

- **Required**: NO ✗
- **Description**: Prevent branch deletion
- **Recommendation**: Keep disabled to prevent accidental deletion

---

### Main Branch Protection Summary

```yaml
Branch: main

✅ Require pull request before merging
   ✅ Required approvals: 1-2
   ✅ Dismiss stale approvals: Yes
   ✅ Require review from Code Owners: Optional
   
✅ Require status checks to pass: Yes (when CI/CD added)
   ✅ Require branches to be up to date: Yes
   
✅ Require conversation resolution: Yes

✅ Require signed commits: Optional

✅ Require linear history: Yes

✅ Do not allow bypassing: Yes

❌ Allow force pushes: No
❌ Allow deletions: No
```

---

## 🔧 Develop Branch Protection

### Recommended Rules for `develop` Branch

Navigate to: **Settings → Branches → Add rule**

#### Branch Name Pattern
```
develop
```

#### Protection Settings

##### ✅ 1. Require a pull request before merging

- **Required**: YES ✓
- **Required approvals**: 1
- ✓ **Dismiss stale pull request approvals when new commits are pushed**

---

##### ✅ 2. Require status checks to pass before merging

- **Required**: YES ✓ (when CI/CD added)
- ✓ **Require branches to be up to date before merging**

---

##### ✅ 3. Require conversation resolution before merging

- **Required**: YES ✓

---

##### ✅ 4. Require linear history

- **Required**: OPTIONAL
- **Recommendation**: Enable for cleaner history

---

##### ✅ 5. Do not allow bypassing the above settings

- **Required**: NO ✗ (allow flexibility for develop)
- **Recommendation**: Allow admins to bypass for urgent integrations

---

##### ✅ 6. Restrict who can push to matching branches

- **Required**: OPTIONAL
- **Recommendation**: Leave unchecked for collaboration

---

##### ✅ 7. Allow force pushes

- **Required**: NO ✗
- **Recommendation**: Disable to prevent history rewriting

---

##### ✅ 8. Allow deletions

- **Required**: NO ✗
- **Recommendation**: Keep disabled

---

### Develop Branch Protection Summary

```yaml
Branch: develop

✅ Require pull request before merging
   ✅ Required approvals: 1
   ✅ Dismiss stale approvals: Yes
   
✅ Require status checks to pass: Yes (when CI/CD added)
   ✅ Require branches to be up to date: Yes
   
✅ Require conversation resolution: Yes

✅ Require linear history: Optional

⚠️  Do not allow bypassing: No (allow admin flexibility)

❌ Allow force pushes: No
❌ Allow deletions: No
```

---

## 🧪 Testing Branch Protection

After setting up protection rules:

### Test 1: Try Direct Commit to Main

```bash
# This should FAIL
git checkout main
echo "test" >> test.txt
git add test.txt
git commit -m "test"
git push origin main
```

**Expected Error**:
```
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Changes must be made through a pull request.
```

✅ **Success!** Branch protection is working.

---

### Test 2: Create PR Workflow

```bash
# This should SUCCEED
git checkout develop
git checkout -b feature/test-protection
echo "test" >> test.txt
git add test.txt
git commit -m "feat: Test branch protection"
git push origin feature/test-protection

# Then create PR on GitHub
# Request review, get approval, merge
```

✅ **Success!** Proper workflow is enforced.

---

### Test 3: Try Merging Without Approval

1. Create a PR from feature branch to main
2. Try to merge immediately without approval

**Expected**:
- Merge button is disabled
- Message: "Review required - At least 1 approving review is required"

✅ **Success!** Review requirement is enforced.

---

## 📸 Visual Setup Guide

### Step-by-Step with Screenshots

#### 1. Go to Repository Settings

```
GitHub → Your Repository → Settings (top menu)
```

#### 2. Navigate to Branches

```
Settings → Branches (left sidebar)
```

#### 3. Add Branch Protection Rule

```
Click: "Add rule" or "Add branch protection rule"
```

#### 4. Configure Main Branch

**Branch name pattern**: `main`

**Enable these settings**:

```
☑ Require a pull request before merging
  ☑ Require approvals (1 or 2)
  ☑ Dismiss stale pull request approvals when new commits are pushed

☑ Require status checks to pass before merging
  ☑ Require branches to be up to date before merging

☑ Require conversation resolution before merging

☑ Require linear history

☑ Do not allow bypassing the above settings

☐ Restrict who can push to matching branches (leave unchecked)

☐ Allow force pushes (KEEP DISABLED)
☐ Allow deletions (KEEP DISABLED)
```

**Click**: "Create" or "Save changes"

#### 5. Repeat for Develop Branch

Same steps, but with `develop` branch name pattern and slightly relaxed rules.

---

## 🔐 Additional Security: CODEOWNERS File

Create a `CODEOWNERS` file to automatically request reviews from specific people:

### Create `.github/CODEOWNERS`

```bash
# CODEOWNERS
# These owners will be the default reviewers for everything in the repo

# Global owners (all files)
*       @tech-lead-username @senior-dev-username

# Specific paths
*.md    @documentation-lead
*.css   @ui-lead
*.js    @javascript-lead

# Articles require review from content team
/articles/  @content-lead @tech-lead

# CI/CD changes require DevOps review
/.github/   @devops-lead

# Critical files require multiple reviews
/index.html         @tech-lead @senior-dev
/styles.css         @ui-lead @tech-lead
/script.js          @javascript-lead @tech-lead
```

### How CODEOWNERS Works

1. When a PR modifies `styles.css`, `@ui-lead` is automatically requested as reviewer
2. When a PR modifies `/articles/azotobacter.html`, `@content-lead` and `@tech-lead` are requested
3. Protection rule "Require review from Code Owners" enforces this

---

## 🚨 Emergency: Bypassing Protection

### When Absolutely Necessary

**Scenarios**:
- Critical production bug
- Security vulnerability fix
- Emergency hotfix required

### How to Bypass (Admins Only)

#### Option 1: Temporarily Disable Protection

1. Go to Settings → Branches
2. Edit the branch protection rule
3. Uncheck "Do not allow bypassing the above settings"
4. Make your emergency push
5. **IMMEDIATELY** re-enable protection

#### Option 2: Use Admin Override

If "Allow specified actors to bypass" is enabled:
1. Admin can merge PR without reviews
2. Document why bypass was necessary
3. Create follow-up PR for proper review

### After Emergency

```markdown
## Post-Emergency Checklist

- [ ] Protection rules re-enabled
- [ ] Emergency commit reviewed post-facto
- [ ] Incident documented
- [ ] Process improved to prevent future emergencies
- [ ] Team notified of bypass and reason
```

---

## ⚙️ GitHub Actions Status Checks

To enable "Require status checks", first add CI/CD workflows:

### Create `.github/workflows/ci.yml`

```yaml
name: CI

on:
  pull_request:
    branches: [main, develop]
  push:
    branches: [main, develop]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linters
        run: |
          npm run lint:html
          npm run lint:css
          npm run lint:js
      
      - name: Check formatting
        run: npm run format:check

  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Build check
        run: npm run build
```

After this workflow runs once, you'll see:
- `lint / lint` in status checks
- `test / test` in status checks

Then you can require these in branch protection.

---

## 🔍 Troubleshooting

### Issue: Can't merge even after approval

**Cause**: Status checks required but not passing
**Solution**: 
1. Check PR "Checks" tab
2. Fix any failing tests/lints
3. Push fixes to PR branch
4. Wait for checks to pass

---

### Issue: Status checks not appearing

**Cause**: Workflows haven't run yet
**Solution**:
1. Make a dummy PR to trigger workflows
2. Let workflows complete
3. Status checks will appear in protection settings
4. Add them to required checks

---

### Issue: "This branch is out of date"

**Cause**: Target branch (main/develop) has new commits
**Solution**:
```bash
# Update your feature branch
git checkout feature/your-branch
git fetch origin
git merge origin/main
# Or: git rebase origin/main
git push origin feature/your-branch
```

---

### Issue: Admin can't push even with bypass enabled

**Cause**: "Do not allow bypassing" is checked
**Solution**: 
1. Uncheck "Do not allow bypassing"
2. Make necessary push
3. Re-enable immediately

---

### Issue: Can't delete merged feature branches

**Cause**: Delete protection on wrong branch pattern
**Solution**:
- Protection should be on `main` and `develop` only
- Feature branches (e.g., `feature/*`) should NOT have delete protection
- Check branch name patterns in protection rules

---

## 📊 Protection Rules Comparison

| Setting | Main Branch | Develop Branch | Feature Branches |
|---------|-------------|----------------|------------------|
| **Require PR** | ✅ Yes (2 approvals) | ✅ Yes (1 approval) | ❌ No |
| **Status checks** | ✅ Required | ✅ Required | ❌ No |
| **Conversation resolution** | ✅ Required | ✅ Required | ❌ No |
| **Linear history** | ✅ Required | ⚠️ Optional | ❌ No |
| **Allow bypass** | ❌ No | ⚠️ Admin only | ✅ Yes |
| **Force push** | ❌ Never | ❌ Never | ✅ Allowed |
| **Delete branch** | ❌ Never | ❌ Never | ✅ Allowed |

---

## 📋 Setup Checklist

Copy this checklist when setting up branch protection:

### Main Branch Protection

- [ ] Navigate to Settings → Branches
- [ ] Click "Add rule"
- [ ] Branch name pattern: `main`
- [ ] ✅ Require a pull request before merging
- [ ] ✅ Require approvals: 2 (or 1 for small team)
- [ ] ✅ Dismiss stale pull request approvals
- [ ] ✅ Require status checks to pass (when available)
- [ ] ✅ Require branches to be up to date
- [ ] ✅ Require conversation resolution
- [ ] ✅ Require linear history
- [ ] ✅ Do not allow bypassing
- [ ] ❌ Allow force pushes: DISABLED
- [ ] ❌ Allow deletions: DISABLED
- [ ] Click "Create"

### Develop Branch Protection

- [ ] Click "Add rule"
- [ ] Branch name pattern: `develop`
- [ ] ✅ Require a pull request before merging
- [ ] ✅ Require approvals: 1
- [ ] ✅ Dismiss stale pull request approvals
- [ ] ✅ Require status checks to pass (when available)
- [ ] ✅ Require conversation resolution
- [ ] ⚠️ Require linear history: Optional
- [ ] ⚠️ Do not allow bypassing: Leave unchecked (allow admin flexibility)
- [ ] ❌ Allow force pushes: DISABLED
- [ ] ❌ Allow deletions: DISABLED
- [ ] Click "Create"

### Optional Enhancements

- [ ] Create `.github/CODEOWNERS` file
- [ ] Enable "Require review from Code Owners"
- [ ] Add CI/CD workflow for status checks
- [ ] Configure required status checks
- [ ] Test branch protection with dummy PR

---

## 🎯 Best Practices

### 1. Start with Strict Rules

It's easier to relax rules than to tighten them later.

### 2. Communicate with Team

Before enabling:
- Announce branch protection implementation
- Explain the workflow changes
- Provide this documentation
- Answer questions

### 3. Test First

- Test on a personal repository first
- Create a dummy PR to verify workflow
- Ensure team understands the process

### 4. Document Exceptions

If you need to bypass protection:
- Document why
- Get approval from team lead
- Re-enable immediately after
- Create follow-up PR for review

### 5. Review Regularly

- Monthly: Review if rules are too strict/loose
- Quarterly: Update based on team feedback
- After incidents: Adjust rules to prevent recurrence

---

## 📞 Need Help?

- **Branch protection not working?** Check if you're an admin - admins can bypass by default
- **Can't merge approved PR?** Check status checks and branch update requirements
- **Team complaining it's too strict?** Review with team lead and adjust approval count
- **Want to add new checks?** See CI/CD workflow section above

---

## 🔗 Additional Resources

- [GitHub Branch Protection Docs](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
- [CODEOWNERS Documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)
- [GitHub Actions Status Checks](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)

---

**Last Updated**: November 2024  
**Version**: 1.0.0

**Branch Protection = Better Code Quality + Team Collaboration! 🚀**


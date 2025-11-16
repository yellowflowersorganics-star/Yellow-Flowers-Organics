# Pro Tips - Zero to Production

Time-saving tricks, best practices, and expert advice for each phase.

---

## General Pro Tips

### ⏱️ Time Management

**Break it into sessions**:
```
Day 1, Morning (2 hours):
- Phase 1: Machine Setup
- Phase 2: GitHub Setup

Day 1, Afternoon (1-2 hours):
- Phase 3: Project Creation

Day 2, Morning (2 hours):
- Phase 4: AWS Infrastructure

Day 2, Afternoon (1-2 hours):
- Phase 5: GitHub Workflows
- Phase 6: Branch Protection
- Phase 7: First Deployment
```

### 📝 Documentation as You Go

**Create a personal notes file**:
```bash
# Keep track of YOUR specific details
echo "My AWS DEV URL: http://..." >> my-notes.txt
echo "My AWS PROD URL: http://..." >> my-notes.txt
echo "My repository: https://github.com/..." >> my-notes.txt

# Add to .gitignore so it's not committed
echo "my-notes.txt" >> .gitignore
```

### 🔖 Bookmark Key URLs

Add these to your browser bookmarks:
- Your GitHub repository
- Your AWS S3 console
- Your DEV website URL
- Your PROD website URL
- GitHub Actions page

---

## Phase 1: Machine Setup

### Quick Verification Script

Create a verification script:

```bash
# verify-setup.sh
#!/bin/bash

echo "🔍 Checking your setup..."
echo ""

echo "Git: $(git --version 2>/dev/null || echo '❌ NOT INSTALLED')"
echo "Node: $(node --version 2>/dev/null || echo '❌ NOT INSTALLED')"
echo "npm: $(npm --version 2>/dev/null || echo '❌ NOT INSTALLED')"
echo "VS Code: $(code --version 2>/dev/null | head -1 || echo '❌ NOT INSTALLED')"
echo ""

echo "Git Config:"
echo "  Name: $(git config --global user.name || echo '❌ NOT SET')"
echo "  Email: $(git config --global user.email || echo '❌ NOT SET')"
```

Run it:
```bash
chmod +x verify-setup.sh
./verify-setup.sh
```

### VS Code Productivity

**Keyboard Shortcuts**:
- `Ctrl+`` (backtick) - Toggle terminal
- `Ctrl+P` - Quick file open
- `Ctrl+Shift+P` - Command palette
- `Alt+Up/Down` - Move line up/down
- `Ctrl+/` - Toggle comment

**Settings Sync**:
- Sign in to VS Code with GitHub
- Settings sync across machines automatically

---

## Phase 2: GitHub Setup

### SSH Key Management

**Multiple keys for multiple machines**:
```bash
# On each machine, use descriptive names:
ssh-keygen -t ed25519 -C "laptop" -f ~/.ssh/id_ed25519_laptop
ssh-keygen -t ed25519 -C "desktop" -f ~/.ssh/id_ed25519_desktop

# Add to GitHub with descriptive titles:
# "My Laptop"
# "Home Desktop"
# "Work Computer"

# Easily identify and remove old/lost machines
```

### Token Organization

**Use descriptive token names**:
```
❌ Bad: "token", "dev", "access"
✅ Good: "Laptop-Deploy-Access-2024", "Desktop-Dev-Token-2025"

# Makes it easy to:
# - Know which machine uses which token
# - Revoke tokens when you change computers
# - Track token expiration
```

---

## Phase 3: Project Creation

### .gitignore Best Practices

**Start comprehensive, remove if needed**:
```gitignore
# Add everything you might use
node_modules/
.env
.env.local
.DS_Store
Thumbs.db
*.swp
dist/
build/
coverage/

# Better to ignore too much than too little!
```

### Commit Message Template

**Create a template**:
```bash
# .git-commit-template
# Type: subject (max 50 chars)
#
# Body (wrap at 72 chars):
# - Why is this change needed?
# - How does it address the issue?
# - What side effects does it have?
#
# Footer:
# Resolves: #123
# See also: #456

git config --global commit.template ~/.git-commit-template
```

### npm Shortcuts

**Useful scripts in package.json**:
```json
{
  "scripts": {
    "start": "live-server --port=8000",
    "dev": "live-server --port=8000",
    "open": "open index.html",
    "lint": "echo 'Running linter...'",
    "format": "prettier --write ."
  }
}
```

---

## Phase 4: AWS Infrastructure

### Cost Optimization

**Set up billing alerts FIRST**:
```
1. AWS Console → Billing Dashboard
2. Budgets → Create budget
3. Set budget: $5/month
4. Add email alert at 80% ($4)

# Sleep peacefully knowing you won't get surprise bills!
```

### Naming Convention

**Use consistent naming**:
```
Buckets:
- projectname-environment
- mysite-dev
- mysite-staging
- mysite-prod

IAM Users:
- github-actions-deploy-dev
- github-actions-deploy-prod

Tags (always add):
- Project: mysite
- Environment: dev/staging/prod
- Owner: your-name
```

### AWS Console Shortcuts

**Bookmark these URLs**:
```
S3 Console:
https://s3.console.aws.amazon.com/s3/home?region=us-east-1

IAM Console:
https://console.aws.amazon.com/iam/home#/users

Billing:
https://console.aws.amazon.com/billing/home
```

### Credentials Management

**Keep a secure reference**:
```
AWS Credentials Reference (Store Securely!)
============================================

DEV Environment:
- Bucket: mysite-dev
- Region: us-east-1
- IAM User: github-actions-deploy-dev
- Access Key ID: AKIA... (in password manager)
- Secret Key: (in password manager)
- S3 URL: http://mysite-dev.s3-website-us-east-1.amazonaws.com

PROD Environment:
- Bucket: mysite-prod
- Region: us-east-1
- IAM User: github-actions-deploy-prod
- Access Key ID: AKIA... (in password manager)
- Secret Key: (in password manager)
- S3 URL: http://mysite-prod.s3-website-us-east-1.amazonaws.com

Created: 2024-11-16
```

---

## Phase 5: GitHub Workflows

### Workflow Development

**Test workflows locally**:
```bash
# Use 'act' to run GitHub Actions locally
# Install: https://github.com/nektos/act

# Test workflow
act -j deploy-dev

# Saves time vs pushing and watching on GitHub
```

### Workflow Debugging

**Add debug steps**:
```yaml
- name: Debug Info
  run: |
    echo "Branch: ${{ github.ref }}"
    echo "Commit: ${{ github.sha }}"
    echo "Actor: ${{ github.actor }}"
    ls -la
    env | sort
```

### Manual Deployment

**Always keep manual trigger option**:
```yaml
on:
  push:
    branches:
      - main
  workflow_dispatch:  # ✅ Allows manual runs

# Useful for:
# - Testing
# - Emergency deployments
# - Redeploying without code changes
```

---

## Phase 6: Branch Protection

### Flexible Protection

**Solo developer? Use lighter protection**:
```
✅ Require pull requests: YES
❌ Required approvals: 0 (instead of 1)
✅ Require conversation resolution: YES
✅ Require linear history: YES

# Still enforces good workflow
# But you can merge your own PRs immediately
```

### Emergency Access

**Document emergency process**:
```markdown
## Emergency Hotfix Process

If production is down and branch protection blocks you:

1. Settings → Branches → Edit rule
2. Temporarily disable "Do not allow bypassing"
3. Make emergency fix directly to main
4. Deploy
5. IMMEDIATELY RE-ENABLE PROTECTION
6. Create post-mortem issue
7. Backport fix to develop

⚠️ Only use for true emergencies!
```

---

## Phase 7: First Deployment

### Pre-Deployment Checklist

**Always check before deploying**:
```bash
# 1. Test locally
npm start
# Check: Works? No console errors?

# 2. Review changes
git diff develop...main

# 3. Check links
# All links work?
# All images load?

# 4. Test on multiple browsers
# Chrome, Firefox, Safari

# 5. Mobile check
# Use browser dev tools responsive mode

# ✅ Only then: Merge PR
```

### Post-Deployment Verification

**Automated check script**:
```bash
#!/bin/bash
# check-deployment.sh

echo "Checking DEV..."
curl -I https://mysite-dev.s3-website-us-east-1.amazonaws.com
echo ""

echo "Checking PROD..."
curl -I https://mysite-prod.s3-website-us-east-1.amazonaws.com
echo ""

echo "✅ Both environments responding!"
```

### Deployment Timing

**Best times to deploy**:
- ✅ Mornings (you're alert for issues)
- ✅ Early in week (time to fix issues)
- ❌ Friday afternoons (might ruin weekend)
- ❌ Late nights (tired, make mistakes)
- ❌ Before vacation (no one to fix issues)

---

## Phase 8: Team Collaboration

### Onboarding Automation

**Create onboarding checklist issue template**:
```yaml
# .github/ISSUE_TEMPLATE/onboarding.yml
name: New Team Member Onboarding
description: Checklist for new team members
title: "Onboarding: [Name]"
labels: ["onboarding"]
body:
  - type: checkboxes
    attributes:
      label: Onboarding Tasks
      options:
        - label: Accept GitHub invitation
        - label: Set up local development
        - label: Run project locally
        - label: Read documentation
        - label: Make first contribution
```

### Code Review Best Practices

**For Reviewers**:
```markdown
## Code Review Checklist

Functionality:
- [ ] Code does what PR says
- [ ] Edge cases handled
- [ ] No obvious bugs

Code Quality:
- [ ] Easy to understand
- [ ] Consistent style
- [ ] No unnecessary complexity

Testing:
- [ ] Tested locally
- [ ] No console errors
- [ ] Works on mobile

Documentation:
- [ ] README updated if needed
- [ ] Comments for complex code
```

### Git Aliases for Team

**Share these with team**:
```bash
# Add to ~/.gitconfig or git config --global

[alias]
    # Quick status
    st = status -sb
    
    # Pretty log
    lg = log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
    
    # Quick commit
    cm = commit -m
    
    # Quick push
    ps = push
    
    # Pull with rebase
    pl = pull --rebase
    
    # Undo last commit (keep changes)
    undo = reset HEAD~1 --soft
    
    # Amend last commit
    amend = commit --amend --no-edit
```

---

## Daily Workflow Tips

### Morning Routine

```bash
# Start each day with:
cd ~/projects/mysite
git checkout develop
git pull origin develop
git status  # Check if clean

npm start  # Verify site works locally

# Check GitHub Actions
# Visit: https://github.com/user/repo/actions
# Any failed workflows?
```

### Before Lunch Break

```bash
# Save your work:
git add .
git commit -m "wip: [description]"
git push origin feature/my-feature

# Peace of mind if computer crashes!
```

### End of Day

```bash
# Commit and push everything
git status
git add .
git commit -m "feat: [what you accomplished today]"
git push origin feature/my-feature

# Quick status check
git log --oneline -5  # See today's commits
```

---

## Performance Tips

### Website Speed

```html
<!-- Optimize images -->
<!-- Use WebP format, compress images -->
<img src="photo.webp" loading="lazy" alt="...">

<!-- Minimize CSS/JS -->
<!-- Use minified versions in production -->
<link rel="stylesheet" href="styles.min.css">

<!-- Add caching headers -->
<!-- Already done in PROD workflow! -->
```

### Git Performance

```bash
# Keep repository clean
git gc  # Garbage collect

# Clean up old branches
git fetch --prune
git branch -d old-feature-branch

# Shallow clone for team (faster)
git clone --depth 1 <url>
```

---

## Security Tips

### Secrets Management

```bash
# NEVER commit secrets
echo ".env" >> .gitignore
echo ".env.local" >> .gitignore
echo "*secret*" >> .gitignore
echo "*private*" >> .gitignore

# Rotate AWS keys every 90 days
# Set calendar reminder

# Use different keys for each environment
# DEV compromised ≠ PROD compromised
```

### Access Control

```
Principle of Least Privilege:
- Developers: Write access
- Contractors: Read access
- Bots: Specific permissions only
- Review access quarterly
```

---

## Learning Path

### Week 1: Get Comfortable
- Run through workflow daily
- Make small changes
- Practice PR process

### Week 2: Experiment
- Try new features
- Break things (on DEV!)
- Learn from errors

### Month 2: Optimize
- Improve workflow
- Add more automation
- Document learnings

### Month 3+: Scale
- Add team members
- Add environments (staging)
- Share knowledge

---

## Quick Reference Card

**Print and keep near computer**:

```
┌─────────────────────────────────────────────┐
│         DAILY WORKFLOW QUICK REF            │
├─────────────────────────────────────────────┤
│ Start Work:                                 │
│   git checkout develop                      │
│   git pull                                  │
│   git checkout -b feature/name              │
│                                             │
│ While Working:                              │
│   npm start  (test locally)                 │
│   git add .                                 │
│   git commit -m "message"                   │
│                                             │
│ Deploy to DEV:                              │
│   git checkout develop                      │
│   git merge feature/name                    │
│   git push origin develop                   │
│   → Auto-deploys to DEV                     │
│                                             │
│ Deploy to PROD:                             │
│   Create PR: develop → main                 │
│   Review & merge                            │
│   → Auto-deploys to PROD                    │
│                                             │
│ Emergency:                                  │
│   Check GitHub Actions for errors           │
│   Check AWS S3 console                      │
│   Check Troubleshooting guide               │
└─────────────────────────────────────────────┘
```

---

## Final Pro Tip

**The best tip**: 
```
🎯 Do it. Learn by doing.
💪 Make mistakes. That's how you learn.
📖 Document as you go.
🤝 Share knowledge with team.
🎉 Celebrate wins!
```

**Remember**: 
- Everyone was a beginner once
- Every expert started where you are
- The only way to get good is to practice
- You've got this! 🚀

---

[← Back to Index](README.md) | [View Checklist](checklist.md) | [View Troubleshooting](troubleshooting.md)


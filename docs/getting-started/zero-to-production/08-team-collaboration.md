# Phase 8: Team Collaboration (Optional)

**Goal**: Set up your project for team collaboration

📖 **Full Guide**: [Complete Team Onboarding Guide](../TEAM_ONBOARDING.md)

---

## 📋 What You'll Do

- Invite team members to repository
- Share documentation with team
- Create issue templates for consistent issues
- Set up project board for task tracking

---

## Step 8.1: Invite Team Members

1. **GitHub** → Your Repository → **Settings** → **Collaborators**

2. Click **"Add people"**

3. Enter GitHub username or email

4. Choose permission level:
   - **Read**: View only
   - **Triage**: Manage issues/PRs
   - **Write**: Push code, create PRs
   - **Maintain**: Manage settings
   - **Admin**: Full access

5. Click **"Add [username] to this repository"**

6. They'll receive an email invitation

---

## Step 8.2: Share Documentation with Team

Create a welcome message or email:

```markdown
# Welcome to the Team! 👋

## Getting Started

1. **Accept GitHub invitation**
   - Check your email
   - Click "View invitation"
   - Accept

2. **Set up your machine**
   📖 [Machine Setup Guide](docs/getting-started/MACHINE_SETUP.md)
   - Install Git, Node.js, VS Code
   - Configure GitHub authentication
   - ~45 minutes

3. **Clone the repository**
   ```bash
   git clone git@github.com:yourusername/my-awesome-website.git
   cd my-awesome-website
   npm install
   ```

4. **Read the documentation**
   - 📖 [Quick Reference](docs/getting-started/QUICK_REFERENCE.md) - Daily commands
   - 📖 [Contributing Guide](docs/development/CONTRIBUTING.md) - How to contribute
   - 📖 [Developer Guide](docs/development/DEVELOPER_GUIDE.md) - Technical details

5. **Test local development**
   ```bash
   npm start
   # Visit: http://localhost:8000
   ```

## Our Workflow

1. Create feature branch from `develop`
2. Make changes, test locally
3. Push to `develop` → Auto-deploys to DEV
4. Test on DEV environment
5. Create PR: `develop` → `main`
6. Get approval, merge → Auto-deploys to PROD

## URLs

- **DEV**: http://my-awesome-website-dev.s3-website-us-east-1.amazonaws.com
- **PROD**: http://my-awesome-website-prod.s3-website-us-east-1.amazonaws.com

## Need Help?

- Ask in team chat
- Create a GitHub issue
- Check documentation

Welcome aboard! 🚀
```

---

## Step 8.3: Create Issue Templates

Help team create consistent issues:

### Bug Report Template

**Create `.github/ISSUE_TEMPLATE/bug_report.yml`**:

```yaml
name: 🐛 Bug Report
description: Report a bug or issue
title: "[Bug]: "
labels: ["bug"]
body:
  - type: textarea
    id: description
    attributes:
      label: Bug Description
      description: Clear description of the bug
      placeholder: What went wrong?
    validations:
      required: true

  - type: textarea
    id: steps
    attributes:
      label: Steps to Reproduce
      description: How to reproduce the bug
      placeholder: |
        1. Go to...
        2. Click on...
        3. See error...
    validations:
      required: true

  - type: textarea
    id: expected
    attributes:
      label: Expected Behavior
      description: What should happen?
    validations:
      required: true

  - type: dropdown
    id: severity
    attributes:
      label: Severity
      options:
        - Critical (site down)
        - High (major feature broken)
        - Medium (minor feature broken)
        - Low (cosmetic issue)
    validations:
      required: true
```

### Feature Request Template

**Create `.github/ISSUE_TEMPLATE/feature_request.yml`**:

```yaml
name: ✨ Feature Request
description: Suggest a new feature
title: "[Feature]: "
labels: ["enhancement"]
body:
  - type: textarea
    id: problem
    attributes:
      label: Problem Statement
      description: What problem does this solve?
      placeholder: As a user, I need...
    validations:
      required: true

  - type: textarea
    id: solution
    attributes:
      label: Proposed Solution
      description: How would you solve it?
    validations:
      required: true

  - type: dropdown
    id: priority
    attributes:
      label: Priority
      options:
        - High
        - Medium
        - Low
    validations:
      required: true
```

### Config File

**Create `.github/ISSUE_TEMPLATE/config.yml`**:

```yaml
blank_issues_enabled: false
contact_links:
  - name: 📖 Documentation
    url: https://github.com/yourusername/my-awesome-website/tree/main/docs
    about: Check our documentation first
  - name: 💬 Team Chat
    url: https://your-team-chat.com
    about: Quick questions? Ask in team chat
```

**Commit templates**:

```bash
git add .github/ISSUE_TEMPLATE/
git commit -m "docs: Add issue templates for team"
git push origin main
```

---

## Step 8.4: Set Up Project Board

Track tasks visually:

1. **GitHub** → Your Repository → **Projects**

2. Click **"New project"**

3. Choose **"Board"** template

4. Name it: `Development Board`

5. **Add columns**:
   - 📋 Backlog
   - 🎯 To Do
   - 🔨 In Progress
   - 👀 In Review
   - ✅ Done

6. **Link to repository**:
   - Settings → Link repository

7. **Auto-add issues**:
   - Workflows → Auto-add items

8. **Create first tasks**:
   ```
   - Set up local environment
   - Review documentation
   - First contribution
   ```

---

## Step 8.5: Set Up Team Communication

### GitHub Discussions (Optional)

1. **Settings** → **Features**
2. Enable **"Discussions"**
3. Create categories:
   - 📢 Announcements
   - 💡 Ideas
   - ❓ Q&A
   - 🎉 Show and Tell

### External Chat (Optional)

Choose a platform:
- **Slack**: Best for teams
- **Discord**: Good for communities
- **Microsoft Teams**: Enterprise
- **Telegram**: Simple and fast

---

## ✅ Phase 8 Verification

- [ ] Team members invited
- [ ] Documentation shared with team
- [ ] Issue templates created
- [ ] Project board set up
- [ ] Communication channels established
- [ ] Team can clone and run project locally
- [ ] Team understands workflow

**All checked?** ✅ Team is ready!

---

## 💡 Team Best Practices

### Code Review Guidelines

**For Reviewers**:
- Review within 24 hours
- Be constructive and specific
- Test changes locally if needed
- Approve or request changes clearly

**For Authors**:
- Keep PRs small (< 400 lines)
- Write clear descriptions
- Link to related issues
- Respond to feedback quickly

### Communication Guidelines

- **Use Issues**: For bugs and features
- **Use PRs**: For code discussion
- **Use Chat**: For quick questions
- **Use Discussions**: For proposals

### Workflow Tips

```bash
# Pull latest before starting work
git checkout develop
git pull origin develop

# Create descriptive branch names
git checkout -b feature/add-contact-form
git checkout -b fix/navigation-mobile
git checkout -b docs/update-readme

# Write clear commit messages
git commit -m "feat: Add contact form with validation"
git commit -m "fix: Resolve mobile navigation overflow"
git commit -m "docs: Update README with new setup steps"
```

---

## 🐛 Common Team Issues

### Issue: Merge conflicts

**Solution**:
```bash
# Pull latest changes
git checkout develop
git pull origin develop

# Merge into your branch
git checkout feature/my-feature
git merge develop

# Resolve conflicts in files
# Edit files to fix conflicts
git add .
git commit -m "fix: Resolve merge conflicts"
git push origin feature/my-feature
```

### Issue: Accidentally pushed to wrong branch

**Solution**:
```bash
# If you pushed to develop instead of feature branch:
git log  # Get commit hash
git checkout develop
git revert <commit-hash>
git push origin develop

# Then push to correct branch
git checkout -b feature/my-feature
git cherry-pick <commit-hash>
git push origin feature/my-feature
```

### Issue: Need to sync fork (if using forks)

**Solution**:
```bash
# Add upstream remote (one time)
git remote add upstream git@github.com:original/repo.git

# Sync fork
git fetch upstream
git checkout develop
git merge upstream/develop
git push origin develop
```

---

## 📚 Additional Resources

- **Full Onboarding**: [Team Onboarding Guide](../TEAM_ONBOARDING.md)
- **Contributing**: [Contributing Guide](../../development/CONTRIBUTING.md)
- **Quick Reference**: [Daily Commands Cheat Sheet](../QUICK_REFERENCE.md)

---

## 🎉 Congratulations!

**Your project is now fully set up for team collaboration!**

You have:
- ✅ Live website (DEV + PROD)
- ✅ Automatic deployment
- ✅ Protected workflow
- ✅ Team-ready repository
- ✅ Documentation
- ✅ Issue templates
- ✅ Project tracking

**You're ready to build something amazing together! 🚀**

---

## ➡️ What's Next?

- **Build features**: Start adding to your website
- **Review regularly**: Hold team sync meetings
- **Iterate**: Improve workflow as you learn
- **Document**: Keep docs up to date
- **Celebrate**: Recognize team achievements!

---

[← Back to Index](README.md) | [← Previous: Phase 7](07-first-deployment.md) | [View Checklist →](checklist.md)


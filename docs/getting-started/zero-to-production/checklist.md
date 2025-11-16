# Complete Zero to Production Checklist

Use this checklist to track your progress through all phases.

---

## Phase 1: Machine Setup (30-45 min)

### Tools Installation
- [ ] Git installed
- [ ] Git version verified (`git --version`)
- [ ] Node.js installed (v16+)
- [ ] Node version verified (`node --version`)
- [ ] npm installed
- [ ] npm version verified (`npm --version`)
- [ ] VS Code installed
- [ ] VS Code opens successfully

### Git Configuration
- [ ] Git user name configured
- [ ] Git user email configured
- [ ] Default branch set to `main`
- [ ] Git config verified (`git config --list --global`)

### VS Code Extensions
- [ ] Live Server extension installed
- [ ] Prettier extension installed
- [ ] HTML CSS Support extension installed
- [ ] GitLens extension installed

**Phase 1 Status**: ⬜ Not Started | 🔄 In Progress | ✅ Complete

---

## Phase 2: GitHub Setup (20-30 min)

### Account Setup
- [ ] GitHub account created
- [ ] Email verified
- [ ] Profile completed

### Authentication
- [ ] Authentication method chosen (SSH or Token)

**If using SSH**:
- [ ] SSH key generated
- [ ] SSH key added to GitHub
- [ ] SSH connection tested successfully

**If using Token**:
- [ ] Personal Access Token generated
- [ ] Token saved securely (password manager, file, or paper)
- [ ] Token scope includes `repo` and `workflow`

### Repository
- [ ] New repository created
- [ ] Repository URL copied
- [ ] Repository is Private or Public (as preferred)

**Phase 2 Status**: ⬜ Not Started | 🔄 In Progress | ✅ Complete

---

## Phase 3: Project Creation (30-45 min)

### Project Structure
- [ ] Project directory created
- [ ] Git initialized (`git init`)
- [ ] Default branch set to `main`
- [ ] Folder structure created (articles, .github, .github/workflows)

### Website Files
- [ ] `index.html` created (with content)
- [ ] Website has basic HTML structure
- [ ] Website has some styling (inline or external CSS)

### Essential Files
- [ ] `.gitignore` created
- [ ] README.md created
- [ ] `package.json` created

### Testing
- [ ] `npm install` completed successfully
- [ ] `node_modules` folder created
- [ ] `npm start` runs without errors
- [ ] Browser opens to http://localhost:8000
- [ ] Website displays correctly
- [ ] No browser console errors (F12)
- [ ] Live reload works (test by editing file)

### First Commit
- [ ] Files staged (`git add .`)
- [ ] First commit created
- [ ] Remote added to GitHub
- [ ] Code pushed to GitHub (`git push -u origin main`)
- [ ] Files visible on GitHub.com
- [ ] `node_modules` NOT on GitHub (correctly ignored)

**Phase 3 Status**: ⬜ Not Started | 🔄 In Progress | ✅ Complete

---

## Phase 4: AWS Infrastructure (60-90 min)

### AWS Account
- [ ] AWS account created
- [ ] Email verified
- [ ] Payment method added
- [ ] Free tier confirmed

### DEV Environment
- [ ] DEV S3 bucket created (`-dev` suffix)
- [ ] DEV bucket in correct region
- [ ] DEV bucket public access enabled
- [ ] DEV static website hosting enabled
- [ ] DEV website endpoint URL copied and saved
- [ ] DEV bucket policy added (public read)
- [ ] DEV IAM user created
- [ ] DEV IAM policy attached
- [ ] DEV Access Key ID saved
- [ ] DEV Secret Access Key saved

### PROD Environment
- [ ] PROD S3 bucket created (`-prod` suffix)
- [ ] PROD bucket in SAME region as DEV
- [ ] PROD bucket public access enabled
- [ ] PROD bucket versioning enabled
- [ ] PROD static website hosting enabled
- [ ] PROD website endpoint URL copied and saved
- [ ] PROD bucket policy added (public read)
- [ ] PROD IAM user created
- [ ] PROD IAM policy attached
- [ ] PROD Access Key ID saved
- [ ] PROD Secret Access Key saved

### GitHub Secrets
- [ ] `AWS_ACCESS_KEY_ID_DEV` added
- [ ] `AWS_SECRET_ACCESS_KEY_DEV` added
- [ ] `AWS_REGION_DEV` added
- [ ] `S3_BUCKET_NAME_DEV` added
- [ ] `AWS_ACCESS_KEY_ID_PROD` added
- [ ] `AWS_SECRET_ACCESS_KEY_PROD` added
- [ ] `AWS_REGION_PROD` added
- [ ] `S3_BUCKET_NAME_PROD` added
- [ ] All 8 secrets verified in GitHub

**Phase 4 Status**: ⬜ Not Started | 🔄 In Progress | ✅ Complete

---

## Phase 5: GitHub Workflows (20-30 min)

### Workflow Files
- [ ] `.github/workflows` folder exists
- [ ] `deploy-dev.yml` created
- [ ] `deploy-prod.yml` created
- [ ] Workflow files have correct YAML syntax
- [ ] Workflow files reference correct secrets

### Deployment
- [ ] Workflow files committed
- [ ] Workflows pushed to GitHub
- [ ] Can see workflows in Actions tab
- [ ] First PROD deployment triggered
- [ ] First PROD deployment completed successfully
- [ ] No errors in workflow logs

**Phase 5 Status**: ⬜ Not Started | 🔄 In Progress | ✅ Complete

---

## Phase 6: Branch Protection (15-20 min)

### Branches
- [ ] `develop` branch created
- [ ] `develop` branch pushed to GitHub

### Protection Rules
- [ ] Main branch protection rule created
- [ ] Main requires pull requests
- [ ] Main requires 1 approval (or 0 if solo)
- [ ] Main requires conversation resolution
- [ ] Main requires linear history
- [ ] Main does NOT allow force pushes
- [ ] Main does NOT allow deletions
- [ ] Develop branch protection rule created
- [ ] Develop has same settings as main

### Verification
- [ ] Attempted direct push to main (should fail)
- [ ] Direct push correctly rejected
- [ ] Branch protection rules visible in Settings

**Phase 6 Status**: ⬜ Not Started | 🔄 In Progress | ✅ Complete

---

## Phase 7: First Deployment (10-15 min)

### DEV Deployment
- [ ] Test change made on `develop` branch
- [ ] Change committed and pushed
- [ ] DEV workflow triggered
- [ ] DEV workflow completed successfully
- [ ] DEV URL accessible
- [ ] Website loads on DEV
- [ ] Test change visible on DEV
- [ ] No browser errors on DEV

### PROD Deployment
- [ ] PR created (develop → main)
- [ ] PR description filled out
- [ ] PR reviewed (if required)
- [ ] PR approved (if required)
- [ ] PR merged
- [ ] PROD workflow triggered
- [ ] PROD workflow completed successfully
- [ ] PROD URL accessible
- [ ] Website loads on PROD
- [ ] Changes visible on PROD
- [ ] No browser errors on PROD

### Documentation
- [ ] README updated with deployment section
- [ ] DEV URL added to README
- [ ] PROD URL added to README
- [ ] Workflow description added to README
- [ ] Updated README committed and pushed

**Phase 7 Status**: ⬜ Not Started | 🔄 In Progress | ✅ Complete

---

## Phase 8: Team Collaboration (Optional)

### Team Setup
- [ ] Team members identified
- [ ] Invitations sent via GitHub
- [ ] Invitations accepted
- [ ] Team members have correct permissions

### Documentation
- [ ] Welcome message prepared
- [ ] Documentation shared with team
- [ ] Team understands workflow
- [ ] Team can clone repository
- [ ] Team can run project locally

### Issue Templates
- [ ] Bug report template created
- [ ] Feature request template created
- [ ] Template config file created
- [ ] Templates committed and pushed
- [ ] Templates visible on GitHub Issues

### Project Management
- [ ] Project board created
- [ ] Columns configured
- [ ] Board linked to repository
- [ ] First tasks added

### Communication
- [ ] Communication channel chosen
- [ ] Team added to channel
- [ ] Communication guidelines shared

**Phase 8 Status**: ⬜ Not Started | 🔄 In Progress | ✅ Complete

---

## Final Verification

### Overall System Check
- [ ] Can develop locally (`npm start`)
- [ ] Can push to develop branch
- [ ] DEV deployment works automatically
- [ ] Can create PRs
- [ ] PROD deployment works via PR
- [ ] Both URLs work reliably
- [ ] Team can access and contribute (if applicable)

### Documentation Check
- [ ] README is up to date
- [ ] All URLs are correct
- [ ] Instructions are clear
- [ ] Team knows where to find help

### Security Check
- [ ] No secrets committed to Git
- [ ] AWS credentials are secure
- [ ] Branch protection is active
- [ ] Only authorized users have access

---

## Your Progress Summary

Fill in your status for each phase:

| Phase | Name | Status | Date Completed |
|-------|------|--------|----------------|
| 1 | Machine Setup | | |
| 2 | GitHub Setup | | |
| 3 | Project Creation | | |
| 4 | AWS Infrastructure | | |
| 5 | GitHub Workflows | | |
| 6 | Branch Protection | | |
| 7 | First Deployment | | |
| 8 | Team Collaboration (Optional) | | |

---

## Your Website URLs

Write your actual URLs here for quick reference:

```
DEV:  _____________________________________________________

PROD: _____________________________________________________
```

---

## 🎉 Completion Certificate

When all required phases (1-7) are complete:

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│        🎉 ZERO TO PRODUCTION - COMPLETED! 🎉          │
│                                                        │
│  Congratulations! You have successfully deployed      │
│  a website from scratch to production on AWS!         │
│                                                        │
│  Completed by: ____________________________________   │
│                                                        │
│  Date: ____________________________________________   │
│                                                        │
│  Project: _________________________________________   │
│                                                        │
│  You are now a deployment pro! 🚀                     │
│                                                        │
└────────────────────────────────────────────────────────┘
```

---

## Need Help?

- **Stuck on a phase?** → Check the [Troubleshooting Guide](troubleshooting.md)
- **Want tips?** → See [Pro Tips](pro-tips.md)
- **Need details?** → Read the specific phase guide
- **Still stuck?** → Create a GitHub issue or ask your team

---

**Keep this checklist handy** and update it as you progress!

**Good luck! You've got this! 💪**

---

[← Back to Index](README.md)


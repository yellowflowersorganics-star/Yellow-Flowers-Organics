# Troubleshooting Guide - Zero to Production

Common issues and solutions for each phase.

---

## Table of Contents

- [Phase 1: Machine Setup](#phase-1-machine-setup)
- [Phase 2: GitHub Setup](#phase-2-github-setup)
- [Phase 3: Project Creation](#phase-3-project-creation)
- [Phase 4: AWS Infrastructure](#phase-4-aws-infrastructure)
- [Phase 5: GitHub Workflows](#phase-5-github-workflows)
- [Phase 6: Branch Protection](#phase-6-branch-protection)
- [Phase 7: First Deployment](#phase-7-first-deployment)
- [Phase 8: Team Collaboration](#phase-8-team-collaboration)
- [General Issues](#general-issues)

---

## Phase 1: Machine Setup

### Issue: `command not found` after installation

**Symptoms**: Commands like `git`, `node`, or `code` don't work

**Solutions**:

1. **Restart terminal/computer**
   ```bash
   # Close terminal and open new one
   # Or restart computer
   ```

2. **Check PATH** (Windows):
   - Search "Environment Variables"
   - Check if Git/Node/VS Code are in PATH
   - Add if missing

3. **Reinstall with correct options**:
   - Windows: Check "Add to PATH" during installation
   - Mac: Use Homebrew (handles PATH automatically)
   - Linux: Use package manager (`apt`, `yum`)

### Issue: Git config not saving

**Symptoms**: `git config --list` shows empty or wrong values

**Solutions**:

```bash
# Try without --global first
git config user.name "Test Name"
git config user.name  # Should echo back

# If that works, try --global again
git config --global user.name "Your Name"

# Verify location
git config --list --show-origin

# Check if file exists
ls ~/.gitconfig  # Should exist

# If doesn't exist, create it
touch ~/.gitconfig
git config --global user.name "Your Name"
```

### Issue: VS Code extensions not working

**Symptoms**: Extensions installed but features don't work

**Solutions**:

1. **Reload VS Code**:
   - Ctrl+Shift+P (Cmd+Shift+P on Mac)
   - Type "Reload Window"
   - Press Enter

2. **Check extension is enabled**:
   - Extensions panel (Ctrl+Shift+X)
   - Make sure extension shows "Enabled"

3. **Reinstall extension**:
   - Uninstall extension
   - Restart VS Code
   - Reinstall

---

## Phase 2: GitHub Setup

### Issue: SSH key generation fails

**Symptoms**: `ssh-keygen` command not found or fails

**Solutions**:

**Windows**:
```bash
# Use Git Bash (not Command Prompt or PowerShell)
# Right-click → Git Bash Here
ssh-keygen -t ed25519 -C "your.email@example.com"
```

**Mac/Linux**:
```bash
# Should work by default
# If not, install openssh
# Mac:
brew install openssh

# Linux:
sudo apt-get install openssh-client
```

### Issue: SSH connection test fails

**Symptoms**: `ssh -T git@github.com` fails or times out

**Solutions**:

1. **Check if key was added**:
   ```bash
   ssh-add -l
   # Should list your key
   
   # If empty, add it:
   ssh-add ~/.ssh/id_ed25519
   ```

2. **Check key on GitHub**:
   - Go to https://github.com/settings/keys
   - Verify your key is there
   - Try deleting and re-adding

3. **Test with verbose output**:
   ```bash
   ssh -vT git@github.com
   # Look for errors in output
   ```

4. **Firewall/Network issue**:
   ```bash
   # Test HTTPS instead
   git clone https://github.com/test-repo.git
   ```

### Issue: Lost Personal Access Token

**Symptoms**: Forgot to save token, can't find it

**Solutions**:

**You cannot recover it!** Create a new one:

1. Go to https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Set same permissions as before:
   - ✅ `repo`
   - ✅ `workflow`
4. **IMMEDIATELY SAVE IT** (password manager, file, paper)
5. Update GitHub secrets if you were using it for workflows

---

## Phase 3: Project Creation

### Issue: `npm: command not found`

**Symptoms**: npm commands don't work

**Solutions**:

```bash
# Check if Node.js is installed
node --version

# If not installed, go back to Phase 1
# If installed but npm missing, reinstall Node.js

# Verify npm is in PATH
# Windows: where npm
# Mac/Linux: which npm
```

### Issue: `npm install` fails

**Symptoms**: Errors during `npm install`, no `node_modules` folder

**Common causes and solutions**:

1. **Permission issues** (Mac/Linux):
   ```bash
   # Don't use sudo!
   # Instead, fix npm permissions:
   mkdir ~/.npm-global
   npm config set prefix '~/.npm-global'
   echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.profile
   source ~/.profile
   ```

2. **Corrupted cache**:
   ```bash
   npm cache clean --force
   npm install
   ```

3. **Delete and retry**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

### Issue: `npm start` fails - Port already in use

**Symptoms**: Error: "Port 8000 is already in use"

**Solutions**:

**Windows**:
```bash
# Find process using port 8000
netstat -ano | findstr :8000

# Kill it (replace PID with actual number)
taskkill /PID <PID> /F
```

**Mac/Linux**:
```bash
# Find and kill process
lsof -ti:8000 | xargs kill

# Or use different port
# Edit package.json:
"start": "live-server --port=8080"
```

### Issue: Website doesn't load (localhost:8000)

**Symptoms**: Browser shows "Can't reach this page"

**Solutions**:

1. **Check server is running**:
   - Look for "Serving..." message in terminal
   - Should show address

2. **Try different browser**

3. **Check firewall**:
   - Windows: Allow Node.js in Firewall
   - Mac: System Preferences → Security & Privacy

4. **Manual open**:
   - Open `index.html` directly in browser
   - Right-click → Open with → Browser

### Issue: Git push fails - Authentication

**Symptoms**: "Permission denied" or "Authentication failed"

**Solutions**:

**SSH**:
```bash
# Test connection
ssh -T git@github.com

# If fails, check:
ssh-add -l  # List keys
ssh-add ~/.ssh/id_ed25519  # Add key if missing
```

**HTTPS**:
```bash
# Use token as password
Username: your-github-username
Password: ghp_your_token_here  # NOT your GitHub password!

# Or use credential helper
git config --global credential.helper store
# Will save credentials after first successful push
```

---

## Phase 4: AWS Infrastructure

### Issue: Bucket name already taken

**Symptoms**: "Bucket name already exists" error

**Solutions**:

Bucket names are globally unique across ALL AWS accounts!

```bash
# Add unique identifier:
my-awesome-website-dev         # ❌ Taken
my-awesome-website-jdoe-dev    # ✅ Add initials
my-awesome-website-2024-dev    # ✅ Add year
my-awesome-website-abc123-dev  # ✅ Add random chars
```

### Issue: Can't uncheck "Block all public access"

**Symptoms**: Option is disabled or grayed out

**Solutions**:

1. **Scroll down** to find acknowledgment checkbox
2. Check "I acknowledge that..."
3. Then you can uncheck "Block all public access"

### Issue: Website endpoint returns 404

**Symptoms**: S3 URL loads but shows 404 error

**Solutions**:

1. **Check static website hosting is enabled**:
   - Bucket → Properties → Static website hosting
   - Should say "Enabled"
   - Should have endpoint URL

2. **Check index document**:
   - Must be set to `index.html`
   - Case-sensitive!

3. **Check files are uploaded**:
   - Bucket → Objects tab
   - `index.html` should be there

4. **Check bucket policy**:
   - Bucket → Permissions → Bucket policy
   - Should allow public read
   - Bucket name in policy must match exactly

### Issue: 403 Forbidden error

**Symptoms**: Can see S3 endpoint but get 403 Access Denied

**Solutions**:

```bash
# Check bucket policy is correct
# Resource must match your bucket:
"Resource": "arn:aws:s3:::YOUR-ACTUAL-BUCKET-NAME/*"

# Common mistakes:
"Resource": "arn:aws:s3:::my-awesome-website-dev"    # ❌ Missing /*
"Resource": "arn:aws:s3:::my-awesome-website-dev/*"  # ✅ Correct
```

### Issue: Lost AWS credentials

**Symptoms**: Can't find Access Key ID or Secret Access Key

**Solutions**:

**You cannot view Secret Access Key again!** Create new keys:

1. **IAM Console** → **Users** → Select user
2. **Security credentials** tab
3. **Create access key**
4. **Save immediately**:
   - Access Key ID
   - Secret Access Key
5. **Delete old key** (after confirming new one works)
6. **Update GitHub secrets** with new credentials

---

## Phase 5: GitHub Workflows

### Issue: Workflow not triggering

**Symptoms**: Pushed to branch but workflow doesn't run

**Solutions**:

1. **Check workflow file location**:
   ```bash
   ls -la .github/workflows/
   # Should show deploy-dev.yml and deploy-prod.yml
   ```

2. **Check branch name**:
   ```yaml
   # In workflow file, must match exactly:
   on:
     push:
       branches:
         - main  # ✅ If your branch is "main"
         - master  # ❌ If your branch is actually "main"
   ```

3. **Check Actions are enabled**:
   - GitHub → Settings → Actions → General
   - Should be "Allow all actions"

4. **Manual trigger**:
   - GitHub → Actions
   - Select workflow
   - "Run workflow" button

### Issue: Workflow fails - "AWS credentials not found"

**Symptoms**: Red X on workflow, error about AWS credentials

**Solutions**:

1. **Verify secrets exist**:
   - Settings → Secrets and variables → Actions
   - Should see 8 secrets
   - Names must match exactly (case-sensitive!)

2. **Common naming mistakes**:
   ```yaml
   # In workflow file:
   ${{ secrets.AWS_ACCESS_KEY_ID_DEV }}  # ✅ Correct
   ${{ secrets.AWS_ACCESS_KEY_ID_dev }}  # ❌ Wrong case
   ${{ secrets.AWS_ACCESS_KEY_ID-DEV }}  # ❌ Hyphen instead of underscore
   ```

3. **Re-create secrets**:
   - Delete and re-add the secret
   - Double-check no extra spaces

### Issue: Workflow fails - "Access Denied" to S3

**Symptoms**: Workflow runs but fails at S3 sync step

**Solutions**:

1. **Check IAM policy**:
   - Must have all permissions: `s3:PutObject`, `s3:GetObject`, `s3:DeleteObject`, `s3:ListBucket`, `s3:PutObjectAcl`

2. **Check bucket name**:
   - In IAM policy: `arn:aws:s3:::my-bucket-dev/*`
   - In workflow: `S3_BUCKET_NAME_DEV = my-bucket-dev`
   - Must match exactly!

3. **Check region**:
   - IAM policy region must match bucket region

---

## Phase 6: Branch Protection

### Issue: Can't push to main (expected)

**Symptoms**: Push rejected with "protected branch" error

**This is working correctly!** Use the proper workflow:

```bash
# Work on develop or feature branch
git checkout develop
# OR
git checkout -b feature/my-feature

# Make changes
git add .
git commit -m "your changes"

# Push to branch (not main!)
git push origin develop

# Then create PR on GitHub to merge to main
```

### Issue: Can't merge PR - "Required status checks"

**Symptoms**: Merge button is disabled, waiting for checks

**Solutions**:

1. **Wait for checks to complete**:
   - Green checkmark = passed
   - Red X = failed
   - Yellow circle = running

2. **Fix failing checks**:
   - Click on failed check
   - Read error message
   - Fix issue in your branch
   - Push fix

3. **Remove required checks** (if you don't have them yet):
   - Settings → Branches → Edit rule
   - Uncheck "Require status checks"
   - Save

---

## Phase 7: First Deployment

### Issue: Changes not showing on website

**Symptoms**: Deployed but old content still shows

**Solutions**:

1. **Hard refresh browser**:
   - Windows: Ctrl + F5
   - Mac: Cmd + Shift + R
   - Or use Incognito/Private mode

2. **Check deployment succeeded**:
   - GitHub → Actions
   - Verify green checkmark
   - Check deployment logs

3. **Check S3**:
   - AWS Console → S3 → Your bucket
   - Check file modified timestamp
   - Should be recent

4. **Wait a bit**:
   - Can take 10-60 seconds
   - Try again in 1 minute

### Issue: DEV deployment not triggering

**Symptoms**: Pushed to develop but workflow doesn't run

**Solutions**:

```bash
# Check branch name
git branch  # Should show * develop

# Check workflow file
cat .github/workflows/deploy-dev.yml
# Should have:
#   branches:
#     - develop

# Manual trigger
# GitHub → Actions → "Deploy to DEV" → "Run workflow"
```

---

## Phase 8: Team Collaboration

### Issue: Team member can't clone repository

**Symptoms**: Permission denied when cloning

**Solutions**:

1. **Check invitation accepted**:
   - Team member must accept email invitation
   - GitHub → Repository → Settings → Collaborators
   - Should show "Active" next to their name

2. **Check permissions**:
   - Must have at least "Read" access
   - "Write" recommended for contributors

3. **Check authentication**:
   - Team member must set up SSH keys or token
   - Test: `ssh -T git@github.com`

### Issue: Merge conflicts

**Symptoms**: Can't merge PR due to conflicts

**Solutions**:

```bash
# On your local machine:

# 1. Pull latest develop
git checkout develop
git pull origin develop

# 2. Merge into your feature branch
git checkout feature/my-feature
git merge develop

# 3. Resolve conflicts
# Open conflicting files
# Look for <<<<<<< HEAD
# Edit to keep correct code
# Remove conflict markers

# 4. Complete merge
git add .
git commit -m "fix: Resolve merge conflicts"
git push origin feature/my-feature

# PR should now be mergeable
```

---

## General Issues

### Issue: "I'm completely stuck and nothing works"

**Step-by-step debugging**:

1. **Identify which phase** you're stuck on
2. **Read that phase guide** again carefully
3. **Check the checklist** - what's not checked?
4. **Try the troubleshooting** for that specific phase
5. **Check error messages** - Google the exact error
6. **Start fresh** if needed:
   - Delete folder
   - Start phase again
   - Follow steps exactly

### Issue: Costs are higher than expected

**Check**:

1. **S3 storage**: Should be < $0.50/month
2. **S3 requests**: Should be minimal
3. **Data transfer**: First 1 GB free
4. **Other services**: Make sure you didn't enable CloudFront, Route53, etc.

**Fix**:
```bash
# Set up billing alert
# AWS → Billing → Budgets → Create budget
# Alert at $5
```

### Issue: Want to start over completely

**Clean slate process**:

```bash
# 1. Local cleanup
rm -rf ~/projects/my-awesome-website
rm -rf ~/.ssh/id_ed25519*  # Only if you want new SSH key

# 2. GitHub cleanup
# Delete repository on GitHub.com

# 3. AWS cleanup
# Delete both S3 buckets
# Delete both IAM users

# 4. Start from Phase 1
# Follow guides step by step
```

---

## Getting More Help

### Where to Look

1. **Phase-specific guides**: Detailed steps for each phase
2. **This troubleshooting guide**: Common issues
3. **Official documentation**:
   - Git: https://git-scm.com/doc
   - GitHub: https://docs.github.com
   - AWS S3: https://docs.aws.amazon.com/s3/
   - Node.js: https://nodejs.org/docs/

### How to Ask for Help

When creating an issue or asking for help, include:

```markdown
## What I'm trying to do
[Describe the step you're on]

## What I expected
[What should happen]

## What actually happened
[What went wrong]

## Error message
```
[Paste complete error message]
```

## What I've tried
- [List troubleshooting steps you've tried]

## My environment
- OS: [Windows 10 / macOS 13 / Ubuntu 22.04]
- Git version: [result of `git --version`]
- Node version: [result of `node --version`]
- Phase: [Which phase are you stuck on]
```

---

## 💡 Pro Tip

**Most issues are caused by**:
1. Typos in commands or file names (check spelling!)
2. Wrong branch (check with `git branch`)
3. Skipped steps (review checklist)
4. Missing configuration (verify credentials/secrets)

**Before asking for help**: 
- Read error message carefully
- Google the exact error
- Check your spelling
- Try one more time, slowly

**You've got this!** 💪

---

[← Back to Index](README.md) | [View Checklist](checklist.md) | [View Pro Tips](pro-tips.md)


# Phase 2: GitHub Setup (20-30 min)

**Goal**: Create GitHub account, set up authentication, and create your repository

---

## 📋 What You'll Do

- Create GitHub account (if you don't have one)
- Set up authentication (SSH keys or Personal Access Token)
- Learn about password managers for secure token storage
- Create your first repository

---

## Step 2.1: Create GitHub Account

If you don't have a GitHub account:

1. Go to: https://github.com/signup
2. Create account with your email
3. Verify email address
4. Choose free plan

---

## Step 2.2: Set Up GitHub Authentication

Now that you have a GitHub account, set up authentication so you can push/pull code.

### Option A: SSH Keys (Recommended)

**Generate SSH Key**:

```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"
# Press Enter for default location
# Enter a passphrase (or leave empty)

# Start ssh-agent and add key
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Copy public key to clipboard
# Windows (Git Bash):
cat ~/.ssh/id_ed25519.pub | clip

# macOS:
pbcopy < ~/.ssh/id_ed25519.pub

# Linux:
cat ~/.ssh/id_ed25519.pub
# (manually copy the output)
```

**Add SSH Key to GitHub**:

1. Go to: https://github.com/settings/keys
2. Click **"New SSH key"**
3. Title: `My Development Machine` (or any descriptive name)
4. Key type: `Authentication Key`
5. Paste your public key
6. Click **"Add SSH key"**

**Test SSH Connection**:

```bash
ssh -T git@github.com
# Should see: "Hi username! You've successfully authenticated..."
```

### Option B: Personal Access Token (HTTPS)

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Note: `Development Access`
4. Expiration: `90 days` (or your preference)
5. Select scopes:
   - ✅ `repo` (full control)
   - ✅ `workflow` (update workflows)
6. Click **"Generate token"**
7. **Copy the token immediately** (you won't see it again!)
8. **Save it securely** (see below)

---

## 💡 Important: How to Save Your Token Securely

Your token looks like: `ghp_xJ4K8mN9pQ2rS5tV7wY0zA3bC6dE9fH1` (40+ random characters)

You'll **only see this token ONCE**. If you lose it, you'll have to create a new one.

### 🔐 Option 1: Password Manager (Recommended)

A **password manager** is a secure app that stores all your passwords and tokens in one encrypted place. You only need to remember ONE master password.

**Free Password Managers**:

- **Bitwarden** (Best for beginners): https://bitwarden.com/
  - Free forever
  - Works on all platforms
  - Cloud sync included
  
- **1Password**: https://1password.com/
  - Very user-friendly
  - Free trial available
  
- **Built-in Options** (Already on your computer):
  - **Windows**: Windows Credential Manager (Control Panel → Credential Manager)
  - **macOS**: Keychain Access (Applications → Utilities → Keychain Access)
  - **Linux**: GNOME Keyring (built-in on Ubuntu)

**Quick Bitwarden Setup (5 minutes)**:

```
1. Go to: https://vault.bitwarden.com/#/register
2. Create free account
3. Install browser extension (Chrome/Firefox/Edge)
4. Click Bitwarden icon → "+" → Add item
5. Name: "GitHub Personal Access Token"
   Username: your-github-username
   Password: [paste your token]
6. Save
7. Done! You can now access it anytime
```

### 🔐 Option 2: Secure File on Computer

If you don't want a password manager:

```bash
# Create a secure file
echo "GitHub Token: ghp_your_token_here" > ~/.github-token.txt
echo "Date: $(date)" >> ~/.github-token.txt
echo "Expires: 90 days from today" >> ~/.github-token.txt

# Make it readable only by you
chmod 600 ~/.github-token.txt

# IMPORTANT: Never commit this file to Git!
echo ".github-token.txt" >> ~/.gitignore
```

### 🔐 Option 3: Write on Paper

Simple and secure:

```
Write on paper and keep safe:
┌──────────────────────────────────┐
│ GitHub Personal Access Token     │
│ Created: Nov 16, 2025            │
│ Username: yourusername           │
│ Token: ghp_xJ4K8mN9pQ2rS5t...    │
│ Expires: Feb 16, 2026            │
└──────────────────────────────────┘
```

### ⚠️ Security Rules

- ❌ **Never** commit tokens to Git
- ❌ **Never** share tokens with anyone
- ❌ **Never** post tokens in Slack/Discord/email
- ✅ Store securely (password manager, encrypted file, or paper)
- ✅ Regenerate if you think it's compromised

---

## Step 2.3: Create New Repository

1. Go to: https://github.com/new

2. Configure repository:
   ```
   Repository name: my-awesome-website
   Description: My amazing website project
   Visibility: Private (or Public)
   
   ❌ Do NOT initialize with README
   ❌ Do NOT add .gitignore
   ❌ Do NOT add license (yet)
   ```

3. Click **"Create repository"**

4. **Copy the repository URL** (you'll need this in Phase 3!)
   - SSH: `git@github.com:yourusername/my-awesome-website.git`
   - HTTPS: `https://github.com/yourusername/my-awesome-website.git`

---

## ✅ Phase 2 Verification

- [ ] GitHub account created and verified
- [ ] GitHub authentication set up (SSH keys or Personal Access Token)
- [ ] Authentication tested successfully (`ssh -T git@github.com` or token saved)
- [ ] Repository created on GitHub
- [ ] Repository URL copied

**All checked?** ✅ Ready for Phase 3!

---

## 🐛 Troubleshooting

### Issue: SSH connection fails

**Solution**:
```bash
# Check if SSH key was added
ssh-add -l

# If empty, add it again
ssh-add ~/.ssh/id_ed25519

# Test connection with verbose output
ssh -vT git@github.com
```

### Issue: Lost my Personal Access Token

**Solution**: You can't recover it. Generate a new one:
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token"
3. Set same permissions as before
4. Save the new token securely!

---

## 📚 Need More Help?

- **SSH Keys**: [GitHub SSH Documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
- **Personal Access Tokens**: [GitHub Token Documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- **Password Managers**: [Bitwarden Getting Started](https://bitwarden.com/help/getting-started-webvault/)

---

## ➡️ Next Step

**Phase 2 Complete!** 🎉

Continue to: **[Phase 3: Project Creation](03-project-creation.md)** (30-45 min)

---

[← Back to Index](README.md) | [← Previous: Phase 1](01-machine-setup.md) | [Next: Phase 3 →](03-project-creation.md)


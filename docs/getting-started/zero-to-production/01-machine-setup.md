# Phase 1: Machine Setup (30-45 min)

**Goal**: Install and configure all the tools you need for development

---

## 📋 What You'll Do

- Install Git, Node.js, and VS Code
- Configure Git with your identity
- Install essential VS Code extensions
- Verify everything works

---

## Step 1.1: Install Core Tools

📖 **Full Guide**: [Complete Machine Setup Guide](../MACHINE_SETUP.md)

**Quick Installation Checklist**:

```bash
# Windows
□ Download and install Git for Windows
□ Download and install Node.js LTS
□ Download and install VS Code
□ Download and install AWS CLI (optional for now)

# macOS
□ Install Homebrew
□ brew install git node
□ brew install --cask visual-studio-code
□ brew install awscli (optional for now)

# Linux (Ubuntu/Debian)
□ sudo apt update
□ sudo apt install git nodejs npm -y
□ sudo snap install code --classic
□ (AWS CLI optional for now)
```

**Download Links**:
- **Git**: https://git-scm.com/downloads
- **Node.js**: https://nodejs.org/ (choose LTS version)
- **VS Code**: https://code.visualstudio.com/

---

## Step 1.2: Configure Git

Set up your Git identity (required for commits):

```bash
# Set your identity
git config --global user.name "Your Full Name"
git config --global user.email "your.email@example.com"

# Set defaults
git config --global init.defaultBranch main
git config --global color.ui auto

# Verify configuration
git config --list --global
```

---

## Step 1.3: Install VS Code Extensions

Install these essential extensions for web development:

```bash
# Essential extensions
code --install-extension ritwickdey.liveserver
code --install-extension esbenp.prettier-vscode
code --install-extension ecmel.vscode-html-css
code --install-extension eamodio.gitlens
```

**What these do**:
- **Live Server**: Auto-reload browser when files change
- **Prettier**: Automatic code formatting
- **HTML CSS Support**: IntelliSense for HTML/CSS
- **GitLens**: Enhanced Git integration

---

## ✅ Phase 1 Verification

Run these commands to verify everything is installed:

```bash
# Check Git
git --version
# Expected: git version 2.30.0 or higher

# Check Node.js
node --version
# Expected: v16.0.0 or higher

# Check npm
npm --version
# Expected: 7.0.0 or higher

# Check VS Code
code --version
# Expected: Version number appears
```

**All commands work?** ✅ You're ready for Phase 2!

---

## 🐛 Troubleshooting

### Issue: `command not found`

**Solution**: Tool not installed or not in PATH
- Reinstall the tool
- Restart your terminal
- Check installation guide for your OS

### Issue: Git config not saving

**Solution**: Run commands without `--global` to test:
```bash
git config user.name "Test Name"
git config user.name  # Should echo back "Test Name"
```

---

## 📚 Need More Help?

- **Detailed Setup**: [Complete Machine Setup Guide](../MACHINE_SETUP.md)
- **Troubleshooting**: [Full Troubleshooting Guide](troubleshooting.md)

---

## ➡️ Next Step

**Phase 1 Complete!** 🎉

Continue to: **[Phase 2: GitHub Setup](02-github-setup.md)** (20-30 min)

---

[← Back to Index](README.md) | [Next: Phase 2 →](02-github-setup.md)


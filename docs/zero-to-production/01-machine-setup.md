# Phase 1: Machine Setup (45-60 min)

**Goal**: Install and configure all the tools you need for development

---

## 📋 What You'll Install

| Tool | Purpose | Required? | Time |
|------|---------|-----------|------|
| **Git** | Version control | ✅ Required | 5-10 min |
| **Node.js & npm** | Dev tools, local server | ✅ Required | 5-10 min |
| **VS Code** | Code editor | ⭐ Recommended | 10-15 min |
| **Git Config** | Your identity | ✅ Required | 2 min |
| **VS Code Extensions** | Enhanced development | ⭐ Recommended | 5 min |

---

## Quick Start (Choose Your Platform)

**Windows**: [Jump to Windows Setup](#windows-setup)  
**macOS**: [Jump to macOS Setup](#macos-setup)  
**Linux**: [Jump to Linux Setup](#linux-setup)

---

## Step 1.1: Install Git

Git is essential for version control and collaborating via GitHub.

### Windows Setup

**Option A: Git for Windows (Recommended)**

1. Download from: https://git-scm.com/download/win
2. Run installer with these settings:
   ```
   ✅ Use Visual Studio Code as Git's default editor
   ✅ Git from command line and 3rd-party software
   ✅ Use bundled OpenSSH
   ✅ Checkout Windows-style, commit Unix-style line endings
   ✅ Use Windows' default console window
   ✅ Enable file system caching
   ✅ Enable Git Credential Manager
   ```
3. Complete installation

**Option B: Via Winget (Windows 11)**

```powershell
winget install --id Git.Git -e --source winget
```

**Verify**:
```powershell
git --version
# Expected: git version 2.40.0 or higher
```

**💡 Tip**: Use **Git Bash** for Unix-like commands (included with Git for Windows)

### macOS Setup

**Option A: Via Homebrew (Recommended)**

```bash
# Install Homebrew if not installed
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Git
brew install git
```

**Option B: Via Xcode Command Line Tools**

```bash
xcode-select --install
```

**Verify**:
```bash
git --version
# Expected: git version 2.40.0 or higher
```

### Linux Setup

**Ubuntu/Debian**:
```bash
sudo apt update
sudo apt install git -y
git --version
```

**Fedora/CentOS/RHEL**:
```bash
sudo dnf install git -y
# or
sudo yum install git -y
git --version
```

---

## Step 1.2: Configure Git Identity

Set up your Git identity (required for commits):

```bash
# Set your name (appears in commits)
git config --global user.name "Your Full Name"

# Set your email (use your GitHub email)
git config --global user.email "your.email@example.com"

# Set default branch name
git config --global init.defaultBranch main

# Enable colored output
git config --global color.ui auto

# Verify configuration
git config --list --global
```

**Expected output**:
```
user.name=Your Full Name
user.email=your.email@example.com
init.defaultbranch=main
color.ui=auto
```

---

## Step 1.3: Install Node.js & npm

Node.js is required for development tools, local server, and package management.

### Windows

**Option A: Official Installer (Recommended)**

1. Download from: https://nodejs.org/
2. Choose **LTS version** (e.g., 20.x.x)
3. Run installer:
   - ✅ Accept license
   - ✅ Include npm package manager
   - ✅ Add to PATH
4. Complete installation

**Option B: Via Winget**

```powershell
winget install OpenJS.NodeJS.LTS
```

**Verify**:
```powershell
node --version
# Expected: v18.0.0 or higher

npm --version
# Expected: 9.0.0 or higher
```

### macOS

```bash
# Via Homebrew (includes npm)
brew install node

# Verify
node --version
npm --version
```

### Linux

**Option A: Via NodeSource Repository (Recommended)**

```bash
# Ubuntu/Debian - Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify
node --version
npm --version
```

**Option B: Via Package Manager**

```bash
# Ubuntu/Debian
sudo apt install nodejs npm -y

# Fedora/CentOS
sudo dnf install nodejs npm -y
```

---

## Step 1.4: Install VS Code

Visual Studio Code is the recommended editor for this project.

### Windows

**Option A: Official Installer**

1. Download from: https://code.visualstudio.com/
2. Run installer
3. During installation:
   - ✅ Add "Open with Code" to context menu
   - ✅ Add to PATH
   - ✅ Register as editor for supported files

**Option B: Via Winget**

```powershell
winget install Microsoft.VisualStudioCode
```

### macOS

```bash
# Via Homebrew
brew install --cask visual-studio-code
```

Or download from: https://code.visualstudio.com/

### Linux

```bash
# Ubuntu/Debian - via Snap
sudo snap install code --classic

# Or via apt
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg
sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'
sudo apt update
sudo apt install code
```

**Verify**:
```bash
code --version
# Should show version number
```

---

## Step 1.5: Install VS Code Extensions

Install essential extensions for web development:

### Required Extensions

```bash
# Install via command line
code --install-extension ritwickdey.liveserver
code --install-extension esbenp.prettier-vscode
code --install-extension ecmel.vscode-html-css
code --install-extension eamodio.gitlens
```

**Or install manually**:
1. Open VS Code
2. Press `Ctrl+Shift+X` (or `Cmd+Shift+X` on Mac)
3. Search for each extension:
   - **Live Server** (`ritwickdey.liveserver`)
   - **Prettier** (`esbenp.prettier-vscode`)
   - **HTML CSS Support** (`ecmel.vscode-html-css`)
   - **GitLens** (`eamodio.gitlens`)

### What These Do

- **Live Server**: Auto-reload browser when files change
- **Prettier**: Automatic code formatting
- **HTML CSS Support**: IntelliSense for HTML/CSS
- **GitLens**: Enhanced Git integration with blame annotations

### Recommended Extensions (Optional)

```bash
code --install-extension christian-kohler.path-intellisense
code --install-extension formulahendry.auto-rename-tag
code --install-extension bradgashler.htmltagwrap
code --install-extension pranaygp.vscode-css-peek
```

---

## Step 1.6: Configure VS Code (Optional)

For the best experience, configure VS Code settings:

**Option 1: Global Settings** (applies to all projects)

1. Open VS Code
2. Press `Ctrl+,` (or `Cmd+,` on Mac)
3. Search for these settings and enable:
   - "Format On Save" → ✅ Enable
   - "Default Formatter" → Select "Prettier"
   - "Tab Size" → Set to `2`
   - "Word Wrap" → Set to `on`

**Option 2: Project Settings** (recommended for team consistency)

You'll create `.vscode/settings.json` later when setting up your project.

---

## ✅ Phase 1 Verification

Run these commands to verify everything is installed correctly:

### Core Tools Check

```bash
# Git
git --version
# ✅ Expected: git version 2.30.0 or higher

# Node.js
node --version
# ✅ Expected: v16.0.0 or higher (v18+ recommended)

# npm
npm --version
# ✅ Expected: 7.0.0 or higher (9+ recommended)

# VS Code
code --version
# ✅ Expected: Version number displays
```

### Git Configuration Check

```bash
git config --list --global
# ✅ Should show:
#    user.name=Your Name
#    user.email=your@email.com
#    init.defaultbranch=main
```

### VS Code Extensions Check

```bash
code --list-extensions
# ✅ Should include:
#    ritwickdey.liveserver
#    esbenp.prettier-vscode
#    ecmel.vscode-html-css
#    eamodio.gitlens
```

**All checks passed?** ✅ You're ready for Phase 2!

---

## 🐛 Troubleshooting

### Issue: `command not found` after installation

**Symptoms**: Commands like `git`, `node`, or `code` don't work

**Solutions**:

1. **Restart terminal** (most common fix!)
   ```bash
   # Close and reopen your terminal
   # Or open a new terminal window
   ```

2. **Restart computer** (if terminal restart doesn't work)

3. **Check PATH** (Windows):
   - Search "Environment Variables"
   - Check if Git/Node/VS Code are in System PATH
   - Add if missing

4. **Reinstall with correct options**:
   - Windows: Check "Add to PATH" during installation
   - Mac: Use Homebrew (handles PATH automatically)
   - Linux: Use package manager

### Issue: Git config not saving

**Symptoms**: `git config --list` shows empty or wrong values

**Solutions**:

```bash
# Test without --global first
git config user.name "Test Name"
git config user.name  # Should echo back "Test Name"

# If that works, try --global again
git config --global user.name "Your Name"

# Verify location
git config --list --show-origin

# Check if file exists
ls ~/.gitconfig  # Should exist

# If doesn't exist, create it
touch ~/.gitconfig
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### Issue: npm `EACCES: permission denied` (Mac/Linux)

**Symptoms**: Permission errors when installing global npm packages

**Solution - Fix npm permissions**:

```bash
# Create global directory for npm
mkdir ~/.npm-global

# Configure npm to use new directory
npm config set prefix '~/.npm-global'

# Add to PATH
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

# Now you can install global packages without sudo
npm install -g live-server
```

### Issue: VS Code `code` command not found

**Symptoms**: `code --version` doesn't work

**Solutions**:

**macOS**:
```bash
# Open VS Code
# Press Cmd+Shift+P
# Type: "Shell Command: Install 'code' command in PATH"
# Press Enter
```

**Linux**:
```bash
# Add to PATH manually
echo 'export PATH="$PATH:/usr/share/code/bin"' >> ~/.bashrc
source ~/.bashrc
```

**Windows**:
- Reinstall VS Code
- ✅ Make sure to check "Add to PATH" during installation

### Issue: VS Code extensions not working

**Symptoms**: Extensions installed but features don't work

**Solutions**:

1. **Reload VS Code**:
   - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
   - Type "Reload Window"
   - Press Enter

2. **Check extension is enabled**:
   - Extensions panel (`Ctrl+Shift+X`)
   - Make sure extension shows "Enabled"

3. **Reinstall extension**:
   - Uninstall extension
   - Restart VS Code
   - Reinstall extension

### Issue: Node.js installation fails

**Symptoms**: Installer fails or Node commands don't work

**Solutions**:

**Windows**:
```powershell
# Try Winget
winget install OpenJS.NodeJS.LTS

# Or download MSI installer directly
# https://nodejs.org/
```

**macOS**:
```bash
# Use Homebrew
brew install node

# If Homebrew not installed:
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**Linux**:
```bash
# Clear any partial installation
sudo apt remove nodejs npm
sudo apt autoremove

# Install via NodeSource
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify
node --version
npm --version
```

---

## 💡 Platform-Specific Tips

### Windows Tips

**Use Git Bash**:
- Included with Git for Windows
- Provides Unix-like commands
- Better compatibility with documentation examples

**PowerShell vs Git Bash**:
```powershell
# PowerShell uses different commands
Get-ChildItem  # Instead of: ls
Set-Location   # Instead of: cd

# Git Bash uses Unix commands (recommended)
ls
cd
```

**Windows Defender Exclusions** (for better performance):
1. Settings → Update & Security → Windows Security
2. Virus & threat protection → Manage settings
3. Exclusions → Add folder → Select project folder

### macOS Tips

**Homebrew is Essential**:
- Package manager for macOS
- Makes installations much easier
- Install: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

**Xcode Command Line Tools**:
- Required for compiling some Node modules
- Install: `xcode-select --install`

### Linux Tips

**File Permissions**:
```bash
# Make scripts executable
chmod +x script.sh

# Fix npm permissions (no sudo needed)
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

---

## 📚 Additional Resources

### Learning Resources

- **Git Tutorial**: https://git-scm.com/doc
- **Node.js Tutorial**: https://nodejs.dev/learn
- **VS Code Tips**: https://code.visualstudio.com/docs

### Quick Reference

- **Git Cheat Sheet**: https://education.github.com/git-cheat-sheet-education.pdf
- **VS Code Shortcuts**: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf

---

## ➡️ Next Step

**Phase 1 Complete!** 🎉

You now have all the core tools installed and configured!

**Continue to**: [Phase 2: GitHub Setup](02-github-setup.md) (20-30 min)

In Phase 2, you'll:
- Create GitHub account (if needed)
- Set up authentication (SSH keys or Personal Access Token)
- Create your repository

---

## 🆘 Still Stuck?

- **General Troubleshooting**: [Full Troubleshooting Guide](troubleshooting.md)
- **GitHub Issues**: Create an issue with your error message
- **Team Chat**: Ask your team for help

---

[← Back to Index](README.md) | [Next: Phase 2 →](02-github-setup.md)

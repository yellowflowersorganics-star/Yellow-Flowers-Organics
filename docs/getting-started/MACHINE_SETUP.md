# 💻 Machine Setup Guide

Complete guide to set up your development machine for working on the Yellow Flowers Organic Farm website project.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Core Requirements](#core-requirements)
- [Step-by-Step Setup](#step-by-step-setup)
  - [1. Git Installation](#1-git-installation)
  - [2. GitHub Authentication](#2-github-authentication)
  - [3. Node.js & npm](#3-nodejs--npm)
  - [4. Code Editor (VS Code)](#4-code-editor-vs-code)
  - [5. AWS CLI (Optional)](#5-aws-cli-optional)
  - [6. Project Setup](#6-project-setup)
- [Platform-Specific Guides](#platform-specific-guides)
- [Optional Tools](#optional-tools)
- [Verification Checklist](#verification-checklist)
- [Troubleshooting](#troubleshooting)

---

## 🎯 Overview

### What You'll Install

| Tool | Purpose | Required? |
|------|---------|-----------|
| **Git** | Version control | ✅ Required |
| **GitHub Account** | Collaboration | ✅ Required |
| **Node.js & npm** | Dev tools, local server | ✅ Required |
| **VS Code** | Code editor | ⭐ Recommended |
| **AWS CLI** | Manual deployments, testing | 🔧 Optional |
| **Browser DevTools** | Testing & debugging | ✅ Required (built-in) |

### Estimated Setup Time

- **Windows**: 45-60 minutes
- **macOS**: 30-45 minutes
- **Linux**: 30-45 minutes

---

## 📦 Core Requirements

### System Requirements

**Minimum**:
- OS: Windows 10, macOS 10.13+, or Linux (Ubuntu 18.04+)
- RAM: 4GB
- Disk Space: 2GB free
- Internet: Stable connection

**Recommended**:
- RAM: 8GB or more
- SSD storage
- Monitor: 1920x1080 or higher

---

## 🚀 Step-by-Step Setup

### 1. Git Installation

Git is essential for version control and collaborating via GitHub.

#### Windows

**Option A: Git for Windows (Recommended)**

1. Download from: https://git-scm.com/download/win
2. Run installer:
   ```
   ✅ Select "Use Visual Studio Code as Git's default editor"
   ✅ Select "Git from the command line and also from 3rd-party software"
   ✅ Select "Use bundled OpenSSH"
   ✅ Select "Checkout Windows-style, commit Unix-style line endings"
   ✅ Select "Use Windows' default console window"
   ✅ Enable "Enable file system caching"
   ✅ Enable "Enable Git Credential Manager"
   ```
3. Complete installation

**Option B: Via Winget (Windows 11)**

```powershell
winget install --id Git.Git -e --source winget
```

**Verify Installation**:
```powershell
git --version
# Expected output: git version 2.40.0 or higher
```

#### macOS

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

**Verify Installation**:
```bash
git --version
# Expected output: git version 2.40.0 or higher
```

#### Linux (Ubuntu/Debian)

```bash
# Update package list
sudo apt update

# Install Git
sudo apt install git -y

# Verify
git --version
```

#### Linux (Fedora/CentOS/RHEL)

```bash
sudo dnf install git -y
# or
sudo yum install git -y
```

---

### 2. GitHub Authentication

You need to authenticate your local machine with GitHub to push/pull code.

#### Configure Git Identity

```bash
# Set your name (will appear in commits)
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

#### Option A: SSH Keys (Recommended for Security)

**Step 1: Generate SSH Key**

```bash
# Generate new SSH key (use your GitHub email)
ssh-keygen -t ed25519 -C "your.email@example.com"

# When prompted:
# - File location: Press Enter (use default: ~/.ssh/id_ed25519)
# - Passphrase: Enter a secure passphrase (or leave empty)
```

**Step 2: Start SSH Agent**

**Windows (Git Bash)**:
```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

**macOS**:
```bash
eval "$(ssh-agent -s)"
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

**Linux**:
```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

**Step 3: Add SSH Key to GitHub**

```bash
# Copy your public key to clipboard

# Windows (Git Bash):
cat ~/.ssh/id_ed25519.pub | clip

# macOS:
pbcopy < ~/.ssh/id_ed25519.pub

# Linux:
cat ~/.ssh/id_ed25519.pub
# (manually copy the output)
```

Then:
1. Go to GitHub: https://github.com/settings/keys
2. Click **"New SSH key"**
3. Title: `My Laptop` (or descriptive name)
4. Key type: `Authentication Key`
5. Paste your key in the "Key" field
6. Click **"Add SSH key"**

**Step 4: Test SSH Connection**

```bash
ssh -T git@github.com
# Expected output: "Hi username! You've successfully authenticated..."
```

#### Option B: Personal Access Token (HTTPS)

**Step 1: Generate Token**

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Note: `Yellow Flowers Development`
4. Expiration: `90 days` (or longer)
5. Select scopes:
   - ✅ `repo` (full control of private repositories)
   - ✅ `workflow` (update GitHub Actions workflows)
6. Click **"Generate token"**
7. **Copy the token immediately** (you won't see it again!)

**Step 2: Configure Git to Use Token**

```bash
# Clone with HTTPS (will prompt for credentials)
git clone https://github.com/yellowflowersorganics-star/Yellow-Flowers-Organics.git

# When prompted:
# Username: your-github-username
# Password: paste-your-personal-access-token
```

**Step 3: Store Credentials (Optional)**

```bash
# Store credentials permanently (encrypted on macOS/Linux)
git config --global credential.helper store

# On Windows, use Git Credential Manager (included with Git for Windows)
git config --global credential.helper manager
```

---

### 3. Node.js & npm

Node.js is required for development tools, local server, and linting.

#### Windows

**Option A: Official Installer (Recommended)**

1. Download from: https://nodejs.org/
2. Choose **LTS version** (e.g., 20.x.x)
3. Run installer:
   - ✅ Accept license
   - ✅ Include npm package manager
   - ✅ Add to PATH
   - ✅ Install Tools for Native Modules (optional)
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

#### macOS

**Via Homebrew (Recommended)**

```bash
# Install Node.js (includes npm)
brew install node

# Verify
node --version
npm --version
```

#### Linux

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

#### Install Global Development Tools

```bash
# Install useful global tools
npm install -g http-server       # Simple HTTP server
npm install -g live-server        # Auto-reload server
npm install -g prettier           # Code formatter
npm install -g eslint             # JavaScript linter

# Verify installations
http-server --version
live-server --version
prettier --version
eslint --version
```

---

### 4. Code Editor (VS Code)

Visual Studio Code is the recommended editor for this project.

#### Windows

**Option A: Official Installer**

1. Download from: https://code.visualstudio.com/
2. Run installer
3. During installation:
   - ✅ Add "Open with Code" to context menu
   - ✅ Add to PATH
   - ✅ Register Code as editor for supported file types

**Option B: Via Winget**

```powershell
winget install Microsoft.VisualStudioCode
```

#### macOS

```bash
# Via Homebrew
brew install --cask visual-studio-code
```

Or download from: https://code.visualstudio.com/

#### Linux

```bash
# Ubuntu/Debian
sudo snap install code --classic

# Or via apt
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg
sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'
sudo apt update
sudo apt install code
```

#### Essential VS Code Extensions

Install these extensions for the best development experience:

```bash
# Open VS Code
code .

# Install extensions via command palette (Ctrl+P / Cmd+P)
```

**Required Extensions**:
- **Live Server** (`ritwickdey.liveserver`) - Auto-reload on file changes
- **Prettier** (`esbenp.prettier-vscode`) - Code formatter
- **HTML CSS Support** (`ecmel.vscode-html-css`) - IntelliSense

**Recommended Extensions**:
- **GitLens** (`eamodio.gitlens`) - Supercharged Git
- **Path Intellisense** (`christian-kohler.path-intellisense`) - Autocomplete paths
- **Auto Rename Tag** (`formulahendry.auto-rename-tag`) - Rename paired HTML tags
- **Bracket Pair Colorizer** (`coenraads.bracket-pair-colorizer-2`) - Color matching brackets
- **HTML Tag Wrap** (`bradgashler.htmltagwrap`) - Wrap selection with HTML tag
- **CSS Peek** (`pranaygp.vscode-css-peek`) - Peek CSS definitions

**Install via Command Line**:

```bash
# Required
code --install-extension ritwickdey.liveserver
code --install-extension esbenp.prettier-vscode
code --install-extension ecmel.vscode-html-css

# Recommended
code --install-extension eamodio.gitlens
code --install-extension christian-kohler.path-intellisense
code --install-extension formulahendry.auto-rename-tag
code --install-extension bradgashler.htmltagwrap
code --install-extension pranaygp.vscode-css-peek
```

#### Configure VS Code Settings

Create `.vscode/settings.json` in your project:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "files.autoSave": "onFocusChange",
  "liveServer.settings.port": 8000,
  "prettier.singleQuote": true,
  "prettier.trailingComma": "es5"
}
```

---

### 5. AWS CLI (Optional)

AWS CLI is useful for manual deployments and testing, but **not required** for daily development.

#### When You Need AWS CLI:

- ✅ Manual deployments to S3
- ✅ Testing CloudFront invalidations
- ✅ Debugging deployment issues
- ✅ One-time infrastructure setup
- ❌ Not needed for regular feature development

#### Windows

**Option A: MSI Installer (Recommended)**

1. Download from: https://awscli.amazonaws.com/AWSCLIV2.msi
2. Run installer
3. Follow installation wizard

**Option B: Via Command Line**

```powershell
msiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi
```

**Verify**:
```powershell
aws --version
# Expected: aws-cli/2.x.x or higher
```

#### macOS

```bash
# Via Homebrew
brew install awscli

# Or via official installer
curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
sudo installer -pkg AWSCLIV2.pkg -target /

# Verify
aws --version
```

#### Linux

```bash
# Download and install
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# Verify
aws --version
```

#### Configure AWS CLI

**Only needed if you're deploying manually or setting up infrastructure:**

```bash
# Configure AWS credentials
aws configure

# You'll be prompted for:
AWS Access Key ID: [Your IAM access key]
AWS Secret Access Key: [Your IAM secret key]
Default region name: ap-south-1
Default output format: json

# Verify configuration
aws sts get-caller-identity
# Should show your AWS account details
```

**Security Note**: Never commit AWS credentials to Git! They're stored in `~/.aws/credentials`.

---

### 6. Project Setup

Now that all tools are installed, set up the project locally.

#### Clone the Repository

```bash
# Create a projects directory (optional)
mkdir ~/projects
cd ~/projects

# Clone via SSH (if you set up SSH keys)
git clone git@github.com:yellowflowersorganics-star/Yellow-Flowers-Organics.git

# OR Clone via HTTPS (if using personal access token)
git clone https://github.com/yellowflowersorganics-star/Yellow-Flowers-Organics.git

# Navigate to project
cd Yellow-Flowers-Organics
```

#### Install Project Dependencies

```bash
# Install npm dependencies
npm install

# This installs dev tools defined in package.json
```

#### Run Local Development Server

```bash
# Option 1: Using npm script (if configured)
npm start
# Visit: http://localhost:8000

# Option 2: Using http-server
http-server -p 8000

# Option 3: Using live-server (auto-reload)
live-server --port=8000

# Option 4: Using Python (no install needed)
python -m http.server 8000

# Option 5: Using VS Code Live Server
# Right-click index.html → "Open with Live Server"
```

#### Verify Everything Works

```bash
# 1. Check Git
git status
# Should show: "On branch main" or "On branch develop"

# 2. Check Node tools work
npm run lint
# Should run linting (or show "script not found" if not configured)

# 3. Open in browser
# Navigate to http://localhost:8000
# Website should load correctly
```

---

## 🖥️ Platform-Specific Guides

### Windows-Specific Tips

#### Use Git Bash for Unix Commands
- Git for Windows includes Git Bash
- Many documentation examples use Unix commands
- Git Bash provides a Unix-like terminal on Windows

#### PowerShell vs Git Bash
```powershell
# PowerShell uses different command syntax
Get-ChildItem  # Instead of: ls
Set-Location   # Instead of: cd

# Git Bash uses Unix commands (recommended for this project)
ls
cd
```

#### Windows Defender Exclusions
Add project folder to Windows Defender exclusions for better performance:
1. Settings → Update & Security → Windows Security
2. Virus & threat protection → Manage settings
3. Exclusions → Add folder → Select project folder

### macOS-Specific Tips

#### Xcode Command Line Tools
- Required for compiling some Node.js modules
- Install: `xcode-select --install`

#### Homebrew
- Essential package manager for macOS
- Install: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

#### Safari Testing
- Enable Developer menu: Safari → Preferences → Advanced → Show Develop menu
- Responsive Design Mode: Cmd + Opt + R

### Linux-Specific Tips

#### File Permissions
```bash
# Make scripts executable
chmod +x script.sh

# Fix npm permissions (if needed)
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

#### Browser Choice
- Chrome/Chromium for development
- Install: `sudo snap install chromium`

---

## 🛠️ Optional Tools

### Browser Extensions

**For Testing & Debugging**:
- **React Developer Tools** (if using React in future)
- **Lighthouse** (built into Chrome DevTools - performance testing)
- **WAVE** (accessibility testing)
- **ColorZilla** (color picker)
- **JSON Viewer** (format JSON responses)

### Terminal Enhancements

**Windows**:
- **Windows Terminal** (modern terminal) - `winget install Microsoft.WindowsTerminal`
- **Oh My Posh** (beautiful prompts) - https://ohmyposh.dev/

**macOS**:
- **iTerm2** (better than default Terminal) - `brew install --cask iterm2`
- **Oh My Zsh** (Zsh configuration) - https://ohmyz.sh/

**Linux**:
- **Zsh** + **Oh My Zsh** - `sudo apt install zsh`
- **Tilix** (terminal emulator) - `sudo apt install tilix`

### Git GUI Clients (Optional)

If you prefer visual Git interfaces:
- **GitHub Desktop** - https://desktop.github.com/
- **GitKraken** - https://www.gitkraken.com/
- **Sourcetree** - https://www.sourcetreeapp.com/

### Design & Image Tools

- **Figma** (design collaboration) - https://figma.com
- **GIMP** (image editing) - https://www.gimp.org/
- **TinyPNG** (image compression) - https://tinypng.com/

---

## ✅ Verification Checklist

Complete this checklist to ensure everything is set up correctly:

### Core Tools

```bash
# Git
□ git --version  # Shows version 2.30+
□ git config --list --global  # Shows your name and email
□ ssh -T git@github.com  # OR HTTPS authentication works

# Node.js & npm
□ node --version  # Shows v16.0.0+
□ npm --version  # Shows 7.0.0+
□ http-server --version  # Shows installed version

# Code Editor
□ code --version  # VS Code opens
□ Extensions installed  # Live Server, Prettier, etc.

# Project
□ git status  # Shows branch info
□ npm install  # Completes without errors
□ Local server runs  # Website loads at localhost:8000
```

### Optional Tools

```bash
# AWS CLI (if needed)
□ aws --version  # Shows version 2.x+
□ aws configure  # Credentials configured
□ aws s3 ls  # Lists S3 buckets (if you have access)
```

### GitHub Access

```bash
# Test repository access
□ git clone [repo-url]  # Clones successfully
□ git push origin test-branch  # Can push (create test branch first)
□ git pull origin develop  # Can pull latest changes
```

### Development Workflow

```bash
# Create test branch
□ git checkout -b test/setup-verification
□ Make small change to README.md
□ git add README.md
□ git commit -m "test: Verify machine setup"
□ git push origin test/setup-verification
□ Create PR on GitHub successfully
□ Delete test branch after verification
```

---

## 🐛 Troubleshooting

### Git Issues

#### Issue: `git: command not found`

**Solution**:
```bash
# Verify installation
which git  # macOS/Linux
where git  # Windows

# If not found, reinstall Git
# Follow installation steps for your platform
```

#### Issue: `Permission denied (publickey)`

**Solution**:
```bash
# Check if SSH key exists
ls -la ~/.ssh

# If no id_ed25519 or id_rsa, generate new key
ssh-keygen -t ed25519 -C "your.email@example.com"

# Add to ssh-agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Add to GitHub (copy public key)
cat ~/.ssh/id_ed25519.pub
# Paste at: https://github.com/settings/keys
```

#### Issue: `fatal: not a git repository`

**Solution**:
```bash
# Make sure you're in the project directory
cd ~/projects/Yellow-Flowers-Organics

# Verify .git folder exists
ls -la | grep .git

# If missing, re-clone the repository
```

### Node.js/npm Issues

#### Issue: `npm: command not found`

**Solution**:
```bash
# Verify Node.js installation
node --version

# If Node is installed but npm is missing
# Reinstall Node.js (includes npm)

# Or install npm separately
# macOS: brew install node
# Linux: sudo apt install npm
```

#### Issue: `EACCES: permission denied` (Linux/macOS)

**Solution**:
```bash
# Option 1: Change npm default directory
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

# Option 2: Use nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install --lts
```

#### Issue: `npm install` fails with errors

**Solution**:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install

# If still fails, check Node version
node --version
# Should be 16.0.0 or higher
```

### VS Code Issues

#### Issue: VS Code `code` command not found

**Solution**:

**macOS**:
```bash
# Open VS Code
# Press Cmd+Shift+P
# Type: "Shell Command: Install 'code' command in PATH"
```

**Linux**:
```bash
# Add to PATH manually
echo 'export PATH="$PATH:/usr/share/code/bin"' >> ~/.bashrc
source ~/.bashrc
```

**Windows**:
- Reinstall VS Code
- ✅ Check "Add to PATH" during installation

#### Issue: Extensions not installing

**Solution**:
```bash
# Check VS Code version
code --version

# Update VS Code to latest version

# Install extension manually
# VS Code → Extensions (Ctrl+Shift+X)
# Search for extension name
# Click Install
```

### AWS CLI Issues

#### Issue: `aws: command not found`

**Solution**:
```bash
# Windows - Check PATH
echo $env:PATH

# macOS/Linux - Check PATH
echo $PATH

# Add AWS CLI to PATH
# Windows: Edit Environment Variables → System Properties
# macOS/Linux: Add to ~/.bashrc or ~/.zshrc
export PATH=$PATH:/usr/local/bin
```

#### Issue: `Unable to locate credentials`

**Solution**:
```bash
# Configure AWS CLI
aws configure

# Verify credentials file exists
# Windows: %USERPROFILE%\.aws\credentials
# macOS/Linux: ~/.aws/credentials

# Check credentials
cat ~/.aws/credentials
```

### Local Server Issues

#### Issue: Port already in use

**Solution**:
```bash
# Find process using port 8000
# Windows
netstat -ano | findstr :8000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :8000
kill -9 <PID>

# Or use different port
http-server -p 8001
```

#### Issue: Website not loading correctly

**Solution**:
```bash
# Clear browser cache
# Chrome: Ctrl+Shift+Delete (Cmd+Shift+Delete on macOS)

# Hard refresh
# Chrome: Ctrl+Shift+R (Cmd+Shift+R on macOS)

# Check server is running
# Should see: "Available on: http://localhost:8000"

# Verify you're in project root
ls index.html  # Should exist
```

---

## 🎓 Next Steps

After completing machine setup:

1. **Read Team Onboarding**: [TEAM_ONBOARDING.md](TEAM_ONBOARDING.md)
2. **Learn Git Workflow**: [CONTRIBUTING.md](../development/CONTRIBUTING.md)
3. **Understand Project Structure**: [DEVELOPER_GUIDE.md](../development/DEVELOPER_GUIDE.md)
4. **Take Your First Task**: See onboarding guide for role-specific first tasks

---

## 📚 Additional Resources

### Learning Resources

- **Git Tutorial**: https://git-scm.com/doc
- **GitHub Guides**: https://guides.github.com/
- **Node.js Tutorial**: https://nodejs.dev/learn
- **VS Code Tips**: https://code.visualstudio.com/docs
- **AWS CLI Guide**: https://docs.aws.amazon.com/cli/

### Quick Reference

- **Git Cheat Sheet**: https://education.github.com/git-cheat-sheet-education.pdf
- **Command Line Basics**: https://www.codecademy.com/learn/learn-the-command-line
- **VS Code Shortcuts**: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf

---

## 🆘 Getting Help

If you're stuck after following this guide:

1. **Check Troubleshooting Section** - Common issues covered above
2. **Search GitHub Issues** - Someone may have had similar problems
3. **Ask Team** - Slack/Discord/Email (your team communication channel)
4. **Create Issue** - [GitHub Issues](https://github.com/yellowflowersorganics-star/Yellow-Flowers-Organics/issues)

---

**Last Updated**: November 2025  
**Maintained By**: Development Team

---

**Congratulations! 🎉** Your development machine is now fully set up and ready for contributing to the Yellow Flowers Organic Farm website!


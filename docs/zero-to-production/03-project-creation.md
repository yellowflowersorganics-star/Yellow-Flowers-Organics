# Phase 3: Project Creation + Testing (30-45 min)

**Goal**: Build your website, test it locally, and push to GitHub

---

## 📋 What You'll Do

- Create project structure locally
- Build your website (or use a minimal template)
- Create essential files (.gitignore, README, package.json)
- Install dependencies (npm install)
- Test with local development server
- Make your first commit to GitHub

---

## Step 3.1: Create Project Locally

Create your project directory and initialize Git:

```bash
# Create project directory
mkdir ~/projects
cd ~/projects
mkdir my-awesome-website
cd my-awesome-website

# Initialize Git
git init
git branch -M main

# Create basic project structure
mkdir articles
mkdir .github
mkdir .github/workflows
```

---

## Step 3.2: Create Your Website Files

Create a simple `index.html` file. You can use the minimal example below, or use your own existing HTML/CSS/JavaScript files.

### Minimal Example (Copy this if you're just testing):

**Create `index.html`**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Awesome Website</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        h1 { font-size: 3rem; margin-bottom: 1rem; }
        p { font-size: 1.2rem; margin-bottom: 0.5rem; }
    </style>
</head>
<body>
    <h1>🚀 My Website is Live!</h1>
    <p>This website successfully deployed to AWS.</p>
    <p>Ready to build something amazing!</p>
</body>
</html>
```

### 💡 Using Your Own Code?

If you already have HTML, CSS, and JavaScript files:
- Copy them to this folder
- Make sure you have an `index.html` file
- Skip the example above and use your own!

### Want a Complete Starter Template?

Check out our [Yellow Flowers website code](../../../index.html) for a full example with:
- Responsive navigation
- Multiple sections
- Professional styling
- Mobile-friendly design

---

## Step 3.3: Create Essential Files

### Create `.gitignore`

```gitignore
# Dependencies
node_modules/
package-lock.json

# Environment variables
.env
.env.local

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*

# Build outputs
dist/
build/

# AWS
.aws/
```

### Create `README.md`

```markdown
# My Awesome Website

A beautiful, modern website built with HTML, CSS, and JavaScript.

## Features

- Responsive design
- Smooth scrolling navigation
- Modern UI/UX

## Development

Open `index.html` in your browser to view the website locally.

```bash
# Clone repository
git clone [your-repo-url]

# Navigate to folder
cd my-awesome-website

# Install dependencies
npm install

# Start development server
npm start

# Open in browser
# Visit: http://localhost:8000
```

## Next Steps

- [ ] Set up AWS infrastructure
- [ ] Configure deployment workflows
- [ ] Deploy to production

## License

MIT License - Copyright © 2025

---

**Note**: This README will be updated later with deployment information once AWS is configured.
```

### Create `package.json`

```json
{
  "name": "my-awesome-website",
  "version": "1.0.0",
  "description": "My awesome website project",
  "scripts": {
    "start": "live-server --port=8000",
    "dev": "live-server --port=8000"
  },
  "keywords": ["website", "html", "css", "javascript"],
  "author": "Your Name",
  "license": "MIT",
  "devDependencies": {
    "live-server": "^1.2.2"
  }
}
```

---

## Step 3.4: Install Dependencies and Start Server

Now install the dependencies and test with a local web server:

```bash
# Install npm packages (live-server)
npm install

# This will:
# - Download and install live-server
# - Create node_modules folder
# - Create package-lock.json file
```

---

## Step 3.5: Test Locally

Start the development server and verify everything works:

```bash
# Start the local development server
npm start

# This will:
# - Start live-server on port 8000
# - Automatically open browser to http://localhost:8000
# - Auto-reload when you make changes
```

### ✅ What to check:

- [ ] Server starts without errors
- [ ] Browser opens automatically to http://localhost:8000
- [ ] Website loads correctly
- [ ] Text is visible and styling looks right
- [ ] No browser console errors (press F12 to check)
- [ ] Try making a small change to index.html - it should auto-reload!

**💡 Tip**: Press `Ctrl+C` in terminal when done testing

---

## Step 3.6: First Commit

Now that everything works locally, commit and push to GitHub:

```bash
# Stage all files
git add .

# Create first commit
git commit -m "feat: Initial project setup"

# Add remote (use YOUR repository URL from Phase 2)
git remote add origin git@github.com:yourusername/my-awesome-website.git
# OR if using HTTPS:
# git remote add origin https://github.com/yourusername/my-awesome-website.git

# Push to GitHub
git push -u origin main
```

### ✅ Verify on GitHub:

1. Go to your repository on GitHub.com
2. You should see all files (except node_modules - it's in .gitignore!)
3. Click on files to verify content uploaded correctly

---

## ✅ Phase 3 Verification

- [ ] Project structure created
- [ ] `index.html` created (with your code or the minimal example)
- [ ] Essential files created (`.gitignore`, `README.md`, `package.json`)
- [ ] `npm install` completed successfully
- [ ] `npm start` works and opens website on localhost:8000
- [ ] Website displays correctly in browser
- [ ] No console errors (F12 in browser)
- [ ] Code pushed to GitHub
- [ ] Can see all files on GitHub.com
- [ ] `node_modules` is NOT on GitHub (correctly ignored)

**All checked?** ✅ Ready for AWS!

---

## 🐛 Troubleshooting

### Issue: `npm: command not found`

**Solution**: Node.js not installed
```bash
# Verify Node.js installation
node --version
npm --version

# If not installed, go back to Phase 1
```

### Issue: `npm install` fails

**Solution**: Delete and retry
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: `npm start` fails or port already in use

**Solution**: Use a different port
```bash
# Edit package.json, change port:
"start": "live-server --port=8080"

# Or kill the process using port 8000
# Windows: netstat -ano | findstr :8000
# Mac/Linux: lsof -ti:8000 | xargs kill
```

### Issue: Website doesn't show up

**Solution**: Check file name
- Must be named `index.html` (lowercase)
- Must be in the root folder, not in a subfolder

### Issue: Git push fails

**Solution**: Check authentication
```bash
# If using SSH, test connection
ssh -T git@github.com

# If using HTTPS, make sure you have your token ready
# Git will prompt for username and password (use token as password)
```

---

## 📚 Next Reading

- **package.json**: [npm Documentation](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)
- **live-server**: [GitHub Repository](https://github.com/tapio/live-server)
- **Git basics**: [Git Documentation](https://git-scm.com/doc)

---

## ➡️ Next Step

**Phase 3 Complete!** 🎉

Your website is working locally and pushed to GitHub!

Continue to: **[Phase 4: AWS Infrastructure](04-aws-infrastructure.md)** (60-90 min)

---

[← Back to Index](README.md) | [← Previous: Phase 2](02-github-setup.md) | [Next: Phase 4 →](04-aws-infrastructure.md)


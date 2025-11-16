# 🤝 Contributing to Yellow Flowers Organic Farm Website

Welcome to the team! This guide will help you get started with development, testing, and contributing to the project.

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Machine Setup](#machine-setup)
3. [Development Workflow](#development-workflow)
4. [Code Standards](#code-standards)
5. [Testing](#testing)
6. [Pull Request Process](#pull-request-process)
7. [Release Process](#release-process)

## Prerequisites

### Required Knowledge
- HTML5, CSS3, JavaScript (ES6+)
- Git & GitHub workflows
- Basic understanding of static websites
- Responsive design principles

### Required Software
- **Git** 2.30+
- **Node.js** 16+ (for dev tools)
- **Code Editor**: VS Code (recommended) or any IDE
- **Web Browser**: Chrome/Firefox (for testing)

## 🖥️ Machine Setup

> **📖 For detailed setup instructions**, see: [Machine Setup Guide](../getting-started/zero-to-production/01-machine-setup.md)
>
> This guide covers platform-specific installation for Git, Node.js, VS Code, and troubleshooting.

### Quick Setup (Summary)

### 1. Clone the Repository

```bash
# Clone via HTTPS
git clone https://github.com/yellowflowersorganics-star/Yellow-Flowers-Organics.git

# OR Clone via SSH (if you have SSH keys set up)
git clone git@github.com:yellowflowersorganics-star/Yellow-Flowers-Organics.git

# Navigate to project
cd Yellow-Flowers-Organics
```

### 2. Install Development Tools

#### Option A: Using Node.js (Recommended)

```bash
# Install dependencies (if package.json exists)
npm install

# Install http-server globally (for local testing)
npm install -g http-server

# Install live-server (optional - auto-reload on changes)
npm install -g live-server
```

#### Option B: Using VS Code Extensions

Install these VS Code extensions:
- **Live Server** by Ritwick Dey (for auto-reload)
- **Prettier** - Code formatter
- **HTML CSS Support**
- **Auto Rename Tag**
- **Path Intellisense**
- **GitLens** - Git supercharged

### 3. Verify Installation

```bash
# Check Git version
git --version
# Expected: git version 2.30.0 or higher

# Check Node.js version (if using Node)
node --version
# Expected: v16.0.0 or higher

# Check npm version
npm --version
# Expected: 7.0.0 or higher
```

### 4. Configure Git

```bash
# Set your name and email
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Optional: Set default branch name
git config --global init.defaultBranch main

# Optional: Enable colored output
git config --global color.ui auto
```

### 5. Run Local Development Server

```bash
# Option 1: Using http-server
http-server -p 8000
# Visit: http://localhost:8000

# Option 2: Using live-server (auto-reload)
live-server --port=8000
# Visit: http://localhost:8000

# Option 3: Using Python (no install needed)
python -m http.server 8000
# Visit: http://localhost:8000

# Option 4: Using VS Code Live Server
# Right-click index.html → "Open with Live Server"
```

## 🔄 Development Workflow

### Branch Strategy

We follow **Git Flow** with simplified structure:

```
main (production)
  ├── develop (integration branch)
  │   ├── feature/article-name (new features)
  │   ├── bugfix/issue-description (bug fixes)
  │   └── hotfix/critical-fix (production fixes)
  └── release/v1.x.x (release preparation)
```

### Creating a New Feature

```bash
# 1. Update your local repository
git checkout develop
git pull origin develop

# 2. Create a feature branch
git checkout -b feature/add-new-article

# 3. Make your changes
# ... edit files ...

# 4. Test locally
# ... run local server and test ...

# 5. Commit your changes
git add .
git commit -m "feat: Add new article about composting"

# 6. Push to remote
git push origin feature/add-new-article

# 7. Create Pull Request on GitHub
# ... see Pull Request Process below ...
```

### Commit Message Convention

We follow **Conventional Commits** for clear history:

**Format**: `<type>(<scope>): <description>`

**Types**:
- `feat`: New feature (e.g., new article, new section)
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code formatting (no functional changes)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples**:
```bash
git commit -m "feat(articles): Add PSB bacteria guide"
git commit -m "fix(navigation): Fix dropdown menu on mobile"
git commit -m "docs(readme): Update installation instructions"
git commit -m "style(css): Improve button hover effects"
git commit -m "refactor(articles): Consolidate bio-fertilizer layouts"
```

### Daily Workflow

```bash
# Morning: Start your day
git checkout develop
git pull origin develop
git checkout feature/your-feature
git merge develop  # Get latest changes

# Work on your feature
# ... make changes ...
# ... test locally ...

# Commit frequently
git add <files>
git commit -m "feat: Description of change"

# End of day: Push your work
git push origin feature/your-feature
```

## 📝 Code Standards

### HTML Standards

```html
<!-- ✅ GOOD: Semantic HTML, proper indentation -->
<article class="blog-card">
    <div class="blog-image azotobacter"></div>
    <div class="blog-content">
        <h3>Article Title</h3>
        <p>Description text...</p>
    </div>
</article>

<!-- ❌ BAD: Non-semantic, poor structure -->
<div class="card">
    <div class="img"></div>
    <div class="txt">
        <div class="title">Article Title</div>
        <div>Description text...</div>
    </div>
</div>
```

**Rules**:
- Use semantic HTML5 tags (`<article>`, `<section>`, `<nav>`, etc.)
- Proper indentation (4 spaces or 2 spaces - be consistent)
- Include alt text for all images
- Use ARIA labels for accessibility
- Validate HTML with W3C validator

### CSS Standards

```css
/* ✅ GOOD: BEM naming, organized properties */
.blog-card {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background: var(--white);
    border-radius: 12px;
    box-shadow: 0 5px 20px var(--shadow);
    transition: transform 0.3s ease;
}

.blog-card:hover {
    transform: translateY(-5px);
}

.blog-card__title {
    color: var(--primary-green);
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

/* ❌ BAD: Unclear naming, inconsistent spacing */
.card{background:white;padding:20px;}
.card h3{color:green;}
```

**Rules**:
- Use BEM (Block Element Modifier) naming convention
- Use CSS variables for colors and spacing
- Group related properties together
- Mobile-first responsive design
- Comments for complex sections

### JavaScript Standards

```javascript
// ✅ GOOD: Clear naming, proper error handling
const handleFormSubmission = async (event) => {
    event.preventDefault();
    
    try {
        const formData = new FormData(event.target);
        const response = await submitBooking(formData);
        
        if (response.success) {
            showSuccessMessage('Booking confirmed!');
        }
    } catch (error) {
        console.error('Booking error:', error);
        showErrorMessage('Failed to submit booking');
    }
};

// ❌ BAD: Poor naming, no error handling
function submit(e) {
    e.preventDefault();
    let d = new FormData(e.target);
    fetch('/api', {method: 'POST', body: d});
}
```

**Rules**:
- Use `const` and `let`, avoid `var`
- Descriptive variable and function names
- Error handling with try-catch
- Comments for complex logic
- ES6+ features (arrow functions, template literals)

### File Naming Conventions

```
✅ GOOD:
articles/azotobacter.html
article-styles.css
neem-garlic-insecticide.html

❌ BAD:
Azotobacter.HTML
article_styles.css
neem garlic.html
```

**Rules**:
- Lowercase with hyphens (kebab-case)
- Descriptive names
- Consistent extensions (.html, .css, .js)

## 🧪 Testing

### Manual Testing Checklist

Before submitting a PR, test on:

**Browsers**:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

**Devices**:
- ✅ Desktop (1920x1080, 1366x768)
- ✅ Tablet (iPad, 768px)
- ✅ Mobile (iPhone, Android, 375px)

**Responsive Breakpoints**:
```css
/* Test at these widths */
1920px  /* Large desktop */
1366px  /* Standard desktop */
1024px  /* Small desktop / large tablet */
768px   /* Tablet */
480px   /* Large mobile */
375px   /* Standard mobile */
320px   /* Small mobile */
```

### Testing Checklist for New Articles

```markdown
## Article Testing Checklist

- [ ] HTML validates (W3C validator)
- [ ] All links work (no 404s)
- [ ] Images load correctly (or placeholders work)
- [ ] Responsive on mobile (test 375px width)
- [ ] Navigation breadcrumbs correct
- [ ] Related articles links work
- [ ] Typography is readable
- [ ] Code blocks render properly
- [ ] Tables display correctly on mobile
- [ ] No console errors
- [ ] Page loads in <3 seconds
```

### Accessibility Testing

```markdown
## Accessibility Checklist

- [ ] All images have alt text
- [ ] Color contrast ratio ≥ 4.5:1
- [ ] Keyboard navigation works (Tab, Enter)
- [ ] Screen reader compatible (use NVDA/JAWS)
- [ ] Heading hierarchy correct (h1→h2→h3)
- [ ] Focus indicators visible
- [ ] No flashing content
- [ ] Forms have labels
```

### Performance Testing

```bash
# Use Lighthouse in Chrome DevTools
# Target scores:
Performance: >90
Accessibility: >95
Best Practices: >90
SEO: >90

# Check file sizes
# Each HTML file: <100 KB
# CSS files: <50 KB each
# JS files: <30 KB each
```

## 📬 Pull Request Process

### ⚠️ Important: PRs Must Be Linked to Issues

**Every Pull Request MUST be linked to a GitHub Issue before it can be merged.**

#### Why This Requirement?
- ✅ Ensures all work is tracked and planned
- ✅ Provides context for reviewers
- ✅ Links code changes to requirements
- ✅ Enables better project management
- ✅ Creates audit trail

#### How to Link PRs to Issues

**Option 1: Use Keywords in PR Description (Recommended)**

In your PR description, use one of these keywords followed by the issue number:

```markdown
Closes #123
Fixes #456
Resolves #789
Related to #999
```

**Option 2: Reference in PR Title**

```
feat: Add new feature (#123)
fix: Bug fix for navigation (#456)
```

**Option 3: Link in GitHub UI**

1. Go to your PR
2. In the right sidebar, under "Development"
3. Click "Link an issue from this repository"
4. Select the related issue

#### Don't Have an Issue Yet?

1. Create an issue first: [Create Issue](https://github.com/yellowflowersorganics-star/Yellow-Flowers-Organics/issues/new/choose)
2. Describe what your PR will do
3. Get approval/discussion if needed
4. Then create your PR and link it

**Note**: Our automated workflow will check for issue links and block PRs that don't have them!

---

### 1. Create Pull Request

On GitHub:
1. Go to "Pull Requests" tab
2. Click "New Pull Request"
3. Base: `develop` ← Compare: `feature/your-branch`
4. Fill in PR template (see below)
5. **Link to related issue** (REQUIRED - see above)
6. Assign reviewers
7. Add labels (enhancement, bug, documentation)

### 2. PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] New feature (new article, section)
- [ ] Bug fix
- [ ] Documentation update
- [ ] Style/UI improvement
- [ ] Refactoring

## Changes Made
- Added new article about X
- Updated navigation to include Y
- Fixed mobile responsiveness for Z

## Testing Done
- [x] Tested on Chrome, Firefox, Safari
- [x] Tested on mobile (375px)
- [x] Tested on tablet (768px)
- [x] No console errors
- [x] All links work

## Screenshots
(Add before/after screenshots if UI changes)

## Checklist
- [x] Code follows style guidelines
- [x] Self-review completed
- [x] No linter errors
- [x] Documentation updated (if needed)
- [x] Tested locally

## Related Issues
Closes #123
Relates to #456
```

### 3. Code Review Process

**For Reviewers**:
1. Check code quality and standards
2. Test locally (pull branch and run)
3. Verify responsive design
4. Check for console errors
5. Review commit messages
6. Approve or request changes

**For Authors**:
1. Address all review comments
2. Push updates to same branch
3. Mark conversations as resolved
4. Re-request review
5. Merge after approval

### 4. Merging

```bash
# After PR approval
git checkout develop
git merge feature/your-feature --no-ff
git push origin develop

# Delete feature branch (optional)
git branch -d feature/your-feature
git push origin --delete feature/your-feature
```

## 🚀 Release Process

See detailed [RELEASE_PROCESS.md](RELEASE_PROCESS.md) for complete workflow.

**Quick Overview**:

```bash
# 1. Create release branch from develop
git checkout -b release/v1.1.0 develop

# 2. Final testing and bug fixes
# ... test everything ...
# ... fix critical bugs only ...

# 3. Merge to main
git checkout main
git merge release/v1.1.0 --no-ff

# 4. Create tag
git tag -a v1.1.0 -m "Release v1.1.0"

# 5. Push to GitHub
git push origin main --tags

# 6. Merge back to develop
git checkout develop
git merge release/v1.1.0 --no-ff
git push origin develop

# 7. GitHub Actions automatically:
#    - Creates release
#    - Deploys to production
```

## 📞 Getting Help

- **Questions?** Ask in GitHub Discussions
- **Bugs?** Create an issue with "bug" label
- **Ideas?** Create an issue with "enhancement" label
- **Urgent?** Mention @maintainers in issue/PR

## 🎯 Quick Reference

### Common Commands

```bash
# Update your fork
git checkout develop
git pull origin develop

# Create feature branch
git checkout -b feature/my-feature

# See changes
git status
git diff

# Stage and commit
git add .
git commit -m "feat: Description"

# Push changes
git push origin feature/my-feature

# Pull latest changes
git pull origin develop

# View logs
git log --oneline --graph --all
```

### Project Structure Quick Reference

```
Yellow-Flowers-Organics/
├── index.html              # Homepage - edit for main content
├── styles.css              # Main styles - edit for global styling
├── article-styles.css      # Article styles - reuse existing classes
├── script.js               # Main JS - add interactive features
├── articles/               # Add new articles here
│   └── your-article.html   # Follow existing article structure
├── .github/workflows/      # CI/CD - don't modify unless needed
└── docs/                   # Documentation - update when needed
```

---

**Happy Coding! 🌱**

Questions? Check [DEVELOPER_GUIDE.md](DEVELOPER_GUIDE.md) or create an issue!


# ⚡ Quick Reference Guide

**Print this out or bookmark it!** This is your one-page cheat sheet for the Yellow Flowers Organic Farm project.

---

## 🚀 Getting Started (First Time)

```bash
# 1. Clone repository
git clone https://github.com/yellowflowersorganics-star/Yellow-Flowers-Organics.git
cd Yellow-Flowers-Organics

# 2. Install dependencies
npm install

# 3. Run local server
npm start
# OR: live-server
# Visit: http://localhost:8000

# 4. Configure Git
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

**Read**: [TEAM_ONBOARDING.md](TEAM_ONBOARDING.md) for complete setup

---

## 🔄 Daily Workflow

### Standard Feature Development

```bash
# 1. Update main branch
git checkout main
git pull origin main

# 2. Create issue on GitHub (REQUIRED!)
# Go to: Issues → New Issue → Choose template
# Note the issue number (e.g., #42)

# 3. Create feature branch
git checkout -b feature/descriptive-name

# 4. Make your changes
# ... edit files ...

# 5. Test locally
npm start
# Test on: Desktop, Tablet (768px), Mobile (375px)

# 6. Commit with conventional format
git add .
git commit -m "feat: Your feature description"

# 7. Push to GitHub
git push origin feature/descriptive-name

# 8. Create Pull Request on GitHub
# - Add "Closes #42" in description (REQUIRED!)
# - Fill out PR template
# - Request reviewers
# - Wait for approval + CI checks

# 9. Merge after approval
# Click "Squash and merge" on GitHub

# 10. Clean up
git checkout main
git pull origin main
git branch -d feature/descriptive-name
```

---

## 📝 Commit Message Format

**Format**: `type(scope): description`

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Formatting, no code change
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance

### Examples
```bash
git commit -m "feat(articles): Add PSB bacteria guide"
git commit -m "fix(nav): Fix dropdown menu on iPad"
git commit -m "docs(readme): Update installation steps"
git commit -m "style(css): Improve button hover effects"
```

---

## 🔗 Linking PRs to Issues (REQUIRED!)

**Every PR MUST link to an issue!**

### In PR Description:
```markdown
Closes #123
Fixes #456
Resolves #789
Related to #999
```

### In PR Title:
```
feat: Add new feature (#123)
fix: Bug navigation (#456)
```

### In GitHub UI:
1. Go to PR
2. Right sidebar → "Development"
3. Click "Link an issue"
4. Select issue

**No issue link = PR blocked by automation!** ❌

---

## 🐛 Creating Issues

Go to: [Create Issue](https://github.com/yellowflowersorganics-star/Yellow-Flowers-Organics/issues/new/choose)

### Available Templates:
- **🐛 Bug Report** - Something is broken
- **✨ Feature Request** - New functionality
- **📚 Documentation Update** - Docs need improvement
- **📝 New Article Request** - Request Learning Center article

**Always create issue BEFORE starting work!**

---

## 🧪 Testing Checklist

Before creating PR, test:

**Browsers**:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)

**Devices/Sizes**:
- [ ] Desktop (1920px)
- [ ] Tablet (768px)
- [ ] Mobile (375px)

**Functionality**:
- [ ] No console errors (F12)
- [ ] All links work
- [ ] Forms work (if applicable)
- [ ] Images load correctly
- [ ] Responsive layout works

---

## 📁 Project Structure

```
Yellow-Flowers-Organics/
├── index.html              # Homepage
├── styles.css              # Main styles
├── article-styles.css      # Article page styles
├── script.js               # JavaScript
├── articles/               # All Learning Center articles
│   └── your-article.html
├── .github/
│   ├── workflows/          # CI/CD automation
│   ├── ISSUE_TEMPLATE/     # Issue templates
│   └── PULL_REQUEST_TEMPLATE.md
└── docs/                   # All documentation
    ├── CONTRIBUTING.md
    ├── DEVELOPER_GUIDE.md
    ├── QE_GUIDE.md
    └── ...
```

---

## 🎨 CSS Guidelines

### BEM Naming Convention
```css
.block { }                  /* Component */
.block__element { }         /* Part of component */
.block--modifier { }        /* Variation */

/* Example */
.blog-card { }
.blog-card__title { }
.blog-card--featured { }
```

### Use CSS Variables
```css
/* Use these instead of hardcoded values */
var(--primary-green)
var(--soft-cream)
var(--spacing-md)
```

### Responsive Breakpoints
```css
/* Mobile first! */
.element { } /* Mobile (default) */

@media (min-width: 768px) { } /* Tablet */
@media (min-width: 1024px) { } /* Desktop */
```

---

## 📄 Adding New Article

### Quick Steps:
1. **Create issue** for the article (#43)
2. **Copy template** from existing article
3. **Create file**: `articles/your-article.html`
4. **Update `index.html`**:
   - Add to dropdown menu
   - Add blog card in Learning Center
5. **Update `styles.css`**:
   - Add blog card background gradient
6. **Test** on all devices
7. **Commit**: `feat(articles): Add your-article guide (#43)`
8. **Create PR** linked to issue

**Detailed guide**: [DEVELOPER_GUIDE.md - Adding New Article](DEVELOPER_GUIDE.md#adding-a-new-article)

---

## 🚫 Common Mistakes to Avoid

❌ **Don't**:
- Push directly to `main` or `develop`
- Create PR without issue link
- Skip testing on mobile
- Forget to update documentation
- Use force push on shared branches
- Hardcode colors (use CSS variables)
- Commit without descriptive message

✅ **Do**:
- Always work in feature branches
- Link every PR to an issue
- Test on multiple browsers/devices
- Keep commits focused and small
- Follow naming conventions
- Write clear commit messages
- Ask questions if unsure!

---

## 🆘 Quick Troubleshooting

### Can't push to main
**Error**: `Protected branch update failed`  
**Solution**: This is correct! Use feature branches and PRs.

### PR blocked by checks
**Error**: `PR Issue Validator failed`  
**Solution**: Add `Closes #123` to PR description.

### Branch out of date
**Error**: `This branch is out-of-date`  
**Solution**:
```bash
git checkout feature/your-branch
git fetch origin
git merge origin/main
git push origin feature/your-branch
```

### Merge conflicts
**Solution**:
```bash
git fetch origin
git merge origin/main
# Fix conflicts in files
git add .
git commit -m "fix: Resolve merge conflicts"
git push origin feature/your-branch
```

### Local changes won't save
**Solution**: Check if file is in `.gitignore`

---

## 📞 Need Help?

| Question About | Resource |
|----------------|----------|
| **Setup & Onboarding** | [TEAM_ONBOARDING.md](TEAM_ONBOARDING.md) |
| **Development Workflow** | [CONTRIBUTING.md](CONTRIBUTING.md) |
| **Technical Details** | [DEVELOPER_GUIDE.md](DEVELOPER_GUIDE.md) |
| **Testing** | [QE_GUIDE.md](QE_GUIDE.md) |
| **Releases** | [RELEASE_PROCESS.md](RELEASE_PROCESS.md) |
| **Branch Protection** | [SETUP_BRANCH_PROTECTION.md](SETUP_BRANCH_PROTECTION.md) |
| **Deployment** | [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) |

### Quick Links
- 💬 [Ask Question (Discussions)](https://github.com/yellowflowersorganics-star/Yellow-Flowers-Organics/discussions)
- 🐛 [Report Bug (Issues)](https://github.com/yellowflowersorganics-star/Yellow-Flowers-Organics/issues)
- 📖 [All Documentation](README.md#-documentation-for-team-members)

---

## 🎯 Quality Standards

### Before Every Commit
- [ ] Code tested locally
- [ ] No console errors
- [ ] Responsive on mobile (375px)
- [ ] All links work

### Before Every PR
- [ ] Issue created and linked
- [ ] Tested on 3+ browsers
- [ ] Tested on 3+ screen sizes
- [ ] Documentation updated (if needed)
- [ ] Self-review completed

### Before Every Merge
- [ ] PR approved by reviewer
- [ ] All CI checks pass
- [ ] Conversations resolved
- [ ] No merge conflicts

---

## 🔑 Key Commands Reference

### Git Basics
```bash
git status                  # Check current state
git add .                   # Stage all changes
git add file.html           # Stage specific file
git commit -m "message"     # Commit with message
git push origin branch      # Push to remote
git pull origin main        # Update from remote
git checkout -b feature/x   # Create & switch branch
git checkout main           # Switch to main
git branch -d feature/x     # Delete local branch
git log --oneline           # View commit history
```

### Useful Shortcuts
```bash
git fetch origin            # Download latest from remote
git remote -v               # Show remote URLs
git diff                    # Show uncommitted changes
git reset HEAD file.html    # Unstage file
git checkout -- file.html   # Discard local changes
```

### npm Scripts (package.json)
```bash
npm start                   # Start dev server
npm test                    # Run tests
npm run lint:html           # Check HTML
npm run lint:css            # Check CSS
npm run lint:js             # Check JavaScript
npm run format              # Format code with Prettier
npm run format:check        # Check if formatted
```

---

## 📊 Branch Protection Rules

### Main Branch
- ✅ Requires PR (2 approvals)
- ✅ Requires status checks
- ✅ Requires issue link
- ✅ Requires conversation resolution
- ❌ No force push
- ❌ No direct commits

### Develop Branch
- ✅ Requires PR (1 approval)
- ✅ Requires status checks
- ✅ Requires issue link
- ❌ No force push
- ❌ No direct commits

**Can't merge?** Check all requirements are met!

---

## 🎓 Learning Resources

### Web Development
- [MDN Web Docs](https://developer.mozilla.org/) - HTML, CSS, JS reference
- [CSS Tricks](https://css-tricks.com/) - CSS techniques
- [web.dev](https://web.dev/) - Best practices

### Git & GitHub
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [GitHub Docs](https://docs.github.com/)
- [Learn Git Branching](https://learngitbranching.js.org/) - Interactive tutorial

### Tools
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Debugging
- [Can I Use](https://caniuse.com/) - Browser compatibility
- [WebAIM](https://webaim.org/) - Accessibility

---

## 💡 Pro Tips

1. **Commit Often** - Small commits are easier to review and revert
2. **Pull Before Push** - Always pull latest changes before pushing
3. **Test Mobile First** - Most issues happen on mobile
4. **Use DevTools** - F12 is your best friend for debugging
5. **Read Error Messages** - They usually tell you exactly what's wrong
6. **Ask Questions** - No question is too simple!
7. **Review Others' PRs** - Best way to learn
8. **Keep Branches Updated** - Merge main regularly to avoid conflicts
9. **Write Good Commit Messages** - Your future self will thank you
10. **Have Fun!** - We're building something great together! 🌱

---

## 📅 When to Do What

### Daily
- [ ] Pull latest changes
- [ ] Check for PR reviews
- [ ] Respond to review comments
- [ ] Update your branches

### Before Starting Work
- [ ] Create/check issue
- [ ] Pull latest main
- [ ] Create feature branch

### Before Committing
- [ ] Test locally
- [ ] Check for console errors
- [ ] Review your changes

### Before Creating PR
- [ ] Test on multiple browsers
- [ ] Test responsive design
- [ ] Update documentation
- [ ] Link to issue

### After PR Approval
- [ ] Merge PR
- [ ] Delete feature branch
- [ ] Pull latest main
- [ ] Celebrate! 🎉

---

## 🎯 Team Workflow Summary

```
1. Create Issue → 2. Get Approval → 3. Create Branch →
4. Code → 5. Test → 6. Commit → 7. Push →
8. Create PR (link issue) → 9. Request Review →
10. Address Feedback → 11. Approve → 12. Merge →
13. Delete Branch → 14. Done! 🎉
```

---

**Questions?** Check the [documentation](README.md#-documentation-for-team-members) or ask in [Discussions](https://github.com/yellowflowersorganics-star/Yellow-Flowers-Organics/discussions)!

**Last Updated**: November 2024  
**Version**: 1.0.0

---

**Happy Coding! 🌱** Keep it simple, test thoroughly, and collaborate! 🚀


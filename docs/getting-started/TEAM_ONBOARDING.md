# 👋 Welcome to Yellow Flowers Organic Farm Website Team!

This is your complete onboarding guide. Follow this step-by-step to get started.

## 🎯 Quick Start (30 Minutes)

### Step 1: Read This First (5 min)

You're working on a **static HTML/CSS/JS website** for an organic farm in Rajasthan, India. No frameworks, no build tools - just clean, fast, accessible web pages.

**Live Site**: https://yellowflowersorganicfarm.com

### Step 2: Machine Setup (15 min)

```bash
# 1. Install Git
# Download from: https://git-scm.com/downloads

# 2. Clone repository
git clone https://github.com/yellowflowersorganics-star/Yellow-Flowers-Organics.git
cd Yellow-Flowers-Organics

# 3. Install Node.js (for dev tools - optional)
# Download from: https://nodejs.org/ (LTS version)

# 4. Install dependencies (optional)
npm install

# 5. Run local server
npm start
# OR use VS Code "Live Server" extension
# OR: python -m http.server 8000

# 6. Open browser
# Visit: http://localhost:8000
```

### Step 3: Explore the Codebase (10 min)

```bash
# Open in your editor
code .

# Key files to explore:
# - index.html (homepage)
# - styles.css (main styling)
# - articles/*.html (learning center articles)
# - script.js (navigation and interactivity)
```

**Try This**:
1. Open `index.html` in your browser
2. Click "Learning Center" → Pick any article
3. Resize browser to mobile size (375px)
4. Test the hamburger menu

---

## 📚 Documentation Structure

Your complete guide is organized into these files:

| Document | What It's For | Read Time |
|----------|---------------|-----------|
| **[README.md](README.md)** | Project overview, features, deployment options | 10 min |
| **[QUICK_START.md](QUICK_START.md)** | AWS setup for deployment | 15 min |
| **[CONTRIBUTING.md](CONTRIBUTING.md)** | How to contribute, Git workflow, coding standards | 20 min |
| **[DEVELOPER_GUIDE.md](DEVELOPER_GUIDE.md)** | Tech stack, architecture, adding new content | 30 min |
| **[QE_GUIDE.md](QE_GUIDE.md)** | Testing strategy, test cases, quality standards | 30 min |
| **[RELEASE_PROCESS.md](RELEASE_PROCESS.md)** | How to release new versions | 20 min |
| **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** | AWS S3 deployment details | 25 min |
| **[CHANGELOG.md](CHANGELOG.md)** | Version history and changes | 5 min |

---

## 🎓 Learning Path by Role

### For Developers

**Day 1**: Setup & Explore (2 hours)
- ✅ Read [CONTRIBUTING.md](CONTRIBUTING.md) - Machine setup, Git workflow
- ✅ Read [DEVELOPER_GUIDE.md](DEVELOPER_GUIDE.md) - Tech stack, architecture
- ✅ Set up local environment
- ✅ Make a small change and test locally

**Day 2**: First Contribution (4 hours)
- ✅ Pick a "good first issue" from GitHub
- ✅ Create a feature branch
- ✅ Make your changes
- ✅ Test on desktop + mobile
- ✅ Create a Pull Request

**Week 1**: Deep Dive (10 hours)
- ✅ Read all documentation
- ✅ Add a new article to Learning Center
- ✅ Review code of existing articles
- ✅ Understand CSS architecture (BEM methodology)
- ✅ Learn the release process

**Week 2+**: Productive Contributor
- ✅ Take on medium-complexity issues
- ✅ Review others' PRs
- ✅ Help with testing
- ✅ Suggest improvements

### For QA/Testers

**Day 1**: Understand Testing (3 hours)
- ✅ Read [QE_GUIDE.md](QE_GUIDE.md) - Complete testing guide
- ✅ Set up local environment for testing
- ✅ Run through all test cases manually
- ✅ Test on multiple browsers

**Day 2**: Create Test Reports (2 hours)
- ✅ Execute test suite
- ✅ Document any bugs found
- ✅ Create bug reports using template
- ✅ Test on real mobile devices

**Week 1**: Become Expert Tester (10 hours)
- ✅ Learn accessibility testing (WAVE, axe)
- ✅ Learn performance testing (Lighthouse)
- ✅ Create new test cases
- ✅ Automate repetitive tests (optional)

**Week 2+**: Quality Champion
- ✅ Lead testing for new releases
- ✅ Review PRs for quality
- ✅ Improve testing processes
- ✅ Mentor new QA team members

### For DevOps/Release Managers

**Day 1**: Setup & Deploy (3 hours)
- ✅ Read [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
- ✅ Read [QUICK_START.md](QUICK_START.md)
- ✅ Set up AWS account and S3 bucket
- ✅ Configure GitHub Actions secrets
- ✅ Test a deployment to staging

**Day 2**: Release Process (2 hours)
- ✅ Read [RELEASE_PROCESS.md](RELEASE_PROCESS.md)
- ✅ Understand Git Flow strategy
- ✅ Practice creating a release
- ✅ Test rollback procedure

**Week 1**: Master Deployment (5 hours)
- ✅ Set up CloudFront CDN (optional)
- ✅ Configure monitoring and alerts
- ✅ Optimize deployment speed
- ✅ Document any custom setup

**Week 2+**: Release Leader
- ✅ Manage release cycle
- ✅ Coordinate with team
- ✅ Improve CI/CD pipeline
- ✅ Handle production incidents

### For Product Owners/Managers

**Day 1**: Understand the Product (2 hours)
- ✅ Read [README.md](README.md)
- ✅ Browse live website thoroughly
- ✅ Read all Learning Center articles
- ✅ Understand target audience

**Day 2**: Learn Workflow (2 hours)
- ✅ Read [CONTRIBUTING.md](CONTRIBUTING.md) - High-level workflow
- ✅ Read [RELEASE_PROCESS.md](RELEASE_PROCESS.md) - Release cycle
- ✅ Understand what's technically feasible
- ✅ Review project roadmap

**Week 1**: Engage with Team (3 hours)
- ✅ Review open issues and PRs
- ✅ Understand technical constraints
- ✅ Plan next sprint
- ✅ Prioritize features

**Week 2+**: Product Leadership
- ✅ Define product roadmap
- ✅ Gather user feedback
- ✅ Prioritize features
- ✅ Approve releases

---

## 🚀 Your First Task

Choose based on your role:

### Developer: Add a "Back to Top" Button

**Estimated Time**: 1 hour

**Task**:
1. Add a "Back to Top" button that appears when user scrolls down
2. Button should smoothly scroll to top when clicked
3. Must work on mobile and desktop
4. Follow existing CSS styling conventions

**Resources**:
- [DEVELOPER_GUIDE.md](DEVELOPER_GUIDE.md#adding-new-javascript-features) - See "Back to Top" example
- File to edit: `script.js` and `styles.css`

**Success Criteria**:
- ✅ Button appears after scrolling 300px
- ✅ Smooth scroll animation
- ✅ Works on mobile (tested at 375px)
- ✅ No console errors
- ✅ PR created with proper commit message

---

### QA: Run Full Test Suite

**Estimated Time**: 2 hours

**Task**:
1. Execute all test cases from [QE_GUIDE.md](QE_GUIDE.md)
2. Test on Chrome, Firefox, and Safari
3. Test on mobile (375px), tablet (768px), desktop (1920px)
4. Document any bugs found
5. Create bug reports in GitHub Issues

**Resources**:
- [QE_GUIDE.md](QE_GUIDE.md#test-cases) - All test cases
- [QE_GUIDE.md](QE_GUIDE.md#bug-reporting) - Bug report template

**Success Criteria**:
- ✅ All test cases executed
- ✅ Test report created
- ✅ Bugs documented (if any)
- ✅ Screenshots attached
- ✅ Priority assigned to each bug

---

### DevOps: Set Up Staging Environment

**Estimated Time**: 3 hours

**Task**:
1. Create a separate S3 bucket for staging
2. Configure GitHub Actions for staging deployment
3. Test deployment to staging
4. Document the process

**Resources**:
- [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - AWS setup
- [QUICK_START.md](QUICK_START.md) - Quick reference

**Success Criteria**:
- ✅ Staging bucket created
- ✅ GitHub Actions workflow for staging
- ✅ Successful deployment
- ✅ Staging URL accessible
- ✅ Documentation updated

---

## 🔑 Key Concepts to Know

### 1. Git Flow

```
main (production)
  ↑
  └── develop (integration)
        ↑
        └── feature/your-feature (development)
```

**Rule**: Never commit directly to `main` or `develop`. Always use feature branches!

### 2. Semantic Versioning

```
v1.2.3
│ │ │
│ │ └─── PATCH: Bug fixes (1.2.3 → 1.2.4)
│ └───── MINOR: New features (1.2.3 → 1.3.0)
└─────── MAJOR: Breaking changes (1.2.3 → 2.0.0)
```

### 3. Responsive Breakpoints

```
Mobile:  375px - 767px  (Mobile-first)
Tablet:  768px - 1023px
Desktop: 1024px+
```

### 4. BEM CSS Naming

```css
.block { }           /* Component */
.block__element { }  /* Part of component */
.block--modifier { } /* Variation */

/* Example */
.blog-card { }
.blog-card__title { }
.blog-card--featured { }
```

### 5. Commit Message Format

```bash
git commit -m "type(scope): description"

# Examples:
git commit -m "feat(articles): Add new PSB article"
git commit -m "fix(nav): Fix dropdown on mobile"
git commit -m "docs(readme): Update installation steps"
```

**Types**: feat, fix, docs, style, refactor, test, chore

---

## 🛠️ Development Tools

### Required

- **Git**: Version control - [Download](https://git-scm.com/downloads)
- **Text Editor**: VS Code (recommended) - [Download](https://code.visualstudio.com/)
- **Web Browser**: Chrome/Firefox with DevTools

### Recommended VS Code Extensions

```bash
# Install these for better experience:
- Live Server (Ritwick Dey)
- Prettier - Code formatter
- HTML CSS Support
- Auto Rename Tag
- GitLens
```

### Optional Dev Tools

```bash
# Install globally via npm
npm install -g live-server     # Local dev server
npm install -g lighthouse      # Performance testing
npm install -g htmlhint        # HTML linting
```

---

## 📞 Who to Ask for Help

| Question About | Ask | How to Reach |
|----------------|-----|--------------|
| **Git/GitHub workflow** | Tech Lead | GitHub @mention |
| **Code review needed** | Any Senior Dev | Create PR |
| **Testing questions** | QA Lead | Slack #qa-team |
| **Deployment issues** | DevOps | Slack #devops |
| **Feature priorities** | Product Owner | Slack DM |
| **Documentation unclear** | Anyone! | GitHub Discussion |

**General Help**:
- 💬 GitHub Discussions (for questions)
- 🐛 GitHub Issues (for bugs)
- 📖 This documentation (read first!)

---

## ✅ Your Onboarding Checklist

Copy this to track your progress:

### Week 1

**Setup** (Day 1)
- [ ] Read this onboarding guide
- [ ] Set up local development environment
- [ ] Run website locally successfully
- [ ] Introduce yourself to the team

**Learning** (Day 2-3)
- [ ] Read role-specific documentation
- [ ] Explore the codebase
- [ ] Run through manual tests
- [ ] Ask questions about unclear things

**First Contribution** (Day 4-5)
- [ ] Pick a "good first issue"
- [ ] Create feature branch
- [ ] Make changes and test
- [ ] Create Pull Request
- [ ] Address review feedback

### Week 2

**Becoming Productive**
- [ ] Complete 2-3 more tasks
- [ ] Review someone else's PR
- [ ] Help test a feature
- [ ] Attend team meeting/standup

### Week 3-4

**Full Team Member**
- [ ] Comfortable with Git workflow
- [ ] Can work independently on tasks
- [ ] Contribute to code reviews
- [ ] Help onboard next new team member

---

## 🎓 Additional Resources

### Learning Web Development

- **HTML**: [MDN HTML Guide](https://developer.mozilla.org/en-US/docs/Web/HTML)
- **CSS**: [MDN CSS Guide](https://developer.mozilla.org/en-US/docs/Web/CSS)
- **JavaScript**: [MDN JS Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- **Responsive Design**: [This Is Responsive](https://bradfrost.github.io/this-is-responsive/)
- **Accessibility**: [WebAIM](https://webaim.org/)

### Understanding Git

- **Git Basics**: [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- **Git Flow**: [Git Flow Cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/)
- **Interactive Tutorial**: [Learn Git Branching](https://learngitbranching.js.org/)

### Tools & Testing

- **Chrome DevTools**: [DevTools Guide](https://developer.chrome.com/docs/devtools/)
- **Lighthouse**: [Lighthouse Docs](https://developers.google.com/web/tools/lighthouse)
- **WAVE**: [Web Accessibility Evaluation Tool](https://wave.webaim.org/)

---

## 🎯 Success Metrics

You're successfully onboarded when you can:

- ✅ Set up local environment independently
- ✅ Create a feature branch and make changes
- ✅ Test your changes on desktop and mobile
- ✅ Create a well-formatted Pull Request
- ✅ Respond to code review feedback
- ✅ Help a newer team member with questions
- ✅ Understand where to find information in docs

---

## 🚦 What's Next?

After completing onboarding:

1. **Join the Team Rhythm**
   - Attend daily standups (if applicable)
   - Check GitHub notifications daily
   - Review open PRs when possible

2. **Pick Up Regular Tasks**
   - Check "Ready for Dev" issues
   - Grab tasks matching your skill level
   - Ask for help when stuck (we're here to help!)

3. **Continuous Learning**
   - Stay updated with web standards
   - Learn new techniques
   - Share knowledge with team
   - Suggest improvements

4. **Contribute to Process**
   - Improve documentation
   - Suggest better workflows
   - Help refine processes
   - Be proactive!

---

## 💡 Pro Tips

1. **Read Error Messages**: They usually tell you exactly what's wrong
2. **Test Early, Test Often**: Don't wait until you're "done" to test
3. **Commit Frequently**: Small commits are easier to review and revert
4. **Ask Questions**: No question is stupid; we all started somewhere
5. **Take Breaks**: Better code comes from a rested mind
6. **Use Browser DevTools**: They're your best friend for debugging
7. **Mobile First**: Always test responsive design on mobile first
8. **Keep It Simple**: Don't over-engineer; simple solutions are often best
9. **Document as You Go**: Future you (and others) will thank you
10. **Have Fun!** 🎉 We're building something great together!

---

## 📝 Feedback on Onboarding

Help us improve! After your first week, please share:

- What was clear and helpful?
- What was confusing or missing?
- What would have made onboarding smoother?
- Any suggestions for improvements?

**Create a GitHub Discussion** with feedback or reach out to your team lead.

---

## 🎉 Welcome Aboard!

You're now part of the Yellow Flowers Organic Farm team. We're excited to have you!

Remember:
- **Everyone** was new once
- **Questions** are encouraged
- **Mistakes** are learning opportunities
- **Collaboration** makes us stronger
- **Quality** is everyone's responsibility

**Let's build something amazing together!** 🌱

---

**Need immediate help?**
- 🔍 Search documentation
- 💬 Ask in GitHub Discussions
- 🐛 Check GitHub Issues
- 📧 Contact your team lead

---

*Last Updated: November 2024*
*Version: 1.0.0*


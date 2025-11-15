# 🚀 Release Process Guide

## 📋 Table of Contents

1. [Release Strategy](#release-strategy)
2. [Versioning](#versioning)
3. [Release Cycle](#release-cycle)
4. [Release Checklist](#release-checklist)
5. [Hotfix Process](#hotfix-process)
6. [Rollback Procedure](#rollback-procedure)
7. [Post-Release](#post-release)

## 🎯 Release Strategy

### Release Types

| Type | Description | Frequency | Example |
|------|-------------|-----------|---------|
| **Major Release** | Breaking changes, major new features | Every 6-12 months | v1.0.0 → v2.0.0 |
| **Minor Release** | New features, no breaking changes | Monthly | v1.0.0 → v1.1.0 |
| **Patch Release** | Bug fixes only | As needed | v1.0.0 → v1.0.1 |
| **Hotfix** | Critical production bug | Immediate | v1.0.0 → v1.0.1 |

### Release Branches

```
main (production)
  │
  ├── release/v1.1.0 (release preparation)
  │   └── from develop
  │
  ├── hotfix/critical-bug (emergency fixes)
  │   └── from main
  │
  └── develop (integration)
      └── feature/* (new features)
```

## 📦 Versioning

### Semantic Versioning (SemVer)

**Format**: `MAJOR.MINOR.PATCH`

```
v1.2.3
│ │ │
│ │ └─── PATCH: Bug fixes
│ └───── MINOR: New features (backward compatible)
└─────── MAJOR: Breaking changes
```

### Version Bumping Rules

#### MAJOR Version (v1.0.0 → v2.0.0)

Increment when:
- Complete site redesign
- Navigation structure changes (breaking old bookmarks)
- Major technology stack change
- Removal of sections/features

**Example**:
```
v1.x.x → v2.0.0
- Complete UI overhaul
- New navigation system
- Removed old blog system
```

#### MINOR Version (v1.0.0 → v1.1.0)

Increment when:
- Adding new articles
- Adding new sections to homepage
- New features (contact form, search)
- Style improvements

**Example**:
```
v1.0.0 → v1.1.0
- Added 5 new bio-fertilizer articles
- Added testimonials section
- Improved mobile navigation
```

#### PATCH Version (v1.0.0 → v1.0.1)

Increment when:
- Fixing bugs
- Typo corrections
- Small style fixes
- Performance improvements (no visible changes)

**Example**:
```
v1.0.0 → v1.0.1
- Fixed dropdown menu on iPad
- Corrected typos in Azotobacter article
- Fixed broken link in footer
```

## 🔄 Release Cycle

### Standard Release Timeline

```
Week 1-2: Development
  ├── Feature development
  ├── Code reviews
  └── Unit testing

Week 3: Integration & Testing
  ├── Merge to develop
  ├── QE testing
  └── Bug fixes

Week 4: Release Preparation
  ├── Create release branch
  ├── Final testing
  ├── Release notes
  └── Deploy to staging

Week 4 (End): Release
  ├── Deploy to production
  ├── Smoke testing
  └── Monitor
```

## ✅ Release Checklist

### Phase 1: Pre-Release (1 week before)

#### Development Complete

```markdown
- [ ] All features for this release merged to `develop`
- [ ] All PRs approved and merged
- [ ] No open critical/high bugs
- [ ] Code freeze announced to team
```

#### Create Release Branch

```bash
# From develop branch
git checkout develop
git pull origin develop

# Create release branch
git checkout -b release/v1.1.0

# Push to remote
git push origin release/v1.1.0
```

```markdown
- [ ] Release branch created: `release/v1.1.0`
- [ ] Branch pushed to GitHub
- [ ] Team notified of release branch
```

#### Testing Phase

```markdown
- [ ] QE full regression testing completed
- [ ] Cross-browser testing done
- [ ] Mobile device testing done
- [ ] Performance testing passed (Lighthouse >90)
- [ ] Accessibility audit passed (>95)
- [ ] All critical test cases passed
- [ ] Known issues documented
```

#### Documentation

```markdown
- [ ] Release notes drafted
- [ ] CHANGELOG.md updated
- [ ] README.md updated (if needed)
- [ ] Documentation updated (if needed)
```

### Phase 2: Release Day

#### Final Checks

```markdown
- [ ] All tests passing on release branch
- [ ] No critical bugs
- [ ] Staging environment tested
- [ ] Backup of current production taken
- [ ] Team on standby for issues
```

#### Merge to Main

```bash
# 1. Merge release branch to main
git checkout main
git pull origin main
git merge release/v1.1.0 --no-ff -m "Release v1.1.0"

# 2. Create tag
git tag -a v1.1.0 -m "Release v1.1.0

New Features:
- Added 3 new bio-fertilizer articles
- Improved mobile navigation

Bug Fixes:
- Fixed dropdown on iPad
- Corrected responsive layout issues

Performance:
- Optimized CSS
- Reduced page load time by 20%
"

# 3. Push to GitHub
git push origin main
git push origin v1.1.0
```

```markdown
- [ ] Release branch merged to `main`
- [ ] Tag created: `v1.1.0`
- [ ] Pushed to GitHub
```

#### Automatic Deployment

GitHub Actions will automatically:
- Build release artifact
- Deploy to AWS S3
- Create GitHub Release
- Attach release notes

```markdown
- [ ] GitHub Actions workflow triggered
- [ ] Deployment to production successful
- [ ] GitHub Release created
```

#### Post-Deployment Verification

```bash
# Wait 2-3 minutes for deployment to complete

# Visit production site
https://yellowflowersorganicfarm.com
```

**Smoke Test Checklist**:
```markdown
- [ ] Homepage loads successfully
- [ ] Navigation menu works
- [ ] New articles accessible
- [ ] All critical links work
- [ ] No 404 errors
- [ ] No console errors
- [ ] Mobile view works
- [ ] Google Maps loads
- [ ] Social links work
```

#### Merge Back to Develop

```bash
# Keep develop in sync with main
git checkout develop
git pull origin develop
git merge main --no-ff -m "Merge release v1.1.0 back to develop"
git push origin develop

# Delete release branch (optional)
git branch -d release/v1.1.0
git push origin --delete release/v1.1.0
```

```markdown
- [ ] Merged back to `develop`
- [ ] `develop` branch updated
- [ ] Release branch deleted
```

### Phase 3: Post-Release (24 hours after)

#### Monitoring

```markdown
- [ ] No critical errors reported
- [ ] Analytics tracking working
- [ ] Performance metrics normal
- [ ] User feedback collected
```

#### Communication

```markdown
- [ ] Release announcement sent
- [ ] Stakeholders notified
- [ ] Team debriefed
- [ ] Lessons learned documented
```

## 🔧 Hotfix Process

**When to use**: Critical production bug that needs immediate fix

### Hotfix Timeline

```
Total Time: 2-4 hours
├── 30 min: Identify and reproduce bug
├── 1 hour: Develop and test fix
├── 30 min: Review and approval
├── 30 min: Deploy and verify
└── 30 min: Merge back and cleanup
```

### Hotfix Steps

#### 1. Create Hotfix Branch

```bash
# From main (production)
git checkout main
git pull origin main

# Create hotfix branch
git checkout -b hotfix/fix-critical-dropdown

# Make your fix
# ... edit files ...

# Test locally
# ... verify fix works ...

# Commit
git add .
git commit -m "fix: Critical dropdown menu bug on mobile"

# Push
git push origin hotfix/fix-critical-dropdown
```

#### 2. Quick Review & Approval

```markdown
- [ ] Bug fix verified locally
- [ ] QE tested the hotfix
- [ ] Code reviewed (fast-track)
- [ ] Approved for production
```

#### 3. Merge & Deploy

```bash
# Merge to main
git checkout main
git merge hotfix/fix-critical-dropdown --no-ff

# Bump patch version
git tag -a v1.0.1 -m "Hotfix v1.0.1: Fix critical dropdown bug"

# Push
git push origin main
git push origin v1.0.1
```

#### 4. Verify & Merge Back

```bash
# Test production
curl -I https://yellowflowersorganicfarm.com
# Verify: HTTP/2 200

# Merge to develop
git checkout develop
git merge hotfix/fix-critical-dropdown --no-ff
git push origin develop

# Delete hotfix branch
git branch -d hotfix/fix-critical-dropdown
git push origin --delete hotfix/fix-critical-dropdown
```

```markdown
- [ ] Hotfix deployed to production
- [ ] Production verified working
- [ ] Merged back to `develop`
- [ ] Hotfix branch deleted
- [ ] Post-mortem scheduled
```

## ⏮️ Rollback Procedure

**When to rollback**:
- Critical bug discovered post-deployment
- Site is completely broken
- Security vulnerability exposed

### Quick Rollback (Method 1: Revert to Previous Tag)

```bash
# 1. Find previous working version
git tag
# Output: v1.0.0, v1.0.1, v1.1.0

# 2. Checkout previous version
git checkout v1.0.1

# 3. Create rollback branch
git checkout -b rollback-to-v1.0.1

# 4. Force push to main
git checkout main
git reset --hard v1.0.1
git push origin main --force

# GitHub Actions will auto-deploy the old version
```

**Rollback Checklist**:
```markdown
- [ ] Identified last working version
- [ ] Rolled back to previous tag
- [ ] Deployment successful
- [ ] Production verified working
- [ ] Team notified of rollback
- [ ] Root cause analysis scheduled
```

### Manual Rollback (Method 2: AWS S3)

```bash
# Re-deploy previous version from GitHub release

# 1. Download previous release
# Go to: https://github.com/yourorg/Yellow-Flowers-Organics/releases

# 2. Extract release artifact
unzip yellow-flowers-v1.0.1.zip

# 3. Deploy to S3
cd yellow-flowers-v1.0.1
aws s3 sync . s3://yellowflowersorganicfarm.com --delete

# 4. Verify
curl https://yellowflowersorganicfarm.com
```

### Post-Rollback

```markdown
- [ ] Root cause identified
- [ ] Bug fix created in develop
- [ ] Tested thoroughly
- [ ] Schedule new release
- [ ] Postmortem document created
```

## 📝 Release Notes Template

```markdown
# Release v1.1.0 - [Date]

## 🎉 What's New

### New Features
- **New Articles**: Added 3 new bio-fertilizer guides:
  - Phosphate Solubilizing Bacteria (PSB)
  - Potash Mobilizing Bacteria (KMB)
  - Effective Microorganisms (EM)
- **Search Functionality**: Added article search in Learning Center
- **Newsletter Signup**: New subscription form in footer

### Improvements
- **Mobile Navigation**: Improved dropdown menu UX on tablets
- **Performance**: Reduced page load time by 25%
- **Accessibility**: Improved keyboard navigation and screen reader support

## 🐛 Bug Fixes
- Fixed dropdown menu not closing on iPad (#234)
- Corrected table overflow on mobile (#245)
- Fixed broken link in Azotobacter article (#256)
- Resolved social icon alignment issue (#267)

## 🔧 Technical Changes
- Refactored CSS for better maintainability
- Optimized images (future-ready)
- Updated GitHub Actions workflow

## 📚 Documentation
- Updated CONTRIBUTING.md with new workflow
- Added QE_GUIDE.md for testing standards
- Enhanced DEVELOPER_GUIDE.md with examples

## ⚠️ Known Issues
- None

## 🙏 Contributors
- @developer1 - New articles and mobile improvements
- @developer2 - Performance optimizations
- @tester1 - QE testing and bug reports

## 📦 Full Changelog
See: https://github.com/yourorg/Yellow-Flowers-Organics/compare/v1.0.0...v1.1.0

## 🔗 Links
- **Live Site**: https://yellowflowersorganicfarm.com
- **GitHub Release**: https://github.com/yourorg/Yellow-Flowers-Organics/releases/tag/v1.1.0
- **Documentation**: https://github.com/yourorg/Yellow-Flowers-Organics/blob/main/README.md
```

## 📊 Release Metrics

### Track These Metrics

| Metric | Target | How to Measure |
|--------|--------|----------------|
| Deployment Success Rate | 100% | GitHub Actions status |
| Deployment Time | < 5 min | Actions workflow duration |
| Post-Deploy Bugs | 0 critical | GitHub Issues |
| Rollback Rate | < 5% | Rollback count / releases |
| Time to Production | < 4 weeks | Feature start → deploy |

### Release Dashboard

```markdown
## Q1 2024 Release Summary

**Total Releases**: 3
- Major: 0
- Minor: 2
- Patch: 1

**Deployment Success**: 100% (3/3)
**Average Deployment Time**: 3.5 minutes
**Rollbacks**: 0
**Post-Deploy Critical Bugs**: 0

**New Features Delivered**: 8
**Bugs Fixed**: 15
**Performance Improvement**: +30%
```

## 🔔 Release Communication

### Pre-Release Announcement

**To**: Development Team
**Subject**: Code Freeze for v1.1.0 Release

```
Hi Team,

We're entering code freeze for release v1.1.0 scheduled for [Date].

**What this means**:
- No new features merged to `develop`
- Only critical bug fixes allowed
- Release branch: `release/v1.1.0`
- Testing phase starts tomorrow

**Timeline**:
- [Date]: Code freeze
- [Date]: QE testing complete
- [Date]: Release to production

Please ensure all pending PRs are merged or moved to next release.

Thanks!
[Release Manager]
```

### Post-Release Announcement

**To**: All Stakeholders
**Subject**: 🎉 Yellow Flowers Website v1.1.0 Released!

```
Hi All,

We're excited to announce the release of v1.1.0!

**Highlights**:
✅ 3 new bio-fertilizer articles
✅ Improved mobile experience
✅ 25% faster page load

**What's Changed**:
See full release notes: [link]

**Known Issues**:
None

The update is live now: https://yellowflowersorganicfarm.com

Questions? Reply to this email or check our documentation.

Cheers,
[Release Manager]
```

## 📞 Release Team Roles

| Role | Responsibility | Person |
|------|----------------|--------|
| **Release Manager** | Coordinates release, manages timeline | [Name] |
| **Tech Lead** | Approves technical changes, code review | [Name] |
| **QE Lead** | Oversees testing, signs off on quality | [Name] |
| **DevOps** | Manages deployment, infrastructure | [Name] |
| **Product Owner** | Prioritizes features, UAT approval | [Name] |

## 🎯 Release Best Practices

### Do's ✅

- ✅ Follow semantic versioning strictly
- ✅ Test thoroughly before release
- ✅ Create detailed release notes
- ✅ Communicate timeline clearly
- ✅ Have rollback plan ready
- ✅ Monitor after deployment
- ✅ Document lessons learned

### Don'ts ❌

- ❌ Release on Fridays (no support over weekend)
- ❌ Skip testing to rush release
- ❌ Merge unreviewed code
- ❌ Deploy without backup
- ❌ Ignore warnings in CI/CD
- ❌ Release multiple majors features together
- ❌ Forget to update documentation

## 📅 Release Calendar Template

```markdown
## 2024 Release Schedule

| Version | Type | Planned Date | Features |
|---------|------|--------------|----------|
| v1.1.0 | Minor | 2024-02-15 | New articles, search |
| v1.2.0 | Minor | 2024-03-15 | Contact form, testimonials |
| v1.3.0 | Minor | 2024-04-15 | Gallery, blog improvements |
| v2.0.0 | Major | 2024-Q3 | Complete redesign |

**Note**: Dates are tentative and subject to change based on development progress.
```

---

## 📞 Questions?

- **Release Issues**: Create GitHub issue with `release` label
- **Emergency Hotfix**: Contact DevOps team immediately
- **Process Questions**: Refer to CONTRIBUTING.md

---

**Happy Releasing! 🚀**


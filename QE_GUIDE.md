# 🧪 Quality Engineering (QE) Guide

## 📋 Table of Contents

1. [Testing Strategy](#testing-strategy)
2. [Testing Environments](#testing-environments)
3. [Test Cases](#test-cases)
4. [Manual Testing](#manual-testing)
5. [Automated Testing](#automated-testing)
6. [Performance Testing](#performance-testing)
7. [Accessibility Testing](#accessibility-testing)
8. [Browser & Device Testing](#browser--device-testing)
9. [Bug Reporting](#bug-reporting)
10. [Quality Checklist](#quality-checklist)

## 🎯 Testing Strategy

### Test Pyramid

```
           /\
          /  \
         /E2E \        ← End-to-End (Manual)
        /------\
       /        \
      / Visual  \     ← Visual Regression
     /----------\
    /            \
   /   Functional \   ← Functional Testing
  /--------------\
```

### Testing Levels

| Level | Type | Frequency | Responsibility |
|-------|------|-----------|----------------|
| **Level 1** | Developer Testing | On every commit | Developer |
| **Level 2** | QE Functional Testing | On PR creation | QE Team |
| **Level 3** | Cross-browser Testing | Before release | QE Team |
| **Level 4** | UAT (User Acceptance) | On staging | Product Owner |
| **Level 5** | Production Smoke Test | After deployment | DevOps + QE |

## 🌍 Testing Environments

### 1. Local Development Environment

**URL**: `http://localhost:8000` or `http://localhost:5500` (Live Server)

**Purpose**: Developer testing before committing code

**Setup**:
```bash
# Option 1: Using live-server
live-server --port=8000

# Option 2: Using Python
python -m http.server 8000

# Option 3: VS Code Live Server extension
# Right-click index.html → Open with Live Server
```

**Testing Checklist**:
- ✅ Code changes work as expected
- ✅ No console errors
- ✅ Responsive on mobile (DevTools)
- ✅ Links and navigation functional

---

### 2. Development Environment (Dev Branch)

**URL**: Feature branch on GitHub

**Purpose**: Integration testing for new features

**How to Test**:
```bash
# Pull the feature branch
git fetch origin
git checkout feature/branch-name

# Run local server
live-server

# Test the feature
```

**Testing Checklist**:
- ✅ Feature works in isolation
- ✅ No conflicts with existing features
- ✅ All edge cases covered
- ✅ No breaking changes

---

### 3. Staging Environment (Develop Branch)

**URL**: `https://staging.yellowflowersorganicfarm.com` (if configured)
OR test from `develop` branch locally

**Purpose**: Pre-production testing with all features integrated

**Setup (Optional AWS S3 Staging)**:
```bash
# Deploy to staging S3 bucket
aws s3 sync . s3://staging-yellowflowers --delete
```

**Testing Checklist**:
- ✅ All features work together
- ✅ Full regression testing
- ✅ Performance testing
- ✅ Security testing
- ✅ Cross-browser testing

---

### 4. Production Environment

**URL**: `https://yellowflowersorganicfarm.com`

**Purpose**: Live environment for end users

**Testing** (Post-deployment):
- ✅ Smoke test critical paths
- ✅ Verify deployment success
- ✅ Check analytics and monitoring

---

## 📝 Test Cases

### Test Case Template

```markdown
## TC-001: Test Case Title

**Priority**: High / Medium / Low
**Type**: Functional / Visual / Performance / Security
**Environment**: Local / Staging / Production

### Preconditions:
- User is on homepage
- No cache

### Test Steps:
1. Navigate to X
2. Click on Y
3. Verify Z appears

### Expected Result:
Z should appear with correct styling

### Actual Result:
(Fill during testing)

### Status:
✅ Pass | ❌ Fail | ⚠️ Blocked

### Notes:
Any additional information
```

---

### Critical Path Test Cases

#### TC-001: Homepage Load

**Priority**: High
**Type**: Functional

**Test Steps**:
1. Open browser
2. Navigate to `https://yellowflowersorganicfarm.com`
3. Wait for page to fully load

**Expected Result**:
- ✅ Page loads within 3 seconds
- ✅ No 404 errors
- ✅ No console errors
- ✅ All sections visible
- ✅ Navigation bar appears
- ✅ Hero image/text displays correctly

---

#### TC-002: Navigation Menu - Desktop

**Priority**: High
**Type**: Functional

**Preconditions**: Desktop viewport (1920px)

**Test Steps**:
1. Load homepage
2. Hover over "Learning Center" menu item
3. Observe dropdown menu
4. Click on any article link

**Expected Result**:
- ✅ Dropdown appears on hover
- ✅ All article links visible
- ✅ Clicking link navigates to article
- ✅ No page jump or flicker

---

#### TC-003: Navigation Menu - Mobile

**Priority**: High
**Type**: Functional

**Preconditions**: Mobile viewport (375px)

**Test Steps**:
1. Load homepage on mobile
2. Click hamburger menu icon
3. Observe menu opens
4. Click "Learning Center"
5. Observe dropdown
6. Click any article link
7. Verify navigation

**Expected Result**:
- ✅ Hamburger icon visible
- ✅ Menu slides in smoothly
- ✅ Dropdown expands on click
- ✅ Article loads correctly
- ✅ Menu closes after navigation

---

#### TC-004: Article Page Load

**Priority**: High
**Type**: Functional

**Test Steps**:
1. Click on "Azotobacter" article from homepage
2. Wait for page load
3. Scroll through entire article

**Expected Result**:
- ✅ Article loads completely
- ✅ All sections render correctly
- ✅ Tables display properly
- ✅ Related articles sidebar appears
- ✅ Navigation bar works
- ✅ No broken links

---

#### TC-005: Smooth Scrolling

**Priority**: Medium
**Type**: Functional

**Test Steps**:
1. On homepage, click "About Us" in navigation
2. Observe scroll behavior

**Expected Result**:
- ✅ Page smoothly scrolls to About section
- ✅ No jarring jump
- ✅ Section is properly visible after scroll

---

#### TC-006: Google Maps Embed

**Priority**: Medium
**Type**: Functional

**Test Steps**:
1. Scroll to "Visit Us" section
2. Find Google Maps iframe
3. Interact with map (zoom, pan)

**Expected Result**:
- ✅ Map loads correctly
- ✅ Location marker visible
- ✅ Can zoom and pan
- ✅ "Get Directions" link works

---

#### TC-007: Social Media Links

**Priority**: Medium
**Type**: Functional

**Test Steps**:
1. Scroll to footer
2. Click Facebook icon
3. Verify it opens in new tab

**Expected Result**:
- ✅ Link opens in new tab
- ✅ Correct Facebook page loads
- ✅ Icons display correctly

---

#### TC-008: Responsive Design - Tablet

**Priority**: High
**Type**: Visual

**Preconditions**: iPad viewport (768px)

**Test Steps**:
1. Resize browser to 768px width
2. Navigate through all sections
3. Test navigation menu
4. Open an article

**Expected Result**:
- ✅ Layout adjusts correctly
- ✅ No horizontal scroll
- ✅ Text remains readable
- ✅ Images scale properly
- ✅ No overlapping elements

---

#### TC-009: Responsive Design - Mobile

**Priority**: High
**Type**: Visual

**Preconditions**: iPhone viewport (375px)

**Test Steps**:
1. Resize browser to 375px width
2. Navigate all sections
3. Test mobile menu
4. Open article on mobile

**Expected Result**:
- ✅ All content fits viewport
- ✅ No horizontal scroll
- ✅ Touch targets ≥ 44x44px
- ✅ Text is readable (≥16px)
- ✅ Hamburger menu functional

---

#### TC-010: Article Content Readability

**Priority**: High
**Type**: Visual

**Test Steps**:
1. Open any article
2. Read through content
3. Check tables, lists, grids

**Expected Result**:
- ✅ Text contrast ratio ≥ 4.5:1
- ✅ Line height comfortable (1.5-1.6)
- ✅ Tables scroll horizontally on mobile
- ✅ Code blocks readable
- ✅ Headings hierarchical (h1→h2→h3)

---

#### TC-011: Related Articles Links

**Priority**: Medium
**Type**: Functional

**Test Steps**:
1. Open any article
2. Scroll to "Related Articles" section
3. Click on a related article link

**Expected Result**:
- ✅ Link navigates to correct article
- ✅ New article loads completely
- ✅ No 404 errors

---

#### TC-012: Learning Center Dropdown (All Articles)

**Priority**: High
**Type**: Functional

**Test Steps**:
1. Open navigation dropdown
2. Count all article links
3. Verify each link

**Expected Result**:
- ✅ All 15+ articles listed
- ✅ Each link works
- ✅ "View All Articles" link works
- ✅ Divider line displays correctly

---

### Edge Case Test Cases

#### TC-013: Very Slow Network

**Priority**: Medium
**Type**: Performance

**Test Steps**:
1. Open Chrome DevTools
2. Set Network throttling to "Slow 3G"
3. Load homepage
4. Observe loading behavior

**Expected Result**:
- ✅ Page loads within 10 seconds
- ✅ No broken images (or placeholders)
- ✅ Critical content loads first
- ✅ User can interact during load

---

#### TC-014: Long Article Scroll Performance

**Priority**: Medium
**Type**: Performance

**Test Steps**:
1. Open longest article (e.g., VAM Mycorrhiza)
2. Scroll rapidly from top to bottom
3. Observe FPS and lag

**Expected Result**:
- ✅ Smooth scrolling (60 FPS)
- ✅ No lag or stutter
- ✅ Images load as needed

---

#### TC-015: Keyboard Navigation

**Priority**: High (Accessibility)
**Type**: Accessibility

**Test Steps**:
1. Load homepage
2. Use only keyboard (Tab, Enter, Escape)
3. Navigate through all interactive elements

**Expected Result**:
- ✅ Can tab through all links
- ✅ Focus indicators visible
- ✅ Can open/close dropdown with Enter
- ✅ Can navigate menu with arrows
- ✅ Escape closes dropdown/menu

---

#### TC-016: Screen Reader Compatibility

**Priority**: High (Accessibility)
**Type**: Accessibility

**Test Steps**:
1. Enable screen reader (NVDA/JAWS/VoiceOver)
2. Navigate homepage
3. Navigate an article

**Expected Result**:
- ✅ All text is read correctly
- ✅ Navigation announced properly
- ✅ Images have alt text
- ✅ Headings announced in order
- ✅ Links descriptive

---

## 🖥️ Browser & Device Testing

### Browser Compatibility Matrix

| Browser | Version | Priority | OS |
|---------|---------|----------|----|
| Chrome | Latest | **High** | Windows, macOS, Linux |
| Firefox | Latest | **High** | Windows, macOS, Linux |
| Safari | Latest | **High** | macOS, iOS |
| Edge | Latest | **Medium** | Windows |
| Samsung Internet | Latest | **Medium** | Android |
| Chrome Mobile | Latest | **High** | Android, iOS |

### Device Testing Matrix

| Device | Screen Size | Viewport | Priority |
|--------|-------------|----------|----------|
| iPhone SE | 375x667 | 375px | **High** |
| iPhone 12/13 | 390x844 | 390px | **High** |
| iPad | 768x1024 | 768px | **High** |
| Desktop HD | 1920x1080 | 1920px | **High** |
| Desktop 4K | 3840x2160 | 3840px | **Medium** |

### Testing Tools

```bash
# Chrome DevTools Device Emulation
1. F12 → Toggle Device Toolbar (Ctrl+Shift+M)
2. Select device from dropdown
3. Test responsive behavior

# BrowserStack (for real devices)
https://www.browserstack.com

# Responsive Design Checker
http://responsivedesignchecker.com
```

---

## ⚡ Performance Testing

### Metrics to Monitor

| Metric | Target | Tool |
|--------|--------|------|
| First Contentful Paint (FCP) | < 1.5s | Lighthouse |
| Largest Contentful Paint (LCP) | < 2.5s | Lighthouse |
| Time to Interactive (TTI) | < 3.5s | Lighthouse |
| Total Blocking Time (TBT) | < 200ms | Lighthouse |
| Cumulative Layout Shift (CLS) | < 0.1 | Lighthouse |
| Total Page Size | < 500KB | DevTools Network |
| Number of Requests | < 20 | DevTools Network |

### Performance Testing Checklist

```markdown
## Performance Test - [Date]

### Environment: Production

### Test Tool: Google Lighthouse

**Scores**:
- Performance: __/100 (Target: >90)
- Accessibility: __/100 (Target: >95)
- Best Practices: __/100 (Target: >90)
- SEO: __/100 (Target: >90)

**Core Web Vitals**:
- FCP: __ seconds (Target: <1.5s)
- LCP: __ seconds (Target: <2.5s)
- CLS: __ (Target: <0.1)
- TTI: __ seconds (Target: <3.5s)

**Issues Found**:
1. 
2. 
3. 

**Recommendations**:
1. 
2. 
3. 
```

### How to Run Lighthouse

```bash
# Option 1: Chrome DevTools
1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Select categories
4. Click "Generate report"

# Option 2: CLI
npm install -g lighthouse
lighthouse https://yellowflowersorganicfarm.com --view
```

---

## ♿ Accessibility Testing

### WCAG 2.1 Compliance Checklist

#### Level A (Must Have)

- ✅ **1.1.1**: All images have alt text
- ✅ **1.3.1**: Semantic HTML structure
- ✅ **2.1.1**: Keyboard accessible
- ✅ **2.4.1**: Skip to main content
- ✅ **3.1.1**: Page language declared
- ✅ **4.1.2**: ARIA labels for interactive elements

#### Level AA (Should Have)

- ✅ **1.4.3**: Color contrast ratio ≥ 4.5:1
- ✅ **1.4.5**: No text in images
- ✅ **2.4.6**: Headings and labels descriptive
- ✅ **2.4.7**: Focus visible
- ✅ **3.2.3**: Consistent navigation
- ✅ **3.3.2**: Form labels provided

### Accessibility Testing Tools

```bash
# WAVE Browser Extension
https://wave.webaim.org/extension/

# axe DevTools Extension
https://www.deque.com/axe/devtools/

# Lighthouse Accessibility Audit
# (Built into Chrome DevTools)

# Screen Readers
- Windows: NVDA (free)
- macOS: VoiceOver (built-in)
- Linux: Orca (free)
```

### Manual Accessibility Tests

#### Test 1: Keyboard Navigation

```markdown
**Steps**:
1. Use Tab key to navigate forward
2. Use Shift+Tab to navigate backward
3. Use Enter to activate links/buttons
4. Use Arrow keys in dropdown

**Expected**:
- All interactive elements reachable
- Focus indicator clearly visible
- Logical tab order
- No keyboard traps
```

#### Test 2: Screen Reader

```markdown
**Steps**:
1. Enable screen reader
2. Navigate homepage
3. Listen to announcements

**Expected**:
- All text announced
- Images have descriptive alt text
- Headings announced with level
- Links descriptive ("Read more about Azotobacter" not "Click here")
```

#### Test 3: Color Contrast

```markdown
**Tool**: WebAIM Contrast Checker
https://webaim.org/resources/contrastchecker/

**Test**:
- Primary text: #2c3e50 on #ffffff
- Links: #2d5016 on #f5f1e8
- Buttons: #ffffff on #2d5016

**Target**: Ratio ≥ 4.5:1 for normal text, ≥ 3:1 for large text
```

---

## 🐛 Bug Reporting

### Bug Report Template

```markdown
## Bug Report: [Short Description]

### Environment:
- **Browser**: Chrome 120
- **OS**: Windows 11
- **Device**: Desktop
- **Screen Size**: 1920x1080
- **URL**: https://yellowflowersorganicfarm.com/articles/azotobacter.html

### Priority:
- [ ] 🔴 Critical (site broken)
- [x] 🟠 High (major feature broken)
- [ ] 🟡 Medium (minor issue)
- [ ] 🟢 Low (cosmetic)

### Type:
- [x] Functional
- [ ] Visual
- [ ] Performance
- [ ] Security
- [ ] Accessibility

### Summary:
Brief one-line description of the bug

### Steps to Reproduce:
1. Go to homepage
2. Click on "Azotobacter" article
3. Scroll to "Multiplication" section
4. Observe the issue

### Expected Behavior:
Table should display correctly with 3 columns

### Actual Behavior:
Table overflows viewport on mobile, no horizontal scroll

### Screenshots:
(Attach screenshots/screen recording)

### Console Errors:
```
(Paste any console errors here)
```

### Additional Context:
- Tested on mobile (375px width)
- Issue does not occur on desktop
- Related to CSS grid layout

### Suggested Fix:
Add `overflow-x: auto` to `.materials-table` in article-styles.css

### Related Issues:
#123, #456
```

### Bug Priority Levels

| Priority | Description | Response Time | Fix Time |
|----------|-------------|---------------|----------|
| 🔴 **Critical** | Site is down or unusable | 1 hour | Same day |
| 🟠 **High** | Major feature broken | 4 hours | 1-2 days |
| 🟡 **Medium** | Minor issue, workaround exists | 1 day | 1 week |
| 🟢 **Low** | Cosmetic issue | 1 week | Next release |

---

## ✅ Quality Checklist

### Pre-Commit Checklist (Developer)

```markdown
- [ ] Code tested locally
- [ ] No console errors
- [ ] Responsive on mobile (375px)
- [ ] All links work
- [ ] No linter errors
- [ ] Commit message follows convention
```

### Pre-PR Checklist (Developer)

```markdown
- [ ] All pre-commit checks pass
- [ ] Tested on Chrome, Firefox, Safari
- [ ] Tested on mobile device
- [ ] No breaking changes
- [ ] Documentation updated
- [ ] Self-review completed
```

### PR Review Checklist (QE)

```markdown
- [ ] Pull branch and test locally
- [ ] Verify functionality works
- [ ] Test edge cases
- [ ] Check responsive design
- [ ] Verify accessibility
- [ ] No performance regression
- [ ] Code follows standards
- [ ] Test cases pass
```

### Pre-Release Checklist (QE Lead)

```markdown
- [ ] All PR tests passed
- [ ] Full regression testing completed
- [ ] Cross-browser testing done
- [ ] Performance testing done
- [ ] Accessibility audit passed
- [ ] Security scan clean
- [ ] Staging environment tested
- [ ] Release notes prepared
```

### Post-Deployment Checklist (DevOps + QE)

```markdown
- [ ] Deployment successful
- [ ] Smoke test passed
- [ ] Critical paths functional
- [ ] Analytics tracking works
- [ ] No 404 errors
- [ ] SSL certificate valid
- [ ] CDN cache cleared
- [ ] Monitoring alerts configured
```

---

## 📊 Test Reporting

### Daily Test Report Template

```markdown
# QE Daily Report - [Date]

## Summary
- **Total Tests Executed**: 25
- **Passed**: 23 ✅
- **Failed**: 2 ❌
- **Blocked**: 0 ⚠️

## Tests Executed
1. TC-001: Homepage Load - ✅ Pass
2. TC-002: Navigation Menu - ✅ Pass
3. TC-008: Responsive Tablet - ❌ Fail
   - Issue: Dropdown not closing on iPad
   - Bug: #234
...

## Bugs Found
- #234: Dropdown menu not closing on iPad (High Priority)
- #235: Social icon misaligned on mobile (Low Priority)

## Blockers
None

## Next Steps
- Retest #234 after fix
- Continue cross-browser testing
```

---

## 🔄 Regression Testing

### Regression Test Suite

Run these tests before every release:

1. **Smoke Tests** (Critical paths - 15 min)
2. **Functional Tests** (All features - 2 hours)
3. **Responsive Tests** (All devices - 1 hour)
4. **Browser Tests** (All browsers - 2 hours)
5. **Performance Tests** (Lighthouse - 30 min)
6. **Accessibility Tests** (WAVE/axe - 30 min)

**Total Time**: ~6 hours

---

## 📞 QE Team Contacts

- **QE Lead**: [Name]
- **Manual Testers**: [Names]
- **Automation Engineer**: [Name]
- **Performance Tester**: [Name]

**Communication Channels**:
- Slack: `#qa-team`
- Email: qa@yellowflowersorganics.com
- Bug Tracker: GitHub Issues

---

**Quality is Everyone's Responsibility! 🌟**


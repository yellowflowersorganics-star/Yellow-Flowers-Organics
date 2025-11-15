# Changelog

All notable changes to the Yellow Flowers Organic Farm website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- Contact form functionality
- Image gallery for farm photos
- Newsletter subscription integration
- Article search functionality

---

## [1.0.0] - 2024-11-15

### Added
- Initial website launch
- Homepage with hero section, about, what we grow, practices, visit us sections
- Google Maps integration showing farm location
- Responsive navigation with dropdown menu for Learning Center
- Mobile-friendly hamburger menu
- Smooth scrolling navigation
- Social media links (Facebook, Instagram, WhatsApp) in footer

#### Learning Center Articles (15 total)
1. **Integrated Fish & Duck Farming** - Comprehensive guide to integrated aquaculture
2. **Fertilizer & Micronutrient Classification** - Stage-by-stage nutrient application guide
3. **On-Farm Multiplication** - Bio-input production and multiplication guide
4. **OWDC Guide** - Organic Waste Decomposer complete guide
5. **Trichoderma DKC** - Bio-fungicide guide with multiplication
6. **NWDC Kawach** - Natural disease control guide
7. **NPK Bacteria** - Nitrogen, Phosphorus, Potassium bacteria guide
8. **Azotobacter** - Nitrogen-fixing bacteria guide
9. **Acetobacter** - Endophytic nitrogen fixer guide
10. **Azospirillum** - PGPR bacteria guide
11. **Rhizobium** - Legume-specific nitrogen fixer guide
12. **Beauveria bassiana** - Fungal entomopathogen guide
13. **Neem/Garlic Bio-Insecticide** - Natural pest control guide
14. **Jeevamrut** - Microbial bio-culture guide
15. **VAM Mycorrhiza** - Mycorrhizal fungi guide

#### Documentation
- README.md with project overview
- CONTRIBUTING.md with developer workflow
- DEVELOPER_GUIDE.md with tech stack and architecture
- QE_GUIDE.md with testing standards and procedures
- RELEASE_PROCESS.md with release workflow
- DEPLOYMENT_GUIDE.md with AWS setup instructions
- QUICK_START.md for rapid onboarding
- CHANGELOG.md (this file)

#### CI/CD & Infrastructure
- GitHub Actions workflow for automatic deployment to AWS S3
- GitHub Actions workflow for release creation
- `.gitignore` for excluding unnecessary files
- AWS S3 configuration for static website hosting
- Optional CloudFront CDN integration

### Technical Details
- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Grid and Flexbox, BEM methodology
- **Responsive**: Mobile-first design with breakpoints at 768px and 1024px
- **Deployment**: AWS S3 + CloudFront (optional)
- **CI/CD**: GitHub Actions
- **Version Control**: Git & GitHub

### Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Accessibility compliant (WCAG 2.1 Level AA)
- ✅ SEO optimized with semantic HTML
- ✅ Fast load times (<3 seconds)
- ✅ Progressive enhancement approach
- ✅ Cross-browser compatible (Chrome, Firefox, Safari, Edge)

---

## Version History

### Versioning Scheme

This project follows [Semantic Versioning](https://semver.org/):

- **MAJOR** version (X.0.0): Breaking changes, complete redesigns
- **MINOR** version (1.X.0): New features, new articles, new sections
- **PATCH** version (1.0.X): Bug fixes, typos, small improvements

### Release Tags

All releases are tagged in Git and available on GitHub:
- View all releases: https://github.com/yellowflowersorganics-star/Yellow-Flowers-Organics/releases
- Compare versions: https://github.com/yellowflowersorganics-star/Yellow-Flowers-Organics/compare

---

## How to Update This File

When making a release:

1. Move items from `[Unreleased]` to a new version section
2. Add the version number and date
3. Organize changes under these categories:
   - **Added** for new features
   - **Changed** for changes in existing functionality
   - **Deprecated** for soon-to-be removed features
   - **Removed** for now removed features
   - **Fixed** for any bug fixes
   - **Security** for vulnerability fixes

### Example Entry

```markdown
## [1.1.0] - 2024-12-01

### Added
- Contact form with email integration
- Article search functionality in Learning Center
- Newsletter subscription form

### Changed
- Improved mobile navigation UX
- Enhanced performance (25% faster load time)

### Fixed
- Fixed dropdown menu on iPad
- Corrected table overflow on mobile
- Fixed broken social media links
```

---

## Links

- [Project Homepage](https://yellowflowersorganicfarm.com)
- [GitHub Repository](https://github.com/yellowflowersorganics-star/Yellow-Flowers-Organics)
- [Issue Tracker](https://github.com/yellowflowersorganics-star/Yellow-Flowers-Organics/issues)
- [Contributing Guidelines](CONTRIBUTING.md)
- [Developer Guide](DEVELOPER_GUIDE.md)

---

**Note**: This changelog is for developers and contributors. For user-facing release notes, see the [Releases page](https://github.com/yellowflowersorganics-star/Yellow-Flowers-Organics/releases).


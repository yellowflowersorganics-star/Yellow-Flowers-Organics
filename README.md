# 🌼 Yellow Flowers Organic Farm Website

A beautiful, modern, and responsive website for Yellow Flowers Organic Farm, showcasing sustainable and organic farming practices in Rajasthan, India.

## 🌟 Features

- **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, organic aesthetic with smooth animations and transitions
- **Interactive Elements** - Smooth scrolling, mobile navigation, form handling
- **Comprehensive Content** - Detailed information about the farm, practices, and produce
- **Booking System** - Integrated farm tour booking form
- **Contact Form** - Easy way for visitors to get in touch
- **Gallery Section** - Showcase farm activities and produce (placeholders for images)

## 📁 Project Structure

```
Yellow-Flowers-Organics/
├── index.html              # Main website homepage
├── styles.css              # Main styling with responsive design
├── article-styles.css      # Styles for Learning Center articles
├── script.js               # JavaScript for interactivity
├── articles/               # Learning Center articles (20+ guides)
│   ├── fish-duck-farming.html
│   ├── fertilizer-classification.html
│   ├── on-farm-multiplication.html
│   ├── owdc-guide.html
│   ├── trichoderma-dkc.html
│   ├── nwdc-kawach.html
│   ├── npk-bacteria.html
│   ├── azotobacter.html
│   ├── acetobacter.html
│   ├── azospirillum.html
│   ├── rhizobium.html
│   ├── vam-mycorrhiza.html
│   ├── neem-garlic-insecticide.html
│   ├── beauveria-bassiana.html
│   ├── jeevamrut-guide.html
│   └── panchagavya-guide.html
├── docs/                   # 📚 All documentation
│   ├── README.md           # Documentation index
│   ├── getting-started/    # 🚀 Onboarding & quick start
│   │   ├── QUICK_START.md
│   │   ├── TEAM_ONBOARDING.md
│   │   └── QUICK_REFERENCE.md
│   ├── development/        # 💻 Developer guides
│   │   ├── DEVELOPER_GUIDE.md
│   │   ├── CONTRIBUTING.md
│   │   └── WORKFLOW_DIAGRAM.md
│   ├── deployment/         # 🚢 AWS & deployment
│   │   └── DEPLOYMENT_GUIDE.md
│   ├── quality/            # ✅ Testing & QE
│   │   └── QE_GUIDE.md
│   ├── release/            # 🎯 Release management
│   │   └── RELEASE_PROCESS.md
│   └── github/             # 🔧 GitHub setup
│       ├── BRANCH_PROTECTION.md
│       └── SETUP_BRANCH_PROTECTION.md
├── .github/
│   ├── ISSUE_TEMPLATE/     # Issue templates
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── workflows/          # GitHub Actions for CI/CD
│       ├── deploy-aws.yml  # AWS deployment workflow
│       ├── release.yml     # Release automation
│       ├── ci.yml          # CI checks
│       └── pr-issue-validator.yml  # PR validation
├── CHANGELOG.md            # Version history
├── package.json            # Node.js dev dependencies
└── README.md               # This file
```

## 📚 Documentation for Team Members

> **📂 [View Complete Documentation Index](docs/README.md)** ← Start here for organized docs!

### 🎯 New Project from Scratch?

**📖 [Zero to Production Guide](docs/getting-started/zero-to-production/README.md)** 🚀

Complete step-by-step guide to go from a fresh machine with just an idea → Live website on AWS with dev and production environments. Takes 4-6 hours.

**NOW REORGANIZED**: Split into 8 easy-to-follow phases + troubleshooting guide + checklist!

Covers: Machine setup, GitHub, project creation, AWS infrastructure, CI/CD, branch protection, and first deployment!

---

### 🎯 Quick Start by Role

| If you are... | Start with... | Then read... |
|---------------|---------------|--------------|
| **New Team Member** | [Team Onboarding](docs/getting-started/TEAM_ONBOARDING.md) | Role-specific guides below |
| **Developer** | [Contributing](docs/development/CONTRIBUTING.md) | [Developer Guide](docs/development/DEVELOPER_GUIDE.md) |
| **QA/Tester** | [QE Guide](docs/quality/QE_GUIDE.md) | [Contributing](docs/development/CONTRIBUTING.md) |
| **DevOps** | [Quick Start](docs/getting-started/QUICK_START.md) | [Deployment Guide](docs/deployment/DEPLOYMENT_GUIDE.md) |
| **Release Manager** | [Release Process](docs/release/RELEASE_PROCESS.md) | [Workflow Diagram](docs/development/WORKFLOW_DIAGRAM.md) |

### 📖 Documentation Categories

#### 🚀 Getting Started
- **[Team Onboarding](docs/getting-started/TEAM_ONBOARDING.md)** - Complete onboarding for new members
- **[Quick Start](docs/getting-started/QUICK_START.md)** - Fast AWS deployment (20 mins)
- **[Quick Reference](docs/getting-started/QUICK_REFERENCE.md)** - Daily cheat sheet ⚡

#### 💻 Development
- **[Developer Guide](docs/development/DEVELOPER_GUIDE.md)** - Technical architecture & how-tos
- **[Contributing](docs/development/CONTRIBUTING.md)** - Workflow, standards, PR process
- **[Workflow Diagram](docs/development/WORKFLOW_DIAGRAM.md)** - Visual workflow guides

#### 🚢 Deployment
- **[Deployment Guide](docs/deployment/DEPLOYMENT_GUIDE.md)** - AWS S3 + CloudFront setup

#### ✅ Quality & Testing
- **[QE Guide](docs/quality/QE_GUIDE.md)** - Testing strategy & test cases

#### 🎯 Release Management
- **[Release Process](docs/release/RELEASE_PROCESS.md)** - Versioning, releases, hotfixes
- **[CHANGELOG](CHANGELOG.md)** - Version history

#### 🔧 GitHub Setup
- **[Branch Protection](docs/github/BRANCH_PROTECTION.md)** - Protect main & develop
- **[Setup Guide](docs/github/SETUP_BRANCH_PROTECTION.md)** - Quick visual setup

> 💡 **Tip**: Bookmark the [Documentation Index](docs/README.md) for easy access to all guides!

## 🎨 Design Features

### Color Palette
- **Primary Green**: #4a7c3c (Natural, organic feel)
- **Light Green**: #7fb069 (Fresh, vibrant)
- **Accent Yellow**: #f4d35e (Warm, welcoming)
- **Cream**: #faf8f3 (Soft background)

### Typography
- **Headings**: Playfair Display (Elegant serif)
- **Body**: Poppins (Modern, readable sans-serif)

### Sections

1. **Hero Section**
   - Eye-catching gradient background
   - Farm mission statement
   - Call-to-action buttons
   - Animated scroll indicator

2. **Sustainability Practices**
   - Grid layout with hover effects
   - Icons and descriptions
   - Integrated farming highlight

3. **About Us**
   - Farm story
   - Vision & mission
   - Team information

4. **What We Grow**
   - Featured lemon orchards
   - Seasonal vegetables
   - Intercrops and companion planting
   - Integrated fish & duck farming

5. **Our Practices**
   - Organic fertilizers
   - Bio-insecticides
   - Water management
   - Soil health & biodiversity

6. **Visit Us / Farm Tour**
   - Tour information
   - Booking form with validation
   - Tour highlights

7. **Gallery**
   - Visual showcase (placeholder cards)
   - Ready for image integration

8. **Contact**
   - Contact information
   - Message form
   - Location details

9. **Footer**
   - Quick links
   - Contact details
   - Brand tagline

## 🚀 Getting Started

### Option 1: Open Directly
Simply open `index.html` in your web browser:
- Double-click the file, or
- Right-click and select "Open with" → Your preferred browser

### Option 2: Use a Local Server (Recommended)

#### Using Python:
```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

#### Using Node.js:
```bash
# Install http-server globally (one-time)
npm install -g http-server

# Run server
http-server

# Then visit: http://localhost:8080
```

#### Using VS Code:
1. Install "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1024px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## ✨ Interactive Features

### Navigation
- Fixed navbar with smooth scroll
- Mobile hamburger menu
- Active link highlighting
- Auto-close on mobile after clicking

### Forms
- **Booking Form**: Collects visitor information for farm tours
- **Contact Form**: General inquiries and messages
- Form validation
- Success message display
- Minimum date validation for bookings

### Animations
- Fade-in on scroll for cards and sections
- Hover effects on cards and buttons
- Smooth page transitions
- Bounce animation for scroll indicator

## 🛠️ Customization Guide

### Adding Images

Replace the gradient placeholders in the CSS:

```css
/* Example: Lemon orchards gallery */
.gallery-placeholder.lemon-orchard {
    background: url('images/lemon-orchard.jpg') center/cover;
}
```

### Updating Contact Information

Edit the contact section in `index.html`:
```html
<p>+91 XXX XXX XXXX</p>  <!-- Replace with actual phone -->
<p>info@yellowflowersfarm.com</p>  <!-- Update email -->
```

### Connecting Forms to Backend

In `script.js`, replace the console.log statements with actual API calls:

```javascript
// Booking form
fetch('/api/bookings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(result => {
    showMessage('Booking confirmed!', 'success');
})
.catch(error => {
    showMessage('Error submitting booking', 'error');
});
```

### Changing Colors

Update CSS variables in `styles.css`:
```css
:root {
    --primary-green: #your-color;
    --light-green: #your-color;
    --accent-yellow: #your-color;
}
```

## 📦 Dependencies

The website uses only:
- **Google Fonts** (Poppins & Playfair Display)
- No other external libraries required!
- Pure HTML, CSS, and JavaScript

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📚 Learning Center

The website features a comprehensive Learning Center with 15+ detailed guides on:

### Bio-Fertilizers & Nitrogen Fixers
- **Azotobacter** - Universal N-fixer for all crops (20-40 kg N/ha)
- **Acetobacter** - Endophytic N-fixer for sugar-rich crops
- **Azospirillum** - Root-colonizing PGPR for cereals & grasses
- **Rhizobium** - Symbiotic N-fixer for legumes (50-150 kg N/ha!)
- **NPK Bacteria** - Complete NPK solution

### Bio-Pesticides & Disease Control
- **Neem/Garlic Bio-Insecticide** - Natural pest control
- **Beauveria bassiana** - Fungal entomopathogen (200+ pest species)
- **Trichoderma DKC** - Bio-fungicide for disease control
- **NWDC Kawach** - Plant protection culture

### Bio-Stimulants & Soil Health
- **Jeevamrut** - Complete bio-culture & growth promoter
- **OWDC** - Organic waste decomposer
- **VAM Mycorrhiza** - Root extension miracle (100x surface area)
- **On-Farm Multiplication** - Guide to producing bio-inputs

### Farming Practices
- **Fertilizer & Micronutrient Classification** - Stage-by-stage guide
- **Integrated Fish & Duck Farming** - Sustainable farming system

Each article includes:
- ✅ Detailed scientific explanation
- ✅ On-farm multiplication procedures
- ✅ Application methods & dosages
- ✅ Do's & Don'ts
- ✅ Troubleshooting guides
- ✅ Real farm experience

## 🚀 Deployment

### Quick Start
1. Clone the repository
2. Configure AWS credentials (see [Quick Start Guide](docs/getting-started/QUICK_START.md))
3. Push to `main` branch - automatically deploys!

### Deployment Options

#### 1. Automatic Deployment (GitHub Actions)
Every push to `main` triggers automatic deployment to AWS S3:
```bash
git add .
git commit -m "Update content"
git push origin main
```

#### 2. Create a Release
Tag and release versions:
```bash
git tag -a v1.0.0 -m "First release"
git push origin v1.0.0
```
This creates a GitHub release with changelog and deployment package.

#### 3. Manual Deployment
Trigger deployment from GitHub Actions tab.

See [Deployment Guide](docs/deployment/DEPLOYMENT_GUIDE.md) for complete AWS setup instructions.

## 📝 Future Enhancements

Consider adding:
- Image gallery with lightbox
- Testimonials from visitors
- Newsletter subscription
- Multi-language support (Hindi, Marathi)
- Accessibility improvements (ARIA labels)
- SEO optimization

## 🤝 Contributing

To improve this website:
1. Test on various devices
2. Add real images
3. Integrate with backend API
4. Optimize performance
5. Add more interactive features

## 📄 License

This website is created for Yellow Flowers Organic Farm.

## 🌍 About Yellow Flowers Organic Farm

Located in the fertile lands of Rajasthan, India, Yellow Flowers Organic Farm is a 50-acre sustainable farming initiative committed to:
- Chemical-free organic produce
- Sustainable farming practices
- Community education
- Environmental conservation

**Tagline**: Growing Organically. Farming Sustainably. Living Naturally.

---

Made with 🌱 for a greener future

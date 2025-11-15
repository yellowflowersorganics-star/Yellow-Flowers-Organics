# 👨‍💻 Developer Guide - Yellow Flowers Organic Farm Website

## 📚 Tech Stack

### Core Technologies

| Technology | Version | Purpose | Documentation |
|------------|---------|---------|---------------|
| **HTML5** | Latest | Structure & Content | [MDN HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) |
| **CSS3** | Latest | Styling & Layout | [MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) |
| **JavaScript (ES6+)** | ES2020+ | Interactivity | [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
| **Git** | 2.30+ | Version Control | [Git Docs](https://git-scm.com/doc) |
| **GitHub Actions** | - | CI/CD Pipeline | [Actions Docs](https://docs.github.com/en/actions) |
| **AWS S3** | - | Static Hosting | [S3 Docs](https://docs.aws.amazon.com/s3/) |
| **AWS CloudFront** | - | CDN (Optional) | [CloudFront Docs](https://docs.aws.amazon.com/cloudfront/) |

### Development Tools

| Tool | Purpose | Optional? |
|------|---------|-----------|
| **VS Code** | Code Editor | Recommended |
| **Live Server** | Local Development Server | Yes |
| **Chrome DevTools** | Debugging & Testing | No |
| **Git** | Version Control | No |
| **Node.js** | Package Management | Yes |

### Key Libraries & Frameworks

**None!** This is a **vanilla JavaScript** project - no frameworks needed.

**Why no frameworks?**
- ✅ Faster load times
- ✅ Better SEO
- ✅ Easier maintenance
- ✅ Lower complexity
- ✅ No build step required

## 🗂️ Project Architecture

### Directory Structure

```
Yellow-Flowers-Organics/
│
├── 📄 index.html                    # Main homepage (entry point)
├── 🎨 styles.css                    # Global styles, navigation, sections
├── 🎨 article-styles.css            # Reusable article page styles
├── ⚡ script.js                      # Navigation, dropdowns, smooth scroll
│
├── 📁 articles/                     # All Learning Center articles
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
│   ├── beauveria-bassiana.html
│   ├── neem-garlic-insecticide.html
│   ├── jeevamrut-guide.html
│   ├── vam-mycorrhiza.html
│   └── ... (more articles)
│
├── 📁 .github/workflows/            # CI/CD automation
│   ├── deploy-aws.yml               # Auto-deploy to AWS S3
│   └── release.yml                  # Create releases on tags
│
├── 📁 images/                       # Static assets (future)
│   └── (placeholder for images)
│
├── 📄 .gitignore                    # Ignored files
├── 📄 README.md                     # Project overview
├── 📄 CONTRIBUTING.md               # How to contribute
├── 📄 DEVELOPER_GUIDE.md            # This file
├── 📄 QE_GUIDE.md                   # Quality Engineering guide
├── 📄 RELEASE_PROCESS.md            # Release workflow
├── 📄 DEPLOYMENT_GUIDE.md           # AWS deployment setup
└── 📄 QUICK_START.md                # Quick setup guide
```

### Page Structure

#### Homepage (`index.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags, title, CSS links -->
</head>
<body>
    <!-- Navigation Bar -->
    <nav class="navbar">...</nav>
    
    <!-- Hero Section -->
    <section id="home" class="hero">...</section>
    
    <!-- About Section -->
    <section id="about" class="about">...</section>
    
    <!-- What We Grow -->
    <section id="what-we-grow" class="what-we-grow">...</section>
    
    <!-- Our Practices -->
    <section id="practices" class="practices">...</section>
    
    <!-- Learning Center (Blog Grid) -->
    <section id="learning-center" class="learning-center">...</section>
    
    <!-- Visit Us -->
    <section id="visit" class="visit">...</section>
    
    <!-- Google Maps Location -->
    <section class="map-section">...</section>
    
    <!-- Contact / Footer -->
    <footer id="contact" class="footer">...</footer>
    
    <!-- JavaScript -->
    <script src="script.js"></script>
</body>
</html>
```

#### Article Page Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Article Title | Yellow Flowers Organic Farm</title>
    <link rel="stylesheet" href="../styles.css">
    <link rel="stylesheet" href="../article-styles.css">
</head>
<body>
    <!-- Same Navigation as Homepage -->
    <nav class="navbar">...</nav>
    
    <!-- Article Header -->
    <article class="article-header">
        <div class="article-meta">
            <span class="category">Bio-Fertilizer</span>
            <span class="read-time">⏱️ 8 min read</span>
        </div>
        <h1>Article Title</h1>
        <p class="article-subtitle">Brief description</p>
        <div class="hero-image">🌾</div>
    </article>
    
    <!-- Article Content -->
    <div class="article-content">
        <div class="container">
            <!-- Main Content -->
            <main class="article-body">
                <section class="content-section">
                    <h2>Section Title</h2>
                    <p>Content...</p>
                </section>
            </main>
            
            <!-- Sidebar (at bottom on mobile) -->
            <aside class="article-sidebar">
                <!-- Related articles, tips, CTA -->
            </aside>
        </div>
    </div>
    
    <!-- Same Footer as Homepage -->
    <footer class="footer">...</footer>
    
    <script src="../script.js"></script>
</body>
</html>
```

## 🎨 CSS Architecture

### CSS Variables (Design System)

Located in `styles.css`:

```css
:root {
    /* Colors */
    --primary-green: #2d5016;
    --light-green: #9db886;
    --soft-cream: #f5f1e8;
    --warm-brown: #8b6f47;
    --white: #ffffff;
    --text-dark: #2c3e50;
    --light-text: #666;
    --shadow: rgba(0,0,0,0.1);
    
    /* Spacing */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 2rem;
    --spacing-lg: 3rem;
    --spacing-xl: 4rem;
    
    /* Typography */
    --font-primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    --font-size-base: 1rem;
    --font-size-lg: 1.25rem;
    --font-size-xl: 1.5rem;
    
    /* Breakpoints (for reference) */
    --breakpoint-mobile: 768px;
    --breakpoint-tablet: 1024px;
}
```

### Responsive Breakpoints

```css
/* Mobile First Approach */

/* Base styles (mobile) */
.element {
    width: 100%;
    padding: 1rem;
}

/* Tablet (768px and up) */
@media (min-width: 768px) {
    .element {
        width: 50%;
        padding: 2rem;
    }
}

/* Desktop (1024px and up) */
@media (min-width: 1024px) {
    .element {
        width: 33.33%;
        padding: 3rem;
    }
}
```

### BEM Naming Convention

```css
/* Block */
.blog-card { }

/* Element */
.blog-card__title { }
.blog-card__image { }
.blog-card__content { }

/* Modifier */
.blog-card--featured { }
.blog-card--highlight { }

/* Example Usage */
.nav-dropdown { /* Block */ }
.nav-dropdown__toggle { /* Element */ }
.nav-dropdown__menu { /* Element */ }
.nav-dropdown--active { /* Modifier */ }
```

### Reusable CSS Classes

#### Article Layout Components

```css
/* Main content sections */
.content-section { }

/* Grid layouts */
.bio-input-grid { }
.stage-guide { }
.tips-grid { }

/* Cards */
.bio-input-card { }
.stage-card { }
.tip-card { }

/* Lists */
.benefits-list { }
.tips-list { }

/* Tables */
.feature-table { }
.materials-table { }
.rhizobium-table { }

/* Special elements */
.info-box { }
.info-box.warning { }
.cta-card { }
```

## ⚡ JavaScript Architecture

### Current JavaScript Features

```javascript
// 1. Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// 2. Dropdown Menu Handling (Desktop hover, Mobile click)
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

// 3. Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => { ... });

// 4. Close Mobile Menu on Outside Click
document.addEventListener('click', (event) => { ... });
```

### Adding New JavaScript Features

**Example: Add a "Back to Top" Button**

```javascript
// In script.js

// Create and append button
const backToTopBtn = document.createElement('button');
backToTopBtn.className = 'back-to-top';
backToTopBtn.innerHTML = '↑';
backToTopBtn.setAttribute('aria-label', 'Back to top');
document.body.appendChild(backToTopBtn);

// Show/hide on scroll
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

// Smooth scroll to top
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
```

```css
/* In styles.css */
.back-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background: var(--primary-green);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
}

.back-to-top.visible {
    opacity: 1;
    visibility: visible;
}

.back-to-top:hover {
    background: var(--warm-brown);
    transform: translateY(-5px);
}
```

## 📝 Adding New Content

### Adding a New Article

**Step 1: Create HTML File**

```bash
# Create new file in articles/ directory
articles/new-article-name.html
```

**Step 2: Use Article Template**

Copy from existing article (e.g., `azotobacter.html`) and modify:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Article Title | Yellow Flowers Organic Farm</title>
    <meta name="description" content="Brief description for SEO">
    <link rel="stylesheet" href="../styles.css">
    <link rel="stylesheet" href="../article-styles.css">
</head>
<body>
    <!-- Copy navigation from any article -->
    <nav class="navbar">...</nav>
    
    <article class="article-header">
        <div class="article-meta">
            <span class="category">Your Category</span>
            <span class="read-time">⏱️ X min read</span>
        </div>
        <h1>Your Article Title</h1>
        <p class="article-subtitle">Brief engaging description</p>
        <div class="hero-image">🌾</div>
        <figcaption>Caption for hero image</figcaption>
    </article>
    
    <div class="article-content">
        <div class="container">
            <main class="article-body">
                <!-- Your content sections here -->
                <section class="content-section">
                    <h2>🌱 Section Title</h2>
                    <p>Content...</p>
                </section>
            </main>
            
            <aside class="article-sidebar">
                <!-- Copy sidebar from existing article -->
            </aside>
        </div>
    </div>
    
    <!-- Copy footer from any article -->
    <footer class="footer">...</footer>
    
    <script src="../script.js"></script>
</body>
</html>
```

**Step 3: Add to Navigation**

In `index.html`, add to dropdown menu:

```html
<ul class="dropdown-menu">
    <!-- Existing items -->
    <li><a href="articles/your-new-article.html">🌾 Your Article Title</a></li>
</ul>
```

**Step 4: Add Blog Card**

In `index.html`, add to Learning Center section:

```html
<article class="blog-card">
    <div class="blog-image your-article-slug"></div>
    <div class="blog-content">
        <div class="blog-category">Your Category</div>
        <h3>Your Article Title</h3>
        <p>Brief description...</p>
        <ul class="blog-highlights">
            <li>Key point 1</li>
            <li>Key point 2</li>
            <li>Key point 3</li>
        </ul>
        <a href="articles/your-new-article.html" class="btn-read-more">Read Full Article →</a>
    </div>
</article>
```

**Step 5: Add CSS for Blog Card**

In `styles.css`:

```css
.blog-image.your-article-slug {
    background: linear-gradient(135deg, #color1 0%, #color2 100%);
}

.blog-image.your-article-slug::after {
    content: '🌾'; /* Your emoji */
}
```

**Step 6: Test**

```bash
# Start local server
live-server

# Test:
# - Article loads correctly
# - Navigation works
# - Links in dropdown work
# - Responsive on mobile
# - No console errors
```

**Step 7: Commit**

```bash
git add articles/your-new-article.html index.html styles.css
git commit -m "feat(articles): Add new article about X"
git push origin feature/add-new-article
```

### Adding a New Section to Homepage

**Example: Add "Testimonials" Section**

```html
<!-- In index.html, before footer -->
<section id="testimonials" class="testimonials">
    <div class="container">
        <h2>What Our Visitors Say</h2>
        <div class="testimonial-grid">
            <div class="testimonial-card">
                <p class="testimonial-text">"Amazing farm visit! Learned so much about organic farming."</p>
                <p class="testimonial-author">- John Doe</p>
            </div>
            <!-- More testimonials -->
        </div>
    </div>
</section>
```

```css
/* In styles.css */
.testimonials {
    padding: 4rem 2rem;
    background: var(--soft-cream);
}

.testimonial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.testimonial-card {
    background: var(--white);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 5px 20px var(--shadow);
}

.testimonial-text {
    font-style: italic;
    color: var(--text-dark);
    margin-bottom: 1rem;
}

.testimonial-author {
    color: var(--primary-green);
    font-weight: 600;
    text-align: right;
}
```

## 🔍 Debugging Tips

### Common Issues & Solutions

#### Issue: Dropdown menu not working on mobile

```javascript
// Check in script.js - ensure this code exists:
dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            // ... rest of code
        }
    });
});
```

#### Issue: Styles not loading

```html
<!-- Check relative paths in article pages -->
<link rel="stylesheet" href="../styles.css"> <!-- Need ../ for articles/ -->
<link rel="stylesheet" href="../article-styles.css">
```

#### Issue: Links breaking after deployment

```html
<!-- ✅ GOOD: Relative paths -->
<a href="articles/azotobacter.html">Link</a>

<!-- ❌ BAD: Absolute paths -->
<a href="/articles/azotobacter.html">Link</a>
```

### Browser Developer Tools

```javascript
// Console logging for debugging
console.log('Variable value:', variable);
console.error('Error occurred:', error);
console.table(arrayData); // Great for arrays/objects
console.time('Performance'); // Start timer
// ... code ...
console.timeEnd('Performance'); // End timer

// Breakpoints
debugger; // Pauses execution in DevTools
```

## 🔧 Common Development Tasks

### Task: Update Navigation Menu

**Location**: `index.html` and all article files

```html
<!-- Add new menu item to all pages -->
<ul class="nav-menu" id="navMenu">
    <li><a href="#home" class="nav-link">Home</a></li>
    <li><a href="#about" class="nav-link">About</a></li>
    <!-- Add your new item -->
    <li><a href="#new-section" class="nav-link">New Section</a></li>
</ul>
```

### Task: Change Color Scheme

**Location**: `styles.css` - Update CSS variables

```css
:root {
    /* Update these colors */
    --primary-green: #your-new-color;
    --light-green: #your-new-color;
    --soft-cream: #your-new-color;
    /* Colors will update across entire site */
}
```

### Task: Add New Blog Card Category Color

```css
/* In styles.css */
.blog-image.new-category {
    background: linear-gradient(135deg, #startColor 0%, #endColor 100%);
}

.blog-image.new-category::after {
    content: '🆕'; /* Your emoji */
}
```

## 📦 Third-Party Integrations

### Google Maps (Already Integrated)

```html
<iframe 
    src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
    width="100%" 
    height="450"
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

### Adding Google Analytics (Future)

```html
<!-- Add to <head> of all pages -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Adding Contact Form (Future)

Consider using:
- **Formspree** (free tier available)
- **Netlify Forms** (if moving to Netlify)
- **AWS SES** (email service)

## 🎯 Best Practices

### Performance

- ✅ Minimize CSS and JS files
- ✅ Lazy load images (when added)
- ✅ Use CSS instead of JS for animations
- ✅ Avoid inline styles
- ✅ Keep file sizes small (<100KB per page)

### SEO

- ✅ Unique `<title>` for each page
- ✅ Meta descriptions for all pages
- ✅ Semantic HTML (h1, h2, h3 hierarchy)
- ✅ Alt text for images
- ✅ Descriptive URLs (e.g., `/articles/azotobacter.html`)

### Accessibility

- ✅ ARIA labels for interactive elements
- ✅ Keyboard navigation support
- ✅ Color contrast ratio ≥ 4.5:1
- ✅ Focus indicators visible
- ✅ Screen reader compatible

### Security

- ✅ No sensitive data in code
- ✅ HTTPS only (AWS S3 + CloudFront)
- ✅ Validate all user inputs (when forms added)
- ✅ Keep dependencies updated

## 📞 Need Help?

- 📖 Check [CONTRIBUTING.md](CONTRIBUTING.md) for workflow
- 🧪 Check [QE_GUIDE.md](QE_GUIDE.md) for testing
- 🚀 Check [RELEASE_PROCESS.md](RELEASE_PROCESS.md) for releases
- 💬 Create a GitHub issue
- 💡 Start a GitHub Discussion

---

**Happy Developing! 🚀**


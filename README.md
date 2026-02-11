# Jules Andrei Romulo - Professional Portfolio Website

A modern, professional portfolio website with ocean gradient theme, advanced animations, and comprehensive sections showcasing web development expertise.

## 🎨 Design Theme

**Ocean Gradient Theme**
- Primary: White to light blue gradient
- Accents: Ocean blue (#4facfe), Purple (#667eea), Pink (#f093fb)
- Modern glassmorphism UI with blur effects
- Clean, professional, and visually stunning

## ✨ Features

### Hero Section
- ✅ Profile picture with animated glow effect
- ✅ Typing animation with multiple roles
- ✅ Statistics cards (Experience, Projects, Satisfaction)
- ✅ Two-column modern layout
- ✅ Call-to-action buttons

### About Section
- ✅ Comprehensive personal introduction
- ✅ Detailed background information
- ✅ Highlight cards for education, roles, and philosophy
- ✅ Professional and engaging content

### Skills Section (Separate)
- ✅ Four categories: Programming, Design, Backend, Tools
- ✅ Animated progress bars
- ✅ Percentage indicators
- ✅ Modern card-based layout
- ✅ Unique icons for each category

### Timeline Section
- ✅ Education history
- ✅ Work experience
- ✅ Achievements
- ✅ Vertical timeline with gradient line
- ✅ Alternating layout (desktop)
- ✅ Date badges and detailed descriptions

### Projects Section
- ✅ Enhanced project cards with images
- ✅ Technology tags overlay
- ✅ Detailed descriptions
- ✅ Feature lists
- ✅ Two buttons per project:
  - 📸 View Gallery (opens image modal)
  - ℹ️ More Info (opens detailed info modal)

### Resume Section
- ✅ Download resume button
- ✅ View online button
- ✅ Highlights of resume contents
- ✅ Professional presentation

### Contact Section
- ✅ Modern SVG icons
- ✅ Email, GitHub, Phone
- ✅ Additional context for each contact method
- ✅ Hover animations

### Footer
- ✅ About section with social links
- ✅ Quick links navigation
- ✅ Resources links
- ✅ Contact information
- ✅ Copyright and credits
- ✅ Professional multi-column layout

## 🛠️ Tech Stack

- HTML5 (Semantic markup)
- CSS3 (Flexbox, Grid, Animations, Gradients)
- Vanilla JavaScript (ES6+)
- Google Fonts (Poppins)
- SVG Icons

## 📁 Project Structure

```
jules_portfolio/
│
├── index.html                    # Main HTML file
├── style.css                     # Complete styling
├── script.js                     # All JavaScript functionality
├── README.md                     # This file
├── SETUP.md                      # Quick start guide
├── assets/
│   ├── images/
│   │   ├── profile.jpg          # Your profile photo (ADD THIS)
│   │   ├── papos-1.png          # Project screenshots
│   │   ├── papos-2.png
│   │   ├── papos-3.png
│   │   ├── papos-4.png
│   │   ├── population-1.png
│   │   ├── population-2.png
│   │   ├── population-3.png
│   │   └── population-4.png
│   ├── resume.pdf               # Your resume (ADD THIS)
│   └── icons/
```

## 🚀 Setup Instructions

### 1. Add Your Profile Picture
- Place your photo in `assets/images/profile.jpg`
- Recommended: 800x800px, square, professional photo
- Formats: JPG or PNG

### 2. Add Your Resume
- Place your resume PDF in `assets/resume.pdf`
- Make sure it's named exactly `resume.pdf`

### 3. Add Project Screenshots
- Add 8 project images to `assets/images/`
- Filenames must match exactly:
  - papos-1.png, papos-2.png, papos-3.png, papos-4.png
  - population-1.png, population-2.png, population-3.png, population-4.png

### 4. Open in Browser
- Simply open `index.html` in any modern browser
- No build process required!

## 🎯 Sections Overview

1. **Navigation** - Fixed navbar with smooth scroll
2. **Hero** - Profile picture, name, typing animation, stats
3. **About** - Detailed background and highlights
4. **Skills** - Categorized skills with progress bars
5. **Timeline** - Education and achievements
6. **Projects** - Featured work with galleries and info
7. **Resume** - Download and view options
8. **Contact** - Multiple contact methods
9. **Footer** - Links, social, and information

## 🎨 Key Features

### Animations
- Typing effect with cursor blink
- Scroll-triggered reveals
- Animated progress bars
- Floating background shapes
- Parallax scrolling
- Hover effects with transforms
- Modal scale and fade transitions
- Profile picture glow pulse

### Modals
- **Image Gallery Modal**
  - Fullscreen viewer
  - Thumbnail navigation
  - Keyboard controls (←, →, ESC)
  - Click outside to close
  - Smooth animations

- **Project Info Modal**
  - Detailed project information
  - Features list
  - Technologies used
  - Duration and role
  - Professional presentation

### Icons
- Modern SVG icons throughout
- Custom-designed for professional look
- Animated on hover
- Consistent styling

## 📱 Responsive Design

- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (adapted layout)
- **Mobile**: < 768px (stacked layout)

All sections fully responsive with optimized layouts for each breakpoint.

## ⌨️ Keyboard Shortcuts

**Image Gallery Modal:**
- `ESC` - Close modal
- `←` - Previous image
- `→` - Next image

**Info Modal:**
- `ESC` - Close modal

## 🎨 Customization

### Change Colors
Edit `:root` variables in `style.css`:
```css
--ocean-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
--accent-ocean: #4facfe;
--accent-purple: #667eea;
```

### Update Content
All content is in `index.html`:
- Hero section (lines 35-75)
- About section (lines 77-130)
- Skills section (lines 132-250)
- Timeline section (lines 252-320)
- Projects section (lines 322-420)
- Contact section (lines 450-490)

### Add More Projects
1. Copy project card HTML
2. Add images to `assets/images/`
3. Update `projectImages` object in `script.js`
4. Update `projectInfo` object in `script.js`

## 🌟 What's New

✅ Ocean gradient theme (white to blue)
✅ Profile picture in hero section
✅ Enhanced about section with more details
✅ Separate skills section with progress bars
✅ Timeline section for education/achievements
✅ Resume download section
✅ Project info modal with detailed information
✅ Modern SVG icons throughout
✅ Enhanced footer with multiple columns
✅ Professional color scheme
✅ Improved animations and transitions

## 🔧 Browser Support

- Chrome (latest) ✅
- Firefox (latest) ✅
- Safari (latest) ✅
- Edge (latest) ✅

## 📊 Performance

- Lightweight (no frameworks)
- Optimized CSS
- Vanilla JavaScript
- Fast load times
- Smooth 60fps animations

## 📧 Contact Information

- **Email**: romulojules16@gmail.com
- **GitHub**: [JulesAndreiRomulo](https://github.com/JulesAndreiRomulo)
- **Phone**: +63 921 6799 161
- **Location**: Laguna, Philippines

## 📝 License

© 2026 Jules Andrei Romulo. All rights reserved.

---

**Built with ❤️ using HTML, CSS, and JavaScript**

Designed for modern web standards and professional presentation.

# Copilot Instructions - Sivan Mortgage Consultant Website

## Project Overview
Hebrew website for a mortgage consultant (יועצת משכנתאות). Multi-page site with contact form integration via Netlify and an interactive mortgage calculator.

## Language & Layout
- **Hebrew (RTL)**: All content is in Hebrew. HTML uses `lang="he" dir="rtl"`
- When adding text, ensure proper Hebrew grammar and maintain RTL-friendly CSS patterns
- Use logical CSS properties where applicable (e.g., `margin-inline-start` vs `margin-right`)

## Technology Stack
- **HTML/CSS/JavaScript** - No build process required
- **Fonts**: Heebo (Google Fonts) - Hebrew-optimized font
- **Icons**: Font Awesome 6.0 via CDN
- **Forms**: Netlify Forms (`data-netlify="true"`)
- **Hosting**: Designed for Netlify deployment

## Brand Colors (defined in `style.css` `:root`)
```css
--primary-blue: #162046;    /* Navy blue - headers, accents */
--secondary-blue: #2c3e80;  /* Lighter blue - hover states */
--gold-accent: #c5a059;     /* Gold - CTA buttons, submit buttons */
--light-bg: #f4f7f6;        /* Page background */
```

## File Structure
```
index.html       # Landing page - hero, services, about, contact
calculator.html  # Mortgage calculator with multi-track support
style.css        # All styles, mobile-responsive
images/
  logo.jpg           # Navigation logo
  sivan-profile.jpg  # About section profile photo
```

## Key Patterns

### Section Structure
Each content section follows this pattern:
```html
<section id="section-name" class="section [optional-modifier]">
    <h2 class="section-title">כותרת</h2>
    <!-- content -->
</section>
```

### Card Components
Service cards use the `.card` class with Font Awesome icons:
```html
<div class="card">
    <i class="fas fa-icon-name card-icon"></i>
    <h3>Title</h3>
    <p>Description</p>
</div>
```

### Navigation
- Shared navbar across pages with links to `index.html` sections and `calculator.html`
- Use `index.html#section` for cross-page section links (e.g., `index.html#contact`)
- Active page indicated with `.active` class on nav link

### Contact Information
- **WhatsApp**: `972524540323` (floating button, bottom-left for RTL)
- **Email**: `Mortgage.sivan@gmail.com`

## Responsive Design
- Mobile breakpoint at `768px`
- Navigation links hidden on mobile (no hamburger menu - known limitation)
- Flex containers use `flex-wrap: wrap` for graceful degradation

## Development Notes
- No build step required - edit HTML/CSS directly
- Test locally by opening HTML files in browser
- Form submissions require Netlify deployment to function
- Hero background uses Unsplash CDN image with gradient overlay
- Calculator uses vanilla JavaScript with Shpitzer/Keren Shava amortization formulas

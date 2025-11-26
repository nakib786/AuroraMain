Here is a **rewritten, fully modernized prompt for *Next.js (2025) + TypeScript + Tailwind + shadcn/ui***.
I preserved your intent but optimized structure, clarity, and dev instructions for a top-tier production build.

---

# ✅ **Rewritten Prompt: Next.js (2025) + TypeScript + Tailwind + shadcn/ui Version**

**Goal**
Create a complete, production-ready, fully responsive static website using **Next.js (App Router, latest stable 2025)**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.
The site must replicate the content structure of the source website:
[https://aurorabiz.wixsite.com/aurora](https://aurorabiz.wixsite.com/aurora)
(Use the copy included in this prompt. Replace all images with placeholders for now.)

The final project must be:

* Fast ⚡
* Accessible (WCAG AA) ♿
* SEO-friendly
* Easy to maintain
* Modern and professional
* Ready for deployment on Vercel

---

# 🔧 **Tech Stack & Build Requirements**

### **Framework**

* **Next.js (App Router) – latest stable (verify via web search)**
* **React 18+**
* **TypeScript**
* **Tailwind CSS**
* **shadcn/ui** (component library)

### **Build & Performance Features**

* Static site generation (SSG) where possible
* Route-level code splitting (Next automatically handles this)
* Image optimization via `next/image` (use placeholder images)
* Lazy-loading images & sections
* Preconnect / prefetch external resources
* SEO metadata using Next.js metadata API
* Bundling & minification via Next.js + SWC/Turbopack

### **Project Structure**

```
app/
  (routes)
components/
lib/
styles/
public/
```

### **Assets**

* Include placeholder images in `public/`
* Include favicon set
* Use provided logo: `AuroraLogo.svg`

---

# 🎨 **Design & UX Requirements**

* Responsive, mobile-first
* Clean, professional, trustworthy aesthetic
* Use Tailwind utility classes
* Use shadcn/ui for cards, forms, buttons, dialogs, modals
* Include subtle fade/slide animations (no heavy motion)
* Strong color contrast
* Keyboard accessible, ARIA-friendly
* Modern, minimal hero section

### **Color Palette (example placeholder)**

You may auto-generate or propose a palette (e.g., warm blues/golds).

---

# 📄 **Pages & Components to Build**

## **1. Header / Navigation**

* Logo (placeholder SVG)
* Links:

  * About
  * Our Clients
  * Our Services
  * Contact
* CTA button: **"Let's Chat!!"** → scroll to Contact
* Include a **Skip to Content** link

---

## **2. Home / Hero**

* **H1:** "Empowering Small Businesses with Expert Solutions"
* **Subheadline:**
  "Website Building & Accounting Services Tailored for Your Needs"
* CTA buttons:

  * "Let's Chat!!"
  * "Email Us"
* Hero background image/SVG placeholder
* Include slight motion (fade-in)

---

## **3. About Section**

### **Heading:** About Us

### **Copy (use as-is or lightly optimized):**

> Level up your brand with the latest digital trends and solutions.
> Welcome to Aurora N&N Business Solution Inc.!
> Our dedicated team specializes in empowering small businesses with top-notch website building and accounting services. We provide personalized solutions to help you succeed in today's competitive market. Partner with us for excellence, integrity, and innovation.

---

## **4. Our Services**

### **Heading:** Our Services

Create **three service cards** using shadcn/ui:

#### **Service 1**

**Website Building**
"Static, Premium, and Budget-Friendly options to suit your needs."

#### **Service 2**

**Accounting Services**
"Bookkeeping, Taxation, Business Registration Consulting, and more."

#### **Service 3**

**Brand Kits**
"Comprehensive brand kits to enhance your business's visual identity."

Each card includes:

* Icon (placeholder SVG)
* 1–2 sentence description
* CTA button (Learn more or Contact)

---

## **5. Our Clients**

* Heading: **Our Clients**
* Grid gallery of client logos/images (use placeholders)
* Each image:

  * Lazy-loaded
  * Accessible `alt` text
* Lightbox or modal viewer using shadcn/ui `Dialog`

---

## **6. Contact / Lead Form**

### Fields:

* First name*
* Last name
* Email*
* Company name
* Question? (textarea)
* "Choose Services" select:

  * Website and Brand Solution
  * Accounting and Tax Solutions
  * Other
* Newsletter signup field
* Checkbox for subscription consent
* Submit button

### Requirements:

* Client-side validation
* ARIA error descriptions
* Accessible labels
* Use **zod + react-hook-form + shadcn/ui form components**

### Submission:

* Mock client-side success handler **or**
* Optional real integration (commented): Netlify Forms / Formspree
* Display business email: **[n@aurorabusiness.ca](mailto:n@aurorabusiness.ca)**

---

## **7. Footer**

* Current year (2025)
* “Welcome to Aurora N&N Business Solution Inc.”
* Quick navigation links
* Social media icon placeholders (SVG)

---

# 📦 **Functional Requirements**

### **Next.js Configuration**

* Use `metadata` API for SEO
* OG tags for home page
* Dynamic sitemap generation
* robots.txt
* Optimize fonts & static assets
* Route-level metadata for About, Services, Clients, Contact

### **TypeScript**

* Create interfaces/types for:

  * Service cards
  * Form data
  * Client gallery items

### **Testing**

* Add **Vitest** or **Jest**:

  * Unit tests for the Contact form (validation + submission mock)

### **Linting & Formatting**

* ESLint (Next recommended + custom rules)
* Prettier (with Tailwind plugin)

---

# 🌐 **SEO & Accessibility Checklist**

* Semantic HTML
* Proper heading hierarchy (one H1 on hero)
* `aria-describedby` for form errors
* Alt text placeholders
* Keyboard focus indicators
* Skip link
* Lazy-load all non-critical images
* Provide meta title + description per page
* Include `/sitemap.xml` and `/robots.txt` in `public/`
* OpenGraph + Twitter meta on main pages

---

# 🗂️ **Public Folder Requirements**

* Placeholder images (`hero.webp`, `client-1.webp`, etc.)
* Logos
* Favicon set
* sitemap.xml
* robots.txt

---

# 🎒 **Developer Notes**

* Keep components modular
* Comment clearly where backend integrations would go
* Use `.env.local` for keys in the future
* Add brief performance notes (WebP images, preloading hero image, using Next fonts)

---

# 📥 **Deliverables**

* Full Next.js project (can be zipped or GitHub repository)
* Documentation:

  * Install
  * Development
  * Deployment (Vercel recommended)

---

# 🔚 **End of Prompt**

If you want, I can also:
✅ generate the **file structure**,
✅ generate the **Next.js boilerplate code**,
✅ generate the **shadcn components**,
✅ generate all pages,
or
✅ bundle the entire project as a downloadable ZIP.

Would you like that?

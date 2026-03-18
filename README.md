# Bawadi Mediterranean Grill — Website

Custom static site for **Bawadi Mediterranean Grill**, Falls Church VA.  
Built with clean HTML/CSS/JS — no WordPress, no page builders, no platform fees.

---

## 🚀 Quick Deploy

### Cloudflare Pages (Recommended)
1. Push this repo to GitHub
2. Log into [Cloudflare Pages](https://pages.cloudflare.com)
3. Connect GitHub → select this repo
4. Build settings: **none needed** (static site, no build step)
5. Point `bawadidc.com` DNS to Cloudflare Pages

### Vercel (Alternative)
1. Push to GitHub
2. Import repo at [vercel.com](https://vercel.com)
3. Framework: **Other** (no build command)
4. Add custom domain in Vercel dashboard

---

## 📁 File Structure

```
bawadi/
├── index.html          ← Homepage
├── about.html          ← About Us
├── menu.html           ← Full menu with sticky tabs
├── buffet.html         ← Buffet schedule + hookah lounge
├── catering.html       ← Catering packages + inquiry form
├── news.html           ← News/specials (hidden from nav for now)
├── _redirects          ← Cloudflare Pages routing rules
├── css/
│   └── style.css       ← Full design system (edit colors/fonts here)
└── js/
    ├── layout.js       ← Nav + footer HTML (edit ONCE, updates all pages)
    └── main.js         ← Scroll, hamburger menu, animations
```

---

## ✏️ How to Make Changes

### Update nav links or order buttons
Edit **`js/layout.js`** — the nav and footer HTML live here. Change once, updates all 6 pages automatically.

### Change colors
Edit the CSS variables at the top of **`css/style.css`**:
```css
:root {
  --pal-green:  #007A3D;   /* Palestinian green */
  --pal-red:    #CE1126;   /* Palestinian red */
  --gold:       #C8971A;   /* Warm gold accent */
  --cream:      #FAF7F0;   /* Page background */
  ...
}
```

### Update menu prices
Edit **`menu.html`** — search for the dish name and update the price.

### Add a new page
1. Copy any existing page
2. Update the `<title>` tag
3. Add the link to `js/layout.js` in both the desktop nav and mobile nav sections

### Change the logo
In `js/layout.js`, find the `<img>` tag inside `.nav-logo` and replace the `src` URL with the new logo file path.

---

## 📋 Before Client Launch Checklist

- [ ] **Confirm hours** with client (conflict between pages — verify Sun–Thu 11am–12am, Fri–Sat 11am–1am)
- [ ] **Replace stock photos** with client's real photos (see photo placeholder notes in each page)
- [ ] **Get real logo file** — replace the hotlinked logo in `js/layout.js`
- [ ] **Catering pricing** — add actual package prices (currently says "call us")
- [ ] **Hookah menu** — add flavors and pricing if client wants them on site
- [ ] **Full beverages/desserts menu** — currently says "ask server"
- [ ] **Wire up contact form** — connect to Formspree or n8n (see form in index.html)
- [ ] **Wire up newsletter form** — connect to Mailchimp or ConvertKit (news.html)
- [ ] **Wire up catering form** — connect Formspree endpoint (catering.html)
- [ ] **Test all Toast/Halal.delivery links** live before launch
- [ ] **Test Google Maps embed** renders correctly
- [ ] **Mobile test** on real iPhone and Android
- [ ] **Add favicon** — create favicon.ico or use client's logo

---

## 🔗 External Links (All Verified)

| Purpose | URL |
|---|---|
| Order Pickup (Toast) | https://www.toasttab.com/bawadi-mediterranean-grill/v2/online-order#!/ |
| Bawadi Delivery (Toast) | https://www.toasttab.com/bawadi-mediterranean-grill/v2/online-order#!/ |
| Halal Delivery | https://www.halal.delivery/order/restaurant/bawadi-mediterranean-grill--menu/3 |
| Catering (Toast) | https://www.toasttab.com/catering/bawadi-mediterranean-grill |
| Facebook | https://www.facebook.com/Bawadimediterraneangrillandsweetscafe/ |
| Yelp | https://www.yelp.com/biz/bawadi-mediterranean-grill-falls-church-2 |

---

## 📸 Replacing Stock Photos

All hero and gallery images are from Unsplash (free for commercial use).  
When client provides real photos:
1. Place photos in an `/images/` folder
2. Replace `https://images.unsplash.com/...` URLs in the HTML files
3. Use descriptive filenames: `bawadi-mixed-grill.jpg`, `bawadi-interior.jpg`, etc.

---

## 💡 Client Self-Service (News Updates)

The client does NOT need a developer to post updates. Guide them to:
1. **Facebook** — post specials directly on their page (this site links to it)
2. **Google Business** — post offers/updates, update hours
3. **Email/WhatsApp** — use the newsletter form on `news.html` + Mailchimp

Full guide is on the `news.html` page itself.

---

## 🎨 Design System

- **Display font:** Cormorant Garamond (Google Fonts)
- **Body font:** Jost (Google Fonts)
- **Colors:** Palestinian flag (black, white, green, red) + aged gold + warm cream
- **Cultural accents:** Tatreez stripe (embroidery pattern), keffiyeh CSS crosshatch
- **Hosting cost:** $0/month (Cloudflare Pages free tier)
- **Domain cost:** ~$10–12/year (client's existing domain)

---

*Built March 2026. Contact the developer for questions.*

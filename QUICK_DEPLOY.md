# Granite Billing Pro - Quick Deploy to Cloudflare

## 🚀 Fastest Way (2 minutes)

### 1. Build the app
```bash
npm run build
```

### 2. Go to Cloudflare
Visit: [dash.cloudflare.com](https://dash.cloudflare.com)

### 3. Deploy
- Click **"Workers & Pages"** → **"Create"** → **"Pages"**
- Click **"Upload assets"**
- Drag the entire `dist/` folder
- Click **"Deploy site"**

### 4. Done! ✅
Your site is live at: `https://granite-billing-pro.pages.dev`

---

## 📁 What's in the `dist/` folder?

```
dist/
├── index.html          (main page)
├── assets/
│   ├── index-*.js      (JavaScript bundle)
│   └── index-*.css     (CSS styles)
├── _redirects          (SPA routing)
└── _headers            (Security headers)
```

**Upload ALL of these files to Cloudflare Pages.**

---

## 🌐 Add Custom Domain (Optional)

1. In Cloudflare Pages dashboard → **"Custom domains"**
2. Click **"Set up a custom domain"**
3. Enter: `app.granitebillingpro.com` (or your domain)
4. Follow DNS setup instructions
5. Wait 5-15 minutes for SSL certificate

---

## 🖼️ Embed on Wix

Copy this code and paste into Wix HTML iframe:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    * { margin: 0; padding: 0; }
    html, body { width: 100%; height: 100%; overflow: hidden; }
    iframe { width: 100%; height: 100vh; border: none; }
  </style>
</head>
<body>
  <iframe src="https://YOUR-PROJECT.pages.dev" allowfullscreen></iframe>
</body>
</html>
```

Replace `YOUR-PROJECT.pages.dev` with your actual Cloudflare URL.

---

## 💰 Cost: FREE Forever

- ✅ Unlimited bandwidth
- ✅ Unlimited requests
- ✅ Commercial use allowed
- ✅ Free SSL
- ✅ Global CDN
- ✅ 300+ locations worldwide

**You can serve 10,000+ granite shops for ₹0**

---

## 🔄 Update Your Site

### If using direct upload:
1. Make changes to code
2. Run `npm run build`
3. Upload new `dist/` folder to Cloudflare
4. Done!

### If using GitHub (auto-deploy):
1. Push changes to GitHub
2. Cloudflare auto-deploys
3. Done!

---

## 📖 Full Documentation

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions including:
- GitHub integration setup
- Custom domain configuration
- CLI deployment
- Security features
- Troubleshooting

---

## ✅ Checklist

- [ ] Run `npm run build`
- [ ] Upload `dist/` folder to Cloudflare Pages
- [ ] Verify site works at `.pages.dev` URL
- [ ] (Optional) Add custom domain
- [ ] (Optional) Embed in Wix
- [ ] Test on mobile

---

**Need help?** Check [DEPLOYMENT.md](./DEPLOYMENT.md) or visit [Cloudflare Pages docs](https://developers.cloudflare.com/pages)

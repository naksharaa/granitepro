# 🚀 Deploy Granite Billing Pro on Cloudflare Pages

Complete step-by-step guide to deploy your app on Cloudflare Pages (FREE forever).

---

## 📋 Prerequisites

- ✅ A Cloudflare account (free): [dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)
- ✅ Your built `dist/` folder (from `npm run build`)
- ✅ 5 minutes of time

---

## 🎯 Method 1: Direct Upload (Easiest — No Git needed)

### Step 1: Build Your App

```bash
npm run build
```

This creates a `dist/` folder with your production-ready files.

### Step 2: Go to Cloudflare Pages

1. Visit [dash.cloudflare.com](https://dash.cloudflare.com)
2. Sign in or create a free account
3. In the left sidebar, click **"Workers & Pages"**
4. Click **"Create"**
5. Click the **"Pages"** tab
6. Click **"Upload assets"**

### Step 3: Create Project

1. **Project name:** `granite-billing-pro`
2. Click **"Create project"**

### Step 4: Upload Files

1. Drag your entire `dist/` folder into the upload area
   - OR click "Browse" and select the `dist/` folder
2. Wait for upload to complete
3. Click **"Deploy site"**

### Step 5: Get Your Live URL

✅ Your site is now live at:
```
https://granite-billing-pro.pages.dev
```

**That's it! You're done.** 🎉

---

## 🌐 Method 2: GitHub Integration (Auto-deploy on updates)

### Step 1: Push Code to GitHub

```bash
# Initialize git (if not done)
git init
git add .
git commit -m "Initial commit"

# Create a .gitignore file first
echo "node_modules
dist
.env" > .gitignore

# Push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/granite-billing-pro.git
git branch -M main
git push -u origin main
```

### Step 2: Connect GitHub to Cloudflare

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. **Workers & Pages** → **Create** → **Pages**
3. Click **"Connect to Git"**
4. Select your GitHub repository: `granite-billing-pro`

### Step 3: Configure Build Settings

| Setting | Value |
|---------|-------|
| **Framework preset** | Vite |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` (leave as default) |

### Step 4: Deploy

1. Click **"Save and Deploy"**
2. Wait 2-3 minutes for build
3. ✅ Your site is live!

**Bonus:** Every time you push to GitHub, Cloudflare auto-deploys! 🚀

---

## 🌍 Add Custom Domain (e.g., `app.granitebillingpro.com`)

### Step 1: Buy a Domain (if you don't have one)

Recommended registrars:
- [Namecheap](https://namecheap.com) — ₹700-900/year
- [GoDaddy](https://godaddy.com) — ₹999/year
- [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) — at-cost pricing (cheapest)

### Step 2: Add Domain to Cloudflare Pages

1. Go to your Pages project in Cloudflare dashboard
2. Click **"Custom domains"** tab
3. Click **"Set up a custom domain"**
4. Enter your domain: `app.granitebillingpro.com`
5. Click **"Continue"**

### Step 3: Configure DNS

If your domain is already on Cloudflare:
- DNS records are auto-configured ✅

If your domain is on another registrar (GoDaddy, Namecheap):
- Add this CNAME record:
  ```
  Type: CNAME
  Name: app
  Target: granite-billing-pro.pages.dev
  Proxy: Enabled (orange cloud)
  ```

### Step 4: Wait for SSL

- Cloudflare automatically provisions a free SSL certificate
- Takes 5-15 minutes
- ✅ Your site is now live at `https://app.granitebillingpro.com`

---

## 🖼️ Embed on Wix Website

Once deployed, embed on your Wix site:

### Step 1: In Wix Editor

1. Open your Wix site editor
2. Click **Add (+)** → **Embed Code** → **HTML iframe**
3. Drag to full page size

### Step 2: Paste This Code

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: 100%; height: 100%; overflow: hidden; }
    iframe { 
      width: 100%; 
      height: 100vh; 
      border: none; 
      display: block;
    }
  </style>
</head>
<body>
  <iframe 
    src="https://granite-billing-pro.pages.dev" 
    allow="payment"
    allowfullscreen>
  </iframe>
</body>
</html>
```

**Replace** `granite-billing-pro.pages.dev` with your actual URL.

### Step 3: Publish Wix Site

Done! Your Granite Billing Pro is now live on Wix. 🎉

---

## 🔧 Advanced: CLI Deployment (For Developers)

If you prefer command-line deployment:

### Step 1: Install Wrangler CLI

```bash
npm install -g wrangler
wrangler login
```

### Step 2: Deploy

```bash
npm run build
wrangler pages deploy dist --project-name=granite-billing-pro
```

That's it! One command deployment.

---

## 📊 Cloudflare Pages Free Tier Limits

| Feature | Free Limit |
|---------|-----------|
| **Bandwidth** | **UNLIMITED** ✅ |
| **Requests** | **UNLIMITED** ✅ |
| **Builds per month** | 500 |
| **Custom domains** | Unlimited |
| **SSL certificates** | Free, automatic |
| **Global CDN** | 300+ locations |
| **Concurrent users** | Unlimited |
| **Commercial use** | ✅ **ALLOWED** |

**You can serve 10,000+ granite shops without paying a single rupee.** 💰

---

## 🛡️ Security Features (Already Configured)

Your deployment includes:
- ✅ Free SSL/HTTPS (automatic)
- ✅ DDoS protection (Cloudflare's famous shield)
- ✅ Global CDN (fast loading worldwide)
- ✅ Security headers (X-Frame-Options, XSS protection)
- ✅ SPA routing support (no 404 errors on refresh)

---

## 🔄 Updating Your Site

### If using Direct Upload:
1. Run `npm run build`
2. Go to Cloudflare Pages dashboard
3. Click your project
4. Click **"Create new deployment"**
5. Upload new `dist/` folder
6. Done! Updates in seconds.

### If using GitHub:
1. Make changes to code
2. `git push` to GitHub
3. Cloudflare auto-deploys! 🚀

---

## 💡 Pro Tips

1. **Preview deployments:** Cloudflare creates preview URLs for every deployment
2. **Rollback:** Can rollback to any previous deployment instantly
3. **Analytics:** Free web analytics in Cloudflare dashboard
4. **Speed:** Your site loads fast globally (Cloudflare's CDN)

---

## 📞 Need Help?

- Cloudflare Pages docs: [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages)
- Cloudflare support: [support.cloudflare.com](https://support.cloudflare.com)
- Community forum: [community.cloudflare.com](https://community.cloudflare.com)

---

## ✅ Deployment Checklist

- [ ] Cloudflare account created
- [ ] `npm run build` successful
- [ ] `dist/` folder uploaded to Cloudflare Pages
- [ ] Site accessible at `.pages.dev` URL
- [ ] (Optional) Custom domain added
- [ ] (Optional) Embedded in Wix site
- [ ] Tested on mobile devices
- [ ] SSL certificate active

---

**Congratulations! Your Granite Billing Pro is now live on the internet!** 🎉

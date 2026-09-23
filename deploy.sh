#!/bin/bash

# Granite Billing Pro - Deploy to Cloudflare Pages
# Usage: ./deploy.sh

echo "🚀 Granite Billing Pro - Cloudflare Pages Deployment"
echo "===================================================="
echo ""

# Check if wrangler is installed
if ! command -v wrangler &> /dev/null; then
    echo "⚠️  Wrangler CLI not found. Installing..."
    npm install -g wrangler
    
    echo ""
    echo "🔐 Please login to Cloudflare:"
    wrangler login
fi

# Build the project
echo ""
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix errors and try again."
    exit 1
fi

echo "✅ Build successful!"
echo ""

# Deploy to Cloudflare Pages
echo "🚀 Deploying to Cloudflare Pages..."
wrangler pages deploy dist --project-name=granite-billing-pro

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Deployment successful!"
    echo ""
    echo "🌐 Your site is live at:"
    echo "   https://granite-billing-pro.pages.dev"
    echo ""
    echo "📝 Next steps:"
    echo "   1. Test your site at the URL above"
    echo "   2. Add custom domain in Cloudflare dashboard (optional)"
    echo "   3. Embed in Wix using iframe (see QUICK_DEPLOY.md)"
    echo ""
else
    echo ""
    echo "❌ Deployment failed!"
    echo "   Make sure you're logged in: wrangler login"
    echo "   Or use the manual upload method (see DEPLOYMENT.md)"
    exit 1
fi

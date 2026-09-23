@echo off
REM Granite Billing Pro - Deploy to Cloudflare Pages (Windows)
REM Usage: deploy.bat

echo.
echo 🚀 Granite Billing Pro - Cloudflare Pages Deployment
echo ====================================================
echo.

REM Check if wrangler is installed
where wrangler >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ⚠️  Wrangler CLI not found. Installing...
    npm install -g wrangler
    
    echo.
    echo 🔐 Please login to Cloudflare:
    wrangler login
)

REM Build the project
echo.
echo 📦 Building project...
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ❌ Build failed! Please fix errors and try again.
    pause
    exit /b 1
)

echo ✅ Build successful!
echo.

REM Deploy to Cloudflare Pages
echo 🚀 Deploying to Cloudflare Pages...
wrangler pages deploy dist --project-name=granite-billing-pro

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ Deployment successful!
    echo.
    echo 🌐 Your site is live at:
    echo    https://granite-billing-pro.pages.dev
    echo.
    echo 📝 Next steps:
    echo    1. Test your site at the URL above
    echo    2. Add custom domain in Cloudflare dashboard (optional)
    echo    3. Embed in Wix using iframe (see QUICK_DEPLOY.md)
    echo.
) else (
    echo.
    echo ❌ Deployment failed!
    echo    Make sure you're logged in: wrangler login
    echo    Or use the manual upload method (see DEPLOYMENT.md)
)

pause

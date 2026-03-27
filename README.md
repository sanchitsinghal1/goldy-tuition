# 🎓 Goldy Aggarwal Home Tuition Website

**Best Home Tuition in Rohini, Delhi** - Professional website for home tuition services

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-blue)

---

## 🌟 Features

- ✅ **Professional Design** - Trust-building layout for parents
- ✅ **Fully Responsive** - Works on all devices
- ✅ **SEO Optimized** - Local SEO for Rohini, Delhi
- ✅ **Fast Loading** - Optimized performance
- ✅ **Contact Form** - Saves to database
- ✅ **Review System** - Parents can submit reviews
- ✅ **SMS & Email Notifications** - Get notified on form submissions
- ✅ **Floating WhatsApp & Call Buttons** - Easy contact
- ✅ **Google Schema Markup** - Better search rankings

---

## 🚀 FREE Deployment Guide (GitHub + Vercel)

### Step 1: Download Project Code

1. Download the project folder from this system
2. Make sure you have all files

### Step 2: Create GitHub Account (FREE)

1. Go to **https://github.com**
2. Click **"Sign Up"** (FREE)
3. Create your account with email
4. Verify your email

### Step 3: Create New Repository on GitHub

1. Login to GitHub
2. Click **"+"** → **"New repository"**
3. Repository name: `goldy-tuition`
4. Keep it **PUBLIC** (FREE for public repos)
5. Click **"Create repository"**

### Step 4: Upload Code to GitHub

**Option A: Using GitHub Website (Easiest)**

1. Open your new repository
2. Click **"uploading an existing file"**
3. Drag & drop ALL project files
4. Click **"Commit changes"**

**Option B: Using Git Commands**

```bash
# Open terminal in project folder
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/goldy-tuition.git
git push -u origin main
```

### Step 5: Create Vercel Account (FREE)

1. Go to **https://vercel.com**
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub

### Step 6: Deploy on Vercel (FREE)

1. Click **"Add New..."** → **"Project"**
2. Select your `goldy-tuition` repository
3. Vercel will auto-detect Next.js settings
4. Click **"Deploy"**
5. Wait 2-3 minutes
6. **Done!** 🎉 Your website is live!

### Step 7: Get Your Free URL

Your website will be live at:
```
https://goldy-tuition.vercel.app
```

Or you can add a custom domain later.

---

## 🔔 Setup SMS & Email Notifications (Optional but Recommended)

### Email Setup (Resend - FREE 3000 emails/month)

1. Go to **https://resend.com**
2. Sign up with Google (FREE)
3. Go to Dashboard → API Keys
4. Click **"Create API Key"**
5. Copy the key

### SMS Setup (Fast2SMS - FREE for India)

1. Go to **https://www.fast2sms.com**
2. Sign up with mobile number (FREE)
3. Verify your number
4. Go to API Settings
5. Copy your API Key

### Add Keys to Vercel

1. Go to Vercel Dashboard
2. Open your project
3. Go to **Settings** → **Environment Variables**
4. Add:
   - `RESEND_API_KEY` = your_resend_key
   - `SMS_API_KEY` = your_fast2sms_key
5. Click **"Save"**
6. Go to **Deployments** → **Redeploy**

---

## 🔍 Google SEO Setup (FREE - Get on Top of Google!)

### Step 1: Google Search Console (FREE)

1. Go to **https://search.google.com/search-console**
2. Sign in with your Google account
3. Click **"Add Property"**
4. Enter your website URL: `https://goldy-tuition.vercel.app`
5. Verify ownership:
   - Choose **"HTML file"** method
   - Download the HTML file
   - Add it to your `public/` folder
   - Push to GitHub
   - Click **"Verify"**

### Step 2: Submit Sitemap to Google

1. In Google Search Console
2. Go to **"Sitemaps"** (left sidebar)
3. Enter: `sitemap.xml`
4. Click **"Submit"**

### Step 3: Google My Business (FREE - Shows on Google Maps!)

1. Go to **https://business.google.com**
2. Sign in with Google account
3. Click **"Add your business"**
4. Fill details:
   - Name: **Goldy Aggarwal Home Tuition**
   - Category: **Tutor**
   - Address: **Rohini, Delhi**
   - Phone: **+91 9560517993**
   - Website: **https://goldy-tuition.vercel.app**
5. Verify your business (postcard/phone)
6. **Your business will appear on Google Maps!**

### Step 4: Get Reviews on Google (Boosts Rankings!)

Ask happy parents to:
1. Search "Goldy Aggarwal Home Tuition" on Google
2. Click on the Google listing
3. Click **"Write a review"**
4. Give 5 stars ⭐⭐⭐⭐⭐
5. Write their experience

**More 5-star reviews = Higher Google ranking!**

---

## 📱 Update Contact Information

To change phone/email/teacher details, edit this file:

```
src/app/page.tsx
```

Find this section and update:
```typescript
const TEACHER_INFO = {
  name: "Goldy Aggarwal",
  phone: "+91 9560517993",
  whatsapp: "919560517993",
  email: "gaurinaveen26@gmail.com",
  address: "House No. 183, Block E, Rohini Sector 4, Delhi - 110085",
  areas: ["Rohini Sector 1", "Rohini Sector 3", "Rohini Sector 4", "Rohini Sector 5"],
  // ... other details
};
```

---

## 🔑 Keywords We Rank For

This website is optimized to rank on Google for:

- **home tuition in Rohini**
- **home tutor in Rohini**
- **tuition teacher Rohini Sector 4**
- **home tuition for class 1 to 8 in Rohini**
- **best home tutor Rohini Delhi**
- **Hindi tuition in Rohini**
- **English tuition in Rohini**
- **all subjects tuition Rohini**
- **female home tutor Rohini**
- **CBSE tuition Rohini**

---

## 📊 Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16 | Frontend Framework |
| TypeScript | Type Safety |
| Tailwind CSS 4 | Styling |
| shadcn/ui | UI Components |
| Prisma | Database |
| SQLite | Database |
| Resend | Email Service |
| Fast2SMS | SMS Service |

---

## 🛠️ Local Development

```bash
# Install dependencies
bun install

# Setup database
bun run db:push

# Start development
bun run dev

# Open browser
http://localhost:3000
```

---

## 📧 Support

For any issues, contact:
- **Phone:** +91 9560517993
- **Email:** gaurinaveen26@gmail.com

---

## ⭐ If This Helped You

Give this repository a star on GitHub! ⭐

---

**Made with ❤️ for Goldy Aggarwal Home Tuition**

*Best Home Tuition in Rohini, Delhi | Classes 1st to 8th | All Subjects*

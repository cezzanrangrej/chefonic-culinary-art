# EmailJS Setup Guide for Chefonic

## 📧 Complete Setup Instructions

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (it's FREE - 200 emails/month)
3. Verify your email address

### Step 2: Add Email Service
1. Login to EmailJS Dashboard: [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
2. Click "Add New Service"
3. Choose "Gmail" (recommended)
4. Click "Connect Account" and login with **atchefonic@gmail.com**
5. Copy the **Service ID** (looks like: `service_xxxxxxx`)

### Step 3: Create Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template:

**Template Name:** Chefonic Event Inquiry

**Subject:** New Event Inquiry from {{from_name}}

**Body:**
```
Hello Chefonic Team,

You have received a new event inquiry from your website:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CLIENT DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Event Type: {{event_type}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MESSAGE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Please respond promptly to provide the best service.

Best regards,
Chefonic Website System
```

4. Set "To Email" to: **atchefonic@gmail.com**
5. Click "Save"
6. Copy the **Template ID** (looks like: `template_xxxxxxx`)

### Step 4: Get Public Key
1. Go to "Account" → "General" in dashboard
2. Find "Public Key" (looks like: `xxxxxxxxxxxxxxx`)
3. Copy it

### Step 5: Update Environment Variables
1. Open the `.env` file in your project root
2. Replace the placeholder values:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx    # From Step 2
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx  # From Step 3
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx    # From Step 4
```

### Step 6: Test the Form
1. Restart your development server:
   ```bash
   npm run dev
   ```
2. Fill out the contact form on your website
3. Click "Plan My Event"
4. Check **atchefonic@gmail.com** for the email!

## 🔒 Security Notes

- The `.env` file is already in `.gitignore` (your keys won't be pushed to GitHub)
- Never share your EmailJS keys publicly
- For production, set these variables in your hosting platform (Vercel/Netlify)

## 🎯 Testing Checklist

- [ ] EmailJS account created
- [ ] Gmail service connected
- [ ] Email template created and saved
- [ ] All 3 keys copied to `.env` file
- [ ] Development server restarted
- [ ] Test email sent successfully
- [ ] Email received at atchefonic@gmail.com

## 🚀 Production Deployment

When deploying to Vercel/Netlify:

1. Go to your project settings
2. Add Environment Variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
3. Redeploy your site

## 📊 EmailJS Free Tier Limits

- 200 emails per month
- Unlimited templates
- Basic analytics
- If you need more, upgrade to paid plan ($7/month for 1000 emails)

## 🆘 Troubleshooting

**Error: "Something went wrong"**
- Check if all 3 environment variables are set correctly
- Make sure you restarted the dev server after adding `.env`
- Verify your EmailJS service is connected to Gmail

**Emails not arriving:**
- Check spam folder
- Verify the "To Email" in template is atchefonic@gmail.com
- Check EmailJS dashboard for delivery status

**Need Help?**
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com

---

✨ **Your form is now ready to collect event inquiries!**

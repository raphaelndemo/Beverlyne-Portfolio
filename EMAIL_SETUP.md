# Email Setup Instructions

## Environment Variables

Create a `.env.local` file in the root of your project with the following variables:

```env
# Email Configuration
# For Gmail, you'll need to use an App Password (not your regular password)
# Go to: Google Account > Security > 2-Step Verification > App passwords
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password-here

# Contact email (where form submissions will be sent)
CONTACT_EMAIL=beverlynendemo9@gmail.com
```

## Gmail Setup Steps

1. **Enable 2-Step Verification** (if not already enabled):
   - Go to your Google Account settings
   - Navigate to Security
   - Enable 2-Step Verification

2. **Create an App Password**:
   - Go to: [Google Account > Security > 2-Step Verification > App passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" as the app
   - Select "Other (Custom name)" as the device
   - Enter "Next.js Contact Form" as the name
   - Click "Generate"
   - Copy the 16-character password (no spaces)

3. **Update `.env.local`**:
   - Set `SMTP_USER` to your Gmail address
   - Set `SMTP_PASSWORD` to the App Password you just generated
   - Set `CONTACT_EMAIL` to `beverlynendemo9@gmail.com` (or your preferred email)

## Testing

After setting up the environment variables:

1. Restart your Next.js development server
2. Fill out the contact form on your website
3. Submit the form
4. Check your email inbox for the submission

## Alternative Email Providers

If you're not using Gmail, you can modify the transporter configuration in `app/api/contact/route.ts`:

- **Outlook/Hotmail**: Use `service: 'hotmail'`
- **Custom SMTP**: Use the `host`, `port`, and `secure` options instead of `service`

Example for custom SMTP:
```typescript
const transporter = nodemailer.createTransport({
  host: 'smtp.yourdomain.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});
```


# Email Setup Guide

## Overview
The lead capture system now sends lead data to Outlook email only. When someone fills out the form with their name, phone number, and school name, you'll receive this information via email.

## Environment Variables Setup

Create a `.env.local` file in your project root with the following variables:

```env
# Outlook Email Configuration
OUTLOOK_EMAIL=your-outlook-email@outlook.com
OUTLOOK_PASSWORD=your-outlook-app-password
RECIPIENT_EMAIL=recipient-email@example.com
```

## Outlook Email Setup Instructions

### 1. Enable 2-Factor Authentication
- Go to your Outlook account settings
- Enable 2-Factor Authentication (2FA)

### 2. Generate App Password
- After enabling 2FA, go to Security settings
- Look for "App passwords" or "Advanced security options"
- Generate a new app password for this application
- Use this app password in the `OUTLOOK_PASSWORD` environment variable

### 3. Email Configuration
- `OUTLOOK_EMAIL`: Your Outlook email address
- `OUTLOOK_PASSWORD`: The app password generated in step 2
- `RECIPIENT_EMAIL`: The email address where you want to receive lead notifications (can be the same as OUTLOOK_EMAIL)

## How It Works

When a user submits the lead form with:
- Name
- Phone Number  
- School/Institution Name
- Institution Type
- Timestamp
- Source

The system will:
1. Send a formatted HTML email to your Outlook email
2. Return a success response to the frontend

## Email Format

The email will include:
- Professional HTML formatting
- All lead details in a table format
- Timestamp and source information
- Clear subject line with lead name and institution

## Testing

To test the email functionality:
1. Set up your environment variables
2. Restart your development server
3. Submit a test lead through your form
4. Check your Outlook inbox for the email

## Troubleshooting

### Common Issues:
1. **Authentication Failed**: Make sure you're using an app password, not your regular password
2. **Email Not Received**: Check spam folder and verify recipient email address
3. **Connection Issues**: Ensure your network allows SMTP connections on port 587

### Error Messages:
- Check the console logs for detailed error information
- Verify all environment variables are correctly set
- Ensure the Outlook account has SMTP access enabled

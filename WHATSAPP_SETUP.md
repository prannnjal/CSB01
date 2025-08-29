# WhatsApp API Setup Guide

## Option 1: WhatsApp Cloud API (Recommended)

### Step 1: Create Facebook App
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app or use existing app
3. Add "WhatsApp" product to your app

### Step 2: Get WhatsApp Business Account
1. In your app, go to WhatsApp > Getting Started
2. Follow the setup process to create a WhatsApp Business Account
3. Add your phone number (7004677366)

### Step 3: Get API Credentials
1. **Access Token**: Go to WhatsApp > API Setup > Access Token
2. **Phone Number ID**: Go to WhatsApp > API Setup > Phone Number ID

### Step 4: Configure Environment Variables
Create a `.env.local` file in your project root:

```env
WHATSAPP_TOKEN=your_access_token_here
WHATSAPP_PHONE_NUMBER_ID=your_phone_number_id_here
COMPANY_WHATSAPP_NUMBER=917004677366
```

## Option 2: Alternative Services

### Twilio WhatsApp API
```env
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
```

### MessageBird WhatsApp API
```env
MESSAGEBIRD_API_KEY=your_api_key
```

## Testing the Setup

1. Start your development server: `npm run dev`
2. Test the AI bot conversation
3. When user provides phone number, check your WhatsApp for the lead message
4. Check server console for API response logs

## Message Format

You'll receive this message on WhatsApp:
```
New Lead from AI Bot:
Name: [User Name]
Institution Type: [School/College/University/Institute]
Institution Name: [Institution Name]
Phone: [Phone Number]
Timestamp: [Date and Time]
Source: AI Bot
```

## Troubleshooting

- **401 Error**: Check your access token
- **403 Error**: Verify phone number ID
- **400 Error**: Check message format
- **Network Error**: Verify API endpoint URL

## Security Notes

- Keep your access tokens secure
- Never commit `.env.local` to version control
- Use environment variables in production
- Monitor API usage and costs

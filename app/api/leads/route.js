import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const leadData = await request.json()
    
    // Format the message for email
    const emailSubject = `New Lead: ${leadData.name} - ${leadData.institutionName}`
    const emailBody = `
      <h2>New Lead Received</h2>
      <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Name:</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${leadData.name}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Phone Number:</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${leadData.phone}</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">School/Institution Name:</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${leadData.institutionName}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Institution Type:</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${leadData.institutionType}</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Timestamp:</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${leadData.timestamp}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Source:</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${leadData.source}</td>
        </tr>
      </table>
      <p style="color: #666; font-size: 14px;">This lead was submitted through the AI Bot on your website.</p>
    `

    // Email configuration for Outlook
    const transporter = nodemailer.createTransporter({
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.OUTLOOK_EMAIL,
        pass: process.env.OUTLOOK_PASSWORD
      }
    })

    // Send email
    const emailResult = await transporter.sendMail({
      from: process.env.OUTLOOK_EMAIL,
      to: process.env.RECIPIENT_EMAIL || process.env.OUTLOOK_EMAIL, // Send to recipient or same email if not specified
      subject: emailSubject,
      html: emailBody
    })

    console.log('Email sent successfully:', emailResult.messageId)
    return Response.json({ 
      success: true, 
      message: 'Lead data sent to email successfully',
      data: leadData,
      emailResponse: emailResult
    })
    
  } catch (error) {
    console.error('Error processing lead:', error)
    return Response.json({ 
      success: false, 
      error: 'Failed to process lead data' 
    }, { status: 500 })
  }
}

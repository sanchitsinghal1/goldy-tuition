import Resend from "resend";

interface DemoClassData {
  parentName: string;
  studentName: string;
  studentClass: string;
  area: string;
  phone: string;
  message?: string;
}

interface ReviewData {
  parentName: string;
  studentName: string;
  rating: number;
  review: string;
  area: string;
}

const TEACHER_PHONE = "9560517993";
const TEACHER_EMAIL = "gaurinaveen26@gmail.com";

// Send SMS using Fast2SMS (India's free SMS gateway)
async function sendSMS(phone: string, message: string): Promise<boolean> {
  try {
    // Fast2SMS API - Free tier available
    // Get your free API key from: https://www.fast2sms.com
    const apiKey = process.env.SMS_API_KEY;
    
    if (!apiKey) {
      console.log("\n" + "=".repeat(50));
      console.log("📱 SMS (Add SMS_API_KEY in .env for actual SMS)");
      console.log("=".repeat(50));
      console.log(`To: +91 ${phone}`);
      console.log(`Message:\n${message}`);
      console.log("=".repeat(50) + "\n");
      return true;
    }

    const response = await fetch("https://www.fast2sms.com/dev/bulkV2", {
      method: "POST",
      headers: {
        "authorization": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        route: "q",
        message: message,
        language: "english",
        flash: 0,
        numbers: phone,
      }),
    });

    const result = await response.json() as { return?: boolean; message?: string };
    
    if (result.return === true) {
      console.log("✅ SMS sent successfully to", phone);
      return true;
    } else {
      console.log("❌ SMS failed:", result.message);
      return false;
    }
  } catch (error) {
    console.error("SMS sending error:", error);
    return false;
  }
}

// Send Email using Resend
async function sendEmail(to: string, subject: string, htmlBody: string): Promise<boolean> {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      console.log("\n" + "=".repeat(50));
      console.log("📧 EMAIL (Add RESEND_API_KEY in .env for actual email)");
      console.log("=".repeat(50));
      console.log(`To: ${to}`);
      console.log(`Subject: ${subject}`);
      console.log("=".repeat(50) + "\n");
      return true;
    }

    const resend = new Resend(resendApiKey);

    const { data, error } = await resend.emails.send({
      from: "Goldy Tuition <onboarding@resend.dev>",
      to: [to],
      subject: subject,
      html: htmlBody,
    });

    if (error) {
      console.error("❌ Email error:", error);
      return false;
    }

    console.log("✅ Email sent successfully:", data?.id);
    return true;
  } catch (error) {
    console.error("Email sending error:", error);
    return false;
  }
}

// Notify about new demo class enquiry
export async function notifyDemoClassEnquiry(data: DemoClassData): Promise<void> {
  const timestamp = new Date().toLocaleString("en-IN", { 
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short"
  });

  // SMS message (max 160 chars for better delivery)
  const smsMessage = `NEW DEMO CLASS ENQUIRY!
Parent: ${data.parentName}
Student: ${data.studentName}
Class: ${data.studentClass}
Area: ${data.area}
Phone: ${data.phone}
${data.message ? `Msg: ${data.message.substring(0, 50)}` : ''}
Time: ${timestamp}`;

  // HTML Email
  const emailSubject = `🔔 New Demo Class Enquiry from ${data.parentName}`;
  const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #059669, #0d9488); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border: 1px solid #eee; }
    .info-box { background: white; padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 4px solid #059669; }
    .label { font-weight: bold; color: #059669; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin:0">🔔 New Demo Class Enquiry!</h1>
      <p style="margin:5px 0 0 0">A parent has requested a demo class</p>
    </div>
    <div class="content">
      <div class="info-box">
        <p class="label">👤 Parent Name</p>
        <p style="margin:5px 0">${data.parentName}</p>
      </div>
      <div class="info-box">
        <p class="label">👶 Student Name</p>
        <p style="margin:5px 0">${data.studentName}</p>
      </div>
      <div class="info-box">
        <p class="label">📚 Class</p>
        <p style="margin:5px 0">${data.studentClass}</p>
      </div>
      <div class="info-box">
        <p class="label">📍 Area</p>
        <p style="margin:5px 0">${data.area}</p>
      </div>
      <div class="info-box">
        <p class="label">📱 Phone Number</p>
        <p style="margin:5px 0"><a href="tel:+91${data.phone}" style="color:#059669">+91 ${data.phone}</a></p>
      </div>
      ${data.message ? `
      <div class="info-box">
        <p class="label">💬 Message</p>
        <p style="margin:5px 0">${data.message}</p>
      </div>
      ` : ''}
      <div class="info-box" style="background:#fef3c7; border-left-color:#f59e0b;">
        <p class="label" style="color:#f59e0b">⏰ Submitted At</p>
        <p style="margin:5px 0">${timestamp}</p>
      </div>
      <div style="text-align:center; margin-top:20px;">
        <a href="tel:+91${data.phone}" style="background:#059669; color:white; padding:12px 30px; text-decoration:none; border-radius:5px; display:inline-block;">📞 Call Now</a>
        <a href="https://wa.me/91${data.phone}?text=Hi ${data.parentName}, I received your enquiry for home tuition." style="background:#25D366; color:white; padding:12px 30px; text-decoration:none; border-radius:5px; display:inline-block; margin-left:10px;">💬 WhatsApp</a>
      </div>
    </div>
    <div class="footer">
      <p>This enquiry was submitted through your Home Tuition Website</p>
      <p>Goldy Aggarwal - Home Tuition Services</p>
    </div>
  </div>
</body>
</html>
`;

  // Send notifications in parallel
  await Promise.all([
    sendSMS(TEACHER_PHONE, smsMessage),
    sendEmail(TEACHER_EMAIL, emailSubject, emailHtml),
  ]);
}

// Notify about new review
export async function notifyNewReview(data: ReviewData): Promise<void> {
  const timestamp = new Date().toLocaleString("en-IN", { 
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short"
  });

  const stars = "⭐".repeat(data.rating);

  // SMS message
  const smsMessage = `NEW REVIEW RECEIVED!
${stars} Rating: ${data.rating}/5
Parent: ${data.parentName}
Student: ${data.studentName}
Area: ${data.area}
Review: ${data.review.substring(0, 80)}${data.review.length > 80 ? '...' : ''}
Time: ${timestamp}`;

  // HTML Email
  const emailSubject = `⭐ New ${data.rating}-Star Review from ${data.parentName}`;
  const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #f59e0b, #d97706); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center; }
    .content { background: #f9f9f9; padding: 20px; border: 1px solid #eee; }
    .info-box { background: white; padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 4px solid #f59e0b; }
    .label { font-weight: bold; color: #f59e0b; }
    .rating { font-size: 30px; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin:0">⭐ New Review Received!</h1>
      <p class="rating">${stars}</p>
      <p style="margin:0">${data.rating}/5 Stars</p>
    </div>
    <div class="content">
      <div class="info-box">
        <p class="label">👤 Parent Name</p>
        <p style="margin:5px 0">${data.parentName}</p>
      </div>
      <div class="info-box">
        <p class="label">👶 Student Name</p>
        <p style="margin:5px 0">${data.studentName}</p>
      </div>
      <div class="info-box">
        <p class="label">📍 Area</p>
        <p style="margin:5px 0">${data.area}</p>
      </div>
      <div class="info-box">
        <p class="label">⭐ Rating</p>
        <p style="margin:5px 0">${stars} (${data.rating}/5)</p>
      </div>
      <div class="info-box" style="background:#fef3c7;">
        <p class="label">💬 Review</p>
        <p style="margin:5px 0; font-style:italic;">"${data.review}"</p>
      </div>
      <div class="info-box" style="background:#ecfdf5; border-left-color:#059669;">
        <p class="label" style="color:#059669">⏰ Submitted At</p>
        <p style="margin:5px 0">${timestamp}</p>
      </div>
    </div>
    <div class="footer">
      <p>This review was submitted through your Home Tuition Website</p>
      <p>Goldy Aggarwal - Home Tuition Services</p>
    </div>
  </div>
</body>
</html>
`;

  // Send notifications in parallel
  await Promise.all([
    sendSMS(TEACHER_PHONE, smsMessage),
    sendEmail(TEACHER_EMAIL, emailSubject, emailHtml),
  ]);
}

import nodemailer from 'nodemailer';

const getEmailConfig = () => ({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE === 'true',
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS,
  from: process.env.EMAIL_FROM,
  adminEmail: process.env.ADMIN_EMAIL,
});

const isEmailConfigured = () =>
  Object.values(getEmailConfig()).every((value) => value !== undefined && value !== '');

const createTransporter = (config) =>
  nodemailer.createTransport({
    host: config.host,
    port: Number(config.port),
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });

  //User k liye mail 
const buildUserConfirmation = (contact, config) => ({
  from: config.from,
  to: contact.email,
  subject: contact.subject ? `We received your message: ${contact.subject}` : 'We received your message',
  text: `Hi ${contact.name},

Thank you for contacting us. We have received your message and will get back to you soon.

Subject:
${contact.subject || 'Not provided'}

Your message:
${contact.message}
`,
});

//Admin k liye mail
const buildAdminNotification = (contact, config) => ({
  from: config.from,
  to: config.adminEmail,
  replyTo: contact.email,
  subject: contact.subject ? `New contact form submission: ${contact.subject}` : 'New contact form submission',
  text: `A new contact form submission was received.

Name: ${contact.name}
Email: ${contact.email}
Company: ${contact.company || 'Not provided'}
Phone: ${contact.phone || 'Not provided'}
Subject: ${contact.subject || 'Not provided'}

Message:
${contact.message}
`,
});

export const sendContactEmails = async (contact) => {
  if (!isEmailConfigured()) {
    console.warn('[email] Email configuration is incomplete. Skipping contact emails.');
    return;
  }

  const config = getEmailConfig();
  const transporter = createTransporter(config);

  try {
    await Promise.all([
      transporter.sendMail(buildUserConfirmation(contact, config)),
      transporter.sendMail(buildAdminNotification(contact, config)),
    ]);
  } catch (error) {
    console.error('[email] Failed to send contact emails', {
      contactId: contact._id.toString(),
      message: error.message,
    });
    return;
  }

  console.info('[email] Contact emails sent', {
    contactId: contact._id.toString(),
    userEmail: contact.email,
  });
};

import Contact from '../models/contact.model.js';
import { sendContactEmails } from '../utils/email.service.js';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isNonEmptyString = (value) => typeof value === 'string' && value.trim().length > 0;

export const validateContactPayload = ({ name, email, message } = {}) => {
  if (!isNonEmptyString(name)) {
    return 'Name is required';
  }

  if (!isNonEmptyString(email)) {
    return 'Email is required';
  }

  if (!emailRegex.test(email.trim())) {
    return 'Please provide a valid email address';
  }

  if (!isNonEmptyString(message)) {
    return 'Message is required';
  }

  return null;
};

export const createContactSubmission = async (payload) => {
  const validationError = validateContactPayload(payload);

  if (validationError) {
    const error = new Error(validationError);
    error.statusCode = 400;
    throw error;
  }

  const contact = await Contact.create({
    name: payload.name.trim(),
    email: payload.email.trim().toLowerCase(),
    company: typeof payload.company === 'string' ? payload.company.trim() : '',
    phone: typeof payload.phone === 'string' ? payload.phone.trim() : '',
    subject: typeof payload.subject === 'string' ? payload.subject.trim() : '',
    message: payload.message.trim(),
  });

  await sendContactEmails(contact);

  return contact;
};

import { createContactSubmission } from '../services/contact.service.js';

export const submitContactForm = async (req, res, next) => {
  try {
    await createContactSubmission(req.body);

    console.info('[contact] Contact form submitted', {
      email: req.body.email,
      subject: req.body.subject,
      submittedAt: new Date().toISOString(),
    });

    return res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
    });
  } catch (error) {
    return next(error);
  }
};

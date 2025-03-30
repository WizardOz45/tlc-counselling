import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormWithValidationSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validationResult = contactFormWithValidationSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({ 
          message: "Invalid form data", 
          errors: validationResult.error.format() 
        });
      }

      // Store the contact form data
      const contactData = validationResult.data;
      const savedContact = await storage.saveContactForm(contactData);

      // Send email notification (in a real app)
      // This is mock code - in a production app, you would use real email credentials
      /*
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT) || 587,
        secure: process.env.EMAIL_SECURE === 'true',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: `"TLC Counselling" <${process.env.EMAIL_USER}>`,
        to: "contact@tlccounselling.com",
        subject: `New Contact Form Submission from ${contactData.name}`,
        text: `
          Name: ${contactData.name}
          Email: ${contactData.email}
          Phone: ${contactData.phone || 'Not provided'}
          Service: ${contactData.service}
          Message: ${contactData.message}
        `,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${contactData.name}</p>
          <p><strong>Email:</strong> ${contactData.email}</p>
          <p><strong>Phone:</strong> ${contactData.phone || 'Not provided'}</p>
          <p><strong>Service:</strong> ${contactData.service}</p>
          <p><strong>Message:</strong> ${contactData.message}</p>
        `,
      });
      */

      return res.status(201).json({ 
        message: "Contact form submitted successfully",
        contact: savedContact
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

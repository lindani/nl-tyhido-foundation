const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

// Test database connection
pool.on('connect', () => {
  console.log('Connected to PostgreSQL database');
});

pool.on('error', (err) => {
  console.error('PostgreSQL pool error:', err);
});

// Create table if it doesn't exist
const createTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      subject VARCHAR(255) NOT NULL,
      message TEXT NOT NULL,
      submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  try {
    await pool.query(query);
    console.log('Contact submissions table ready');
  } catch (err) {
    console.error('Error creating table:', err);
  }
};

// Email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // or your email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Load email template
const emailTemplate = handlebars.compile(fs.readFileSync(path.join(__dirname, 'templates', 'contact-email.hbs'), 'utf8'));

// API endpoint for contact form
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Insert into database
    const query = 'INSERT INTO contact_submissions (name, email, subject, message) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [name, email, subject, message];
    const result = await pool.query(query, values);

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.FOUNDER_EMAIL || 'info@nltyhidofoundation.org',
      subject: `New Contact Submission: ${subject}`,
      html: emailTemplate({
        name,
        email,
        subject,
        message,
        submittedAt: new Date().toLocaleString()
      })
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Contact form submitted successfully', data: result.rows[0] });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  createTable();
});
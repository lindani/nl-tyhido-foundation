# NL Tyhido Foundation Backend

Express.js backend for handling contact form submissions, storing data in PostgreSQL, and sending email notifications.

## Setup

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Set up PostgreSQL database:**
   - Create a PostgreSQL database named `nl_tyhido_db`
   - Update the `.env` file with your database credentials

3. **Configure environment variables:**
   - Copy `.env` and fill in your actual values:
     - Database credentials
     - Email service credentials (Gmail recommended)
     - Founder email address

4. **Start the server:**
   ```bash
   npm run dev  # For development with nodemon
   npm start    # For production
   ```

## API Endpoints

### POST /api/contact
Submits a contact form and sends an email notification.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Partnership Inquiry",
  "message": "I would like to discuss partnership opportunities..."
}
```

**Response:**
- 200: Success with stored data
- 400: Validation error
- 500: Server error

## Email Configuration

The backend uses Nodemailer with Gmail. For Gmail:
1. Enable 2-factor authentication
2. Generate an App Password
3. Use your email and App Password in `.env`

## Database Schema

The `contact_submissions` table includes:
- id (SERIAL PRIMARY KEY)
- name (VARCHAR)
- email (VARCHAR)
- subject (VARCHAR)
- message (TEXT)
- submitted_at (TIMESTAMP)
# NL Tyhido Foundation

A full-stack web application for the Ndithini L Tyhido Foundation, dedicated to molding ethical leaders and self-sufficient youth within South African communities.

## Project Structure

```
nl-tyhido-foundation/
├── frontend/          # React + Vite frontend application
│   ├── src/          # Source code
│   ├── public/       # Static assets
│   ├── package.json  # Frontend dependencies
│   └── vite.config.js
├── backend/           # Express.js backend API
│   ├── server.js     # Main server file
│   ├── templates/    # Email templates
│   ├── package.json  # Backend dependencies
│   └── .env         # Environment variables
├── AGENTS.md         # Project configuration
├── package.json      # Root package.json with scripts
└── README.md
```

## Tech Stack

### Frontend
- **React 19** with Vite
- **Tailwind CSS v4** (CSS-based configuration)
- **ESLint** flat config (v9)
- **Framer Motion** for animations
- **React Hot Toast** for notifications

### Backend
- **Express.js** web framework
- **PostgreSQL** database
- **Nodemailer** for email notifications
- **Handlebars** for email templates
- **CORS** for cross-origin requests

## Quick Start

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL database
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nl-tyhido-foundation
   ```

2. **Install all dependencies**
   ```bash
   npm run install:all
   ```

3. **Set up the database**
   ```bash
   createdb nl_tyhido_db
   ```

4. **Configure environment variables**
   - Copy `backend/.env` and fill in your credentials:
     ```env
     DB_USER=your_db_user
     DB_HOST=localhost
     DB_NAME=nl_tyhido_db
     DB_PASSWORD=your_db_password
     EMAIL_USER=your_email@gmail.com
     EMAIL_PASS=your_app_password
     FOUNDER_EMAIL=founder@nltyhidofoundation.org
     ```

5. **Start the development servers**
   ```bash
   npm run dev
   ```

   This will start both frontend (http://localhost:5173) and backend (http://localhost:5000) servers concurrently.

## Available Scripts

### Root Level
- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build the frontend for production
- `npm run start` - Start the backend server
- `npm run install:all` - Install dependencies for all workspaces

### Frontend (`cd frontend`)
- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend (`cd backend`)
- `npm run dev` - Start with nodemon (auto-restart)
- `npm start` - Start production server

## API Documentation

### Contact Form Submission
**POST** `/api/contact`

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
- `200`: Success with stored data
- `400`: Validation error
- `500`: Server error

## Email Configuration

The application uses Gmail for sending email notifications. To set up:

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password: https://support.google.com/accounts/answer/185833
3. Add your Gmail address and App Password to `backend/.env`

## Database Schema

The PostgreSQL database includes a `contact_submissions` table with:
- `id` (SERIAL PRIMARY KEY)
- `name` (VARCHAR)
- `email` (VARCHAR)
- `subject` (VARCHAR)
- `message` (TEXT)
- `submitted_at` (TIMESTAMP)

## Deployment

### Frontend
```bash
cd frontend
npm run build
# Deploy the `dist` folder to your hosting service
```

### Backend
```bash
cd backend
npm start
# Configure your server to run on the desired port
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

© 2026 Ndithini L Tyhido Foundation. All rights reserved.

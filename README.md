# islamic-quiz-learning-system
A live web application for Islamic quizzes and knowledge assessment. This project includes a landing page, quiz library, dashboards, and admin-ready structure built with Next.js.

## Features
- Responsive landing page
- Quiz category browsing
- Multiple-choice quiz flow
- Explanation-based result review
- Learner dashboard
- Admin dashboard
- API routes for auth and quiz data
- Prisma schema for future production database

## Local setup
1. Install dependencies:
   npm install
2. Create a PostgreSQL database and set DATABASE_URL in `.env`
3. Run Prisma push:
   npm run db:push
4. Start the app:
   npm run dev

## Production notes
- Set a secret in `JWT_SECRET`
- Deploy to Vercel or any Node-compatible host
- Connect to a managed PostgreSQL database

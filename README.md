# Islamic Quiz & Knowledge Assessment System

A Next.js MVP for Islamic quizzes and guided learning across Qur’an, Hadith, Seerah, and Fiqh.

## Requirements

- Node.js 18.18+ (Node.js 20 LTS recommended)
- npm 9+
- Docker Desktop (recommended for the local PostgreSQL database)

## Run locally

### 1. Install dependencies

```bash
npm install
```

### 2. Start PostgreSQL

```bash
docker compose up -d postgres
```

If you already have PostgreSQL installed locally, skip Docker and create a database named `islamic_quiz`.

### 3. Create local environment variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

For the included Docker database, `.env.local` should contain:

```env
DATABASE_URL="postgresql://quiz_user:quiz_password@localhost:5432/islamic_quiz?schema=public"
JWT_SECRET="replace-this-with-a-long-random-secret"
NEXTAUTH_URL="http://localhost:3000"
```

Do not commit `.env.local`.

### 4. Create the database schema and seed content

```bash
npm run db:push
npm run db:seed
```

The seed creates an admin account:

- Email: `admin@islamicquiz.com`
- Password: `admin1234`

Change this password before production use.

### 5. Start Next.js

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Useful commands

```bash
npm run build       # Generate Prisma client and build Next.js
npm start           # Start the production build
npm run db:push     # Apply the Prisma schema to the configured database
npm run db:seed     # Add development content and admin user

docker compose logs -f postgres
docker compose down
```

To remove the local database volume and start fresh:

```bash
docker compose down -v
```

## Troubleshooting

### `P1001: Can't reach database server`

Check that Docker is running and PostgreSQL is healthy:

```bash
docker compose ps
docker compose logs postgres
```

### Prisma client errors

Regenerate the client:

```bash
npx prisma generate
```

### Port 5432 is already in use

Stop the existing PostgreSQL service or change the host port in `docker-compose.yml`, for example `5433:5432`, and update `DATABASE_URL` to use port `5433`.

## Production checklist

Before deploying, configure a managed PostgreSQL database, replace `JWT_SECRET`, change the seeded admin password, and add secure HTTP-only cookie authentication. The current JWT API is suitable for the MVP foundation and should be hardened before handling production accounts.

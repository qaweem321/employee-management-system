# Employee Management System (EMS)

A full-stack Employee Management System with role-based dashboards for
Admins and Employees — employee records, attendance tracking, leave
applications, and payslip generation.

**Live demo:** _add your deployed URL here_
**Screenshots:** _add a screenshot or two here once deployed_

## Project origin & what I did

This project started from a purchased starter template (a MERN-stack EMS
boilerplate). I did not write the original application from scratch. What
you'll find in the commit history here is my own work on top of it:

- Audited and patched dependency vulnerabilities (`npm audit`) on both the
  client and server
- Added a centralized error-handling and 404 middleware on the API
- Added a global 401 response interceptor on the client so an expired/invalid
  token logs the user out automatically instead of failing silently
- Added `.env.example` files documenting the required environment variables
- Wrote this README

I'm keeping this transparent rather than presenting the whole codebase as
original work — the commit/branch history below reflects exactly what I
changed and why.

## Tech stack

**Client:** React 19, React Router 7, Tailwind CSS 4, Vite, Axios
**Server:** Node.js, Express 5, MongoDB (Mongoose), JWT auth, bcrypt,
Nodemailer, Inngest (background jobs / cron), Multer

## Features

- JWT-based authentication with role-based access control (Admin / Employee)
- Admin dashboard: manage employees, departments, and salaries
- Employee dashboard: personal profile, attendance, leave, payslips
- Attendance tracking
- Leave application and approval workflow
- Payslip generation and printing
- Email notifications via Nodemailer / Inngest

## Project structure

```
.
├── client/          # React + Vite frontend
│   └── src/
│       ├── api/         # Axios instance + interceptors
│       ├── components/  # UI components
│       ├── context/     # Auth context
│       └── pages/       # Route pages
└── server/          # Express + MongoDB backend
    ├── config/          # DB / mailer config
    ├── controllers/     # Route handlers
    ├── middleware/       # Auth, error handling
    ├── models/          # Mongoose schemas
    └── routes/          # Express routers
```

## Getting started

### Prerequisites

- Node.js 18+
- A MongoDB connection string (e.g. MongoDB Atlas)
- SMTP credentials if you want email notifications to work

### 1. Clone and install

```bash
git clone https://github.com/qaweem321/employee-management-system.git
cd employee-management-system

cd server && npm install
cd ../client && npm install
```

### 2. Configure environment variables

Copy the example env files and fill in your own values:

```bash
cp server/.env.example server/.env
cp client/.env.example client/.env
```

See each file for the variables required.

### 3. Run the app

```bash
# terminal 1 — API server
cd server
npm run server      # nodemon, http://localhost:4000

# terminal 2 — client
cd client
npm run dev          # http://localhost:5173
```

### 4. (Optional) Seed the database

```bash
cd server
npm run seed
```

## Known issues / remaining work

- `nodemailer` has one outstanding high-severity advisory that requires a
  breaking major-version upgrade (`npm audit fix --force`); left unpatched
  for now pending a compatibility check, tracked as follow-up work rather
  than pushed in blind.

## License

This started from a purchased starter template with no formal license terms
attached (an informal "pay a small fee, the project's yours" arrangement,
not a written license) — so I can't grant reuse rights over that base code,
since I don't hold clear rights to it myself.

What I *can* license is the work that's actually mine: the changes in this
repo's commit history (README, `.env.example` files, the centralized
error-handling middleware, and the client-side 401 redirect interceptor)
are released under the [MIT License](LICENSE) — feel free to reuse those
specific pieces. Everything else (the base application as originally
received) is unlicensed; treat it as all-rights-reserved to the original,
unknown author.

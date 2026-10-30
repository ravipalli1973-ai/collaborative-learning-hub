# Collaborative Learning & Project Hub

A full-stack collaborative platform built with React, Node.js, Express.js, and PostgreSQL that streamlines assignment submissions, tracks milestone progress, and facilitates developer feedback.

## Features
- **Assignment Submission Portal:** Submit code snippets and repository links for assigned milestones.
- **Review & Feedback Engine:** View code reviews, feedback, and evaluation statuses.
- **Milestone Progress Tracker:** Visual overview of tasks organized across development sprints and milestones.
- **Secure REST APIs:** Protected routes with token-based authentication guards and structured error handling.
- **Relational Data Storage:** PostgreSQL database managing users, and submissions.

## Tech Stack
- **Frontend:** React.js, Fetch API, HTML5/CSS3
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL (`pg` driver)
- **Version Control:** Git, GitHub

## Project Architecture
```text
collaborative-learning-hub/
├── client/                 # React frontend application
│   ├── public/
│   └── src/
│       ├── components/     # UI modules (SubmissionForm, MilestoneTracker)
│       ├── api.js          # API service layer
│       ├── App.js
│       └── index.js
├── server/                 # Express REST API backend
│   ├── src/
│   │   ├── config/         # Database pool configuration
│   │   ├── controllers/    # Business logic
│   │   ├── middleware/     # Auth guard & error handling middleware
│   │   ├── routes/         # REST endpoint routing
│   │   └── server.js       # Entry point
│   ├── schema.sql          # Database initialization DDL
│   └── .env.example
├── .gitignore
└── README.md

## Quick Start Guide

### Prerequisites
- Node.js (v18+)
- PostgreSQL

### Local Setup
1. Clone the repository.
2. Install dependencies:
   ```bash
   cd client && npm install
   cd ../server && npm install

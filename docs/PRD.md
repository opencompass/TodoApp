# Product Specification Document

## 1. Overview

This document outlines the specifications for a React Native-based mobile and web application with a PostgreSQL backend. The application is designed to provide a seamless user experience across mobile and web platforms, leveraging a centralized database for data storage and management.

## 2. Purpose

 This is a mobile web application which later can be made IOS and android apps. The purpose of this app is help students to learn certain subjects at their spare time. For now, let's focus on three subjects: Chinese, Math and English. It aims to deliver an intuitive user interface combined with a robust backend to support data handling, authentication, and analytics.

## 3. Key Features

### 3.1 User Authentication

- Sign up, login, and logout functionality.
- Social media and email-based authentication.
- Secure password handling with hashing and salting.

### 3.2 User Management

- Profile creation and management.
- Role-based access control (Admin/User/Guest).
- User activity tracking.

### 3.3 Core Functionality

- Allow user to select which subject to learn. 
- The main learning method is do do multiple choice problems. Each question will have four choices. 
- After student makes the choice, the system will check the answer and provide the right answer. 
- For each subject, there will be a record of all questions which the student made mistakes for future review.
- All quiz questions will stored in a postgresql database which is accessible to the frontend application. 

### 3.4 Notifications

- Push notifications for mobile users.
- Email and in-app notifications.

### 3.5 Data Management

- CRUD (Create, Read, Update, Delete) operations.
- Data validation and error handling.
- Offline data access with local storage.

### 3.6 Reporting and Analytics

- Dashboard with visual analytics.
- Export data in various formats (CSV, PDF, etc.).

## 4. Technical Requirements

### 4.1 Frontend

- Framework: React Native (Expo or Bare Workflow).
- State Management: Redux Toolkit / React Context API.
- UI Components: React Native Paper or NativeBase.

### 4.2 Backend

- Database: PostgreSQL.
- API Framework: Node.js with Express or NestJS.
- ORM/ODM: Sequelize or TypeORM.

### 4.3 Hosting and Deployment

- Local hosting: home-based server. Use docker when possible.
- Cloud Hosting: AWS, Azure, or Vercel.
- CI/CD: GitHub Actions or Jenkins.

### 4.4 Security

- HTTPS encryption.
- Token-based authentication (JWT).
- Role-based access control (RBAC).

## 5. Development Timeline

| Phase               | Timeline | Deliverables                                   |
| ------------------- | -------- | ---------------------------------------------- |
| Planning            | 1 hour   | Finalized requirements and wireframes.         |
| Development Phase 1 | 3 hours  | Core features and database integration.        |
| Development Phase 2 | 2 hours  | Notifications, analytics, and optimizations.   |
| Testing & QA        | 1 hour   | Bug fixes and performance testing.             |
| Deployment          | 1 hour   | Production deployment and final documentation. |

## 6. Success Metrics

- User adoption rate.
- Performance benchmarks (response time < 200ms).
- Data accuracy and reliability.
- User feedback and ratings.

## 7. Future Enhancements

- AI/ML integration for recommendations.
- Multi-language support.
- Third-party integrations with APIs.

## 8. Appendix

- Wireframes and mockups.
- API documentation.
- Database schema diagrams.

------

**Note:** Update the purpose and feature descriptions as required to align with the specific application goals.
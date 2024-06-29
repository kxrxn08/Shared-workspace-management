# SharedHaven

![SharedHaven Logo](https://via.placeholder.com/150) <!-- Replace with your logo URL -->

SharedHaven is a comprehensive platform designed to streamline the management of shared workspaces. Whether you're running a coworking space, a shared office, or a community hub, SharedHaven helps you manage bookings, resources, payments, and more with ease.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

### User Authentication and Profiles
- Secure registration and login.
- Profile management to track bookings, preferences, and usage history.

### Workspace Management
- Admin dashboard to manage workspace availability, bookings, and resources.
- Tools for adding and updating workspace details (photos, amenities, rules).

### Booking System
- Real-time booking system for reserving workspaces, meeting rooms, and other facilities.
- Calendar view for managing and viewing booking schedules.

### Resource Allocation
- Inventory management for workspace resources (e.g., projectors, desks, chairs).
- Reservation system for additional resources and equipment.

### Payment Integration
- Secure payment gateway for processing booking fees and membership subscriptions.
- Invoice generation and payment history tracking.

## Demo

Check out our [live demo](#) to see SharedHaven in action. <!-- Replace with actual demo link -->

## Tech Stack

- **Frontend:** React, Redux, MUI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens), OAuth
- **Payment Integration:** Razorpay
- **Deployment:** Docker, Kubernetes

## Installation

To run SharedHaven locally, follow these steps:

### Prerequisites

- Node.js (>= 14.x)
- MongoDB (>= 4.x)
- Docker (optional, for containerized deployment)


###  1. **Clone the repository:**
  ```
  git clone https://github.com/your-username/sharedhaven.git
  ```
### 2.  **Navigate to the project directory:**
	
	cd sharedhaven
	
#### **Backend Setup (Node.js and Express)**

**2..1.Navigate to the backend directory:**

	cd backend
	
**2.2 Install the backend dependencies:**

	npm install
### 3.Set up environment variables:
**3.1Create a .env file in the backend directory and add the required environment variables:**

		PORT=5000
		MONGO_URI=your_mongodb_connection_string
		JWT_SECRET=your_jwt_secret
		STRIPE_SECRET_KEY=your_stripe_secret_key


**3.2 Start the backend server:**

	npm start
###  4. Frontend Setup (React)
##### 4.1 Navigate to the frontend directory:

	cd ../frontend


**4.2 Install the frontend dependencies:**

	npm install

### 	5. Set up environment variables:
**Create a .env file in the frontend directory and add the required environment variables:**

	REACT_APP_API_URL=http://localhost:5000
	REACT_APP_STRIPE_PUBLIC_KEY=your_razorpay_public_key

#### 	**6. Start the frontend development server:**
		npm start

### Running Both Servers
Make sure both the backend and frontend servers are running. By default, the frontend server runs on http://localhost:3000 and the backend server on http://localhost:5000.


# Usage
### Admin Access
To access the admin dashboard, log in with admin credentials. If you don't have admin credentials, you can create an admin account through the database or initial setup script.

###  Booking a Workspace
Users can browse available workspaces and book them in real-time. The calendar view provides an overview of all bookings.

### Managing Resources
Admins can add, update, or remove resources associated with workspaces, such as desks, projectors, and more.


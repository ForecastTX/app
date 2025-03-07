# ForecastTX React App

## Overview
This is a React-based authentication and landing page for ForecastTX. The app includes a login page, a landing page with a redirect, and an email authorization check for account creation.

## Features
- **Landing Page**: Displays a welcome message and redirects to the login page after 3 seconds.
- **Login Page**: Allows users to input their email and password, with an option to create an account.
- **Account Creation Authorization**: Checks if the user's email is authorized before proceeding.

## Installation

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- npm (comes with Node.js) or yarn

### Setup
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd forecasttx-react
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
   or
   ```sh
   yarn start
   ```
4. Open your browser and go to `http://localhost:3000`.

## Project Structure
```
forecasttx-react/
│-- src/
│   │-- components/
│   │   │-- Landing.jsx
│   │   │-- Login.jsx
│   │   │-- CreateAccount.jsx
│   │-- styles/
│   │   │-- landing.css
│   │   │-- login.css
│   │   │-- auth.css
│   │-- App.jsx
│   │-- index.js
│-- public/
│-- package.json
│-- README.md
```

## Technologies Used
- React.js
- React Router
- CSS (for styling)

## Future Enhancements
- Implement backend authentication
- Implement ML algoritm
- Implement the "Dashboard" section
- Store user data securely
- Improve UI/UX with animations and better responsiveness

## License
This project is licensed under the MIT License.


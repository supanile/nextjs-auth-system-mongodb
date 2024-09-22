# Next.js Authentication System with MongoDB

This project is a full-featured authentication system built with Next.js and MongoDB. It includes user registration, login functionality, and session management using NextAuth.js.

## Features

- User registration
- User login
- Session management
- MongoDB integration
- Responsive design

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm or yarn
- MongoDB account

## Installation

Follow these steps to get your development environment set up:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/next-auth-login-register-mongodb.git
   cd next-auth-login-register-mongodb
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or if you use yarn:
   ```
   yarn install
   ```

3. Create a `.env` file in the root directory of the project.

4. Set up your MongoDB database:
   - Create a new MongoDB database
   - Obtain your MongoDB connection string

5. Add the following environment variables to your `.env` file:
   ```
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_nextauth_secret
   ```
   Replace `your_mongodb_connection_string` with your actual MongoDB connection string, and `your_nextauth_secret` with a secure random string.

## Usage

To start the development server, run:

```
npm run dev
```
or if you use yarn:
```
yarn dev
```

Navigate to `http://localhost:3000` in your browser to see the application running.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [MongoDB](https://www.mongodb.com/)

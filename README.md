
# Educase Task - School Management API

This is a Node.js project for managing schools, including adding new schools and listing schools based on proximity to a user's location.

## Prerequisites

Make sure you have Node.js and npm installed on your machine.

## Installation

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/yourusername/educase-task.git
   ```

2. Navigate to the project directory.

   ```bash
   cd educase-task
   ```

3. Install the required dependencies using npm.

   ```bash
   npm install
   ```

## Running the Project

### Development Mode

To run the project in development mode (with auto-reload on file changes), use:

```bash
npm run dev
```

### Production Mode

To run the project in production mode, use:

```bash
npm start
```

The server will start running on port 4000 by default. You can change the port by setting the `PORT` environment variable.

## API Endpoints

### 1. Add a School

**Endpoint:** `POST http://localhost:4000/api/addSchool`

**Sample Request Body:**

```json
{
    "name": "Test",
    "address": "Test123",
    "latitude": 21.19240431800377, 
    "longitude": 72.79903237677011
}
```

**Description:** This endpoint allows you to add a new school to the database.

### 2. List Schools

**Endpoint:** `GET http://localhost:4000/api/listSchools?latitude={latitude}&longitude={longitude}`

**Sample Request:**

```bash
http://localhost:4000/api/listSchools?latitude=21.1923&longitude=72.7919
```

**Description:** This endpoint returns a list of schools sorted by their proximity to the provided latitude and longitude.

## Server Status

You can check if the server is running by accessing:

```bash
http://localhost:4000/
```

**Sample Response:**

```json
{
    "success": true,
    "message": "Server is running perfectly"
}
```

## Default Port

The server runs on `PORT=4000` by default.

## Dependencies

- `express`: Fast, unopinionated, minimalist web framework for Node.js
- `cors`: Middleware for enabling Cross-Origin Resource Sharing
- `body-parser`: Node.js body parsing middleware
- `mysql`: MySQL client for Node.js
- `mysql2`: MySQL client for Node.js with additional features
- `dotenv`: Module for loading environment variables from a `.env` file
- `nodemon`: Tool that helps develop node.js applications by automatically restarting the node application when file changes are detected

## License

This project is licensed under the ISC License.

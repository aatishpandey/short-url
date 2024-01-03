
# URL Shortener

A simple URL shortener service built with Node.js, Express, and MongoDB.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Endpoints](#endpoints)
- [Contributing](#contributing)

## Features

- Shorten long URLs to a unique short ID.
- Redirect users from short URLs to the original long URLs.
- Track visit analytics for each short URL.
- MongoDB integration for data storage.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- MongoDB installed and running
- npm or yarn package manager installed

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/aatishpandey/short-url.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd short-url
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Create a `.env` file in the project root and set the following environment variables:**

   ```env
   MONGODB_URI=mongodb://localhost:27017/url_shortener
   ```

   Adjust the MongoDB URI based on your MongoDB setup.

5. **Start the application:**

   ```bash
   npm start
   ```

   The server will start at `http://localhost:3000` by default.

## Endpoints

- `POST /url`: Shorten a URL.
- `GET /url/:id`: Redirect to the original URL.
- `GET /url/analytics/:id`: Get visit analytics for a short URL.


## Contributing

Feel free to contribute to this project.

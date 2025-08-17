# StarProxy Backend

StarProxy is a web proxy application that allows users to access and interact with web content through a secure and efficient proxy server. This README provides an overview of the backend setup, including installation, usage, and the structure of the codebase.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd StarProxy/backend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Build the TypeScript files:
   ```
   npm run build
   ```

4. Start the server:
   ```
   npm start
   ```

## Usage

Once the server is running, you can access the proxy functionality through the defined endpoints. The main endpoint for proxy requests is `/proxy`, which allows users to submit URLs for fetching and processing.

## Project Structure

- `src/app.ts`: Entry point of the Express application. Sets up the server, middleware, and routes.
- `src/routes/proxy.ts`: Defines the proxy routes and connects them to the proxy controller.
- `src/controllers/proxyController.ts`: Contains the `ProxyController` class with methods for handling proxy requests, including URL parsing and fetching content.
- `src/types/index.ts`: Exports interfaces for request and response types used in the backend.

## Technologies Used

- **Node.js**: JavaScript runtime for building the server.
- **Express**: Web framework for Node.js to handle routing and middleware.
- **Axios**: Promise-based HTTP client for making requests to external URLs.
- **Cheerio**: jQuery-like library for parsing and manipulating HTML.
- **TypeScript**: Superset of JavaScript that adds static types for better development experience.

For more detailed information on each component, please refer to the respective files in the `src` directory.
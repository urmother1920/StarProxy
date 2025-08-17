# StarProxy

StarProxy is a comprehensive web proxy application built with a React 18 + TypeScript frontend using Vite and an Express.js backend. This project aims to provide a seamless proxy experience, allowing users to fetch and interact with web content through a user-friendly interface.

## Project Structure

The project is organized into two main directories: `backend` and `frontend`.

### Backend

The backend is built using Express.js and TypeScript. It handles proxy requests and serves as the API for the frontend.

- **src/app.ts**: Entry point of the Express application. Sets up the server, middleware, and routes for handling proxy requests.
- **src/routes/proxy.ts**: Exports the proxy routes, defining the endpoints for proxy functionality and connecting them to the proxy controller.
- **src/controllers/proxyController.ts**: Contains the `ProxyController` class with methods for handling proxy requests, including URL parsing, fetching HTML with axios, modifying links, and managing caching.
- **src/types/index.ts**: Exports interfaces for request and response types used in the backend, extending the types from the Express library.
- **package.json**: Configuration file for npm in the backend, listing dependencies such as Express, axios, and cheerio.
- **tsconfig.json**: TypeScript configuration for the backend, specifying compiler options and files to include in the compilation.

### Frontend

The frontend is developed using React 18 and TypeScript with Vite for fast development and build processes.

- **src/main.tsx**: Entry point of the React application. Renders the main App component and sets up the React application.
- **src/App.tsx**: Defines the main application component, setting up routing and the main layout.
- **src/components/ProxyForm.tsx**: Exports the `ProxyForm` component, which handles user input for the proxy URL, including smart URL parsing and submission functionality.
- **src/pages/Home.tsx**: Exports the Home component, serving as the main landing page with the hero section, proxy form, and feature cards.
- **src/types/index.ts**: Exports interfaces for types used in the frontend, such as props for components.
- **public/index.html**: Main HTML file for the React application, including the root div for rendering the React app.
- **package.json**: Configuration file for npm in the frontend, listing dependencies such as React, Vite, and TanStack Query.
- **tsconfig.json**: TypeScript configuration for the frontend, specifying compiler options and files to include in the compilation.

## Getting Started

To get started with StarProxy, clone the repository and install the dependencies for both the backend and frontend:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd StarProxy
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

4. Start the backend server:
   ```
   cd backend
   npm start
   ```

5. Start the frontend development server:
   ```
   cd frontend
   npm run dev
   ```

Now you can access the application in your browser at `http://localhost:3000` (or the port specified in your backend configuration).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
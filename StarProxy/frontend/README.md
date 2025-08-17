# StarProxy Frontend

Welcome to the StarProxy frontend! This project is built using React 18 and TypeScript, utilizing Vite as the build tool. Below is an overview of the structure and functionality of the frontend application.

## Project Structure

The frontend directory contains the following key files and folders:

- **src/**: This folder contains all the source code for the React application.
  - **main.tsx**: The entry point of the application where the main App component is rendered.
  - **App.tsx**: The main application component that sets up routing and layout.
  - **components/**: Contains reusable components for the application.
    - **ProxyForm.tsx**: A component for handling user input for the proxy URL, including URL parsing and submission.
  - **pages/**: Contains the different pages of the application.
    - **Home.tsx**: The main landing page that includes the hero section, proxy form, and feature cards.
  - **types/**: Contains TypeScript interfaces for props and other types used in the frontend.

- **public/**: This folder contains static assets.
  - **index.html**: The main HTML file for the React application, which includes the root div for rendering.

- **package.json**: The configuration file for npm, listing dependencies such as React, Vite, TanStack Query, and shadcn/ui.

- **tsconfig.json**: The TypeScript configuration file specifying compiler options and files to include in the compilation.

## Getting Started

To get started with the StarProxy frontend, follow these steps:

1. **Install Dependencies**: Navigate to the `frontend` directory and run:
   ```
   npm install
   ```

2. **Run the Development Server**: Start the development server with:
   ```
   npm run dev
   ```

3. **Open the Application**: Open your browser and go to `http://localhost:3000` to view the application.

## Features

- User-friendly interface for entering proxy URLs.
- Smart URL parsing to ensure valid input.
- Integration with the backend for handling proxy requests.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests to improve the StarProxy frontend.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
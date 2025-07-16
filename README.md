# Text Editor Project

This project is a simple yet powerful rich text editor built using React and the Quill library. It allows users to create and edit formatted text with a variety of styling options, similar to popular word processors.

## Key Features

- Rich text editing with support for headers, fonts, sizes, lists, indentation, bold, italic, underline, colors, alignment, links, images, and more.
- Toolbar with easy access to all formatting options.
- Content is saved automatically in the browser's localStorage, so your work is preserved even if you refresh or close the page.
- Built with React for a modern, component-based UI.
- Uses Vite as the build tool and development server for fast and efficient development.
- ESLint configured to maintain code quality and consistency.

## Technologies Used

- **React**: For building the user interface.
- **Quill**: A powerful rich text editor library that provides the editing functionality.
- **Vite**: A fast build tool and development server.
- **ESLint**: For linting and ensuring code quality.
- **React Router DOM**: Included for routing capabilities (not currently used but ready for future expansion).

## Project Structure

- `src/main.jsx`: Entry point of the application, renders the main App component.
- `src/App.jsx`: Main component that initializes the Quill editor and handles loading/saving content.
- `src/component/ToolbarOptions.js`: Defines the toolbar options for the Quill editor.
- `index.html` and `src/index.css`: Base HTML and styling for the app.
- Configuration files like `package.json`, `vite.config.js`, and `eslint.config.js` set up dependencies, build, and linting.

## How to Run

1. Install dependencies:
   ```
   npm install
   ```
2. Start the development server:
   ```
   npm run dev
   ```
3. Open your browser and go to `http://localhost:3000` (or the port Vite specifies).

## Usage

- Start typing in the editor area.
- Use the toolbar to format your text.
- Your content is saved automatically in localStorage, so you don't lose your work.

---

This project is a great starting point for anyone looking to build a web-based rich text editor with React and Quill. Feel free to explore and extend it as needed!

# Monaco Editor with Next.js

This project is a web application built with Next.js that includes a Monaco Editor for writing and running code. It features:

- A Monaco Editor with syntax highlighting and autocompletion.
- Theme toggling between light and dark modes.
- Language toggling for different programming languages.
- Responsive UI with Tailwind CSS.
- State management using Context API to avoid prop drilling.
- A button to submit and run the code, displaying the output.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.



### Installing

1. **Clone the repository:**

```bash
git clone https://github.com/sahilrahmani89/e6data-code-editor.git
cd e6data-code-editor


Project Structure
pages/: Contains the Next.js pages.
pages/components/: Contains the React components including the editor and UI elements.
pages/provider: Contains the Context API setup for managing state.

Monaco Editor
The editor component is based on Monaco Editor and supports multiple languages and themes.

Theme Toggling
Users can switch between light and dark themes using a toggle button.

Language Toggling
Users can switch between different programming languages supported by Monaco Editor.

Responsive Design
The UI is designed to be responsive using Tailwind CSS, ensuring it works well on different screen sizes.

State Management
The Context API is used to manage the application state, avoiding the need for prop drilling.

Usage
Editor

Write your code in the Monaco Editor. You can choose different languages from the dropdown menu.

Theme Toggle

Switch between light and dark themes using the toggle button in the UI.

Language Toggle

Change the programming language using the dropdown menu provided.

Submit Code

Click the "Submit" button to execute the code. The output will be displayed below the editor.
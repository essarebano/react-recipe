# Recipe Web App

## Screenshots

**Desktop View**
![Desktop View](desktop-web-react-recipe.png)

**Mobile View**
![Mobile View](mobile-web-react-recipe.png)

## Features

- **Recipe Listing**: View a list of available recipes with images and brief descriptions.
- **Recipe Details**: Click on a recipe to view detailed information, including ingredients, cooking instructions, and nutritional information.
- **Special Offers**: View special offers related to certain ingredients.
- **Responsive Design**: Optimized for both desktop and mobile viewing.
- **Lazy Loading Images**: Improve performance by loading images only when they are about to be displayed.
- **Modal View**: Display recipe details in a modal for a seamless user experience.
- **Error Handling**: Gracefully handle and display errors when fetching data.

## Tech Stack

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A fast frontend build tool and development server.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed.
- **npm/Yarn**: Ensure you have npm or Yarn installed.

### Installation

1. Install the dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the App

1. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Running `json-server`

1. Start mock server:
   ```sh
   npm run json-server:start
   # or
   yarn json-server:start
   ```

2. You can view `response` with this URL endpoints on browser:
   ```
   http://localhost:3001/recipes
   http://localhost:3001/specials
   ```
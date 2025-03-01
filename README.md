# TMDB Movie Database

This project is a movie database application built with React and Vite. It uses the TMDB (The Movie Database) API to fetch and display information about movies, including trailers.

## Features

- Search for movies by title
- Display trending movies
- View movie details including title, overview, rating, and language
- Play movie trailers using YouTube

## Technologies Used

- React
- Vite
- TMDB API
- Appwrite for database and authentication
- ReactPlayer for playing trailers
- Tailwind CSS for styling

## Getting Started

### Prerequisites

- Node.js and npm installed
- TMDB API key
- Appwrite project setup

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/tmdb-movie-database.git
   cd tmdb-movie-database
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your TMDB API key and Appwrite project details:

   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key
   VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
   VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
   VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
   ```

### Running the Application

To start the development server, run:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Project Structure

- `src/components`: Contains React components such as `MovieCard`, `MoviePlayer`, `Spinner`, and `Search`.
- `src/appwrite.jsx`: Contains functions for interacting with the Appwrite database.
- `src/App.jsx`: Main application component.

### License

This project is licensed under the MIT License.

# 🎬 TMDB Movie Database - Discover Your Next Favorite Film 🍿

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-%2320232A.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

Dive into the world of cinema with our TMDB Movie Database application. Built with React and Vite, this project leverages the powerful TMDB API to bring you comprehensive movie information and trailers.

## ✨ Key Features

* **🔍 Effortless Movie Search:** Find any movie by its title with our intuitive search functionality.
* **🔥 Trending Movies at Your Fingertips:** Stay updated with the latest and most popular films.
* **🎬 Detailed Movie Insights:** Explore in-depth movie details, including summaries, ratings, and languages.
* **▶️ Integrated Movie Trailers:** Watch trailers directly within the app via YouTube integration.

## 🛠️ Technologies Used

* **Frontend:**
    * <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" width="25" height="25" /> **React:** For building dynamic user interfaces.
    * <img src="https://vitejs.dev/logo.svg" alt="Vite" width="25" height="25" /> **Vite:** For fast development and build processes.
    * <img src="https://raw.githubusercontent.com/tailwindlabs/tailwindcss/master/logo.svg" alt="Tailwind CSS" width="25" height="25" /> **Tailwind CSS:** For sleek and responsive styling.
    * <img src="https://github.com/CookPete/react-player/blob/master/logo/react-player-logo.png?raw=true" alt="react player" width="25" height="25" /> **ReactPlayer:** For seamless trailer playback.
* **Backend & Database:**
    * <img src="https://avatars.githubusercontent.com/u/48118827?s=200&v=4" alt="Appwrite" width="25" height="25" /> **Appwrite:** For robust database and authentication solutions.
* **API:**
    * <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537510ecc095782a56766393abbc2ead82065f082c1ba82caf78f978ac1363.svg" alt="TMDB" width="25" height="25"/> **TMDB API:** For accessing comprehensive movie data.

## 🚀 Getting Started

### 📋 Prerequisites

* Node.js and npm installed.
* A TMDB API key (Get yours at [themoviedb.org](https://www.themoviedb.org/))
* An Appwrite project setup.

### 🔧 Installation

1.  Clone the repository:

    ```bash
    git clone [https://github.com/your-username/tmdb-movie-database.git](https://github.com/your-username/tmdb-movie-database.git)
    cd tmdb-movie-database
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Create a `.env.local` file in the root directory and add your API keys and Appwrite details:

    ```env
    VITE_TMDB_API_KEY=your_tmdb_api_key
    VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
    VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
    VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
    ```

### 🏃 Running the Application

To start the development server, run:

```bash
npm run dev

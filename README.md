# **Netflix Clone**

A fully responsive Netflix Clone built with React.js, featuring Firebase authentication and IMDb API integration to display movie data. This project mimics the core functionality and design of Netflix, including popular, upcoming, top-rated, and now-playing movies.

---

## **Features**
### 🔥 Core Functionalities
- **User Authentication**:  
  - Login and Signup functionality using Firebase Authentication.  
  - Secure user sessions with persistent login.

- **Movie Listings**:
  - Fetches and displays movies from IMDb API, categorized as:
    - Popular Movies
    - Upcoming Releases
    - Top Rated Movies
    - Now Playing Movies.

- **Responsive Design**:
  - Optimized for devices of all sizes (desktop, tablet, mobile).

- **Video Playback Page**:
  - A dedicated page for playing movie trailers/videos.

---

## **Screenshots**
_(Add screenshots of your application for better visualization. Example sections below):_

- **Login Page**  
  ![Login Page Screenshot](./screenshots/login-page.png)

- **Home Page with Movie Categories**  
  ![Home Page Screenshot](./screenshots/home-page.png)

- **Video Playback Page**  
  ![Video Page Screenshot](./screenshots/video-page.png)

---

## **Technologies Used**
### ⚙️ Frontend
- **React.js**: For building the user interface.  
- **React Router**: For navigation between pages.  
- **CSS**: For responsive design.

### 🔥 Backend and APIs
- **Firebase Authentication**: For secure user login and signup.  
- **IMDb API**: To fetch movie data (popular, upcoming, etc.).

---

## **Installation and Setup**
Follow these steps to run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AdnanHisham7/netflix-clone.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd netflix-clone
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Set up Firebase and IMDb API**:
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Enable Authentication in Firebase (Google, Email/Password, etc.).
   - Generate and download the Firebase configuration file (`firebaseConfig`).
   - Get an API key from the [IMDb API](https://developer.themoviedb.org/) or copy and replace the options from the site with your API key.

5. **Add your API keys to environment variables**:
   Create a `.env` file in the root directory(recommended):
   ```env
   VITE_FIREBASE_API_TOKEN=your_firebase_api_key
   VITE_IMDB_API_TOKEN=your_imdb_api_key
   ```

6. **Run the project**:
   ```bash
   npm run dev
   ```

---

enjoy :)

---

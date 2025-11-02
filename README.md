# My Movie Finder

Welcome to My Movie Finder! This is a simple and fun app that lets you search for any movie you can think of and save your favorites so you can find them later.

## What It Does

This app was built to make finding and saving movies easy. You can:

* **Search for any movie:** Just type the name of a movie in the search bar.
* **Save Your Favorites:** See a movie you like? Click the "Add to Favorites" button to save it.
* **View Your List:** All your saved movies are kept in the "Favorites" section so you can see your personal collection anytime!


## Technologies Used

This project was built using:

* **Frontend:** React, HTML/CSS, Vue.js
* **Database:** localStorage
* **Movie Data:** The Movie Database (TMDB) API, OMDb API

## How to Run This Project

Want to run this app on your own computer? Just follow these simple steps.

### 1. Get the Code

First, you need to copy the project files to your computer.

```
git clone https://github.com/humbleCapybara/Movie-App.git
```

After that, go into the new folder:
```
cd movie-app
```

### 2. Install the "Ingredients"
This project uses a few tools to work. You can install them all by running:

```
npm install
```

### 3. Get Your API Key
This app needs a key to get all the movie information.
Go to themoviedb.org and sign up for a free API key.
In the main project folder, create a new file named .env
Inside that file, paste your key like this:

```
VITE_API_KEY=your_key_goes_here
VITE_BASE_URL=your_url_goes_here
```

### 4. Start the App!
You're all set. Just run this command to start the app:

```
npm start
```

Now, just open http://localhost:3000 in your web browser to see it run!

### How to Contribute
I'd love your help! If you find a bug or have an idea for a new feature, feel free to:

1) Fork the repository (make your own copy).
2) Create your Feature Branch (git checkout -b feature/AmazingFeature).
3) Commit your changes (git commit -m 'Add some AmazingFeature').
4) Push to the branch (git push origin feature/AmazingFeature).
5) Open a Pull Request!


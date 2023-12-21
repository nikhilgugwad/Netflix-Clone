## Introduction

This project is a Netflix clone made with React.js as part of the Namaste React Bootcamp by Akshay Saini.

## Tech Stack

- webpack (Bundler)
- jest (testing)
- react router
- google firebase
- redux store
- TMDB API

## Design

- [ ] Login/Sign Up
	- [ ] Sign in/Sign up form
	- [ ] Redirect to Browse Page
- [ ] Browse (after authentication)
	- [ ] Header
	- [ ] Main Movie
		- [ ] Trailer in Background
		- [ ] Title and Description
		- [ ] Movie Suggestions
			- [ ] Movie Lists * N

## Packages Installation

1. Open the terminal and navigate to the desktop folder: `cd Desktop` (if not in the desktop folder already).
2. Install all the required packages (React, React DOM, etc.) by typing: `npx create-react-app (projectname)`.
3. Open the project folder in VS Code.
4. Start the development server in the local machine and run the project with the command: `npm start`.
5. Clear everything and start writing code in the `App.js` file.
6. Set up Tailwind CSS in the project folder specifically for the React app. Refer to the official Tailwind CSS documentation (Don't use CDN link).
7. Create React components in the `components` folder and render them in `App.js`.
8. Set up routing between the components by typing: `npm i -D react-router-dom`.
9. Install Redux in the app with the following commands in the terminal: `npm i -D @reduxjs/toolkit` and `npm i react-redux`.

## Procedure

1. **Create React App**
   - Use the terminal and type `npx create-react-app (projectname)` to create a new React app.

2. **Configure Tailwind CSS**
   - Follow the official Tailwind CSS documentation to configure it for your React app. Avoid using CDN links.

3. **Header**
   - Implement the app's header component.

4. **Routing of the App**
   - Set up routing between components using `react-router-dom`.

5. **Login Form**
   - Create a login form component.

6. **Sign-Up Form**
   - Develop a sign-up form component.

7. **Form Validation**
   - Implement form validation in both login and sign-up forms.

8. **useRef Hook**
   - Utilize the `useRef` hook for specific functionalities.

9. **Firebase Setup**
   - Set up Firebase for authentication and other relevant features.

10. **Deploying to Production**
    - Deploy the app to a production environment.

11. **Create Sign-Up User Account**
    - Implement functionality to create a user account.

12. **Implement Sign-In User API**
    - Integrate the sign-in user API with Firebase.

13. **Redux Store with userSlice**
    - Create a Redux store with a `userSlice` for managing user state.

14. **Implement Sign Out**
    - Add functionality to sign out a user.

15. **Update Profile**
    - Implement the feature to update user profiles.

16. **Fetch from TMDB Movies**
    - Fetch movie data from TMDB API.

17. **Bugfix: Sign-Up User DisplayName and Profile Picture Update**
    - Fix bugs related to user sign-up and profile updates.

18. **Bugfix: Redirect/Browse to Login Page if User is Logged In and Vice-Versa**
    - Fix issues related to redirection based on user authentication status.

19. **Unsubscribe to onAuthStateChanged Callback**
    - Implement proper cleanup for authentication callbacks.

20. **Add Hardcoded Values into Constants File**
    - Centralize and manage hardcoded values in a constants file.

21. **Register TMDB API & Create App & Get Access Token**
    - Register your app with TMDB and obtain an access token.

22. **Get Data from TMDB "Now Playing" Movies List API**
    - Fetch data from TMDB's "now playing" movies list API.

23. **Custom Hook for Now Playing Movies**
    - Create a custom hook for fetching now playing movies.

24. **Create movieSlice**
    - Set up a Redux slice (`movieSlice`) for managing movie-related state.

25. **Update Store with Movies Data**
    - Update the Redux store with movies data.

26. **Planning for MainContainer & SecondaryContainer**
    - Plan the structure for the main and secondary containers.

27. **Fetch Data for Trailer Video**
    - Fetch data for trailer videos from a relevant API.

28. **Update Store with Trailer Video Data**
    - Integrate trailer video data into the Redux store.

29. **Embed YouTube Video and Make it Autoplay and Mute**
    - Embed YouTube video in the app with autoplay and mute settings.

30. **Tailwind Classes to Make MainContainer Embed with VideoTitle and VideoBackground**
    - Apply Tailwind CSS classes for styling and layout.

31. **Build Secondary Container**
    - Implement the secondary container component.

32. **Build Movie List**
    - Create the movie list component.

33. **Build Movie Card**
    - Develop the movie card component.

34. **TMDB Image CDN URL**
    - Utilize TMDB image CDN URL for displaying movie images.

35. **Use Popular Movies Custom Hook**
    - Implement a custom hook for fetching popular movies.

36. **GPT Search Page**
    - Create a search page using GPT (OpenAI).

37. **GPT Search Bar**
    - Develop a search bar component using GPT.

38. **Multi-Language Feature in Our App**
    - Implement a multi-language feature in the app.

## Installation

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/nikhilgugwad/Netflix-Clone.git`
2. Change into the project directory: `cd netflix-clone`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

## Deployment

Deploy the app to a production environment.

      ```bash
      npm run build
      ```
This command will create a production-ready build folder. You can deploy the contents of this folder to Netlify or any other hosting service.



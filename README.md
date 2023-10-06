# Habit Tracker App

The habit tracking application offers users a convenient and comprehensive way to monitor and improve their daily routines.

## Folder structures

The project's folder structure is as follows:

```
📦albumcollections
 ┣ 📂public
 ┃ ┣ 📜favicon.ico
 ┃ ┗ 📜index.html
 ┣ 📦src
 ┣ 📂components
 ┃ ┣ 📜CreateHabit.js
 ┃ ┣ 📜Footer.js
 ┃ ┣ 📜HabitDetails.js
 ┃ ┣ 📜HabitDisplay.js
 ┃ ┣ 📜MotivationComp.js
 ┃ ┣ 📜Navbar.js
 ┃ ┗ 📜OverView.js
 ┣ 📂redux
 ┃ ┣ 📂features
 ┃ ┃ ┗ 📜habitSlices.js
 ┃ ┗ 📜store.js
 ┣ 📜App.js
 ┣ 📜habit-logo.png
 ┣ 📜index.css
 ┗ 📜index.js
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜package-lock.json
 ┗ 📜package.json
 ┣ 📜postcss.config.js
 ┗ 📜tailwind.config.js

```

## Features

- Multiple Habit Tracking: Users can add and track multiple habits such as reading a book, going to the gym, or any other daily activities.

- Daily Habit Status: Users can track the status of each habit on a daily basis, with three available statuses:

         1-> Done: Users can mark a habit as done for a day when they successfully complete it.
         2-> Not Done: Users can mark a habit as not done for a day if they did not complete it.
         3-> None: Users have the option to leave a habit as "None" if they didn't take any action on it for a day.

- Habit Overview: The app provides a view to show all current habits. In this view, users can:

* See a list of their existing habits.
* Easily add new habits to track using an "Add Habit" button.

- Short Descriptions: Users can include short descriptions or labels for each habit to provide context or details about what each habit entails. These descriptions can help users remember the specifics of each habit they are tracking.

## How to Start the Project

Follow these steps to run the Album Manager on your local machine:

1. **Clone the Repository**:
   Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/kabhinav577/Habit-Tracker.git
   ```

2. Navigate to the Project Directory:

   ```
   cd Habit-Tracker

   ```

3. Install Dependencies:

   ```
   npm install

   ```

4. Start the Development Server:
   ```
   npm start
   ```
5. Access the App:
   ```
   Open your web browser and navigate to http://localhost:3000 to access the Album Manager app.
   ```

## Acknowledgements

- [ReactJS](https://react.dev)
- [TailwindCSS](https://tailwindcss.com/)
- [Redux](https://redux.js.org/)

## Authors

- [@krishna Kant singh](https://www.github.com/kabhinav577)

# Quizzical

## Overview

The Quizzical project offers users an interactive and educational quiz experience across a diverse array of topics. Its primary objectives are to provide:

- _**Engaging Learning**_: Quizzical promotes continuous learning by enabling users to restart quizzes with different topics or the same subject and choose their preferred difficulty level for each session

## Getting Started

- _**Prerequisites**_

  - Node.js and npm (Node Package Manager) should be installed on your local machine.

- _**Installation**_

  - **Clone the Repository**:

    1. Open your terminal/command prompt.
    2. Navigate to the directory where you want to clone the project.
    3. Run the following command to clone the Quizzical repository:

       `git clone <repository-url>`

    4. Replace <repository-url> with the actual URL of the Quizzical project's Git repository.

  - **Navigate to the Project Directory**:

    1. Change your current working directory to the Quizzical project directory:

       `cd quizzical`

  - **Install Dependencies**:

    1. Once you are inside the project directory, run the following command to install the project's dependencies using npm:

       `npm install`

  - **Start the Development Server**:

    1. After the dependencies are installed, you can start the development server. Use the following command:

       `npm run dev`

  - **Access the Application**:

    1. Once the development server is running, you can access the Quizzical application in your web browser by opening the following URL:

       `http://localhost:3000`

## Features

- _**Topic Selection**_: Users choose from various topics to tailor their quiz experience.

- _**Difficulty Level Customization**_: Users adjust quiz difficulty to match their skill.

- _**Initiating Quizzes**_: Starting a quiz is as easy as clicking the "Start Quiz" button.

- _**Question Variety**_: Quizzes consist of both multiple-choice questions (MCQ) and true/false questions, offering a diverse testing experience.

- _**Answer Evaluation**_:

  1. Users can check their answers by clicking the "Check Answers" button.
  2. Correctly answered questions are highlighted with a green background, while incorrect answers are displayed with a red background.
  3. **Unanswered Questions**: Questions without selected answers are marked with a dark green background, indicating that the user did not respond to those questions.

- _**Play Again Option**_: After checking their answers, users can opt to "Play again?" by clicking the button, allowing them to restart the quiz.

- _**Scoring Feedback**_: The app provides users with feedback on how many of their answers were correct out of the total quiz questions, allowing them to gauge their performance.

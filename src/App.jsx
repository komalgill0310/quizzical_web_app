import { useState } from "react";
import React from "react";
import "./App.css";

import QuizIntroSetupPage from "./components/QuizIntroSetupPage";
import Quiz from "./components/Quiz";

function App() {
  const [quiz, setQuiz] = useState([]);

  return (
    <>
      {quiz.length ? (
        <Quiz quiz={quiz} setQuiz={setQuiz} />
      ) : (
        <QuizIntroSetupPage setQuiz={setQuiz} />
      )}
    </>
  );
}

export default App;

import { useState } from "react";
import React from "react";
import "./App.css";

import QuizIntroSetupPage from "./components/QuizIntroSetupPage/QuizIntroSetupPage";
import Quiz from "./components/Quiz/Quiz";

function App() {
  const [quiz, setQuiz] = useState([]);

  return (
    <div>
      {quiz.length ? (
        <Quiz quiz={quiz} setQuiz={setQuiz} />
      ) : (
        <QuizIntroSetupPage setQuiz={setQuiz} />
      )}
    </div>
  );
}

export default App;

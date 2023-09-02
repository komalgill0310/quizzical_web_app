import { useState } from "react";
import React from "react";
import "./App.css";

import QuizSetupPage from "./components/QuizSetupPage/QuizSetupPage";
import Quiz from "./components/Quiz/Quiz";

function App() {
  const [quiz, setQuiz] = useState([]);

  return (
    <div>
      {quiz.length ? (
        <Quiz quiz={quiz} setQuiz={setQuiz} />
      ) : (
        <QuizSetupPage setQuiz={setQuiz} />
      )}
    </div>
  );
}

export default App;

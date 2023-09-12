import { useState } from "react";
import React from "react";
import "./App.css";

import Quiz from "./components/Quiz/Quiz";
import QuizSetupPage from "./components/QuizSetupPage/QuizSetupPage";

function App() {
  const [quizData, setquizData] = useState([]);

  return (
    <div className="app">
      {quizData.length ? (
        <Quiz quizData={quizData} setquizData={setquizData} />
      ) : (
        <QuizSetupPage setquizData={setquizData} />
      )}
    </div>
  );
}

export default App;

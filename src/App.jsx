import { useState } from "react";
import React from "react";
import "./App.css";

import QuizIntroSetupPage from "./components/QuizIntroSetupPage";
import Quiz from "./components/Quiz";

function App() {
  const [quiz, setQuiz] = useState([]);
  const [isCheckAnswersBtnClicked, setIsCheckAnswersBtnClicked] =
    useState(false);

  return (
    <>
      {quiz.length ? (
        <Quiz
          quiz={quiz}
          setQuiz={setQuiz}
          isCheckAnswersBtnClicked={isCheckAnswersBtnClicked}
          setIsCheckAnswersBtnClicked={setIsCheckAnswersBtnClicked}
        />
      ) : (
        <QuizIntroSetupPage setQuiz={setQuiz} />
      )}
    </>
  );
}

export default App;

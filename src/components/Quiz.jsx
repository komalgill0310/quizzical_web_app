import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import QuizHtml from "./QuizHtml";

export default function Quiz(props) {
  const { quiz } = props;
  const totalAnswers = 4;

  const { category, difficulty } = quiz[0];
  const [correctAnswers, setCorrectAnswers] = useState([]);

  console.log("correctAnswers: ", correctAnswers);

  function handleClick() {
    console.log("I will check your quiz!");
  }

  useEffect(() => {
    setCorrectAnswers(quiz.map((data) => data.correct_answer));
  }, []);

  const quizData = quiz.map((eachQuizData, index) => {
    const { question, correct_answer, incorrect_answers } = eachQuizData;
    const randomIndex = Math.floor(Math.random() * totalAnswers);
    const answers = incorrect_answers.toSpliced(randomIndex, 0, correct_answer);
    return (
      <QuizHtml
        key={nanoid()}
        id={nanoid()}
        questionNumber={index + 1}
        question={question}
        answers={answers}
      />
    );
  });

  return (
    <div>
      <h3>Category: {category}</h3>
      <h3>Level: {difficulty}</h3>
      {quizData}
      <br />
      <button onClick={handleClick}>Check Answers</button>
    </div>
  );
}

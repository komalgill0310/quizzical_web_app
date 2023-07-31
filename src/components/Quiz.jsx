import React from "react";
import { nanoid } from "nanoid";
import { decode } from "html-entities";

import QuizHtml from "./QuizHtml";

export default function Quiz(props) {
  const { quiz } = props;

  const { category, difficulty } = quiz[0];

  const quizData = quiz.map((eachQuizData, index) => {
    const { question, correct_answer, incorrect_answers } = eachQuizData;
    const randomIndex = Math.floor(Math.random() * 4);
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
    </div>
  );
}

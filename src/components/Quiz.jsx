import React from "react";
import { nanoid } from "nanoid";
import { decode } from "html-entities";

import QuizHtml from "./QuizHtml";

export default function Quiz(props) {
  const { quiz } = props;

  const { category, difficulty } = quiz[0];

  const quizData = quiz.map((eachQuizData, index) => {
    const { question } = eachQuizData;

    return (
      <QuizHtml
        key={nanoid()}
        id={nanoid()}
        questionNumber={index + 1}
        question={decode(question)}
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

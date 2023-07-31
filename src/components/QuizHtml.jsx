import React from "react";
import { decode } from "html-entities";

export default function QuizHtml(props) {
  const { id, questionNumber, question, answers } = props;
  console.log("answers: ", answers);

  return (
    <div>
      <h5>
        {questionNumber}. {decode(question)}
      </h5>
    </div>
  );
}

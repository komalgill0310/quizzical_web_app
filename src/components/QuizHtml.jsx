import React from "react";
import Answer from "./Answer";

export default function QuizHtml(props) {
  const { id, questionNumber, question, answers } = props;

  return (
    <div>
      <h5>
        {questionNumber}. {question}
      </h5>
      <Answer answers={answers} />
    </div>
  );
}

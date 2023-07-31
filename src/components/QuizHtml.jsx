import React from "react";
import { decode } from "html-entities";
import Answer from "./Answer";

export default function QuizHtml(props) {
  const { id, questionNumber, question, answers } = props;

  return (
    <div>
      <h5>
        {questionNumber}. {decode(question)}
      </h5>
      <Answer answers={answers} />
    </div>
  );
}

import React from "react";

export default function QuizHtml(props) {
  const { id, questionNumber, question } = props;

  return (
    <div>
      {questionNumber}. {question}
    </div>
  );
}

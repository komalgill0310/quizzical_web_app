import React from "react";
import Answer from "./Answer";

export default function QuizHtml(props) {
  const {
    id,
    questionNumber,
    question,
    answers,
    quizData,
    setQuizData,
    isCheckAnswersBtnClicked,
  } = props;
  return (
    <div>
      <h5>
        {questionNumber}. {question}
      </h5>
      <Answer
        answerLocation={id}
        answers={answers}
        question={question}
        quizData={quizData}
        setQuizData={setQuizData}
        isCheckAnswersBtnClicked={isCheckAnswersBtnClicked}
      />
    </div>
  );
}

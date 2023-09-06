import React from "react";
import Answer from "../Answer/Answer";

export default function QuizQuestion(props) {
  const {
    id,
    answers,
    question,
    quizQuestionsData,
    setQuizQuestionsData,
    isCheckingAnswers,
  } = props;
  return (
    <>
      <h5>{question}</h5>
      <Answer
        questionIndex={id}
        answers={answers}
        question={question}
        quizQuestionsData={quizQuestionsData}
        setQuizQuestionsData={setQuizQuestionsData}
        isCheckingAnswers={isCheckingAnswers}
      />
    </>
  );
}

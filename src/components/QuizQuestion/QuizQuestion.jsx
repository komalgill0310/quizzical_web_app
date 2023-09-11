import React from "react";
import Answer from "../Answer/Answer";

import styles from "./QuizQuestion.module.css";

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
      <h5 className={styles.question}>{question}</h5>
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

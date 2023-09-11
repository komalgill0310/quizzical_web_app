import React from "react";
import { nanoid } from "nanoid";

import styles from "./Answer.module.css";

export default function Answers(props) {
  const {
    answers,
    question,
    quizQuestionsData,
    setQuizQuestionsData,
    questionIndex,
    isCheckingAnswers,
  } = props;

  function handleAnswerSelection(e, selectedAnswerIndex) {
    if (!isCheckingAnswers) {
      setQuizQuestionsData((prevState) => {
        return prevState.map((questionData, questionDataIndex) => {
          // Check if this is the question we want to update
          if (questionDataIndex === questionIndex) {
            const updateQuestionData = questionData.answers.map(
              (answerObject, answerIndex) => {
                // Check if this is the answer we want to select
                if (answerIndex === selectedAnswerIndex) {
                  return { ...answerObject, isSelected: true };
                } else {
                  return { ...answerObject, isSelected: false };
                }
              }
            );
            // Update the answers for the current question
            return { ...questionData, answers: updateQuestionData };
          } else {
            // Keep other questions unchanged
            return { ...questionData };
          }
        });
      });
    }
  }

  const answerElements = answers.map((answerObject, answerIndex) => {
    const inputId = nanoid();
    const { decodedAnswer, backgroundColor } = answerObject;
    return (
      <div
        key={nanoid()}
        style={{ backgroundColor }}
        className={styles.radioAnswerChoiceContainer}
      >
        <input
          type="radio"
          id={inputId}
          name={question}
          value={decodedAnswer}
          checked={
            quizQuestionsData[questionIndex]["answers"][answerIndex][
              "isSelected"
            ] &&
            quizQuestionsData[questionIndex]["answers"][answerIndex][
              "decodedAnswer"
            ] === decodedAnswer
          }
          onChange={(e) => handleAnswerSelection(e, answerIndex)}
          className={styles.answerRadioButton}
        />
        <label htmlFor={inputId} className={styles.answerChoiceLabel}>
          {decodedAnswer}
        </label>
      </div>
    );
  });

  return <div className={styles.multipleChoiceAnswers}>{answerElements}</div>;
}

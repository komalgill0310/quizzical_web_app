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

  function handleChange(e, i) {
    if (!isCheckingAnswers) {
      setQuizQuestionsData((prevState) => {
        const updatedQuizAnswers = prevState.map((data, dataIndex) => {
          if (dataIndex === questionIndex) {
            const updateData = data.answers.map((answerObj, answerIndex) => {
              if (answerIndex === i) {
                return { ...answerObj, isSelected: true };
              } else {
                return { ...answerObj, isSelected: false };
              }
            });
            return { ...data, answers: updateData };
          } else {
            return { ...data };
          }
        });
        return updatedQuizAnswers;
      });
    }
  }

  const answerElements = answers.map((answerObj, i) => {
    const inputId = nanoid();
    const { decodedAnswer, backgroundColor } = answerObj;
    return (
      <div
        key={nanoid()}
        style={{ backgroundColor }}
        className={styles.radioButton}
      >
        <input
          type="radio"
          id={inputId}
          name={question}
          value={decodedAnswer}
          checked={
            quizQuestionsData[questionIndex]["answers"][i]["isSelected"] &&
            quizQuestionsData[questionIndex]["answers"][i]["decodedAnswer"] ===
              decodedAnswer
          }
          onChange={(e) => handleChange(e, i)}
          className={styles.radioBtn}
        />
        <label htmlFor={inputId} className={styles.label}>
          {decodedAnswer}
        </label>
      </div>
    );
  });

  return <div>{answerElements}</div>;
}

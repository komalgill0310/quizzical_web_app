import React from "react";
import { nanoid } from "nanoid";
import styles from "./Answer.module.css";

export default function Answers(props) {
  const {
    answers,
    question,
    quizData,
    setQuizData,
    answerLocation,
    isCheckAnswersBtnClicked,
  } = props;

  function handleChange(e, i) {
    if (!isCheckAnswersBtnClicked) {
      setQuizData((prevState) => {
        const updatedQuizAnswers = prevState.map((data, dataIndex) => {
          if (dataIndex === answerLocation) {
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
    const { ans, backgroundColor } = answerObj;
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
          value={ans}
          checked={
            quizData[answerLocation]["answers"][i]["isSelected"] &&
            quizData[answerLocation]["answers"][i]["ans"] === ans
          }
          onChange={(e) => handleChange(e, i)}
          className={styles.radioBtn}
        />
        <label htmlFor={inputId} className={styles.label}>
          {ans}
        </label>
      </div>
    );
  });

  return <div>{answerElements}</div>;
}

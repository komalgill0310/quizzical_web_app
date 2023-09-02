import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { decode } from "html-entities";
import QuizHtml from "../QuizHtml/QuizHtml";

import styles from "./Quiz.module.css";

export default function Quiz(props) {
  const totalAnswers = 4;

  const { quizData, setquizData } = props;
  const [quizQuestionsData, setQuizQuestionsData] = useState([]);
  const [isCheckAnswersBtnClicked, setIsCheckAnswersBtnClicked] =
    useState(false);

  const { category, difficulty } = quizData[0];

  useEffect(() => {
    updateQuizQuestionsData(quizData);
  }, []);

  function updateQuizQuestionsData(quiz) {
    setQuizQuestionsData(() => {
      return quizData.map((data, index) => {
        const randomIndex = createRandomNumber();
        const answers = data.incorrect_answers.toSpliced(
          randomIndex,
          0,
          data.correct_answer
        );
        return {
          ...data,
          id: index,
          question: decode(data.question),
          answers: answers.map((answer) => ({
            ans: decode(answer),
            isSelected: false,
            isCorrect: false,
            backgroundColor: "",
          })),
          correct_answer: decode(data.correct_answer),
        };
      });
    });
  }

  function handleClick() {
    if (!isCheckAnswersBtnClicked) {
      setQuizQuestionsData((prevState) => {
        const updatedQuizAnswers = prevState.map((data, i) => {
          const { correct_answer } = quizQuestionsData[i];
          const answersArr = quizQuestionsData[i]["answers"];
          const updatedAnswersArr = answersArr.map((answerObj) => {
            const { ans, isSelected } = answerObj;
            if ((isSelected || !isSelected) && ans === correct_answer) {
              return {
                ...answerObj,
                isCorrect: true,
                backgroundColor: "green",
              };
            } else if (isSelected && ans != correct_answer) {
              return { ...answerObj, backgroundColor: "red" };
            } else {
              return { ...answerObj };
            }
          });
          return { ...data, answers: updatedAnswersArr };
        });
        return updatedQuizAnswers;
      });
      setIsCheckAnswersBtnClicked((prevState) => !prevState);
    } else {
      setIsCheckAnswersBtnClicked((prevState) => !prevState);
      setquizData([]);
    }
  }

  function createRandomNumber() {
    return Math.floor(Math.random() * totalAnswers);
  }

  const quizElements = quizQuestionsData.map((eachQuizQuestionsData) => {
    const { id, question, answers } = eachQuizQuestionsData;
    return (
      <QuizHtml
        key={nanoid()}
        id={id}
        answers={answers} //each questions's answer array of objects
        question={question}
        quizQuestionsData={quizQuestionsData}
        questionNumber={id + 1}
        setQuizQuestionsData={setQuizQuestionsData}
        isCheckAnswersBtnClicked={isCheckAnswersBtnClicked}
      />
    );
  });

  return (
    <div className={styles.quizContainer}>
      <div className={styles.infoSection}>
        <h3 className={styles.category}>{category}</h3>
        <h3 className={styles.level}>{difficulty}</h3>
      </div>
      {quizElements}
      <button className={styles.checkAnswersBtn} onClick={handleClick}>
        Check Answers
      </button>
    </div>
  );
}

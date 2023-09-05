import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { decode } from "html-entities";

import styles from "./Quiz.module.css";
import QuizHtml from "../QuizHtml/QuizHtml";

export default function Quiz(props) {
  const totalAnswers = 4;

  const { quizData, setquizData } = props;
  const [quizQuestionsData, setQuizQuestionsData] = useState([]);
  const [isCheckingAnswers, setisCheckingAnswers] = useState(false);

  const { category, difficulty } = quizData[0];

  useEffect(() => {
    updateQuizQuestionsDataState(quizData);
  }, []);

  function updateQuizQuestionsDataState(quizData) {
    setQuizQuestionsData(() => {
      return quizData.map((data, index) => {
        // Using snake_case to maintain consistency with the original naming convention from the API
        const { incorrect_answers, correct_answer, question } = data;
        const randomIndex = createRandomNumber();
        const answers = incorrect_answers.toSpliced(
          randomIndex,
          0,
          data.correct_answer
        );
        return {
          id: index,
          ...data,
          ...decodeData(question, answers, correct_answer),
        };
      });
    });
  }

  function decodeData(question, answers, correct_answer) {
    return {
      question: decode(question),
      answers: answers.map((answer) => ({
        decodedAnswer: decode(answer),
        isSelected: false,
        isCorrect: false,
        backgroundColor: "",
      })),
      correct_answer: decode(correct_answer),
    };
  }

  function toggleCheckAnswersAndReset() {
    if (!isCheckingAnswers) {
      setQuizQuestionsData((prevState) => {
        const updatedQuizAnswers = prevState.map((data, i) => {
          const { correct_answer } = quizQuestionsData[i];
          const answersArr = quizQuestionsData[i]["answers"];
          const updatedAnswersArr = answersArr.map((answerObj) => {
            const { decodedAnswer, isSelected } = answerObj;
            let updatedAnswerObj;
            if (
              (isSelected || !isSelected) &&
              decodedAnswer === correct_answer
            ) {
              updatedAnswerObj = {
                ...answerObj,
                isCorrect: true,
                backgroundColor: "green",
              };
            } else if (isSelected && decodedAnswer != correct_answer) {
              updatedAnswerObj = { ...answerObj, backgroundColor: "red" };
            } else {
              updatedAnswerObj = { ...answerObj };
            }
            return updatedAnswerObj;
          });
          return { ...data, answers: updatedAnswersArr };
        });
        return updatedQuizAnswers;
      });
      setisCheckingAnswers((prevState) => !prevState);
    } else {
      setisCheckingAnswers((prevState) => !prevState);
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
        isCheckingAnswers={isCheckingAnswers}
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
      <button
        className={styles.checkAnswersBtn}
        onClick={toggleCheckAnswersAndReset}
      >
        Check Answers
      </button>
    </div>
  );
}

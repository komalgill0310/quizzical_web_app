import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { decode } from "html-entities";

import styles from "./Quiz.module.css";
import QuizQuestion from "../QuizQuestion/QuizQuestion";

export default function Quiz(props) {
  const totalAnswers = 4;

  const { quizData, setquizData } = props;
  const [quizQuestionsData, setQuizQuestionsData] = useState([]);
  const [isCheckingAnswers, setIsCheckingAnswers] = useState(false);
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);
  const { category, difficulty } = quizData[0];

  useEffect(() => {
    updateQuizQuestionsDataState(quizData);
  }, []);

  useEffect(() => {
    calculateTotalCorrectAnswers();
  }, [isCheckingAnswers]);

  function updateQuizQuestionsDataState(quizData) {
    setQuizQuestionsData(() => {
      return quizData.map((data, index) => {
        // Using snake_case to maintain consistency with the original naming convention from the API
        const { incorrect_answers, correct_answer, question } = data;
        const randomIndex = generateRandomIndex();
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
      checkAnswers();
      setIsCheckingAnswers(true);
    } else {
      resetQuiz();
    }
  }

  function calculateTotalCorrectAnswers() {
    const total = quizQuestionsData.reduce((total, quizData) => {
      const correctSelectedAnswers = quizData.answers.filter(
        (answer) => answer.isSelected && answer.isCorrect
      );
      return total + correctSelectedAnswers.length;
    }, 0);
    setTotalCorrectAnswers(total);
  }

  function checkAnswers() {
    setQuizQuestionsData((prevState) => {
      return prevState.map((data, i) => {
        const { correct_answer } = quizQuestionsData[i];
        const answerArray = quizQuestionsData[i]["answers"];
        const updatedAnswersArr = answerArray.map((answerObj) => {
          const { decodedAnswer, isSelected } = answerObj;

          if (
            answerArray.every((answer) => !answer.isSelected) &&
            decodedAnswer === correct_answer
          ) {
            // Check if no answer is selected and the answer is correct
            return {
              ...answerObj,
              isCorrect: true,
              backgroundColor: "#5AAE77",
            };
          } else if (
            (isSelected || !isSelected) &&
            decodedAnswer === correct_answer
          ) {
            // Check if the answer is correct and either selected or not selected
            return {
              ...answerObj,
              isCorrect: true,
              backgroundColor: "#94D7A2",
            };
          } else if (isSelected && decodedAnswer !== correct_answer) {
            // Check if the answer is selected but incorrect
            return { ...answerObj, backgroundColor: "#F8BCBC" };
          } else {
            // Default case: return the answer object unchanged
            return { ...answerObj };
          }
        });
        // Update the answers array for the current question in the data
        return { ...data, answers: updatedAnswersArr };
      });
    });
  }

  function resetQuiz() {
    setIsCheckingAnswers(false);
    setquizData([]);
  }

  function generateRandomIndex() {
    return Math.floor(Math.random() * totalAnswers);
  }

  function showScores() {
    return `You scored ${totalCorrectAnswers}/${quizQuestionsData.length} correct
    answers`;
  }

  const quizElements = quizQuestionsData.map((eachQuizQuestionsData) => {
    const { id, question, answers } = eachQuizQuestionsData;
    return (
      <QuizQuestion
        key={nanoid()}
        id={id}
        answers={answers} //each questions's answer array of objects
        question={question}
        quizQuestionsData={quizQuestionsData}
        setQuizQuestionsData={setQuizQuestionsData}
        isCheckingAnswers={isCheckingAnswers}
      />
    );
  });

  const buttonText = isCheckingAnswers ? "Play again?" : "Check Answers";
  const buttonClassName = isCheckingAnswers
    ? "playAgainBtn"
    : "checkAnswersBtn";
  const commonClassName = styles.actionButton;

  return (
    <div className={styles.quizContainer}>
      <div className={styles.infoSection}>
        <h3 className={styles.category}>{category}</h3>
        <h3 className={styles.level}>{difficulty}</h3>
      </div>
      {/* Renders quiz questions and answers on the DOM  */}
      {quizElements}
      <div className={styles.quizResultsContainer}>
        {isCheckingAnswers && (
          <p className={styles.quizScore}>{showScores()}</p>
        )}
        <button
          className={`${commonClassName} ${buttonClassName}`}
          onClick={toggleCheckAnswersAndReset}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

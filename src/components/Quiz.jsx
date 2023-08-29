import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { decode } from "html-entities";
import QuizHtml from "./QuizHtml";

export default function Quiz(props) {
  const totalAnswers = 4;

  const { quiz, setQuiz } = props;
  const [quizData, setQuizData] = useState([]);
  const [isCheckAnswersBtnClicked, setIsCheckAnswersBtnClicked] =
    useState(false);

  const { category, difficulty } = quiz[0];

  useEffect(() => {
    updateQuizData(quiz);
  }, []);

  function updateQuizData(quiz) {
    setQuizData(() => {
      return quiz.map((data, index) => {
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
      setQuizData((prevState) => {
        const updatedQuizAnswers = prevState.map((data, i) => {
          const { correct_answer } = quizData[i];
          const answersArr = quizData[i]["answers"];
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
      setQuiz([]);
    }
  }

  function createRandomNumber() {
    return Math.floor(Math.random() * totalAnswers);
  }

  const quizElements = quizData.map((eachQuizData) => {
    const { id, question, answers } = eachQuizData;
    return (
      <QuizHtml
        key={nanoid()}
        id={id}
        answers={answers} //each questions's answer array of objects
        question={question}
        quizData={quizData}
        questionNumber={id + 1}
        setQuizData={setQuizData}
        isCheckAnswersBtnClicked={isCheckAnswersBtnClicked}
      />
    );
  });

  return (
    <div>
      <h3>Category: {category}</h3>
      <h3>Level: {difficulty}</h3>
      {quizElements}
      <br />
      <button onClick={handleClick}>Check Answers</button>
    </div>
  );
}

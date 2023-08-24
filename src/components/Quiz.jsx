import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { decode } from "html-entities";
import QuizHtml from "./QuizHtml";

export default function Quiz(props) {
  const { quiz } = props;
  const totalAnswers = 4;

  const { category, difficulty } = quiz[0];

  const [quizData, setQuizData] = useState([]);

  const [selectedAns, setSelectedAns] = useState([]);

  // BELOW FUNCTION NEEDS TO UPDATE IN ORDER TO DISPLAY THE BACKGROUND COLOR FOR EACH QUESTION'S CORRECT AND INCORRECT ANSWER
  // function handleClick() {
  //   const updatedSelectedAns = selectedAns.map((answerObj, i) => {
  //     const { correct_answer } = quizData[i];
  //     const { ans } = answerObj;
  //     return {
  //       ...answerObj,
  //       correct_answer: correct_answer,
  //     };
  //   });
  //   setSelectedAns(updatedSelectedAns);
  // }

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
          })),
          correct_answer: decode(data.correct_answer),
        };
      });
    });
  }

  useEffect(() => {
    updateQuizData(quiz);
  }, []);

  useEffect(() => {
    setSelectedAns(() => {
      const answers = [];
      quizData.map((data) => answers.push(data.answers));
      return answers;
    });
  }, [quizData]);

  function createRandomNumber() {
    return Math.floor(Math.random() * totalAnswers);
  }

  const quizElements = quizData.map((eachQuizData) => {
    const { id, question, answers } = eachQuizData;
    return (
      <QuizHtml
        key={nanoid()}
        id={id}
        questionNumber={id + 1}
        question={question}
        answers={answers}
        selectedAns={selectedAns}
        setSelectedAns={setSelectedAns}
      />
    );
  });

  return (
    <div>
      <h3>Category: {category}</h3>
      <h3>Level: {difficulty}</h3>
      {quizElements}
      <br />
      <button>Check Answers</button>
      {/* <button onClick={handleClick}>Check Answers</button> */}
    </div>
  );
}

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

  // const [selectedAns, setSelectedAns] = useState(quizData.answers);

  console.log("quizData: ", selectedAns);

  function handleClick() {
    // console.log("I will check your quiz!");
    console.log(selectedAns);
    for (let i = 0; i < selectedAns.length; i++) {
      const { correct_answer } = quizData[i];
      const current_answer = selectedAns[i];
      // const styles = {
      //   backgroundColor: current_answer === correct_answer ? "green" : current_answer === "undefined" ?
      // }
      // if (current_answer === correct_answer) {
      //   console.log("you got correct answer!", current_answer);
      // } else {
      //   console.log("Better luck next time");
      // }
    }
  }

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

  function createRandomNumber() {
    return Math.floor(Math.random() * totalAnswers);
  }

  const quizElements = quizData.map((eachQuizData) => {
    const { id, question, answers } = eachQuizData;
    // console.log("answers: ", answers);
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
      <button onClick={handleClick}>Check Answers</button>
    </div>
  );
}

import React from "react";
import Answer from "../Answer/Answer";

export default function QuizHtml(props) {
  const {
    id,
    answers,
    question,
    quizQuestionsData,
    setQuizQuestionsData,
    questionNumber,
    isCheckAnswersBtnClicked,
  } = props;
  return (
    <div>
      <h5>
        {questionNumber}. {question}
      </h5>
      <Answer
        answerLocation={id}
        answers={answers}
        question={question}
        quizQuestionsData={quizQuestionsData}
        setQuizQuestionsData={setQuizQuestionsData}
        isCheckAnswersBtnClicked={isCheckAnswersBtnClicked}
      />
    </div>
  );
}

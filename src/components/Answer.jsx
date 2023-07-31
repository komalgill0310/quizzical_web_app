import React from "react";
import { nanoid } from "nanoid";
import { decode } from "html-entities";

export default function Answers(props) {
  const { answers } = props;

  const answerElements = answers.map((answer) => {
    const decodeAnswer = decode(answer);
    return (
      <div key={nanoid()}>
        <input type="radio" id={decodeAnswer} />
        <label htmlFor={decodeAnswer}>{decodeAnswer}</label>
      </div>
    );
  });

  return <fieldset>{answerElements}</fieldset>;
}

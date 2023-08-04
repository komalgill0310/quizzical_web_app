import React, { useState } from "react";
import { nanoid } from "nanoid";

export default function Answers(props) {
  const { question, answerLocation, answers, selectedAns, setSelectedAns } =
    props;

  function handleChange(e) {
    console.log("name: ", e.target.name);
    setSelectedAns((prevState) => {
      const newArr = [...prevState];
      newArr[answerLocation] = e.target.value;
      console.log("update State: ", newArr);
      return newArr;
    });
  }

  const answerElements = answers.map((answer) => {
    const inputId = nanoid();
    return (
      <div key={nanoid()}>
        <input
          type="radio"
          id={inputId}
          name={question}
          value={answer}
          checked={selectedAns[answerLocation] === answer}
          onChange={handleChange}
        />
        <label htmlFor={answer}>{answer}</label>
      </div>
    );
  });

  return <div>{answerElements}</div>;
}

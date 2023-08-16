import React, { useState } from "react";
import { nanoid } from "nanoid";

export default function Answers(props) {
  const { question, answerLocation, answers, selectedAns, setSelectedAns } =
    props;
  // console.log("answerLocation: ", answerLocation);

  function handleChange(e) {
    setSelectedAns((prevState) => {
      const newArr = [...prevState];
      newArr[answerLocation] = {
        ans: e.target.value,
        isSelected: true,
      };
      return newArr;
    });
  }

  const answerElements = answers.map((answerObj, i) => {
    const inputId = nanoid();
    const { ans } = answerObj;
    return (
      <div key={nanoid()}>
        <input
          type="radio"
          id={inputId}
          name={question}
          value={ans}
          checked={selectedAns[answerLocation]?.ans === ans}
          onChange={handleChange}
        />
        <label htmlFor={inputId}>{answerObj.ans}</label>
      </div>
    );
  });

  return <div>{answerElements}</div>;
}

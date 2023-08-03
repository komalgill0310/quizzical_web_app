import React, { useState } from "react";
import { nanoid } from "nanoid";

export default function Answers(props) {
  const { answers } = props;

  const [selectedAns, setSelectedAns] = useState("");

  function handleChange(e) {
    console.log("id: ", e.target.id);
    //HOW TO STORE THE SELECTED ANSWER AT THE SPECIFIC LOCATION?
    setSelectedAns(e.target.value);
  }

  const answerElements = answers.map((answer) => {
    return (
      <div key={nanoid()}>
        <input
          type="radio"
          id={answer}
          name={answer}
          value={answer}
          checked={selectedAns === answer}
          onChange={handleChange}
        />
        <label htmlFor={answer}>{answer}</label>
      </div>
    );
  });

  console.log("ele: ", answerElements);

  return <div>{answerElements}</div>;
}

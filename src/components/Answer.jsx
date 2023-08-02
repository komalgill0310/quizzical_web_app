import React, { useState } from "react";
import { nanoid } from "nanoid";
import { decode } from "html-entities";

export default function Answers(props) {
  const { answers } = props;

  const [selectedAns, setSelectedAns] = useState("");

  function handleChange(e) {
    console.log("id: ", e.target.id);
    setSelectedAns(e.target.value);
  }

  const answerElements = answers.map((answer) => {
    const decodedAns = decode(answer);
    return (
      <div key={nanoid()}>
        <input
          type="radio"
          id={decodedAns}
          name={decodedAns}
          value={decodedAns}
          checked={selectedAns === decodedAns}
          onChange={handleChange}
        />
        <label htmlFor={decodedAns}>{decodedAns}</label>
      </div>
    );
  });

  return <div>{answerElements}</div>;
}

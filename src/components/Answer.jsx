import React from "react";

export default function Answers(props) {
  const { answers } = props;
  console.log("answers: ", answers);

  // const answerArr = answers.map(
  //   (answer) => `<input type="radio" id=${answer} />
  // <label htmlFor=${answer}>${answer}</label>`
  // );

  return (
    <fieldset>
      <input type="radio" id={answers[0]} />
      <label htmlFor={answers[0]}>{answers[0]}</label>

      <input type="radio" id={answers[1]} />
      <label htmlFor={answers[1]}>{answers[1]}</label>

      <input type="radio" id={answers[2]} />
      <label htmlFor={answers[2]}>{answers[2]}</label>

      <input type="radio" id={answers[3]} />
      <label htmlFor={answers[3]}>{answers[3]}</label>
    </fieldset>
  );
}

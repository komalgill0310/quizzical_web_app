import React from "react";
import { nanoid } from "nanoid";

export default function Answers(props) {
  const { question, answerLocation, answers, selectedAns, setSelectedAns } =
    props;
  // console.log("Answer: ", selectedAns);

  function handleChange(e) {
    setSelectedAns((prevState) => {
      const newArr = [...prevState];
      newArr[answerLocation] = {
        ans: e.target.value,
      };
      return newArr;
    });
  }

  function addBackgroundColor(ans) {
    // if (selectedAns[answerLocation]?.isSelectedCorrect !== undefined) {
    let hasSelectedCorrect = "";
    // if (ans === selectedAns[answerLocation][ans]) {
    console.log(
      "color: ",
      ans,
      selectedAns[answerLocation].ans,
      selectedAns[answerLocation].isSelectedCorrect
    );
    hasSelectedCorrect = selectedAns[answerLocation].isSelectedCorrect;
    // }
    // else {
    //   console.log("wrong answer: ", ans, selectedAns[answerLocation].ans);
    // }
    const styles = {
      backgroundColor: hasSelectedCorrect ? "#90EE90" : "red",
    };
    return styles;
    // }
  }
  const answerElements = answers.map((answerObj) => {
    const inputId = nanoid();
    const { ans } = answerObj;
    let styles;
    if (
      selectedAns[answerLocation]?.isSelectedCorrect !== undefined &&
      ans === selectedAns[answerLocation]["ans"]
    ) {
      styles = addBackgroundColor(ans);
      console.log("style: ", styles);
    }
    // const style = addBackgroundColor(ans);
    // console.log("style: ", style);
    return (
      <div key={nanoid()} style={styles}>
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

// Old Code

// import React from "react";
// import { nanoid } from "nanoid";

// export default function Answers(props) {
//   const { question, answerLocation, answers, selectedAns, setSelectedAns } =
//     props;
//   console.log("Answer: ", selectedAns);

//   function handleChange(e) {
//     setSelectedAns((prevState) => {
//       const newArr = [...prevState];
//       newArr[answerLocation] = {
//         ans: e.target.value,
//         isSelected: true,
//       };
//       return newArr;
//     });
//   }

//   function addBackgroundColor(answer) {
//     console.log("inside Function: ", answer);
//     console.log("answer: ", answer?.isSelectedCorrect);
//     if (answer?.isSelectedCorrect) {
//       if (answer[isSelectedCorrect]) {
//         console.log("I am true");
//       } else {
//         console.log("I am false");
//       }
//     }
//   }

//   const answerElements = answers.map((answerObj) => {
//     const inputId = nanoid();
//     const { ans } = answerObj;
// addBackgroundColor(answerObj);
// Add color logic upon checking answers
// const hasSelectedCorrect = selectedAns[answerLocation]?.isSelectedCorrect;
// const styles = {};
// if (hasSelectedCorrect !== undefined) {
//   styles["backgroundColor"] = hasSelectedCorrect ? "#90EE90" : "red";
// }
// console.log("styles: ", styles?.backgroundColor);

// return (
// <div key={nanoid()} style={styles}>
//       <div key={nanoid()}>
//         <input
//           type="radio"
//           id={inputId}
//           name={question}
//           value={ans}
//           checked={selectedAns[answerLocation]?.ans === ans}
//           onChange={handleChange}
//         />
//         <label htmlFor={inputId}>{answerObj.ans}</label>
//       </div>
//     );
//   });

//   return <div>{answerElements}</div>;
// }

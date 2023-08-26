import React from "react";
import { nanoid } from "nanoid";

export default function Answers(props) {
  const { question, answerLocation, answers, selectedAns, setSelectedAns } =
    props;

  function handleChange(e, i) {
    setSelectedAns((prevState) => {
      const updatedSelectedAns = prevState.map((questionAnswers, index) => {
        if (answerLocation === index) {
          return questionAnswers.map((answerObj, eachAnswerIndex) => {
            if (eachAnswerIndex === i) {
              return { ...answerObj, isSelected: true };
            } else {
              return { ...answerObj, isSelected: false };
            }
          });
        } else {
          return questionAnswers;
        }
      });
      return updatedSelectedAns;
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
          checked={
            selectedAns[answerLocation]?.[i]?.["isSelected"] &&
            selectedAns[answerLocation]?.[i]?.["ans"] === ans
          }
          onChange={(e) => handleChange(e, i)}
        />
        <label htmlFor={inputId}>{answerObj.ans}</label>
      </div>
    );
  });

  return <div>{answerElements}</div>;
}

// V1 Working code

// export default function Answers(props) {
//   const { question, answerLocation, answers, selectedAns, setSelectedAns } =
//     props;
// console.log("Answer: ", answers);

//   function handleChange(i) {
//     setSelectedAns((prevState) => {
//       const newSelectedAns = prevState.map((questionAnswers, index) => {
//         if (index === answerLocation) {
//           return questionAnswers.map((answerObj, ansIndex) => {
//             if (ansIndex === i) {
//               return { ...answerObj, isSelected: true };
//             } else {
//               return { ...answerObj, isSelected: false };
//             }
//           });
//         } else {
//           return questionAnswers;
//         }
//       });

//       return newSelectedAns;
//     });
//   }
//   const handleRadioChange = (e, i) => {
//     console.log("I is: ", i);
//     handleChange(i);
//   };

//   const answerElements = answers.map((answerObj, i) => {
//     const inputId = nanoid();
//     const { ans } = answerObj;
//     console.log(selectedAns[answerLocation][i].isSelected);
//     return (
//       <div key={nanoid()}>
//         <input
//           type="radio"
//           id={inputId}
//           name={question}
//           value={ans}
//           checked={
//             selectedAns[answerLocation]?.[i]?.isSelected &&
//             selectedAns[answerLocation]?.[i]?.ans === ans
//           }
//           onChange={(e) => handleRadioChange(e, i)}
//         />
//         <label htmlFor={inputId}>{answerObj.ans}</label>
//       </div>
//     );
//   });

//   return <div>{answerElements}</div>;
// }

// ================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================
//

// WORKING CODE

// import React from "react";
// import { nanoid } from "nanoid";

// export default function Answers(props) {
//   const { question, answerLocation, answers, selectedAns, setSelectedAns } =
//     props;
//   // console.log("Answer: ", selectedAns);

//   function handleChange(e) {
//     setSelectedAns((prevState) => {
//       const newArr = [...prevState];
//       newArr[answerLocation] = {
//         ans: e.target.value,
//       };
//       return newArr;
//     });
//   }

//   function addBackgroundColor() {
//     let hasSelectedCorrect = "";
//     hasSelectedCorrect = selectedAns[answerLocation].isSelectedCorrect;
//     const styles = {
//       backgroundColor: hasSelectedCorrect ? "#90EE90" : "red",
//     };
//     return styles;
//   }
//   const answerElements = answers.map((answerObj) => {
//     const inputId = nanoid();
//     const { ans } = answerObj;
//     let styles;
//     if (
//       selectedAns[answerLocation]?.isSelectedCorrect !== undefined &&
//       ans === selectedAns[answerLocation]["ans"]
//     ) {
//       styles = addBackgroundColor();
//     }
//     return (
//       <div key={nanoid()} style={styles}>
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

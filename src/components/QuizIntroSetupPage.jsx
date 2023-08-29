import React, { useState } from "react";

export default function QuizIntroSetupPage(props) {
  const { setQuiz } = props;
  const [quizSelections, setQuizSelections] = useState({
    quizDifficultyLevel: "",
  });

  function handleChange(event) {
    setQuizSelections((prevSelections) => ({
      ...prevSelections,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleClick() {
    const { quizDifficultyLevel } = quizSelections;
    if (quizDifficultyLevel) {
      const res = await fetch(
        `https://opentdb.com/api.php?amount=5&difficulty=${quizDifficultyLevel}&type=multiple`
      );
      const data = await res.json();
      setQuiz(data.results);
    } else {
      alert("Please select difficulty level");
    }
  }

  return (
    <div className="quiz-setup-container">
      <h1>Quizzical</h1>
      <p>
        🔥 Ignite Your Quest for Knowledge! Explore Exciting Quizzes: General
        Knowledge, Science, Mythology, and Beyond! Unleash Your Potential,
        Choose Your Challenge, and Conquer the Thrills of Learning! 🚀
      </p>

      {/* Below HTML for quiz difficulty level */}
      <label htmlFor="quiz-difficulty-level-id">Select Quiz Difficulty: </label>
      <select
        name="quizDifficultyLevel"
        id="quiz-difficulty-level-id"
        onChange={handleChange}
        defaultValue="Choose one"
      >
        <option disabled value="Choose one">
          Choose one
        </option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      {/* button to Start the quiz */}
      <button className="btn-start-quiz" type="button" onClick={handleClick}>
        Start Quiz
      </button>
    </div>
  );
}

import React, { useState } from "react";

export default function QuizIntroSetupPage() {
  const [quizSelections, setQuizSelections] = useState({
    quizTopic: "",
    quizDifficultyLevel: "",
  });

  function handleChange(event) {
    setQuizSelections((prevSelections) => ({
      ...prevSelections,
      [event.target.name]: event.target.value,
    }));
  }

  function handleClick() {
    console.log("formData: ", quizSelections);
  }

  return (
    <div className="quiz-setup-container">
      <h1>Quizzical</h1>
      <p>
        🔥 Ignite Your Quest for Knowledge! Explore Exciting Quizzes: General
        Knowledge, Science, Mythology, and Beyond! Unleash Your Potential,
        Choose Your Challenge, and Conquer the Thrills of Learning! 🚀
      </p>

      {/* Below HTML for quiz topic */}
      <label htmlFor="selected-quiz-id">Select Topic: </label>
      <select
        name="quizTopic"
        id="quiz-id"
        onChange={handleChange}
        defaultValue="Choose one"
      >
        <option disabled value="Choose one">
          Choose one
        </option>
        <option value="9">General Knowledge</option>
        <option value="17">Science: Nature</option>
        <option value="18">Science: Computers</option>
        <option value="19">Science: Mathematics</option>
        <option value="20">Mythology</option>
        <option value="30">Science: Gadgets</option>
        <option value="32">Entertainment: Cartoon & Animations</option>
      </select>

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

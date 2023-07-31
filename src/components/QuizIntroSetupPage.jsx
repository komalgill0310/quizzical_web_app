import React, { useState } from "react";

export default function QuizIntroSetupPage(props) {
  const { setQuiz } = props;
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

  async function handleClick() {
    const { quizTopic, quizDifficultyLevel } = quizSelections;
    if (quizTopic && quizDifficultyLevel) {
      const res = await fetch(
        `https://opentdb.com/api.php?amount=5&category=${quizTopic}&difficulty=${quizDifficultyLevel}&type=multiple`
      );
      const data = await res.json();
      console.log("data is: ", data.results);
      setQuiz(data.results);
    } else {
      alert("Please select topic and difficulty level");
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

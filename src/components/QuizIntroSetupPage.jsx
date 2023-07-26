import React from "react";
import { useId } from "react";

export default function QuizIntroSetupPage() {
  const quizSelectedId = useId();
  const quizDifficultyLevelId = useId();
  return (
    <div className="quiz-setup-container">
      <h1>Quizzical</h1>
      <p>
        🔥 Ignite Your Quest for Knowledge! Explore Exciting Quizzes: General
        Knowledge, Science, Mythology, and Beyond! Unleash Your Potential,
        Choose Your Challenge, and Conquer the Thrills of Learning! 🚀
      </p>

      {/* below html for quiz topic */}
      <label htmlFor={quizSelectedId}>Choose Quiz Topic: </label>
      <select
        name="selctedQuizId"
        id="selected-quiz-id"
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

      {/* below html for quiz difficulty level */}
      <label htmlFor={quizDifficultyLevelId}>Choose Quiz Topic: </label>
      <select
        name="selctedQuizDifficultyLevelId"
        id="selected-quiz-difficulty-level-id"
        defaultValue="Choose one"
      >
        <option disabled value="Choose one">
          Choose one
        </option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      {/* button to begin the quiz */}
      <button className="btn-start-quiz" type="button">
        Start Quiz
      </button>
    </div>
  );
}

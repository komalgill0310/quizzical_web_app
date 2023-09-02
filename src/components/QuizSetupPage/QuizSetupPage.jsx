import React, { useState } from "react";
import styles from "./QuizSetupPage.module.css";

export default function QuizSetupPage(props) {
  const { setquizData } = props;
  const [selections, setSelections] = useState({
    difficulty: "easy",
  });

  function handleChange(event) {
    setSelections((prevSelections) => ({
      ...prevSelections,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleClick() {
    const { difficulty } = selections;
    const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
    const response = await fetch(`${apiUrl}?amount=5&difficulty=${difficulty}`);
    const data = await response.json();
    setquizData(data.results);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Quizzical</h1>
      <p className={styles.info}>
        Unleash Your Wisdom Journey! Explore Diverse Quizzes. Customize
        Difficulty, Dive into Adventures. Triumph Awaits!
      </p>

      {/* Below HTML for quiz difficulty level */}
      <div className={styles.difficultyContainer}>
        <label htmlFor="difficulty-select" className={styles.difficultyLabel}>
          Difficulty
        </label>
        <select
          name="difficulty"
          id="difficulty-select"
          onChange={handleChange}
          defaultValue="Easy"
          className={styles.difficultyLevel}
        >
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </select>
      </div>

      {/* button to Start the quiz */}
      <button className={styles.startBtn} type="button" onClick={handleClick}>
        Start Quiz
      </button>
    </div>
  );
}

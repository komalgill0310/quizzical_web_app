import React, { useState } from "react";
import styles from "./QuizSetupPage.module.css";

export default function QuizSetupPage(props) {
  const { setQuiz } = props;
  const [selections, setSelections] = useState({
    difficulty: "",
  });

  function handleChange(event) {
    setSelections((prevSelections) => ({
      ...prevSelections,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleClick() {
    const { difficulty } = selections;
    if (difficulty) {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=5&difficulty=${difficulty}`
      );
      const data = await response.json();
      setQuiz(data.results);
    } else {
      alert("Please select difficulty level");
    }
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
          defaultValue="Choose one"
          className={styles.difficultyLevel}
        >
          <option disabled value="Choose one">
            Choose one
          </option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      {/* button to Start the quiz */}
      <button className={styles.startBtn} type="button" onClick={handleClick}>
        Start Quiz
      </button>
    </div>
  );
}

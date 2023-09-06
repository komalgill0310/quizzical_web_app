import React, { useState } from "react";
import styles from "./QuizSetupPage.module.css";

export default function QuizSetupPage(props) {
  const { setquizData } = props;
  const [selections, setSelections] = useState({
    category: "9",
    difficulty: "easy",
  });

  function handleChange(event) {
    setSelections((prevSelections) => ({
      ...prevSelections,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleClick() {
    const { difficulty, category } = selections;
    const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
    const response = await fetch(
      `${apiUrl}?amount=5&difficulty=${difficulty}&category=${category}`
    );
    const data = await response.json();
    setquizData(data.results);
    apiEndPoints();
  }

  function apiEndPoints() {
    const { difficulty, category } = selections;
    console.log(difficulty, category);
    if (difficulty === "any category" && category === "9") {
      return;
    } else if (difficulty === "any category" && category !== "9") {
      return `category=${category}`;
    } else if (difficulty !== "any category" && category === "9") {
      return `difficulty=${difficulty}`;
    } else {
      return `difficulty=${difficulty}&category=${category}`;
    }
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Quizzical</h1>
      <p className={styles.info}>
        Unleash Your Wisdom Journey! Explore Diverse Quizzes. Customize
        Difficulty, Dive into Adventures. Triumph Awaits!
      </p>

      {/* Below HTML for quiz topic */}
      <label htmlFor="category-select">Select Category: </label>
      <select
        name="category"
        id="category-select"
        onChange={handleChange}
        defaultValue="9"
      >
        <option value="any category">Any Category</option>
        <option value="9">General Knowledge</option>
        <option value="10">Entertainment: Books</option>
        <option value="11">Entertainment: Film</option>
        <option value="12">Entertainment: Music</option>
        <option value="13">Entertainment: Musicals & Theatres</option>
        <option value="14">Entertainment: Television</option>
        <option value="15">Entertainment: Video Games</option>
        <option value="16">Entertainment: Board Games</option>
        <option value="17">Science & Nature</option>
        <option value="18">Science: Computers</option>
        <option value="19">Science: Mathematics</option>
        <option value="20">Mythology</option>
        <option value="21">Sports</option>
        <option value="22">Geography</option>
        <option value="23">History</option>
        <option value="24">Politics</option>
        <option value="25">Art</option>
        <option value="26">Celebrities</option>
        <option value="27">Animals</option>
        <option value="28">Vehicles</option>
        <option value="29">Entertainment: Comics</option>
        <option value="30">Science: Gadgets</option>
        <option value="31">Entertainment: Japanese Anime & Manga</option>
        <option value="32">Entertainment: Cartoon & Animations</option>
      </select>

      {/* Below HTML for quiz difficulty level */}
      <div className={styles.difficultyContainer}>
        <label htmlFor="difficulty-select" className={styles.difficultyLabel}>
          Difficulty
        </label>
        <select
          name="difficulty"
          id="difficulty-select"
          onChange={handleChange}
          defaultValue="easy"
          className={styles.difficultyLevel}
        >
          <option value="any Category">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      {/* Button to Start the quiz */}
      <button className={styles.startBtn} type="button" onClick={handleClick}>
        Start Quiz
      </button>
    </div>
  );
}

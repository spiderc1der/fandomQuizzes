import { Link } from "react-router-dom";
import { useState } from "react";

import "./undertale.css";
import "../index.css";

export function Undertale() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const selectSFX = new Audio("src/sounds/snd_select.wav");

  const questions = [
    {
      question: "In total, how many human children have fallen underground?",
      answers: [
        { id: 0, text: "6", correct: false },
        { id: 1, text: "8", correct: true },
        { id: 2, text: "7", correct: false },
        { id: 3, text: "5", correct: false },
      ],
    },
    {
      question: "What year was Undertale officially released?",
      answers: [
        { id: 0, text: "2016", correct: false },
        { id: 1, text: "2014", correct: false },
        { id: 2, text: "2017", correct: false },
        { id: 3, text: "2015", correct: true },
      ],
    },
    {
      question: "What is Toriel's favorite food?",
      answers: [
        { id: 0, text: "Butterscotch Pie", correct: false },
        { id: 1, text: "Snail Pie", correct: true },
        { id: 2, text: "Cinnamon Bunny", correct: false },
        { id: 3, text: "Bug Pie", correct: false },
      ],
    },
    {
      question: "Which of the following is NOT one of Napstablook's CDs?",
      answers: [
        { id: 0, text: "Spooktune", correct: false },
        { id: 1, text: "Ghouliday", correct: false },
        { id: 2, text: "Spookwave", correct: false },
        { id: 3, text: "Spookstep", correct: true },
      ],
    },
  ];

  const answerPicked = (correct) => {
    if (correct) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      document.getElementById("qText").hidden = true;
      document.getElementById("homeButton").hidden = true;
      setShowResults(true);
    }

    // play 'select' sound effect 
    selectSFX.play();
    selectSFX.currentTime = 0;

    // update the question progress bar
    var percentRight = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById("healthPointBox").style.backgroundImage =
      "linear-gradient(to right, yellow 0%, yellow " +
      percentRight +
      "%, red " +
      (percentRight + 1) +
      "%, red 100%)";
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
    document.getElementById("qText").hidden = false;
    document.getElementById("homeButton").hidden = false;
  };

  return (
    <>
      <div className="undertale">
        <h1>Undertale Trivia Quiz</h1>

        {/* current question */}
        <h2 id="qText" className="question-txt">
          {questions[currentQuestion].question}
        </h2>

        {/* show either the results or the game */}

        {showResults ? (
          /* final results */
          <div>
            <br></br>
            <br></br>
            <div className="results">
              <h2 className="finalTitle">Final Results</h2>
              <h3 className="numberCorrect">
                {score} out of {questions.length} correct - (
                {(score / questions.length) * 100}%)
              </h3>
              <button className="restart-btn" onClick={() => restartGame()}>
                RESET
              </button>
            </div>
          </div>
        ) : (
          /* question card */

          <div className="question-card">
            {/* possible answers  */}
            <ul>
              {questions[currentQuestion].answers.map((answer) => {
                return (
                  <li key={answer.id}>
                    <h2
                      className="option"
                      onClick={() => answerPicked(answer.correct)}
                    >
                      {answer.text}
                    </h2>
                  </li>
                );
              })}
            </ul>

            <div className="buttons">
              <div className="playerInfo">
                <p>
                  HUMAN <p className="LOVE">LV 1</p>{" "}
                  <p className="bottomQuestionTxt">question</p>
                  <div className="hpBox" id="healthPointBox">
                    &nbsp;&nbsp;
                  </div>
                  {currentQuestion}/{questions.length}
                </p>
              </div>

              <Link to="/">
                <button id="homeButton" className="home-btn">
                  HOME
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

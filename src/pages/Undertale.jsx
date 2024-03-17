import { Link } from "react-router-dom";
import { useState } from "react";

import "./undertale.css";
import "../index.css";

export function Undertale() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // sound effects
  const selectSFX = new Audio("src/sounds/snd_select.wav");
  const resetSFX = new Audio("src/sounds/mus_cymbal.wav");
  const correctSFX = new Audio("src/sounds/snd_bell.wav");
  const incorrectSFX = new Audio("src/sounds/snd_hurt1.wav");

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

  const [totalRight, setTotal] = useState(questions.length);

  const answerPicked = (correct) => {
    if (correct) {
      // play "correct" sound effect

      correctSFX.play();
      correctSFX.currentTime = 0;

      setScore(score + 1);
    } else {
      // play "incorrect" sound effect

      incorrectSFX.play();
      incorrectSFX.currentTime = 0;


      startShakeAnim();
      setTimeout(endShakeAnim, 250);


      setTotal(totalRight - 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      document.getElementById("qText").hidden = true;
      document.getElementById("homeButton").hidden = true;
      setShowResults(true);
    }

    // update the question progress bar

    var numCorrect = totalRight;

    if (!correct) {
      numCorrect--;
    }
    var percentRight = (numCorrect / questions.length) * 100;

    console.log("totalRight: " + totalRight);

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
    setTotal(questions.length);
    document.getElementById("qText").hidden = false;
    document.getElementById("homeButton").hidden = false;
  };

  function startFadeAnim() {
    document.getElementById("resetIMG").className = "fade-in";
  }

  function endFadeAnim() {
    document.getElementById("resetIMG").className = "";
  }

  function resetAnim() {
    resetSFX.play();
    resetSFX.currentTime = 0;

    setTimeout(restartGame, 5900);
    startFadeAnim();
    setTimeout(endFadeAnim, 6200);
  }

  function startShakeAnim(){
    const shakeElement = document.querySelector("body");
    shakeElement.classList.add("shakeBox"); 
  }

  function endShakeAnim(){
    document.body.className = "";

  }



  function getResult(percentage) {
    if (percentage == 100) {
      return "Congratulations! A perfect score! You're a certified Undertale MASTER™!";
    } else if (percentage >= 80 && percentage <= 99) {
      return "Wow! You really know your stuff! You're a certified Undertale Expert™!";
    } else if (percentage >= 60 && percentage <= 79) {
      return "Not bad! You're an Undertale Authority™!";
    } else if (percentage >= 40 && percentage <= 59) {
      return "Pretty good! You're an Undertale Apprentice!";
    } else if (percentage >= 20 && percentage <= 39) {
      return "You're an Undertale amateur!";
    } else if (percentage >= 10 && percentage <= 19) {
      return "You still have much to learn!";
    } else if (percentage >= 1 && percentage <= 9) {
      return "You tried!";
    } else if (percentage == 0) {
      return "Oh! Wow!";
    } else {
      return "";
    }
  }

  return (
    <>
      <div id = "UT" className="undertale">
        <h1>Undertale Trivia Quiz</h1>

        {/* current question */}
        <h2 id="qText" className="question-txt">
          {currentQuestion + 1}/{questions.length}.{" "}
          {questions[currentQuestion].question}
        </h2>

        {/* show either the results or the game */}

        {showResults ? (
          /* final results */
          <div>
            <br></br>
            <br></br>
            <div className="results">
              <div id="fadeDIV">
                <img
                  src="src/assets/white.png"
                  id="resetIMG"
                  alt="reset-fade"
                />
              </div>

              <h2 className="finalTitle">Final Results</h2>
              <h3 className="numberCorrect">
                {score} out of {questions.length} correct 
                <br />
                {(score / questions.length) * 100}%
                {/* print message + play sfx depending on score */}
                <br />
                <br />
                {getResult((score / questions.length) * 100)}
                {console.log((score / questions.length) * 100)}
              </h3>
              <button className="restart-btn" onClick={() => resetAnim()}>
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
                  <p className="bottomQuestionTxt">HP</p>
                  <div className="hpBox" id="healthPointBox">
                    &nbsp;&nbsp;
                  </div>
                  {totalRight}/{questions.length}
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

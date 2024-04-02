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
        { id: 1, text: "Snail Pie", correct: true },
        { id: 0, text: "Butterscotch Pie", correct: false },
        { id: 2, text: "Cinnamon Bunny", correct: false },
        { id: 3, text: "Bug Pie", correct: false },
      ],
    },
    {
      question: "Which of the following is NOT one of Napstablook's CDs?",
      answers: [
        { id: 3, text: "Spookstep", correct: true },
        { id: 0, text: "Spooktune", correct: false },
        { id: 1, text: "Ghouliday", correct: false },
        { id: 2, text: "Spookwave", correct: false },
      ],
    },
    {
      question: "Which of the following is an NPC in hotland?",
      answers: [
        { id: 0, text: "Lava Sparksman", correct: false },
        { id: 1, text: "Magma Hotsguy", correct: false },
        { id: 2, text: "Heats Flamesman", correct: true },
        { id: 3, text: "Heat Flameman", correct: false },
      ],
    },
    {
      question: "Who did Undyne follow around as a kid?",
      answers: [
        { id: 0, text: "Gaster", correct: false },
        { id: 1, text: "Asgore", correct: false },
        { id: 2, text: "Alphys", correct: false },
        { id: 3, text: "Gerson", correct: true },
      ],
    },
    {
      question: "In which area can you find the Elder Puzzler?",
      answers: [
        { id: 0, text: "Waterfall", correct: true },
        { id: 1, text: "Snowdin", correct: false },
        { id: 2, text: "Ruins", correct: false },
        { id: 3, text: "Hotland", correct: false },
      ],
    },
    {
      question: "What is Alphys' favorite game?",
      answers: [
        { id: 0, text: "Tokyo Mew Mew", correct: false },
        { id: 1, text: "Mew Mew Kissy Cutie", correct: true },
        { id: 2, text: "Hello Mew Mew", correct: false },
        { id: 3, text: "Kissy Cutie 2", correct: false },
      ],
    },
    {
      question: "What can Papyrus be seen driving in the credits of True Pacifist?",
      answers: [
        { id: 0, text: "A tricycle", correct: false },
        { id: 1, text: "A truck", correct: false },
        { id: 2, text: "A convertible", correct: true },
        { id: 3, text: "A vespa", correct: false },
      ],
    },
    {
      question: "Who created Flowey?",
      answers: [
        { id: 0, text: "Gaster", correct: false },
        { id: 1, text: "Chara", correct: false },
        { id: 2, text: "Asgore", correct: false },
        { id: 3, text: "Alphys", correct: true },
      ],
    },
    {
      question: "Which soul traits are represented by the flashing colors of Sans' left eye?",
      answers: [
        { id: 0, text: "Justice, Integrity", correct: false },
        { id: 1, text: "Bravery, Patience", correct: false },
        { id: 2, text: "Integrity, Patience", correct: false },
        { id: 3, text: "Patience, Justice", correct: true },
      ],
    },
    {
      question: "How many fightable Kickstarter-backer custom NPCs are in the game?",
      answers: [
        { id: 0, text: "3", correct: true },
        { id: 1, text: "1", correct: false },
        { id: 2, text: "2", correct: false },
        { id: 3, text: "6", correct: false },
      ],
    },
    {
      question: "How many members of the royal guard are dogs?",
      answers: [
        { id: 0, text: "2", correct: false },
        { id: 1, text: "4", correct: false },
        { id: 2, text: "5", correct: true },
        { id: 3, text: "3", correct: false },
      ],
    },
    {
      question: "What can you find in Mettaton's house?",
      answers: [
        { id: 0, text: "Scripts", correct: false },
        { id: 1, text: "Evil plans", correct: false },
        { id: 2, text: "Costumes", correct: false },
        { id: 3, text: "Diaries", correct: true },
      ],
    },
    {
      question: "What's the limit of hotdogs that Sans will stack on the protagonist's head?",
      answers: [
        { id: 0, text: "25", correct: false },
        { id: 1, text: "30", correct: true },
        { id: 2, text: "31", correct: false },
        { id: 3, text: "10", correct: false },
      ],
    },
    {
      question: "What does Papyrus refer to his outfit as?",
      answers: [
        { id: 0, text: "\"Battle body\"", correct: true },
        { id: 1, text: "\"Costume\"", correct: false },
        { id: 2, text: "\"Battle outfit\"", correct: false },
        { id: 3, text: "\"Fighting figure\"", correct: false },
      ],
    },
    {
      question: "Which NPC can be found in the MTT Resort Restaurant?",
      answers: [
        { id: 0, text: "Aaron", correct: false },
        { id: 1, text: "Temmie", correct: false },
        { id: 2, text: "Snowdrake's Father", correct: true },
        { id: 3, text: "Faun", correct: false },
      ],
    },
    {
      question: "Where is Chara buried?",
      answers: [
        { id: 0, text: "Waterfall", correct: false },
        { id: 1, text: "Ruins flowerbed", correct: true },
        { id: 2, text: "New Home", correct: false },
        { id: 3, text: "In the royal garden", correct: false },
      ],
    },
    {
      question: "Which of the following is said by the River Person? \"Tra la la...\"",
      answers: [
        { id: 0, text: "\"... Tri li li. Tre le le.\"", correct: true },
        { id: 1, text: "\"... Remember to SAVE.\"", correct: false },
        { id: 2, text: "\"... Hmm?\"", correct: false },
        { id: 3, text: "\"... Careful.\"", correct: false },
      ],
    },
    {
      question: "Who can you see if you backtrack through rooms?",
      answers: [
        { id: 0, text: "Flowey", correct: true },
        { id: 1, text: "Sans", correct: false },
        { id: 2, text: "Toriel", correct: false },
        { id: 3, text: "Undyne", correct: false },
      ],
    },
    {
      question: "What did Chara and Asriel feed Asgore?",
      answers: [
        { id: 0, text: "Daisies", correct: false },
        { id: 1, text: "Daffodils", correct: false },
        { id: 2, text: "Buttercups", correct: true },
        { id: 3, text: "Golden Flowers", correct: false },
      ],
    },
    {
      question: "What does Temmie get a degree in if you pay for her college?",
      answers: [
        { id: 0, text: "Tem History", correct: false },
        { id: 1, text: "Tem Studies", correct: true },
        { id: 2, text: "Tem Business", correct: false },
        { id: 3, text: "Economics", correct: false },
      ],
    },
    {
      question: "What do the \"punch cards\" you get from Nice Cream Guy say?",
      answers: [
        { id: 0, text: "\"Thanks!\"", correct: false },
        { id: 1, text: "\":)\"", correct: false },
        { id: 2, text: "\"please... please come back...\"", correct: true },
        { id: 3, text: "\"1 free nice cream\"", correct: false },
      ],
    },
    {
      question: "Which of the following is NOT one of the amalgamates in True Lab?",
      answers: [
        { id: 0, text: "Eraserhead", correct: true },
        { id: 1, text: "Endogeny", correct: false },
        { id: 2, text: "Reaper Bird", correct: false },
        { id: 3, text: "Lemon Bread", correct: false },
      ],
    },
    {
      question: "What's the description of the item, \"Real Knife\"?",
      answers: [
        { id: 0, text: "\"Like it sounds.\"", correct: false },
        { id: 1, text: "\"Here we are!\"", correct: true },
        { id: 2, text: "\"Sharp.\"", correct: false },
        { id: 3, text: "\"Made of steel.\"", correct: false },
      ],
    }
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

  function startShakeAnim() {
    const shakeElement = document.querySelector("body");
    shakeElement.classList.add("shakeBox");
  }

  function endShakeAnim() {
    document.body.className = "";
  }

  function getResult(percentage) {
    if (percentage == 100) {
      return "Congratulations! A perfect score! You're a certified Undertale MASTER!";
    } else if (percentage >= 80 && percentage <= 99) {
      return "Wow! You really know your stuff! You're a certified Undertale Expert!";
    } else if (percentage >= 60 && percentage <= 79) {
      return "Not bad! You're an Undertale Apprentice!";
    } else if (percentage >= 40 && percentage <= 59) {
      return "Knowing that you can improve your score... It fills you with determination.";
    } else if (percentage >= 20 && percentage <= 39) {
      return "Knowing that you can improve your score... It fills you with determination.";
    } else if (percentage >= 10 && percentage <= 19) {
      return "Knowing that you can improve your score... It fills you with determination.";
    } else if (percentage >= 1 && percentage <= 9) {
      return "Knowing that you can improve your score... It fills you with determination.";
    } else if (percentage == 0) {
      return "Knowing that you can improve your score... It fills you with determination.";
    } else {
      return "";
    }
  }

  return (
    <>
      <div id="UT" className="undertale">
        <h1>Undertale Trivia Quiz</h1>

        {/* current question */}
        <h2 id="qText" className="question-txt">
          {currentQuestion + 1}/{questions.length}.{" "}
          {questions[currentQuestion].question}
        </h2>

        {/*<div className="UTpic">
          <img width="250" height="150"></img>
        </div>*/}

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

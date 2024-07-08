import { Link } from "react-router-dom";
import { useState } from "react";

import "./minecraft.css";

export function Minecraft() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // sfx go here

  const questions = [
    {
      question: "What year was the full version of Minecraft released?",
      answers: [
        { id: 0, text: "2012", correct: false },
        { id: 1, text: "2009", correct: false },
        { id: 2, text: "2011", correct: true },
        { id: 3, text: "2008", correct: false },
      ],
    },
  ];

  const [totalRight, setTotal] = useState(questions.length);

  const answerPicked = (correct) => {
    if (correct) {
      // play sfx,
    } else {
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuetsion + 1);
    } else {
      // hide the question text & the home button
    }

    if (!correct) {
      // decrease num correct
    }
    // decrease heart graphic
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
    setTotal(questions.length);
  };

  function getResult(percentage) {
    // results
  }

  return (
    <>
      <div id="MC" className="minecraft">
        <h1>Minecraft Trivia Quiz</h1>

        
        {showResults ? (
          /* final results */
          <div className="results">
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
          </div>
        ) : (
          <div className="window">
            {/* question card */}

          {/* show question */}
          <h3 id="qText" className="question-txt">
            {currentQuestion + 1}/{questions.length}.{" "}
            {questions[currentQuestion].question}
          </h3>


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
                <Link to="/">
                  <button id="homeButton" className="home-btn">
                    HOME
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

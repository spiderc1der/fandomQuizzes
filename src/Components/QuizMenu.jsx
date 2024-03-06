import { Link } from "react-router-dom";

import "./quizMenu.css";

export function QuizMenu() {
  return (
    <>
      <div className="quizzes">
 
          <Link to="/undertale">
            <button className="quizButton" id= "UTButton">Undertale Trivia</button>
          </Link>
          <button className="quizButton">WIP</button>
          <button className="quizButton">WIP</button>
          <button className="quizButton">WIP</button>
          <button className="quizButton">WIP</button>
      </div>
    </>
  );
}

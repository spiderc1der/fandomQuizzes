import { Link } from "react-router-dom";

import "./quizMenu.css"

export function QuizMenu(){

    return(
        <>
            <div className="quizzes">
                <ul>
                    <Link to ="/undertale">
                        <button className="quizButton">Undertale Trivia</button>
                    </Link>
                </ul>
            </div>
        </>
    )
}
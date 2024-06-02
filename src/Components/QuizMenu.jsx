import { Link, NavLink } from "react-router-dom";

import "./quizMenu.css";

export function QuizMenu() {
  return (
    <>
      <div className="quizzes">
        <div className="navbar">
          <div className = "container">
            <div className = "logo">
              <p>fandom quizzes</p>
            </div>
            <div className="elements">
              <ul>
                <li>
                  <NavLink to = "/undertale" style={{color: 'black', textDecoration: 'none'}}>Games</NavLink> <NavLink to = "/undertale" style={{color: 'black', textDecoration: 'none'}}>Movies</NavLink> <NavLink to = "/undertale"  style={{color: 'black', textDecoration: 'none'}}>Books</NavLink> <NavLink to = "/undertale" style={{color: 'black', textDecoration: 'none'}}>Shows</NavLink>
                </li>
                
              </ul>
            </div>


          </div>

        </div>

        <div class="main">
          <h3 text-align="center">Pet Finder</h3>
        </div>
 
          
          
      </div>
    </>
  );
}

import { Link, NavLink } from "react-router-dom";

import "./home.css";

export function Shows() {
    return (
        <div className="home">
        <div className="background">
        <h2 className="title">Fandom Quizzes</h2>
          <h3 className="pageName">Home</h3>
          
          <div className="quizzes">
            <div className="navbar">
              <div className="container">
                <div className="logo">
                  <Link to = "/" style={{color: 'black', textDecoration: 'none'}}>
                    All quizzes
                  </Link>
                </div>
                <div className="elements">
                  <ul>
                    <li>
                    <NavLink to = "/gameQuizzes" style={{color: 'black', textDecoration: 'none'}}>Games</NavLink> <NavLink to = "/movieQuizzes" style={{color: 'black', textDecoration: 'none'}}>Movies</NavLink> <NavLink to = "/bookQuizzes"  style={{color: 'black', textDecoration: 'none'}}>Books</NavLink> <NavLink to = "/showQuizzes" style={{color: 'black', textDecoration: 'none'}}>Shows</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

             {/* Quizzes are listed here */}
            <div className="main">
              show quizzes go here
              
            </div>
          </div>
          

        </div>
      </div>
    );
}
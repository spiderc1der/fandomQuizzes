import { QuizMenu } from "../Components/QuizMenu";

import "./home.css";

export function Home() {
  // home page
  return (
    <>
      <div className="home">
        <div className="background">
          <h1 className="title">Fandom Quizzes</h1>
          <h2 className="pageName">Home</h2>
          <QuizMenu />
        </div>
      </div>
    </>
  );
}

import React from "react"
import MainPage from "./MainPage"
import QuizPage from "./QuizPage"

export default function App() {
  const [quiz, setQuiz] = React.useState(false)
  const [newG, setNewG] = React.useState(false)

  function displayQuiz() {
    setQuiz(true)
  }
  function newGame() {
    document.location.reload()
    setQuiz(false)
    setNewG(true)

  }
  return (
    <div>
      {!quiz && <MainPage onClick={displayQuiz} />}
      {quiz && <QuizPage newGame={newGame} />}
      {!quiz && newG && <MainPage onClick={displayQuiz} />}
    </div>
  )
}
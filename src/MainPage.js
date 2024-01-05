import React from "react"

export default function MainPage(props) {

    return (
        <main className="main-container">
            <h2 className="topic">Quizzical</h2>
            <h5 className="desc">Welcome to the Quiz Game</h5>
            <button className="quiz-button" onClick={props.onClick}> Start Quiz </button>
        </main>
    )
}
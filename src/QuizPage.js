
import React from "react"
import Question from "./Question"
import OptionList from "./OptionList";
import MainPage from "./MainPage";


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

const answers = []
const rightAns = []

export default function QuizPage(props) {
    const [_questionList, setQuestionList] = React.useState([])
    const [selected, setSelected] = React.useState({})
    const [newQuiz, setNewQuiz] = React.useState(false)



    const count = "5"
    React.useEffect(() => {

        fetch(`https://opentdb.com/api.php?amount=${count}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)

                let questionList = []
                for (var i = 0; i < count; i++) {
                    let options = []

                    // let correctanswer = data.results[i].correct_answer
                    answers.push(data.results[i].correct_answer)  //collecting all correct answers returned from api
                    options = data.results[i].incorrect_answers
                    options.unshift(data.results[i].correct_answer)
                    shuffleArray(options)
                    questionList.push({
                        options: options,
                        question: data.results[i].question
                    })

                }
                setQuestionList(questionList)
            })
    }, [])
    console.log(`Api returned- ${answers}`)


    function captureAns(event, qidx) {
        let obj = {
            ...selected
        }
        obj[qidx] = event.target.getAttribute("name")
        setSelected((oldvalue) => {
            return obj
        })
    }
    console.log("selected")
    console.log(Object.values(selected))

    function checkAnswer() {
        setNewQuiz(!newQuiz)
        for (let answer of Object.values(selected)) {
            if (answers.includes(answer)) {

                rightAns.push(answer)

            } else {
                console.log("wrong")
            }

        }
        console.log(rightAns)

    }

    let results = _questionList.map((question, idx) => (
        <div>
            <Question question={question.question} idx={idx} />
            <OptionList options={question.options} qidx={idx} onClick={(event) => { captureAns(event, idx) }}
                selected={selected} selectedAns={rightAns} newQuiz={newQuiz} apiAnswer={answers} />
        </div>
    ))

    return (
        <div className="quizPage">
            <div className="page-content">
                <div className="quesAns">
                    {results}
                </div>
                <div className="quizpage-button">
                    {!newQuiz && <button className="checkAns" onClick={checkAnswer}>Check answer</button>}
                    {newQuiz && <button className="checkAns" onClick={props.newGame}>Play Again</button>}
                </div>
            </div>
        </div>
    )


}
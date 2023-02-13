import React from "react";



function getStyle(props, option) {
    let backgroundColor = ""

    if (!props.newQuiz) {
        if (props.selected[props.qidx] === option) {
            backgroundColor = "grey"
        }
        else backgroundColor = "RGB(168,178,209)"
    }
    else {

        if (props.apiAnswer[props.qidx] === option) {
            backgroundColor = "RGB(25, 89, 5)" //green color
        }
        else if (props.selected[props.qidx] === option) {
            backgroundColor = "RGB(128, 24, 24)"  //red color
        }
        else backgroundColor = "RGB(168,178,209)";
    }

    return {
        backgroundColor
    }
}

export default function OptionList(props) {
    // let choosen = Object.values(props.selected)
    // let received = props.apiAnswer
    return (<div className="option-list">
        <ul onClick={props.onClick}>
            {props.options.map((option, index) =>
                <li className="answer-options" id={`${props.qidx}-${index}`}
                    name={option}
                    dangerouslySetInnerHTML={{ __html: option }}
                    style={getStyle(props, option)} >
                </li>)}
        </ul>
    </div >)
}


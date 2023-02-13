import React from "react"

export default function Question(props) {
    return (<div><div key={props.idx}><h2 className="question-style"
        dangerouslySetInnerHTML={{ __html: props.question }} />
    </div> </div>)
}

import React from 'react'
import he  from 'he';

export default function Question(props) {
  const answers = props.question.answers.map((answer, index) => (
    <div key={index}>
      <li>
        <input name={props.name} type="radio" onChange={() => props.updateAnswer(props.name, answer, props.question.answer === answer ? true : false, props.index)} />
        <label>{answer}</label>
      </li>
    </div>
  ))
  return (
    <div className="question--container">
      <h2>{he.decode(props.question.question)}</h2>
      <ul className="question--row" >
        {answers}
      </ul>
    </div>
  )
}

import React from 'react'

export default function Welcome(props) {

  return (
    <section className="landing--page">
      <h1>Quizzical</h1>
      <p className="landing--description">A traivia game</p>
      <button
        className="start--button"
        onClick={props.start}
        >
          Start quiz
      </button>
    </section>
  )
}

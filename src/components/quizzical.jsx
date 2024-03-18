import React from 'react'
import he  from 'he';
import Question from './question';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti'

export default function Quizzical(props) {
  const [formData, setFormData] = React.useState({
    question1: false,
    question2: false,
    question3: false,
    question4: false,
    question5: false,
  })

  const [formDataArr, setFormDataArr] = React.useState([0, 0, 0, 0, 0])
  const [quizzical, setQuizzical] = React.useState(false)

  const quiz = props.questions.map((question, index) => (
      <div key={index} className="question--row">
        <Question index={index} question={question} name={`question${index+1}`} updateAnswer={handleChange}/>
      </div>
  ))

  function handleChange(key, answer, result, index) {
    console.log({[key]: result, answer})
    setFormData(oldFormData => ({
      ...oldFormData,
      [key]: result
      }
    ))
    console.log(formData)
  
    const newArray = [...formDataArr]
    newArray[index] = result
    setFormDataArr(newArray)
  }


  
  React.useEffect(() => {
    console.log("change detected", formData)
    console.log("change detected", formDataArr)
  })
  

  function handleSubmit(e) {
    e.preventDefault()
    console.log("submitted")
    if (formDataArr.every(item => true)) {
      setQuizzical(true)
      console.log('you won won !!!')
    } else {
      console.log('you lose')
    }
  }

  return (
    <div>
      {quizzical && <Confetti />}
    <form onSubmit={handleSubmit}>
      <section className="landing--page">
        <h1>Start game</h1>
        <p className="landing--description">A traivia game</p>
        <div>
          {quiz}
        </div>
      </section>
      <button>Submit</button>
    </form>
    </div>
  )
}

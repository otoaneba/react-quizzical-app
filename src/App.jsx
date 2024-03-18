import { useState, useEffect } from 'react'
import './App.css'
import Welcome from './components/welcome';
import Quizzical from './components/quizzical';

function App() {
  const [triviaQuestions, setTriviaQuestions] = useState({})
  const [startQuizzical, setStartQuizzical] = useState(false);

  function start() {
    console.log('start')
    setStartQuizzical(true);
  }

  useEffect(() => {
    console.log('here')
    async function getQuestions() {
      const response = await fetch("https://opentdb.com/api.php?amount=5");
      const data = await response.json()
      
      const questions = data.results.map((item, index) => ({
            question: item.question,
            answer: item.correct_answer,
            answers: [...item.incorrect_answers, item.correct_answer]
          }
      ))
      setTriviaQuestions(questions)
      console.log(questions)
    }
    getQuestions();
    return () => {
      // clean up if necessary
    }
  }, [])

  return (
    <main className="main">
      { !startQuizzical && <Welcome start={() => start()}/>}
      { startQuizzical && <Quizzical questions={triviaQuestions}/>}
    </main>
  )
}

export default App

/**
 * {
          question: quiz.question,
          answer: quiz.correct_answer,
          answers: [...quiz.incorrect_answers, quiz.correct_answer]
        }
      apiResults.map(() => (
        <Quizzical question={questionsObject} />  
      ))  


      Quizzical
        questions.answers.map((answer)=> (
          <ul>
          <li>{answer}
        ))

        question: quiz.question,
          answer: quiz.correct_answer,
          answers: [...quiz.incorrect_answers, quiz.correct_answer]
        
 */
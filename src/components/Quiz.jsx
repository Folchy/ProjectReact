import { useState, useEffect } from "react"
import Question from "./Question"

export default function Quiz() {
  const [questions, setQuestions] = useState(null)
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    fetch("/questions.json")
      .then(r => r.json())
      .then(data => setQuestions(data))
  }, [])

  if (!questions) return <p style={{ textAlign: "center" }}>Chargement...</p>

  function handleAnswer(i) {
    if (i === questions[index].correct) setScore(score + 1)
    if (index + 1 === questions.length) setFinished(true)
    else setIndex(index + 1)
  }

  if (finished)
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h2>Quiz terminé</h2>
        <p>Score : {score} / {questions.length}</p>
      </div>
    )

  return (
    <Question
      data={questions[index]}
      onAnswer={handleAnswer}
    />
  )
}

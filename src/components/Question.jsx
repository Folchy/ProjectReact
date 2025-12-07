import AnswerButton from "./AnswerButton"

export default function Question({ data, onAnswer }) {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>{data.text}</h2>
      {data.answers.map((a, i) => (
        <AnswerButton key={i} text={a} onClick={() => onAnswer(i)} />
      ))}
    </div>
  )
}

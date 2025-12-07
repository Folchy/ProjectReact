export default function AnswerButton({ text, onClick }) {
  return <button onClick={onClick} style={{ display:"block", margin:"1rem auto" }}>{text}</button>
}

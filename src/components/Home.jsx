export default function Home({ onStart }) {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Bienvenue</h2>
      <p>Clique pour commencer le quiz</p>
      <button onClick={onStart}>Commencer</button>
    </div>
  )
}

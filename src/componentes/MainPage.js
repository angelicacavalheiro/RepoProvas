import { Link } from "react-router-dom"

export default function MainPage() {
  return (
    <>
      <p>RepoProvas</p>
      <Link to={`/choice`} style={{textDecoration: 'none'}}>
        <button>Ver Provas</button>
      </Link>
      <Link to={`/sendTest`} style={{textDecoration: 'none'}}>
        <button>Adicionar Prova</button>
      </Link>
    </>
  )
}

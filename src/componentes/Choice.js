import { Link } from "react-router-dom"

export default function Choice() {
  return (
    <>
      <p>RepoProvas</p>
      <Link to={`/teachers`} style={{textDecoration: 'none'}}>
      <button>Listar por professor</button>
      </Link>
      <Link to={`/semesters`} style={{textDecoration: 'none'}}>
      <button>Listar por disciplina</button>
      </Link>
    </>
  )
}
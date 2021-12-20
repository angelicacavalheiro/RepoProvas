import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { postTests, getSubjectsByTeacher, getTeachers } from '../service';

export default function SendTest() {
  const [teachers, setTeachers] = useState('');
  const [subjects, setSubjects] = useState([]);

  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [tipo, setTipo] = useState('')
  const [teacherId, setTeacherId] = useState('')
  const [subjectId, setSubjectId] = useState('')

	useEffect(() => {
		getTeachers()
		.then((res) => {
      setTeachers(res.data)
		})
		.catch((error) => {
				console.log(error)
		});
	} , []);

  const body = {
    url: url,
    tipo_id: tipo,
    professores_id: teacherId,
    nome: name,
    disciplina_id: subjectId,
  }

  function sendTest(event, body) {
    event.preventDefault();
    console.log(body)
    postTests(body)
    .then((res) => {
      alert('prova enviada')
    })
    .catch((err) => {
      alert('erro')
        });
  }

  async function getSubjects(event, id) {
    event.preventDefault();
    setTeacherId(id)

    getSubjectsByTeacher(id)
      .then((res) => {
        console.log(res.data)
        setSubjects(res.data)
      })
      .catch((err) => {
        console.log(err)
      });
  }

  return (
    <>
      <Container>
      <h1>Escolha um professor e aguarde as disciplinas serem exibidas</h1>
        { teachers !== "" ?
          (teachers.map((teacher) => {
            return (
              <h2 key={teacher.id} onClick={(event) => getSubjects(event, teacher.id)} >
              {teacher.nome}
              </h2>
            )
          }))
          :
          ""
        }

        <h1>Escolha uma disciplina </h1>
        { subjects !== "" ?
          (subjects.map((subject) => {
            return (
              <h3 key={subject.id} onClick={() => setSubjectId(subject.id)} >
              {subject.disciplinaId.nome}
              </h3>
            )
          }))
          :
          ""
        }

        <h1>Escolha um tipo de prova </h1>
        <h3 onClick={() => setTipo(1)} > Prova 1 </h3>
        <h3 onClick={() => setTipo(2)} > Prova 2 </h3>
        <h3 onClick={() => setTipo(3)} > Prova 3 </h3>
        <h3 onClick={() => setTipo(4)} > Prova Final </h3>
        <h3 onClick={() => setTipo(5)} > Segunda Chamada </h3>

      </Container>

      <Container onSubmit={(event) => sendTest(event, body)}>
      <input
          placeholder='Semestre: ex. 2020.1'
          value={name}
          pattern="^[0-9]{4}\.[1-3]{1}"
          onChange={(e) => setName(e.target.value)}
          required
        />
      <input
        placeholder='Link para prova'
        type='url'
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <button>
        enviar
      </button>
    </Container>
    </>

  );
}

const Container = styled.form`
  color: #FFFFFF;
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1{
    color: blue;
    margin-bottom: 5px;
  }

  h2{
    color: black;
    cursor: pointer;
    margin-bottom: 5px;
  }

  h3{
    color: black;
    cursor: pointer;
    margin-bottom: 5px;
  }

  input{
    width: 325px;
    height: 64px;
    background: #FFFFFF;
    border: 1px solid #604848;
    border-radius: 10px;
    margin: 0 auto 8px auto;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #000000;

    ::placeholder,
    ::-webkit-input-placeholder {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: rgba(96, 72, 72, 0.4);
    }

`;
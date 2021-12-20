import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getTests } from '../service';

export default function TestsBySubject() {
    const { id } = useParams();

	const [p1 , setP1] = useState([])
	const [p2 , setP2] = useState([])
	const [p3 , setP3] = useState([])
	const [provaFinal, setProvaFinal] = useState([])
	const [segundaCh, setSegundaCh] = useState([])

	useEffect(() => {
		getTests()
		.then((res) => {
			testFilter(res.data)
		})
		.catch((error) => {
				console.log(error)
		});
	// eslint-disable-next-line react-hooks/exhaustive-deps
	} , []);

	function testFilter (allTests) {
		allTests.map((p) => {
			if (p.nome === 'Prova 1') {
				return (p.prova.map((professor) => {
					if (professor.diciplinaId.id === Number(id)) {
						p1.push(professor)
						return setP1([...p1])
					} return false;
				}))

			} else if (p.nome === 'Prova 2') {
				return (p.prova.map((professor) => {
					if (professor.diciplinaId.id === Number(id)) {
						p2.push(professor)
						return setP2([...p2])
					} return false;
				}))

			} else if (p.nome === 'Prova 3') {
				return (p.prova.map((professor) => {
					if (professor.diciplinaId.id === Number(id)) {
						p3.push(professor)
						return setP3([...p3])
					} return false;
				}))

			} else if (p.nome === 'Prova Final') {
				return (p.prova.map((professor) => {
					if (professor.diciplinaId.id === Number(id)) {
						provaFinal.push(professor)
						return setProvaFinal([...provaFinal])
					} return false;
				}))

			} else {
				return (p.prova.map((professor) => {
					if (professor.diciplinaId.id === Number(id)) {
						segundaCh.push(professor)
						return setSegundaCh([...segundaCh])
					} return false;
				}))
			}
		});
	}

	return (
		<Container>
			<p>	Prova 1</p>
			{p1 !== "" ?
				(p1.map((test, index) => {
					return (
						<Test key={index} href={test.url} style={{color: 'black', textDecoration: 'none'}}>
							{test.NomeId.nome} {test.professorId.nome}  <br/>
						</Test>
					)
				}))
				:
				""
			}
			<p>	Prova 2</p>
			{p2 !== "" ?
				(p2.map((test, index) => {
					return (
						<Test key={index} href={test.url} style={{color: 'black', textDecoration: 'none'}}>
							{test.NomeId.nome} {test.professorId.nome}  <br/>
						</Test>
					)
				}))
				:
				""
			}
			<p>	Prova 3</p>
			{p3 !== "" ?
				(p3.map((test, index) => {
					return (
						<Test key={index} href={test.url} style={{color: 'black', textDecoration: 'none'}}>
							{test.NomeId.nome} {test.professorId.nome}  <br/>
						</Test>
					)
				}))
				:
				""
			}
			<p>	Prova Final</p>
			{provaFinal !== "" ?
				(provaFinal.map((test, index) => {
					return (
						<Test key={index} href={test.url} style={{color: 'black', textDecoration: 'none'}}>
							{test.NomeId.nome} {test.professorId.nome}  <br/>
						</Test>
					)
				}))
				:
				""
			}
			<p>	Segunda Chamada</p>
			{segundaCh !== "" ?
				(segundaCh.map((test, index) => {
					return (
						<Test key={index} href={test.url} style={{color: 'black', textDecoration: 'none'}}>
							{test.NomeId.nome} {test.professorId.nome}  <br/>
						</Test>

					)
				}))
				:
				""
			}
		</Container>
	)
}

const Container = styled.div`
	background: pink;

`;
const Test = styled.a`
	background: pink;
	cursor: pointer;
`;

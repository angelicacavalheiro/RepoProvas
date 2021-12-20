import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getTests } from '../service';

export default function Tests() {
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
	} , []);

	function testFilter (allTests) {
		allTests.map((p) => {
			if (p.nome === 'Prova 1') {
				console.log(p)
				return (p.prova.map((professor) => {
					if (professor.professorId.id === Number(id)) {
						console.log(professor)
						p1.push(professor)
						return setP1([...p1])
					} return console.log(false);
				}))

			} else if (p.nome === 'Prova 2') {
				return (p.prova.map((professor) => {
					if (professor.professorId.id === Number(id)) {
						p2.push(professor)
						return setP2([...p2])
					} return console.log(false);
				}))

			} else if (p.nome === 'Prova 3') {
				return (p.prova.map((professor) => {
					if (professor.professorId.id === Number(id)) {
						p3.push(professor)
						return setP3([...p3])
					} return console.log(false);
				}))

			} else if (p.nome === 'Prova Final') {
				return (p.prova.map((professor) => {
					if (professor.professorId.id === Number(id)) {
						provaFinal.push(professor)
						return setProvaFinal([...provaFinal])
					} return console.log(false);
				}))

			} else {
				return (p.prova.map((professor) => {
					if (professor.professorId.id === Number(id)) {
						segundaCh.push(professor)
						return setSegundaCh([...segundaCh])
					} return console.log(false);
				}))
			}
		});
	}

	return (
		<Container>
			<p>	Prova 1</p>
			{p1 !== "" ?
				(p1.map((test) => {
					console.log(p1)
					return (
						<>
							<a href={test.url} style={{color: 'black', textDecoration: 'none'}}>
								<Test key={test.id}> {test.NomeId.nome} {test.diciplinaId.nome} </Test>
							</a>

						</>
					)
				}))
				:
				""
			}
			<p>	Prova 2</p>
			{p2 !== "" ?
				(p2.map((test) => {
					return (
						<a href={test.url} style={{color: 'black', textDecoration: 'none'}}>
							<Test key={test.id}> {test.NomeId.nome} {test.diciplinaId.nome} </Test>
						</a>
					)
				}))
				:
				""
			}
			<p>	Prova 3</p>
			{p3 !== "" ?
				(p3.map((test) => {
					return (
						<a href={test.url} style={{color: 'black', textDecoration: 'none'}}>
							<Test key={test.id}> {test.NomeId.nome} {test.diciplinaId.nome} </Test>
						</a>
					)
				}))
				:
				""
			}
			<p>	Prova Final</p>
			{provaFinal !== "" ?
				(provaFinal.map((test) => {
					return (
						<a href={test.url} style={{color: 'black', textDecoration: 'none'}}>
							<Test key={test.id}> {test.NomeId.nome} {test.diciplinaId.nome} </Test>
						</a>
					)
				}))
				:
				""
			}
			<p>	Segunda Chamada</p>
			{segundaCh !== "" ?
				(segundaCh.map((test) => {
					return (
						<a href={test.url} style={{color: 'black', textDecoration: 'none'}}>
							<Test key={test.id}> {test.NomeId.nome} {test.diciplinaId.nome} </Test>
						</a>
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
const Test = styled.div`
	background: pink;
	cursor: pointer;
`;

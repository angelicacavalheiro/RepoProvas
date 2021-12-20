import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { getSemesters } from '../service';

export default function Semesters() {

	const [semestersFound, setSemestersFound] = useState("")

	useEffect(() => {
		getSemesters()
		.then((res) => {
				setSemestersFound(res.data)
		})
		.catch((error) => {
				console.log(error)
		});
	} , []);

	return (
		<Container>
			{semestersFound !== "" ?
				(semestersFound.map((semester) => {
					return (
						<Semester key={semester.id} > {semester.name}
								{semester.disciplinas !== "" ?
								(semester.disciplinas.map((disciplina) => {
									return (
										<Link to={`/testsbysubject/${disciplina.id}`} style={{textDecoration: 'none'}}>
												<Subject key={disciplina.id}> {disciplina.nome} </Subject>
										</Link>
									)
								}))
								:
								""
							}
					</Semester>
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
const Semester = styled.div`
	background: pink;

`;
const Subject = styled.h2`
	background: #bbe8df;
	cursor: pointer;
`;
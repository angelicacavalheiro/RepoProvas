import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { getTeachers } from '../service';

export default function Teachers() {

	const [teachersFound, setTeachersFound] = useState("")

	useEffect(() => {
		getTeachers()
		.then((res) => {
				setTeachersFound(res.data)
		})
		.catch((error) => {
				console.log(error)
		});
	} , []);

	return (
		<Container>
			{teachersFound !== "" ?
				(teachersFound.map((teacher) => {
					return (
						<Link to={`/tests/${teacher.id}`} style={{textDecoration: 'none'}}>
							<Teacher key={teacher.id}> {teacher.nome} </Teacher>
						</Link>
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
const Teacher = styled.div`
	background: pink;
	cursor: pointer;
`;

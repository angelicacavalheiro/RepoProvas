import axios from "axios";
const URL = 'http://localhost:4000'
//https://repoprovas-driven.herokuapp.com/
//http://localhost:4000

function getOneExam(param) {
  const promise = axios.get(`${URL}/gallery/${param}`);
  return promise;
}

function getSemesters() {
  const promise = axios.get(`${URL}/semesters`);
  return promise;
}

function getTeachers() {
	const promise = axios.get(`${URL}/professor`);
	return promise;
}

function getTests() {
	const promise = axios.get(`${URL}/tipo`);
	return promise;
}

function postTests(body) {
	const promise = axios.post(`${URL}/insertTest`, body);
	return promise;
}

function getSubjectsByTeacher(param) {
	const promise = axios.get(`${URL}/professor-disciplina/${param}`);
	return promise;
}



export {
	getOneExam,
	getSemesters,
	getTeachers,
	getTests,
	postTests,
	getSubjectsByTeacher,
}
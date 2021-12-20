import axios from "axios";
const URL = 'http://localhost:4000'
//https://repoprovas-driven.herokuapp.com/
//http://localhost:4000

function postExam(body) {
	const promise = axios.post(`${URL}/sign-in`, body);
	return promise;
}

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




export {
	postExam,
	getOneExam,
	getSemesters,
	getTeachers,
	getTests,
}
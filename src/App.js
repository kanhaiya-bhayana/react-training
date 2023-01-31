import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import ListGroup from './Components/ListGroup';
import FetchComp from './Components/FetchComp';
import AddEmp from './Components/AddEmp';
import React ,{useState} from 'react';
import ParentComp from './Components/ParentComp';

function App() {
  const courses = [
    {id:34, title: 'Languages', summary:["C","C++","Java","JavaScript","PhP","Python"]},
    {id:3, title: 'Stacks', summary: ["Mern","Data Science","Machine Learning","DevOps","Blockchain"]},
    {id:4, title: 'Databases', summary: ["MySql","MongoDB","Firestore","PostgreSql"]},
  ]

  let listCourses = courses.map((course, i)=>{
    return <ListGroup key={course.id} title={course.title} listData={course.summary}></ListGroup>
  })

  return (
    <ParentComp></ParentComp>
    // <>
    /* <AddEmp></AddEmp>
    <hr />
    <FetchComp></FetchComp>
    </> */  // <div className="container">
    // <div className="row">
    // {listCourses}
    // </div>
    // </div>
  );
}

export default App;



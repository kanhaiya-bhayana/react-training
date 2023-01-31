import React, { useState,useEffect } from 'react'

export default function FetchComp() {
    const [emp,setEmp] = useState([]);

    useEffect(() => {
      fetch("http://localhost:8000/Technologies/")
      .then(res=>res.json())
      .then(data=>{
        setEmp(data)
      })
    }, [])

   const delFUnc = (id) =>{
    fetch(`http://localhost:8000/Technologies/${id}`,{
        method:"DELETE"
      })
      .then(res=>res.json())
      .then(data=>{
        let newEmpData = emp.filter((e)=> e.id != id)
        setEmp(newEmpData)
      })
        
    }

    const listEmployees = emp.map((empData,i)=>{
        return (
            <tr key={emp.id}>
        <th scope="row">{i+1}</th>
        <td>{empData.name}</td>
        <td>{empData.year}</td>
        <td><button type="button" onClick={() => delFUnc(empData.id)} className="btn btn-danger">Delete</button></td>
        </tr>
        )
    })
    
  return (
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Technology</th>
      <th scope="col">Year</th>
    </tr>
  </thead>
  <tbody>
  {listEmployees}
  </tbody>
</table>
  )
}

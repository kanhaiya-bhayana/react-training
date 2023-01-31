import React, {useState} from 'react'
import ChildComp from './ChildComp';

export default function ParentComp() {
    const [name,setName] = useState();
    const [name2,setName2] = useState();

    const handleNameChange = (e) =>{
        setName(e.target.value)
    }
  return (
    <>
    <h2>Parent</h2>
    <form>
  <div class="mb-3">
  <h4>Parent Input box</h4>
    <input type="email" class="form-control" value={name} onChange={handleNameChange} />
  </div>
  <p>{name2 ? "Child is entering: " + name2 : "Child has not entered anything yet"}</p>
  </form>
  <ChildComp name={name} setName2={setName2}></ChildComp>
    </>
  
  )
}

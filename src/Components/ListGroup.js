import React from 'react'

export default function ListGroup(props) {
  const newData = props.listData.map(func);
  return (
    <ul className="list-group" style={{ width: "250px",padding:"20px" }}>
      <li className="list-group-item active ">{props.title}</li>
      
      {newData}
    </ul>

  )
}

function func(itemdata){
  return <li className="list-group-item">{itemdata}</li>
}
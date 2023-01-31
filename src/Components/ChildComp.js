import React, {useState} from 'react'

export default function ChildComp(props) {
    const [cname,csetName] = useState();

    return (
        <div>
            <h2>
                ChildComp
            </h2>
            <p>{props.name ? "Parent is entering: " +props.name :"Parent has not entered anything yet"} </p>
            <hr />
            <h4>Child Input box</h4>
            <input type="email" class="form-control" value={cname} onChange={(e)=> props.setName2(e.target.value)} />
        </div>
    )
}

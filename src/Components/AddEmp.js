import React, {useState} from 'react'


export default function AddEmp(props) {

    const [name, setName] = useState('')
    const [year, setyear] = useState('')
    const [message, setMessage] = useState()

    const handleNameChange = (e) =>{
        console.log(e.target.value)
        setName(e.target.value)
    }

    const addEmployee = () => {
        console.log('add employee..' , name, year)
        fetch('http://localhost:8000/Technologies', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({name, year})

        })
        .then(res=>{
            if(res.status == 201){
                setMessage('Details added successfully!')
                console.log("res is ", res.body)
            }
        });
    }

    // let messageAlert = ''
    // if(message){
    //     messageAlert= (<div class="alert alert-success" role="alert">
    //     {message}
    //     </div>)
    // }
    
    return (
        <>
       {message && (<div class="alert alert-success" role="alert">
        {message}
        </div>)}
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Technology Name</span>
                <input type="text" onChange={handleNameChange} value={name} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Year</span>
                <input type="number"  onChange={(e)=> setyear(e.target.value)} value={year} className="form-control" placeholder="Enter year" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <button onClick={addEmployee} className='btn btn-primary'>Add Details</button>
        </>
  )
}

import React, {useState} from 'react'

function DynamicForms() {
  const initialEmployeeDetails = {
    userName : "",
    password : "",
    email : "",
    mobileNumber : '',
    city : "",
    designation : ""
  }
  const [employeeDetials, setEmployeeDetials] = useState(initialEmployeeDetails)
  const [allEmployees, setAllEmployees] = useState([])
  const handleDynamicForm = (event) => {
      setEmployeeDetials({
        ...employeeDetials,
        [event.target.name] : event.target.value
      })
      
  }

  const formSubmit = (event) => {
      event.preventDefault()
      console.log(employeeDetials)
      setAllEmployees([...allEmployees,employeeDetials ])
      setEmployeeDetials(initialEmployeeDetails)
  }
  return (
    <div>
      {console.log(allEmployees)}
      <h2>Employee Detials</h2>
      <form onSubmit={formSubmit} autoComplete='off' >
        <div>
          <label htmlFor='userName' >User Name</label>
          <input type='text' id='userName' name='userName' value={employeeDetials.userName} placeholder='Enter user name' onChange={handleDynamicForm} />
        </div>
        <div>
          <label htmlFor='password' >Password</label>
          <input type='password' id='password' name='password' value={employeeDetials.password} placeholder='Enter password' onChange={handleDynamicForm} />
        </div>
        <div>
          <label htmlFor='email' >Email</label>
          <input type='email' id='email' name='email' value={employeeDetials.email} placeholder='Enter Email' onChange={handleDynamicForm} />
        </div>
        <div>
          <label htmlFor='phoneNumber' >Mobile Number</label>
          <input type='number' id='phoneNumber' name='mobileNumber' value={employeeDetials.mobileNumber} placeholder='Enter mobile number' onChange={handleDynamicForm} />
        </div>
        <div>
          <label htmlFor='designation' >Designation</label>
          <select id='designation' name='designation' value={employeeDetials.designation} onChange={handleDynamicForm} >
            <option>Front end Developer</option>
            <option>Back end Developer</option>
            <option>Full Stack Developer</option>
          </select>
        </div>
        <div>
          <label htmlFor='city' >city</label>
          <select id='city' name='city' value={employeeDetials.city} onChange={handleDynamicForm} >
            <option>Hyderabad</option>
            <option>Vizag</option>
            <option>Mumbai</option>
            <option>Delhi</option>
          </select>
        </div>
        <input type="submit" value="Submit" />
      </form>
      {allEmployees.map(item => <h1>{item.userName}</h1>)}
    </div>
  )
}

export default DynamicForms
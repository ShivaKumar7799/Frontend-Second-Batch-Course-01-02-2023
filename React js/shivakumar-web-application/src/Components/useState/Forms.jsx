import React, {useState} from 'react'

function Forms() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("")
  const [mobileNumber, setMobileNumber] = useState()
  const [city, setCity] = useState("")
  const [designation, setDesignation] = useState("")

  const formSubmit = (event) => {
    event.preventDefault();
    console.log({
      userName : userName,
      password : password,
      email : email,
      phoneNumber : mobileNumber,
      city : city,
      designation : designation
    })
  }

  const handleUserName = (event) => {
    setUserName(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePhoneNumber = (event) => {
    setMobileNumber(event.target.value)
  }

  const handleDesignation = (event) => {
    setDesignation(event.target.value)
  }

  const handleCity = (event) => {
    setCity(event.target.value)
  }

  return (
    <div>
      <h2>Employee Detials</h2>
      <form onSubmit={formSubmit} autoComplete='off' >
        <div>
          <label htmlFor='userName' >User Name</label>
          <input type='text' id='userName' name='userName' value={userName} placeholder='Enter user name' onChange={handleUserName} />
        </div>
        <div>
          <label htmlFor='password' >Password</label>
          <input type='password' id='password' name='password' value={password} placeholder='Enter password' onChange={handlePassword} />
        </div>
        <div>
          <label htmlFor='email' >Email</label>
          <input type='email' id='email' name='email' value={email} placeholder='Enter Email' onChange={handleEmail} />
        </div>
        <div>
          <label htmlFor='phoneNumber' >Mobile Number</label>
          <input type='number' id='phoneNumber' name='phoneNumber' value={mobileNumber} placeholder='Enter mobile number' onChange={handlePhoneNumber} />
        </div>
        <div>
          <label htmlFor='designation' >Designation</label>
          <select id='designation' name='designation' value={designation} onChange={handleDesignation} >
            <option>Front end Developer</option>
            <option>Back end Developer</option>
            <option>Full Stack Developer</option>
          </select>
        </div>
        <div>
          <label htmlFor='city' >city</label>
          <select id='city' name='city' value={city} onChange={handleCity} >
            <option>Hyderabad</option>
            <option>Vizag</option>
            <option>Mumbai</option>
            <option>Delhi</option>
          </select>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Forms
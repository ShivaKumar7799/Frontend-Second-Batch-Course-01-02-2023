import React, {useState} from 'react'

function StudentForm() {
  const [studentName, setStudentName] = useState("");
  const [rollNo, setRollNo] = useState()
  const [gender, setGender] = useState("")
  
  const handleStudentName = (event) => {
    setStudentName(event.target.value)
  }
  const handleRollNo = (event) => {
    setRollNo(event.target.value)
  }
  const handleGender = (event) => {
    setGender(event.target.value)
  }
  const studentFormSubmit = (event) => {
    event.preventDefault()
    console.log({
      studentName : studentName,
      rollNo : rollNo,
      gender : gender
    })
    setStudentName("")
    setRollNo("")
    setGender("")
  }
  return (
    <form onSubmit={studentFormSubmit} >
      <div>
        <label htmlFor = "studentName" >Student Name</label> :
        <input type="text" id='studentName' name="studentName" value={studentName} onChange={handleStudentName} />
      </div>
      <div>
        <label htmlFor='rollNo' >Roll No</label> :
        <input type="number" id='rollNo' name="rollNo" value={rollNo} onChange={handleRollNo} />
      </div>
      <div>
        <label htmlFor='gender' >Gender</label>
        <select id='gender' name="gender" value={gender} onChange={handleGender} >
          <option value="" >Select</option>
          <option value="male" >Male</option>
          <option value = "female" >Female</option>
          <option value="others" >Others</option>
        </select>
      </div>
      <input type='submit' value="Data Submit" />
    </form>
  )
}

export default StudentForm
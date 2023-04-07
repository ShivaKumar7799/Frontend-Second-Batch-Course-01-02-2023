import React, { useState } from 'react'

function StudentDynamicForm() {
  const intialStudentData = {
    studentName : "",
    rollNo : "",
    gender : ""
  }

  const [studentData, setStudentData] = useState(intialStudentData);
  const [allStudents, setAllStudents] = useState([])

  const studentFormSubmit = (event) => {
      event.preventDefault()
      console.log(studentData)
      setStudentData(intialStudentData)
      setAllStudents([...allStudents, studentData])
  }

  const handleDynamicInputFields = (event) => {
      setStudentData({
        ...studentData,
        [event.target.name] : event.target.value
      })
  }

  return (
    <div>
      <form onSubmit={studentFormSubmit} >
      <div>
        <label htmlFor = "studentName" >Student Name</label> :
        <input type="text" id='studentName' name="studentName" value={studentData.studentName} onChange={handleDynamicInputFields} />
      </div>
      <div>
        <label htmlFor='rollNo' >Roll No</label> :
        <input type="number" id='rollNo' name="rollNo" value={studentData.rollNo} onChange={handleDynamicInputFields} />
      </div>
      <div>
        <label htmlFor='gender' >Gender</label>
        <select id='gender' name="gender" value={studentData.gender} onChange={handleDynamicInputFields} >
          <option value="" >Select</option>
          <option value="male" >Male</option>
          <option value = "female" >Female</option>
          <option value="others" >Others</option>
        </select>
      </div>
      <input type='submit' value="Data Submit" />
    </form>
    {allStudents.map((item,index) => <h1>{item.studentName}</h1> )}
    </div>
  )
}

export default StudentDynamicForm
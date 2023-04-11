import React, { useState } from 'react'

function StudentDynamicForm() {
  const intialStudentData = {
    studentName : "",
    rollNo : "",
    gender : ""
  }

  const [studentData, setStudentData] = useState(intialStudentData);
  const [allStudents, setAllStudents] = useState([])
  const date = new Date()
  const studentFormSubmit = (event) => {
      event.preventDefault()
      console.log(studentData)
      setStudentData(intialStudentData)
      setAllStudents([...allStudents, {...studentData, createdDate : date.getTime()}])
  }

  const handleDynamicInputFields = (event) => {
      setStudentData({
        ...studentData,
        [event.target.name] : event.target.value
      })
  }

  const deleteStudent = (createdDate) => {
    console.log("student deleted",createdDate)
    const filteredStudents = allStudents.filter((item,index) => item.createdDate !== createdDate )
    setAllStudents(filteredStudents)
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
    {console.log(allStudents)}
    {allStudents.map((item,index) => <div> 
                                      <h1> Student Name : {item.studentName} </h1>
                                      <h3> Roll No : {item.rollNo} </h3>
                                      <h3> Gender : {item.gender}</h3>
                                      <button onClick={ () => deleteStudent(item.createdDate) } > Delete </button>
                                    </div> )}
    </div>
    
  )
}

export default StudentDynamicForm
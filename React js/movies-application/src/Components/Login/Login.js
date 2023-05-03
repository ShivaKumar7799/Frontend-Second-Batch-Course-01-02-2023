import React from 'react'
import {useFormik} from 'formik'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues : {
      userName : "",
      password : ""
    },
    validate : (values) => {
      const errors = {}
      if(!values.userName){
        errors.userName = "Please enter userName"
      }
      if(!values.password){
        errors.password = "password should not be empty"
      } else if(values.password.length <= 3){
        errors.password = "Password too short, should have more than 3 characters"
      } else if(values.password.length >=16){
        errors.password = "password too long,should have less than 16 characters"
      }
      return errors
    },
    onSubmit : (values) => {
      axios.post("https://reqres.in/api/login",{
        "email": values.userName,
        "password": values.password
    } ).then(resp => localStorage.setItem("token",resp.data.token)).then(() => navigate("/") ).catch(() => alert("Please enter valid data"))
      
    }
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit} >
      <div>
        <input type = "text" placeholder='Enter userName' name ="userName" value = {formik.values.userName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        <div>
          { formik.touched.userName && formik.errors.userName && <p>{formik.errors.userName}</p>}
        </div>
      </div>
      <div>
        <input type = "password" placeholder='Enter your password' name ="password" onChange={formik.handleChange} onBlur={formik.handleBlur} />
        <div>
          { formik.touched.password && formik.errors.password && <p>{formik.errors.password}</p>}
        </div>
      </div>
      <input type ="submit" value = "Login" />
      </form>
    </div>
  )
}

export default Login
import React from 'react'
import {useFormik} from 'formik'

function FormikLogin() {
  const formik = useFormik({
    initialValues : {
      name : "",
      password : ""
    },
    validate : (values) => {
      const errors = {}
      if(!values.name){
        errors.name = "Name is Required"
      }
      if(!values.password){
        errors.password = "Password is Required"
      }else if(values.password.length < 3){
        errors.password = "Password should have atleast 3 characters"
      }else if(values.password.length > 6){
        errors.password = "Password should not greater than 6 characters"
      }
      
      return errors
    },
    onSubmit : (values) => {
      console.log(values)
      navigate()
    }
  })
  const navigate = () => {
    alert("navigate to home page")
  }
  return (
    <div>
      <h1>Formik Library</h1>
      <form onSubmit={formik.handleSubmit} >
        <input type='text' style={{border : formik.touched.password && formik.errors.password ? "1px solid red" : ""}} name = "name" onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.touched.name && formik.errors.name && <div style={{color : formik.touched.name && formik.errors.name ? "red" : ""}} >{formik.errors.name}</div> }
        <br />
        
        <input style={{border : formik.touched.password && formik.errors.password ? "1px solid red" : ""}} type="password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.touched.password && formik.errors.password && <div  > <p style={{color : formik.touched.password && formik.errors.password ? "red" : ""}} >{formik.errors.password}</p> </div>}
        <br />
        {/* <input type ="submit" value ="Login" disabled={!formik.isValid} /> */}
        <div style={{position : !formik.isValid ? "relative" : "", right : !formik.isValid ? "500px" : ""}} disabled={!formik.isValid} ><button onClick={formik.handleSubmit} >submit form</button></div>
      </form>
    </div>
  )
}

export default FormikLogin
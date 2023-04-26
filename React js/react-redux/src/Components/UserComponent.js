import React from 'react'
import {connect} from 'react-redux'
import { setUserAge,setUserName } from '../redux/actions/userActions'

function UserComponent(props) {
  const {userDetails, setUserName, setUserAge} = props
  return (
    <div>UserComponent
      user Name : {userDetails.name} {userDetails.age}
      <input type ="text" value = {userDetails.name} onChange={(event) => setUserName(event.target.value) } />
      <button onClick={() => setUserAge(userDetails.age + 1) } >Increase age</button>
    </div>
  )
}

const mapStateToProps = (state,action) => {
  return {
    userDetails : state.user
  }
}

const mapDispatchToProps = {
  setUserName,
  setUserAge
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent)
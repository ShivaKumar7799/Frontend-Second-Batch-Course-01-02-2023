import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeColor } from '../features/colorSlice'

function ChangeColor() {
  const dispatch = useDispatch()
  const color = useSelector(state => state.color)
  return (
    <div>
      ChangeColor , color : {color.colorValue}
      <input type="text" onChange={(event) => dispatch(changeColor((event.target.value)))} />
    </div>
  )
}

export default ChangeColor
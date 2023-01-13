import React, { useEffect } from 'react'
import { fetchGreetings } from '../redux/greetingSlice'
import { useSelector, useDispatch } from 'react-redux'



function Greetings() {
  const greetings = useSelector(state => state.greeting)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGreetings())
  }, [dispatch])

  return (
    // <div>Hello</div>
    <ul>{greetings.map(greet => (
      <li key={greet.id}>{greet.msg}</li>
    ))}</ul>
  )
}

export default Greetings
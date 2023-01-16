import React, { useEffect } from 'react'
import { fetchGreetings } from '../redux/greetingSlice'
import { useSelector, useDispatch } from 'react-redux'



function Greetings() {
  const greetings = useSelector(state => state.greeting)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGreetings())
  }, [])

  return (
    <>
    <header>
        <h1>Random Greetings</h1>
      </header>
      <h2 style={{ color: "blue" }}>{greetings.msg}</h2>
    </>
  )
}

export default Greetings
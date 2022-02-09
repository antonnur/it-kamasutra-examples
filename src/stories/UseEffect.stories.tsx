import React, {useEffect, useState} from "react";
import {cleanup} from "@testing-library/react";

export default {
  title: 'useEffect demo',
}

// 21. useEffect

export const SimpleExample = () => {
  const [fake, setFake] = useState(1)
  const [counter, setCounter] = useState(1) // [ 0, function(newValue){} ]

  console.log('SimpleExample !')

  useEffect(() => {
    console.log("useEffect every render")
    console.log("")
    document.title = counter.toString()
  })

  useEffect(() => {
    console.log("useEffect only first render (componentDidMount)")
    document.title = counter.toString()
  }, [])

  useEffect(() => {
    console.log("useEffect first render and every counter change")
    document.title = counter.toString()
  }, [counter])

  return <>
    Hello, Counter: {counter} - Fake: {fake}
    <button onClick={() => setFake(fake + 1)}>Fake+</button>
    <button onClick={() => setCounter(counter + 1)}>Counter+</button>
  </>
}

// 22.  useEffect \ setTimeout

export const SetTimeoutExample = () => {
  const [fake, setFake] = useState(1)
  const [counter, setCounter] = useState(1) // [ 0, function(newValue){} ]

  console.log('SetTimeoutExample')

  useEffect(() => {

    setTimeout(() => {
      console.log("setTimeout !")
      document.title = counter.toString()
    }, 1000)

  }, [counter])

  return <>
    Counter: {counter} - Fake: {fake}
    <button onClick={() => setFake(fake + 1)}>Fake+</button>
    <button onClick={() => setCounter(counter + 1)}>Counter+</button>
  </>
}

// 22.  useEffect \ setInterval

export const SetIntervalExample = () => {
  const [counter, setCounter] = useState(1) // [ 0, function(newValue){} ]

  console.log('SetIntervalExample')

  useEffect(() => {

    console.log('useEffect !')

    setInterval(() => {
      console.log("tick: " + counter)
      setCounter((state) => state + 1)
    }, 1000)

  }, [])

  return <>
    Counter: {counter}
  </>
}

// 22.  useEffect \ сделать часы

export const Clock = () => {
  const [date, setDate] = useState(new Date())

  const refreshClock = () => {
    setDate(new Date())
  }

  // console.log(date)

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000)

     return function cleanup() { //Memory leak
       clearInterval(timerId)
     }
  }, [])

  return <>
    <h3>
      {date.toLocaleTimeString()}
    </h3>
  </>
}


import React, {useEffect, useState} from "react";

export default {
  title: 'useEffect demo',
}

// 21. useEffect

export const SimpleExample = () => {
  const [fake, setFake] = useState(1)
  const [counter, setCounter] = useState(1) // [ 0, function(newValue){} ]

  console.log('SimpleExample')

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
    Hello, {counter} {fake}
    <button onClick={() => setFake(fake + 1)}>Fake+</button>
    <button onClick={() => setCounter(counter + 1)}>Counter+</button>
  </>
}


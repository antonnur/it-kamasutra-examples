import React, {useMemo, useState} from "react";

export default {
  title: 'useMemo demo',
}

export const DifficultCountingExample = () => {

  const [a, setA] = useState<number>(5)
  const [b, setB] = useState<number>(5)

  let resaltA = 1
  let resaltB = 1

  resaltA = useMemo(() => {
    let tempResultA = 1
    for (let i = 1; i <= a; i++) {
      let fake = 0
      while (fake < 100000000) {
        fake++
        const fakeValue = Math.random()
      }
      tempResultA = tempResultA * i
    }
    return tempResultA
  }, [a])


  for (let i = 1; i <= b; i++) {
    resaltB = resaltB * i
  }

  return <>
    <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/> //Number привидение к числу
    <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/> //+ привидение к числу
    <hr/>
    <div>
      Result for a: {resaltA}
    </div>
    <div>
      Result for b: {resaltB}
    </div>
  </>
}


export const HelpsForReactMemoExample2 = () => {


}

const UsersSecret = (props: { users: string[] }) => {
  console.log('USERS SECRET')
  return <div>
    {props.users.map((u, i) => <div key={i}>{u}</div>)}
  </div>
}
const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
  console.log('HelpsToReactMemo')
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(['Dim', 'Valera', 'Art'])

  const newArray = useMemo(() => {
    const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
    return newArray
  }, [users])

  const addUser = () => {
    const newUsers = [...users, 'Sveta' + new Date().getTime()]
    setUsers(newUsers)
  }

  return <>
    <button onClick={() => setCounter(counter + 1)}>+</button>
    <button onClick={() => addUser()}>add user</button>
    {counter}
    <Users users={newArray}/>
  </>
}

import React, {useState} from "react";

export default {
  title: 'React.memo demo',
}

const NewMessagesCounter = (props: any) => {
  return <div>{props.count}</div>
}
const UsersSecret = (props: { users: string[] }) => {
  return <div>
    {props.users.map((u, i) => <div key={i}>{u}</div>)}
  </div>
}
const Users = React.memo(UsersSecret)

export const Exampel1 = () => {
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(['Dim', 'Valera', 'Art'])

  const addUser = () => {
    const newUsers = [...users, 'Sveta' + new Date().getTime()]
    setUsers(newUsers)
  }

  return <>
    <button onClick={() => setCounter(counter + 1)}>+</button>
    <button onClick={addUser}>add user</button>
    <NewMessagesCounter count={counter}/>
    <Users users={users}/>
  </>
}


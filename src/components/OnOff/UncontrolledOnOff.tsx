import React, {useState} from "react";

type PropsType = {
  // on: boolean
  onChange: (on: boolean) => void
}

function UncontrolledOnOff(props: PropsType) {


  let [on, setOn] = useState(false)

  const OnOffStyle = {
    marginTop: '20px',
    display: 'flex',
    alignItems: 'center'
  }
  const onStyle = {
    marginLeft: '10px',
    width: '45px',
    height: '25px',
    border: '1px solid black',
    paddingLeft: "20px",
    backgroundColor: on ? 'greenyellow' : 'white'
  }
  const offStyle = {
    marginLeft: '5px',
    width: '45px',
    height: '25px',
    border: '1px solid black',
    paddingLeft: "20px",
    backgroundColor: on ? 'white' : 'crimson'
  }
  const indicatorStyle = {
    marginLeft: '15px',
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    border: '1px solid black',
    backgroundColor: on ? 'greenyellow' : 'crimson'
  }

  const onClicked = () => {
    setOn(true)
    props.onChange(true)
  }

  const offClicked = () => {
    setOn(false)
    props.onChange(false)
  }

  return (
    <div style={OnOffStyle}>
      <div style={onStyle} onClick={onClicked}>On</div>
      <div style={offStyle} onClick={offClicked}>Off</div>
      <div style={indicatorStyle}>

      </div>
    </div>
  )
}

export default UncontrolledOnOff
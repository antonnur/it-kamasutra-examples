import React from "react";
import s from './OnOff.module.css'

type PropsType = {}

function OnOff(props: PropsType) {

  const on = false

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


  return (
    <div style={OnOffStyle}>
      <div style={onStyle} onClick={() => {
      }}>On
      </div>
      <div style={offStyle} onClick={() => {
      }}>Off</div>
      <div style={indicatorStyle}></div>
    </div>
  )
}

export default OnOff
import React from "react";

type PropsType = {
  on: boolean
  onChange: (on: boolean) => void
}

export function OnOff(props: PropsType) {

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
    backgroundColor: props.on ? 'greenyellow' : 'white'
  }
  const offStyle = {
    marginLeft: '5px',
    width: '45px',
    height: '25px',
    border: '1px solid black',
    paddingLeft: "20px",
    backgroundColor: props.on ? 'white' : 'crimson'
  }
  const indicatorStyle = {
    marginLeft: '15px',
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    border: '1px solid black',
    backgroundColor: props.on ? 'greenyellow' : 'crimson'
  }

  return (
    <div style={OnOffStyle}>
      <div style={onStyle} onClick={() => { props.onChange(true) }}>
        On
      </div>
      <div style={offStyle} onClick={() => { props.onChange(false) }}>
        Off
      </div>
      <div style={indicatorStyle}>

      </div>
    </div>
  )
}
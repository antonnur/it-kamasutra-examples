import React from "react";


type PropsType = {
  on: boolean
  off: boolean
}

function onOff(props: PropsType) {
  return(
    <div>
      <span className={'on'}>On</span>
      <span className={'off'}>Off</span>
      <span className={'indicator'}>o</span>
    </div>
  )
}

export default onOff
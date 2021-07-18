import React, {useState} from "react";
import {TitlePropsType} from "../../App";

type AccordionPropsType = {
  title: string
  // collapsed?: boolean
}


// короткая запись
export function UncontrolledAccordion(props: AccordionPropsType) {

  let [collapsed, setCollapsed] = useState(false)

  return (
    <div>
      <AccordionTitle title={props.title}/>
      <button onClick={() => {
        setCollapsed(!collapsed)
      }}>Toggle
      </button>
      {!collapsed && <AccordionBody/>}
    </div>
  )
}

function AccordionTitle(props: TitlePropsType) {
  return (
    <h3>-- {props.title} --</h3>
  )
}

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}
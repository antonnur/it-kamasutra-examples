import React from "react";
import {TitlePropsType} from "../../App";

type AccordionPropsType = {
  title: string
  collapsed?: boolean
}

/*
// длинная запись
export function Accordion(props: AccordionPropsType) {
  if (props.collapsed) {
    return (
      <div>
        <AccordionTitle title={props.title}/>
      </div>
    )
  } else {
    return (
      <div>
        <AccordionTitle title={props.title}/>
        <AccordionBody/>
      </div>
    )
  }
}
*/

// короткая запись
export function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle title={props.title}/>
      {!props.collapsed && <AccordionBody/>}
    </div>
  )
}

function AccordionTitle(props: TitlePropsType) {
  return (
    <h3>{props.title}</h3>
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
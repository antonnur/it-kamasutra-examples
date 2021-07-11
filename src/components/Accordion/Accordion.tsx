import React from "react";
import {TitlePropsType} from "../../App";

type AccordionPropsType = {
  title: string
  collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
  if (props.collapsed) {
    return (
      <div>
        <AccordionTitle title={props.title}/>
      </div>
    )
  }
  return (
    <div>
      <AccordionTitle title={props.title}/>
      <AccordionBody/>
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
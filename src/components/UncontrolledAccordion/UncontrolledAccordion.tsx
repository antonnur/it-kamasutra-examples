import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
  title: string
}

type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}

export function UncontrolledAccordion(props: AccordionPropsType) {
  //reducer в целях теста (используем где >= 2 хук useState не примитивных!)
  //reducer вынесли в отдельный файл как чистую функцию
  let [state, dispatch] = useReducer(reducer, {collapsed: false})

  return (
    <div>
      <AccordionTitle title={props.title} onClick={() => {
        dispatch({type: TOGGLE_COLLAPSED})
      }}/>
      {!state.collapsed && <AccordionBody/>}
    </div>
  )
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h3 onClick={() => {
      props.onClick()
    }}>-- {props.title} --</h3>
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
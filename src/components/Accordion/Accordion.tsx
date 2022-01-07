import React from "react";

type ItemType = {
  title: string
  value: any
}

export type AccordionPropsType = {
  title: string
  collapsed?: boolean
  onChange: () => void
  /**
   * Element that are showed when is opened. Each item should be ItemType
   */
  items: ItemType[]
  /**
   * Callback that is called when any item clicked
   * @param value is value of clicked item
   */
  onClick: (value: any) => void
  /**
   * Optional color oh header text
   */
  color?: string
}

type AccordionTitlePropsType = {
  title: string
  onChange: () => void
  color?: string
}

type AccordionBodyPropsType = {
  items: ItemType[]
  onClick: (value: any) => void
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
function AccordionSecret(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle
        title={props.title}
        onChange={props.onChange}
        color={props.color}
      />
      {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
  )
}
export const Accordion = React.memo(AccordionSecret)

function AccordionTitleSecret(props: AccordionTitlePropsType) {
  return (
    <h3
      style={{color: props.color ? props.color : 'black'}}
      onClick={(e) => props.onChange()}>-- {props.title} --</h3>
  )
}
const AccordionTitle = React.memo(AccordionTitleSecret)

function AccordionBodySecret(props: AccordionBodyPropsType) {
  return (
    <ul>
      {props.items.map((i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
    </ul>
  )
}
const AccordionBody = React.memo(AccordionBodySecret)
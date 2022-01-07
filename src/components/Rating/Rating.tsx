import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type StartPropsType = {
  selected: boolean
  value: RatingValueType
  onClick: (value: RatingValueType) => void
}

type RatingPropsType = {
  value: RatingValueType
  onClick: (value: RatingValueType) => void
}

function RatingSecret(props: RatingPropsType) {
  return (
    <div>
      <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
      <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
      <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
      <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
      <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
    </div>
  )
}
export const Rating = React.memo(RatingSecret)

function StarSecret(props: StartPropsType) {
  // if (props.selected === true) //полная запись
  /*if (props.selected) {
    return <span><b>star</b> </span>
  } else {
    return <span>star </span>
  }*/
  return <span onClick={()=>{props.onClick(props.value)}}>
    {props.selected ? <b>star </b> : 'star '}
  </span>
}
const Star = React.memo(StarSecret)
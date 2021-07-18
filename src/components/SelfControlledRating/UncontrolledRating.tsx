import React, {useState} from "react";

type StarPropsType = {
  selected: boolean
}

type RatingPropsType = {
  // value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating(props: RatingPropsType) {

  let [value, setValue] = useState(2)

  return (
    <div>
      <Star selected={value > 0}/>
      <button onClick={() => {
        setValue(1)
      }}>1
      </button>
      <Star selected={value > 1}/>
      <button onClick={() => {
        setValue(2)
      }}>2
      </button>
      <Star selected={value > 2}/>
      <button onClick={() => {
        setValue(3)
      }}>3
      </button>
      <Star selected={value > 3}/>
      <button onClick={() => {
        setValue(4)
      }}>4
      </button>
      <Star selected={value > 4}/>
      <button onClick={() => [
        setValue(5)
      ]}>5</button>
    </div>
  )
}

function Star(props: StarPropsType) {
  // if (props.selected === true) //полная запись
  if (props.selected) {
    return <span><b>star</b> </span>
  } else {
    return <span>star </span>
  }
}
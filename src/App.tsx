import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

type TitlePropsType = {
  title: string

}

function AppSecret() {

  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  let [switchOn, setSwitchOn] = useState<boolean>(false)


  return (
    <div>
      <PageTitle title={'Hi i\'m App'}/>
      <div>** 8 lesson **</div>
      <Rating
        value={ratingValue}
        onClick={setRatingValue}/>
      <div>** 9 lesson **</div>
      <Accordion
        title={'Menu'}
        collapsed={accordionCollapsed}
        onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>
      <div>**UncontrolledOnOff**</div>
      <UncontrolledOnOff
        onChange={setSwitchOn}/>
      {switchOn.toString()}
      <div>** 6 lesson **</div>
      <OnOff
        on={switchOn}
        onChange={setSwitchOn}/>
      <div>** 7 lesson **</div>
      <UncontrolledAccordion title={'Menu # 2'}/>
      <UncontrolledAccordion title={'User # 2'}/>
      <UncontrolledRating/>
    </div>
  )
}
const App = React.memo(AppSecret)

function PageTitleSecret(props: TitlePropsType) {
  return <h2>{props.title}</h2>
}
const PageTitle = React.memo(PageTitleSecret)

export default App
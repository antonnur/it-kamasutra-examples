import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/SelfControlledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/SelfControlledRating/UncontrolledRating";

export type TitlePropsType = {
  title: string
}

function App() {
  return (
    <div>
      <PageTitle title={'Hi i\'m App'}/>
      <Rating value={3}/>
      <Accordion title={'Menu'} collapsed={true}/>
      <Accordion title={'User'} collapsed={false}/>
      <Rating value={4}/>
      ** 6 lesson **
      <OnOff/>
      ** 7 lesson **
      <UncontrolledAccordion title={'Menu - 2'}/>
      <UncontrolledAccordion title={'User - 2'}/>
      <UncontrolledRating/>
    </div>
  )
}

function PageTitle(props: TitlePropsType) {
  return <h2>{props.title}</h2>
}

export default App;
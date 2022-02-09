import React from 'react';
import {UncontrolledAccordion} from "./UncontrolledAccordion";
// import {action} from "@storybook/addon-actions";

export default {
  title: 'UncontrolledAccordion',
  component: UncontrolledAccordion,
}

// const callback = action('UncontrolledAccordion mode change event fired')


export const ModeChanging = () => {
  return <UncontrolledAccordion title={'Users'}/>
}

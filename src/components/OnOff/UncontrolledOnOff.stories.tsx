import React, {useState} from 'react';
import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {action} from "@storybook/addon-actions";

export default {
  title: 'UncontrolledOnOff',
  component: UncontrolledOnOff,
}

const callback = action('On or Off clicked')

export const OnMod = () => <UncontrolledOnOff defaultOn={true} onChange={callback}/>
export const OffMod = () => <UncontrolledOnOff defaultOn={false} onChange={callback}/>
export const BugMod = () => <div>Unsync when change defaultValue when already rendered</div>

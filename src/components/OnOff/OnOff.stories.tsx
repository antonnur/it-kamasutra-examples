import React, {useState} from 'react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
  title: 'OnOff',
  component: OnOff,
}

const callback = action('On or Off clicked')

export const OnMod = () => <OnOff on={true} onChange={callback}/>
export const OffMod = () => <OnOff on={false} onChange={callback}/>

export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true)
  return <OnOff on={value} onChange={setValue}/>
}

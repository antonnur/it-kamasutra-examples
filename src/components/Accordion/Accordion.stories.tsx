import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";

const GetCategoryObj = (categoryName: 'Color' | 'Event' | 'Main') => ({
  table: {
    category: categoryName
  }
})

export default {
  title: 'components/Accordion',
  component: Accordion,
  argTypes: {
    color: {
      control: 'color',
      ...GetCategoryObj('Color')
    },
    onChange: {...GetCategoryObj('Event')},
    onClick: {...GetCategoryObj('Event')},
    items: {...GetCategoryObj('Main')},
    collapsed: {...GetCategoryObj('Main')},
    title: {...GetCategoryObj('Main')},
  }
}

const callback = action('Accordion mode change event fired')
const onClickCallback = action('Some item was clicked')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>
const callbacksProps = {
  onChange: callback,
  onClick: onClickCallback
}

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
  ...callbacksProps,
  title: 'Menu',
  collapsed: true,
  items: [],
}


export const UsersUncollapsedMode = Template.bind({})
UsersUncollapsedMode.args = {
  ...callbacksProps,
  title: 'Users',
  collapsed: false,
  items: [
    {title: 'Dmitri', value: 1},
    {title: 'Lena', value: 2},
    {title: 'Valera', value: 3},
    {title: 'Victor', value: 4}],
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
  const [value, setValue] = useState<boolean>(true)
  return <Accordion {...args} collapsed={true} onChange={() => setValue(!value)}/>
}
ModeChanging.args = {
  title: 'Users',
  items: [
    {title: 'Dmitri', value: 1},
    {title: 'Alena', value: 2},
    {title: 'Tanya', value: 3},
    {title: 'Victor', value: 4},
  ],
  onClick: (value) => {
    alert(`user with ID ${value} should be happy`)
  }
}

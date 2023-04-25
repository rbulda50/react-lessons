import React from "react";
import Counter from './Counter';
import Dropdown from "./DropdownMenu";
import ColorPicker from "./Colorpicker";
import TodoList from "./TodoList";

const ColorPickerOptions = [
  { label: 'red', color: '#F44336'},
  { label: 'green', color: '#4CAF50'},
  { label: 'blue', color: '#2196F3'},
  { label: 'grey', color: '#607D8B'},
  { label: 'pink', color: '#E91E63'},
  { label: 'indigo', color: '#3F5185'},
]

export const App = () => {
  return (
    <div>
      <Counter initialValue={10} />

      <Dropdown />

      <ColorPicker options={ColorPickerOptions} />

      <TodoList />
    </div>
  );
};

import React, { Component } from "react";
import Counter from './Counter';
import Dropdown from "./DropdownMenu";
import ColorPicker from "./Colorpicker";
import TodoList from "./TodoList";
import TodoCounter from "./TodoList/TodoCounter";

const ColorPickerOptions = [
  { label: 'red', color: '#F44336'},
  { label: 'green', color: '#4CAF50'},
  { label: 'blue', color: '#2196F3'},
  { label: 'grey', color: '#607D8B'},
  { label: 'pink', color: '#E91E63'},
  { label: 'indigo', color: '#3F5185'},
]

export class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Купить машину', completed: false },
      { id: 'id-2', text: 'Випить пива', completed: true },
      { id: 'id-3', text: 'Пожрить шашлик', completed: true },
      { id: 'id-4', text: 'Купить будинок', completed: false },
      { id: 'id-5', text: 'Заробить 1000000$', completed: false },
    ],
  };

  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId)
    }))
  };

  render() {
    const { todos } = this.state;

    return(<div>
      <Counter initialValue={10} />

      <Dropdown />

      <ColorPicker options={ColorPickerOptions} />

      <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
    </div>)
  }
}







import React, { Component } from "react";
import shortid from "shortid";
import Counter from './Counter';
import Dropdown from "./DropdownMenu";
import ColorPicker from "./Colorpicker";
import TodoList from "./TodoList";
import Form from './Form';
import TodoEditor from 'components/TodoList/TodoEditor';
import Filter from 'components/TodoList/Filter'


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
    filter: '',
  };

  addTodo = (text) => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    }

    this.setState(prevState => ({
      todos: [todo, ...prevState.todos]
    }))
  };

  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId)
    }))
  };

  formSubmitHandler = (data) => {
    console.log(data);
  };

  toggleCompleted = (todoId) => {
    // console.log(todoId);

    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todoId === todo.id ? { ...todo, completed: !todo.completed } : todo)
    }))
  };

  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
  };

  getVisibleTodos = () => {
    const normalizedTodos = this.state.filter.toLowerCase();
    return this.state.todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedTodos))
  };

  render() {
    const visibleTodos = this.getVisibleTodos();

    return (
      <div>
      <Counter initialValue={10} />

      <Dropdown />

      <ColorPicker options={ColorPickerOptions} />

      <TodoEditor onSubmit={this.addTodo} />
        <Filter
          value={this.state.filter}
          onChange={this.changeFilter} />
      <TodoList
        todos={visibleTodos}
        onDeleteTodo={this.deleteTodo}
        onToggleCompleted={this.toggleCompleted} />
    
      <Form submit={this.formSubmitHandler} />
    </div>)
  }
};







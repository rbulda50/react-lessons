import React, { Component } from "react";
import shortid from "shortid";
import Counter from './Counter';
import Dropdown from "./DropdownMenu";
import ColorPicker from "./Colorpicker";
import TodoList from "./TodoList";
import Form from './Form';
import TodoEditor from 'components/TodoList/TodoEditor';
import Filter from 'components/TodoList/Filter';
import Modal from './Modal';
import Clock from './Clock';
import Tabs from './Tabs';
import tabs from "../tabs.json";
import IconButton from './IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';
import { ReactComponent as DeleteIcon } from '../icons/delete.svg';

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
    todos: [ ],
    filter: '',
    showModal: false,
  };

  componentDidMount() {

    const parsedTodos = JSON.parse(localStorage.getItem('todos'));

    if (parsedTodos) {
      this.setState({todos: parsedTodos})
    };
  };

  componentDidUpdate(prevProps, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;
    const { todos } = this.state;

    if (todos !== prevTodos) {
        localStorage.setItem('todos', JSON.stringify(todos))
    };

    if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
      this.toggleModal();
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
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

      {/* <Tabs items={tabs} /> */}

        {/* <Clock /> */}
{/* 
        <IconButton onClick={this.toggleModal}>
          <AddIcon width="40" height="40"/>
        </IconButton>

        {this.state.showModal &&
          <Modal onClose={this.toggleModal} >
          <TodoEditor onSubmit={this.addTodo} />

            <IconButton onClick={this.toggleModal}>
              <DeleteIcon width="40" height="40"/>
            </IconButton>
          </Modal>} */}

      {/* <Counter initialValue={10} /> */}

      {/* <Dropdown /> */}

      {/* <ColorPicker options={ColorPickerOptions} /> */}

      {/* <Filter
          value={this.state.filter}
              onChange={this.changeFilter} />
      <TodoList
        todos={visibleTodos}
        onDeleteTodo={this.deleteTodo}
        onToggleCompleted={this.toggleCompleted} /> */}
    
        <Form submit={this.formSubmitHandler} />
    </div>)
  }
};







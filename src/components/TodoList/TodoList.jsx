import './TodoList.css';
import TodoCounter from './TodoCounter'
import Todo from './Todo';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
    <ul className="TodoList">
        <TodoCounter todos={todos} />
        {todos.map(({ id, text, completed }) => (
            <li
                key={id}
                className={
                    completed ? 'TodoList__item TodoList__item--completed' : 'TodoList__item'}>
                
                <Todo
                    text={text}
                    completed={completed}
                    onToggle={() => onToggleCompleted(id)}
                    onDelete={() => onDeleteTodo(id)} />
            </li>
        ))}
    </ul>
)

export default TodoList;
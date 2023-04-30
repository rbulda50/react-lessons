import './TodoList.css';
import TodoCounter from './TodoCounter'

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
    <ul className="TodoList">
        <TodoCounter todos={todos} />
        {todos.map(({ id, text, completed }) => (
            <li
                key={id}
                className={
                    completed ? 'TodoList__item TodoList__item--completed' : 'TodoList__item'}>
                
                <input
                    type="checkbox"
                    className="TodoList__checkbox"
                    checked={completed}
                    onChange={() => onToggleCompleted(id)} />
                
                <p>{text}</p>

                <button
                    className="TodoList__button"
                    onClick={() => onDeleteTodo(id)}
                >Delete</button>
            </li>
        ))}
    </ul>
)

export default TodoList;
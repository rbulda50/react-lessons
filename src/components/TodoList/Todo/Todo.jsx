import React from "react";
import IconButton from "components/IconButton";
import { ReactComponent as DeleteIcon } from '../../../icons/delete.svg';

const Todo = ({ text, completed, onDelete, onToggle }) => (
    <div>
        <input
            type="checkbox"
            className="TodoList__checkbox"
            checked={completed}
            onChange={onToggle} />
                
        <p>{text}</p>

        <IconButton
            className="TodoList__button"
            onClick={onDelete}
            aria-label="Delete todo"
        >
            <DeleteIcon width="20" height="20"/>
        </IconButton>
    </div>
);

export default Todo;


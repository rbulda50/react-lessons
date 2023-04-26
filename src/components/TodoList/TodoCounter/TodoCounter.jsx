import React from "react";

const TodoCounter = ({ todos }) => {
    
    const completedTodosCount = todos.reduce((total, todo) => (todo.completed ? total +1 : total), 0)
    
    return (
        <div>
            <p>Загальна кількість todos: {todos.length}</p>
            <p>Кількість виконаних todos: {completedTodosCount}</p>
        </div>
    )  
};

export default TodoCounter;
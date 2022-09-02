import React from 'react';
import { Todo } from './model';
import TodoItem from './TodoItem';
import './TodoList.style.css';

interface Props{
    todos: Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos}: Props) => {
  return (
    <div className="todos">
        {todos.map(todo => (
            <TodoItem 
              todo={todo} 
              key={todo.id}
              todos={todos}
              setTodos={setTodos}
            />
        ))}
    </div>
  );
};

export default TodoList;
import React from 'react';
import { Todo } from './model';
import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
import {MdDone} from 'react-icons/md';
import './TodoItem.style.css';

type Props = {
    todo: Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}



function TodoItem({todo, todos, setTodos}: Props) {

  const handleDone = (id: number) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, isDone: !todo.isDone} : todo ));
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };


  return (
    <form className='form-todo'>
      <div className="todo">
        <span className={todo.isDone ? 'done' : ''}>{todo.todo}</span>
        
      <div>
        <span className='icon'><AiFillEdit /></span>
        <span className='icon' onClick={() => handleDelete(todo.id)}><AiFillDelete /></span>
        <span className='icon' onClick={() => handleDone(todo.id)}><MdDone /></span>
      </div>
      </div>
    </form>
  );
}

export default TodoItem;
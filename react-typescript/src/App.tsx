import React, { useState } from 'react';
import './App.css';
import { Todo } from './components/model';
import TaskForm from './components/TaskForm';
import TodoList from './components/TodoList';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);


  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    
    if(todo){

      setTodos((prevState) => [...prevState, {id: Date.now(), todo, isDone: false}]);
      setTodo('');
    }

    console.log(todos);

  };

  return (
    <div className='App'>
      <h1 className='heading'>Task</h1> 
      <TaskForm todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default App;

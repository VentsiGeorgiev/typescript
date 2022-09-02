import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('');

  console.log(todo);

  return (
    <div className='App'>
      <h1 className='heading'>Task</h1> 
      <TaskForm todo={todo} setTodo={setTodo}/>
    </div>
  );
};

export default App;

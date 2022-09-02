import React from 'react';
import './TaskForm.style.css';

interface Props{
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>
}

const TaskForm: React.FC<Props> = ({todo, setTodo}: Props) => {
  return (
    <form className='form'>
      <input
       className='form__input' 
       type="text" 
       placeholder='Enter task'
       value={todo}
       onChange={(e) => setTodo(e.target.value)}  
       />
      <button className='form__btn'>Add</button>
    </form>
  );
};

export default TaskForm;

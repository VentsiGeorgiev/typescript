import React, { useRef } from 'react';
import './TaskForm.style.css';

interface Props{
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const TaskForm: React.FC<Props> = ({todo, setTodo, handleAdd}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);


  return (
    <form className='form' onSubmit={(e) =>{
      handleAdd(e);
      inputRef.current?.blur();
    }}>
      <input
      ref={inputRef}
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

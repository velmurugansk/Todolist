import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Listtodo from './Listtodo';

function Addtodo() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const validation = () => {
    if (!title) {
      setError('Title is Required!')
    } else {
      addTodo()
    }
  }


  const addTodo = async () => {
    const response = await axios.post('http://localhost:4000/Addtodo', { title, content });
    if (response.data.status) {
      setTitle('');
      setContent('');
      toast.success(response.data.message, { autoClose: 7000 });
    } else {
      toast.error(response.data.message, { autoClose: 7000 });
    }
  }

  return (
    <div className='grid grid-cols-3 gap-4'>
      <div>
        <div className='p-2'>
          <div className='mt-2 mb-3'>
            <input type='text' onChange={(e) => setTitle(e.target.value)} className='w-full px-3 py-2 border focus:outline-none
             border-slate-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md text-sm shadow-sm placeholder-slate-400' placeholder='Title' />
            {error ? <span className='text-red-500 text-left w-full'>{error}</span> : ''}
          </div>
          <div className="mt-2 mb-3">
            <textarea placeholder='message' onChange={(e) => setContent(e.target.value)} className='w-full px-3 py-2 focus:outline-none
             focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400'></textarea>
          </div>
          <button class="bg-sky-500 hover:bg-sky-700 mt-2 px-3 py-2 rounded-lg text-white" id="subBtn" onClick={validation}> Add ToDo</button>
          <ToastContainer autoClose={8000} />
        </div>
      </div>
      <div className='col-span-2'>
        <Listtodo handleClick={"list"} />
      </div>
    </div>

  )
}

export default Addtodo
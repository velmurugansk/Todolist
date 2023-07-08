import React from 'react'

function Addtodo() {
  return (
    <div className='p-2'>
        <div className='mt-2 mb-3'>
            <input type='text' className='w-full px-3 py-2 border focus:outline-none
             border-slate-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md text-sm shadow-sm placeholder-slate-400' placeholder='Title' />
        </div>
        <div className="mt-2 mb-3">
            <textarea placeholder='message' className='w-full px-3 py-2 focus:outline-none
             focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400'></textarea>
        </div>
        <button class="bg-sky-500 hover:bg-sky-700 mt-2 px-3 py-2 rounded-lg text-white"> Add ToDo</button>
    </div>
  )
}

export default Addtodo
import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import {FiEdit2} from "react-icons/fi";
import {AiOutlineDelete} from "react-icons/ai";
import { toast } from 'react-toastify';

function Listtodo({handleClick}) {
    console.log(handleClick)
    const [listdata, setListdata] = useState([]);
    const todolistdata = async () => {
        const response = await axios.get('http://localhost:4000/');
        if (response.status) {
            setListdata(response.data.data);
        }
    }
    const sucessnotify = (msg) => {
        toast.success(msg,{ autoClose: 7000 });
    }
    function editTodo(id) {
        console.log(id);   
    }

    const delteTodo = async (id) => {
        const response =await  axios.post('http://localhost:4000/deletetodo', {"_id":id});                
        if(response.data.status) {
            sucessnotify(response.data.message);
            todolistdata()
        } else {
            toast.error(response.data.message,{ autoClose: 7000 });
        }
    }

    if(handleClick){
        todolistdata()
    }

    useEffect(() => {        
        todolistdata()
    },[])
    
    return (
        <div className='grid grid-cols-3 gap-4 p-4'>
            {listdata && listdata.map((elem) => {
               return(<div key={elem.title} className='p-2 border rounded-md'>
                    <div className="flex justify-between items-center mb-2">
                        <h5 className='font-bold'>{elem.title}</h5>
                        <div className='flex'>
                            <FiEdit2 className='mr-2 text-md cursor-pointer' onClick={() => editTodo(elem._id)} />
                            <AiOutlineDelete className='text-md cursor-pointer' onClick={() => delteTodo(elem._id)} />
                        </div>                        
                    </div>                    
                    <p className='mt-2 text-left'>{elem.content}</p>
                </div>)
            })}
        </div>
    )
}

export default Listtodo
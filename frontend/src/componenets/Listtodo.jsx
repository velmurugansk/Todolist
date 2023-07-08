import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';

function Listtodo() {
    const [listdata, setListdata] = useState([]);
    const todolistdata = async () => {
        const response = await axios.get('http://localhost:4000/');
        if (response.status) {
            setListdata(response.data.data);
        }
    }

    useEffect(() => {
        todolistdata()
    },[])
    console.log(listdata)
    return (
        <div className='grid grid-cols-3 gap-4 p-4'>
            {listdata && listdata.map((elem) => {
               return(<div className='p-2 border rounded-md'>
                    <h5 className='font-bold'>{elem.title}</h5>
                    <p className='mt-2 text-left'>{elem.content}</p>
                </div>)
            })}
        </div>
    )
}

export default Listtodo
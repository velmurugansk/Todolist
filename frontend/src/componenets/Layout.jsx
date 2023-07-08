import React from 'react'
import Addtodo from './Addtodo';
import Listtodo from './Listtodo';

function Layout() {
  return (
    <div className='grid grid-cols-3 gap-4'>
        <div>
            <Addtodo />
        </div>
        <div className='col-span-2'>
            <Listtodo />
        </div>
    </div>
  )
}

export default Layout
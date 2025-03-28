import React from 'react'
import {ArrowPathRoundedSquareIcon} from '@heroicons/react/24/outline'
const Usercard = ({key,user,onEdit,onDelter,ontoggle}) => {
    
  return (
    <div className='border border-red-200 rounded-lg p-5 shdow-md mb-4 transition-all hover:bg-gray-100'>
        <h3 className='text-cl font-bold text-gray-800'>{user.name}</h3>
        <p className='text-gray-600'>{user.email}</p>
        <p className='text-gray-600'>{user.role}</p>
        <div className='flex items-center justify-center gap-2 my-2'>
  <ArrowPathRoundedSquareIcon className='w-5 h-5 text-gray-500' />
  <span className={`font-medium ${user.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
    {user.status}
  </span>
</div>

       <div className='flex justify-center my-3 gap-3'>
       <button className='px-3 py-1 rounded bg-gray-500 text-white hover:bg-gray-600'  onClick={() => ontoggle(user.id)}>Status</button>
       <button className='px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600' onClick={() => onEdit(user.id, user.name)}>Edit</button>
       <button className='px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600' onClick={() => onDelter(user.id , user.name) }>Delete</button>
       </div>
    </div>
  )
}

export default Usercard
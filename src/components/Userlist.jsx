import React, { useRef } from 'react'
import { useEffect, useState } from 'react';
import { fetchData } from '../services/api';
import Usercard from './Usercard';
import { toast } from 'react-toastify';

import { OrbitProgress } from 'react-loading-indicators';


const Userlist = () => {
    const [users,setusers]= useState([])
    const [loading , setloading] = useState(true)

    const sort = users.sort()

    console.log("Sort",sort)
  
    //fettching data from the api
    useEffect(() => {
        fetchData()
          .then((res) => {
            const usersWithStatus = res.map(user => ({
              ...user,
              role : "Developer",
              status: "Active"
            }))
            setusers(usersWithStatus)
            setloading(false)
          })
          .catch((error) => {
            toast.error(error.message)
            setloading(false)
          })
      }, [])
      
  // change the edit fro the specific user
    const edituser = (id , name) => {
        const username = prompt(`Edit User Name:`)
        if (username){
            setusers(prevUsers =>
                prevUsers.map(user =>
                  user.id === id
                    ? { ...user, name: user.name === name ? username : user.name }
                    : user
                )
              )
        }
    }

    // change the delete fro the specific user
    const deleteduser = (id, name) => {
       const confirmdata = window.confirm( `Are you sure want to delete ${name}` )
       if (confirmdata){
        setusers(users.filter(user => user.id !== id))
       }
    }

    // change the status fro the specific user
    const togglestatus = (id) => {
        setusers(prevUsers =>
          prevUsers.map(user =>
            user.id === id
              ? { ...user, status: user.status === "Active" ? "Inactive" : "Active" }
              : user
          )
        )
      }
      
  return (

        <div>
          <h1 className='text-2xl font-bold text-center'>Employee User List</h1>
      
          {loading ? (
            <div className='flex justify-center items-center h-[50vh]'>
<OrbitProgress color="#32cd32" size="medium" text="" textColor="" />
            </div>
          ) : (
            // sorted by the name
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mx-10 my-5'>
              {[...users]
  .sort((a, b) => a.name.localeCompare(b.name)).map(user => (
                <Usercard
                  key={user.id}
                  user={user}
                  status={user.status}
                  onEdit={edituser}
                  onDelter={deleteduser}
                  ontoggle={togglestatus}
                />
              ))}
            </div>
          )}
        </div>
    
  )
}

export default Userlist
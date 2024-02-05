import React, { useState } from 'react'
import { useGetUsersQuery } from '../features/users/apiSlice'
import UsersModal from './UsersModal';

export default function Users() {
    const [modal,setModal] = useState(false);
    const {data:users} = useGetUsersQuery();
    const toggle =()=>{
        setModal(false)
    }
  return (
    <div className='container'>
        <UsersModal open={modal} toggle={toggle}/>
        <button className='btn btn-success' onClick={()=>setModal(true)}>open</button>
        <div className="row">
            <div className="col-md-8">
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((item,index) =>{
                                return <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.address}</td>
                                    <td>{item.phone}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

import React, { useState } from 'react'
import { useGetUsersQuery,useDeleteUserMutation } from '../features/users/apiSlice'
import UsersModal from './UsersModal';

export default function Users() {
    const [modal,setModal] = useState(false);
    const [edit,setEdit] = useState('')
    const {data:users} = useGetUsersQuery();
    const [deletUser] = useDeleteUserMutation();
    const toggle =()=>{
        setModal(false)
        setEdit('')
    }
    const openeditModal =(item) =>{
        setEdit(item)
        setModal(true)
    }
  return (
    <div className='container'>
        <UsersModal open={modal} toggle={toggle} edit={edit}/>
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
                            <th>Action</th>
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
                                    <td>
                                        <button className='btn btn-danger' onClick={()=>deletUser(item.id)}>Delte</button>
                                        <button className='btn btn-info' onClick={()=>openeditModal(item)}>edit</button>
                                    </td>
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

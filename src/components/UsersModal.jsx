import React from 'react'
import { Modal,ModalBody } from 'reactstrap'
import { useAddUserMutation } from '../features/users/apiSlice';

export default function UsersModal({open,toggle}) {
    const [addUser] = useAddUserMutation()
    const  handleSubmit =(e)=>{
        e.preventDefault();
        let payload ={
            name:e.target[0].value,
            age:e.target[1].value,
            address:e.target[2].value,
            phone:e.target[3].value,
        }
        addUser({...payload})
        toggle()
    }
  return (
    <Modal isOpen={open} toggle={toggle}>
        <ModalBody>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Name...' className='form-control my-2' />
                <input type="number" placeholder='Age...' className='form-control my-2' />
                <input type="text" placeholder='Name...' className='form-control my-2' />
                <input type="number" placeholder='Phone...' className='form-control my-2' />
                 <button className='btn btn-success'>add</button>
            </form>
        </ModalBody>
    </Modal>
  )
}

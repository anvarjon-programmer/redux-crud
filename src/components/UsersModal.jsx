import React, { useEffect, useState } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { useAddUserMutation, useUpdateUserMutation } from '../features/users/apiSlice';

export default function UsersModal({ open, toggle, edit, bookData }) {
  const [category, setCategory] = useState(null);
  const [selectCate, setSelectCate] = useState(null);
  const [author, setAuthor] = useState(null);
  const [selectAutho, setSelectAutho] = useState(null);
  const [addUser] = useAddUserMutation();
  const [updateUser] = useUpdateUserMutation();

  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const response = await fetch('http://34.143.212.163:3000/api/category/get-all');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategory(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    const fetchAllAuthors = async () => {
      try {
        const response = await fetch('http://34.143.212.163:3000/api/author');
        if (!response.ok) {
          throw new Error('Failed to fetch authors');
        }
        const data = await response.json();
        setAuthor(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchAllCategories();
    fetchAllAuthors();
  }, []);

  useEffect(() => {
    if (edit && bookData) {
    }
  }, [edit, bookData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log( e.target[5].files[0].name)
    try {
      const token = JSON.parse(localStorage.getItem('token')).access_token;
      const formData = new FormData();
      formData.append("name", "The Great Gatsby");
      formData.append("author_id", 56);
      formData.append("price", 435);
      formData.append("code", "2");
      formData.append("janr_id", 45);
      formData.append('file',  e.target[5].files[0].name);
      formData.append("description", "Lorem ipsum dolor sit amet.");

      const response = await fetch('http://34.143.212.163:3000/api/book/create', {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to upload file');
      }

      const data = await response.json();
      const imgUrl = data?.link;

      const payload = {
        name: e.target[0].value,
        author_id: Number(e.target[1].value),
        price: Number(e.target[2].value),
        code: e.target[3].value,
        janr_id: Number(e.target[4].value),
        image: imgUrl,
        description: e.target[6].value,
      };

      if (edit) {
        const updateBookResponse = await fetch(`http://34.143.212.163:3000/api/book/${bookData.id}`, {
          method: 'PUT',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (!updateBookResponse.ok) {
          throw new Error('Failed to update book');
        }

        const updatedBookData = await updateBookResponse.json();
        // console.log(updatedBookData);
      } else {
        const createBookResponse = await fetch('http://34.143.212.163:3000/api/book/create', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (!createBookResponse.ok) {
          throw new Error('Failed to create book');
        }

        const bookData = await createBookResponse.json();
        // console.log(bookData);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Modal isOpen={open} toggle={toggle}>
      <ModalBody>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name..." className="form-control my-2" />
          <select className="form-select" aria-label="Default select example" onChange={(e) => setSelectAutho({ author_id: e.target.value })}>
             {author && author.map((authorItem) => (
            <option key={authorItem?.id} value={authorItem?.id}>
            {authorItem?.full_name}
                </option>
                ))}
                </select>
          <input type="number" placeholder="Price..." className="form-control my-2" />
          <input type="string" placeholder="Code..." className="form-control my-2" />   
          <select className="form-select" aria-label="Default select example" onChange={(e) => setSelectCate({ janr_id: e.target.value })}>
                {category && category.map((categoryItem) => (
                <option key={categoryItem?.id} value={categoryItem?.id}>
                {categoryItem?.name}
                </option>
                ))}
            </select>
          <input type="file" accept='image/png, image/jpeg, image/jpg' className="form-control my-2" />
          <input type="string" placeholder="Description..." className="form-control my-2" />
          <button type="submit" className="btn btn-success">
            {edit ? 'Update' : 'Add'}
          </button>
        </form>
      </ModalBody>
    </Modal>
  );
}

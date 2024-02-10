import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Booksid() {
    const { id } = useParams()
    const [book,setBook] = useState()
    useEffect(() => {
        const fetchIdBooks = async () => {
            try {
              const response = await fetch(`http://34.143.212.163:3000/api/book/${id}`);
              if (!response.ok) {
                throw new Error('Failed to fetch books');
              }
              const data = await response.json();
              setBook(data)
            } catch (error) {
              console.error(error.message); 
            }
          };
          fetchIdBooks()
    }, [])
    console.log(book);

  return (
    <div className="singleCard container flex items-center justify-center ">
      <div className="single    bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-600  ">
    <img className='img h-10 w-full rounded-t-lg object-cover md:h-auto md:!rounded-none md:!rounded-l-lg' src={book?.image} alt="img book" />
     <div className="flex body flex-col justify-start p-6 W-full">
      <h4 className='mb-2  font-medium text-neutral-800 dark:text-neutral-50'> <i>name:</i> {book?.name}</h4>
      <h4 class="mb-2  font-medium text-neutral-800 dark:text-neutral-50"><i>price:</i> {book?.price}</h4>
      <h4 class="mb-2  font-medium text-neutral-800 dark:text-neutral-50"><i>janr: </i>{book?.janr?.name}</h4>
      <h4 class="mb-2  font-medium text-neutral-800 dark:text-neutral-50"><i>author:</i>{book?.author?.full_name}</h4>
      <h4 class="mb-2  font-medium text-neutral-800 dark:text-neutral-50"><i>Code</i>: {book?.code}</h4>
      <h4 class="mb-2  font-medium text-neutral-800 dark:text-neutral-50"><i>Full Name</i>: {book?.author?.full_name}</h4>
      <h4 class="mb-2  font-medium text-neutral-800 dark:text-neutral-50">{book?.janr?.name}</h4>
      <h5 className='mb-4 text-base text-neutral-600 dark:text-neutral-200'><i>description:</i> {book?.description}</h5>
     </div>
    </div>
    </div>
  )
}

"use client"
import React, { useState } from 'react'

function Contacts() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    // Function to handle the submission of the form
    const handleSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
  
      // Submit the form data to your server or service here
  
      // Clear the form fields
      setName('');
      setEmail('');
      setMessage('');
    };
  
    return (
      <form onSubmit={handleSubmit} className="mx-auto w-full md:w-1/2 mt-8">
        <label className='block font-bold mb-2'>
          Name:
          <input
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
  
        <label className='block font-bold mb-2'>
          Email:
          <input
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
  
        <label className='block font-bold mb-2'>
          Message:
          <textarea
          className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </label>
  
        <button className=' p-4 bg-orange-300 pt-4 px-6 hover:bg-orange-100 rounded-2xl text-white' type="submit">Send</button>
      </form>
    );
}

export default Contacts
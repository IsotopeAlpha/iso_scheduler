import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    let navigate = useNavigate();

    const handleSubmit = (event) => {
      navigate('/dashboard');
    };
  
    return (
      <div className='bg-[#0096ff55] w-[100vw] h-[100vh] p-[20px] flex flex-col text-white text-center font-bold items-center gap-[30px] my-auto justify-center'>
        <form onSubmit={handleSubmit} className='p-[20px] rounded-md bg-[#000000aa] sm:w-fit sm:h-fit h-[70vh] w-[80vw] gap-[20px] sm:gap-[10px] items-center flex flex-col text-[#0096ff]'>
        <h1 className='text-[24px] uppercase mb-[20px]'>Login</h1>
          <label  className='flex sm:flex-row flex-col gap-[10px] text-center items-center h-[40px]'>
            Username:
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className='h-[40px] p-[10px] rounded-md bg-white text-black items-center'
            />
          </label>
          <br />
          <label  className='flex sm:flex-row flex-col gap-[10px] text-center items-center h-[40px]'>
            Password:
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className='h-[40px] p-[10px] rounded-md bg-white text-black items-center'
            />
          </label>
          <br />
          <button type="submit" className='bg-[#0096ff] text-white hover:bg-[#44ff44] py-[10px] px-[40px] rounded-md'>Login</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
    );
}

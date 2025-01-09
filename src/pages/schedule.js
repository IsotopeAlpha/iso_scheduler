import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function Schedule() {
    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');
    const [participants, setParticipants] = useState('')
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [error, setError] = useState(null);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (title === 'admin' && description === 'description') {
        // Login successful, redirect to dashboard
        window.location.href = '/dashboard';
      } else {
        setError('Invalid title or description');
      }
    };

    const handleDate = (date) => {
      const nD = date.$d.toString().split(' ');
      const newDate = `${nD[1]} ${nD[2]} ${nD[3]}`;
      setDate(newDate)
    };
  
    return (
      <div className='bg-[#0096ff] w-[100vw] h-[100vh] p-[20px] flex flex-col text-white text-center font-bold items-center gap-[30px] my-auto justify-center'>
        <form onSubmit={handleSubmit} className='p-[20px] rounded-md bg-[#ffffffaa] w-fit items-center flex flex-col text-[#0096ff]'>
        <h1 className='text-[24px] uppercase mb-[20px]'>Add Schedule</h1>
          <label  className='flex sm:flex-row flex-col gap-[10px] items-center h-[40px]'>
            Title:
            <input
              type="text"
              value={title}
              onChange={(event) => settitle(event.target.value)}
              className='h-[56px] sm:w-[60vw] p-[10px] rounded-md bg-white text-black items-center'
            />
          </label>
          <br />
          <label  className='flex sm:flex-row flex-col gap-[10px] text-center items-center h-[40px]'>
            Description:
            <input
              type="text"
              value={description}
              onChange={(event) => setdescription(event.target.value)}
              className='h-[56px] sm:w-[56vw] p-[10px] rounded-md bg-white text-black items-center'
            />
          </label>
          <br/>
          <label  className='flex sm:flex-row flex-col gap-[10px] text-center items-center h-[40px]'>
            Participants:
            <input
              type="text"
              value={participants}
              onChange={(event) => setParticipants(event.target.value)}
              className='h-[56px] sm:w-[56vw] p-[10px] rounded-md bg-white text-black items-center'
            />
          </label>
          <br />
          <label  className='flex sm:flex-row flex-col gap-[10px] text-center items-center h-[40px]'>
            Date:
            <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DatePicker
                      format="DD - MM - YYYY"
                      onChange={(val) => handleDate(val, 'dem')}
                      className="bg-white sm:w-[60vw]"
                    />
                        </LocalizationProvider>
          </label>
          <br />
          <label  className='flex sm:flex-row flex-col gap-[10px] text-center items-center h-[40px]'>
            Time:
            <LocalizationProvider dateAdapter={AdapterDayjs} >
            <TimePicker
                      onChange={(val) => setTime(val)}
                      className="bg-white sm:w-[60vw]"
                    />
                        </LocalizationProvider>
          </label>
          <br />
          <button type="submit" className='bg-[#0096ff] text-white hover:bg-[#44ff44] py-[10px] px-[40px] rounded-md'>Done</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
    );
}

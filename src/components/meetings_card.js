import React, { useState } from "react";
import { Popover, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Swal from "sweetalert2";

export default function MeetingsCard(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [participants, setParticipants] = useState('')
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [error, setError] = useState(null);
  
  const handleReSchedule = (event) => {
    setAnchorEl(event.currentTarget);
    setDescription(props.description);
    setTime(props.time);
    setDate(props.date);
    setTitle(props.title);
    setParticipants(props.participants);
  };

  const handleDelete = () =>{
    Swal.fire("Cancelled",`${props.title} cancelled successfully`,'success');
    console.log(`${props.title} cancelled successfully `);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

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
    <div className="flex flex-col gap-[10px] bg-[#ffffff44] border-[#fff] border-[2px] rounded-md shadow-md text-black p-[20px]">
      <div className="flex sm:flex-row flex-col">
        <div className="flex flex-col gap-[10px] ">
          <div className="flex gap-[5px]">
            <div className="font-bold">Title:</div>
            <div>{props.title}</div>
          </div>
          <div className="flex gap-[5px]">
            <div className="font-bold">Description:</div>
            <div>{props.description}</div>
          </div>
          <div className="flex gap-[5px]">
            <div className="font-bold">Participants:</div>
            <div className="flex gap-[10px] font-bold">
              {props.participants.map((p) => (
                <p>| {p} </p>
              ))}
            </div>
          </div>
          <div className="flex gap-[5px]">
            <div className="font-bold">Date:</div>
            <div>{props.date}</div>
          </div>
          <div className="flex gap-[5px]">
            <div className="font-bold">Time:</div>
            <div>{props.time}</div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[30px]">
          <button
            onClick={handleReSchedule}
            type="submit"
            className="bg-[#ff9600] text-white  p-[10px] rounded-md font-bold shadow-md hover:bg-[#ff9600aa]"
          >
            Re-Schedule Meeting
          </button>
          <button
          onClick={handleDelete}
            type="submit"
            className="bg-[#9600ff] text-white  p-[10px] rounded-md font-bold shadow-md hover:bg-[#9600ffaa]"
          >
            Cancel Meeting
          </button>
        </div>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography>
          <form
            onSubmit={handleSubmit}
            className="p-[20px] rounded-md bg-[#0096ff33] w-fit items-center flex flex-col text-[#0096ff]"
          >
            <h1 className="text-[24px] uppercase mb-[20px]">
              Re-Schedule Meeting
            </h1>
            <label className="flex sm:flex-row flex-col gap-[10px] items-center h-[40px]">
              Title:
              <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="h-[56px] sm:w-[30vw] p-[10px] rounded-md bg-white text-black items-center"
              />
            </label>
            <br />
            <label className="flex sm:flex-row flex-col gap-[10px] text-center items-center h-[40px]">
              Description:
              <input
                type="text"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                className="h-[56px] sm:w-[26vw] p-[10px] rounded-md bg-white text-black items-center"
              />
            </label>
            <br />
            <label className="flex sm:flex-row flex-col gap-[10px] text-center items-center h-[40px]">
              Participants:
              <input
                type="text"
                value={participants}
                onChange={(event) => setParticipants(event.target.value)}
                className="h-[56px] sm:w-[26vw] p-[10px] rounded-md bg-white text-black items-center"
              />
            </label>
            <br />
            <label className="flex sm:flex-row flex-col gap-[10px] text-center items-center h-[40px]">
              Date:
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  format="DD - MM - YYYY"
                  onChange={(val) => handleDate(val, "dem")}
                  className="bg-white sm:w-[30vw]"
                />
              </LocalizationProvider>
            </label>
            <br />
            <label className="flex sm:flex-row flex-col gap-[10px] text-center items-center h-[40px]">
              Time:
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  onChange={(val) => setTime(val)}
                  className="bg-white sm:w-[30vw]"
                />
              </LocalizationProvider>
            </label>
            <br />
            <button
              type="submit"
              className="bg-[#0096ff] text-white hover:bg-[#44ff44] py-[10px] px-[40px] rounded-md"
            >
              Done
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
        </Typography>
      </Popover>
    </div>
  );
}

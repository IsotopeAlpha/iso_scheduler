import React, { useEffect, useState } from "react";
import MeetingsCard from "../components/meetings_card";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment"; // You can use 'date-fns' as well
import "react-big-calendar/lib/css/react-big-calendar.css";
import { CircularProgress } from "@mui/material";
import useFetch from "../hooks/useFetch";
import axios from "axios";

function SchedulerDashboard() {
  // const { data: meetings, loading } = useFetch('localhost:5000/schedules');
  // console.log(meetings)
  const [loading, setLoading] = useState(false)
  const [meetings, setMeetings] = useState([
    {title:"Meeting 1", description:"Agebda 1", date:"1 June 2025", time:"11:00am", participants:"Kofi, Ama, Kwame"},
    {title:"Meeting 2", description:"Agebda 2", date:"1 July 2025", time:"11:00am", participants:"Kofi, Ama, Kwame"},
    {title:"Meeting 3", description:"Agebda 3", date:"1 August 2025", time:"11:00am", participants:"Kofi, Ama, Kwame"},
    {title:"Meeting 4", description:"Agebda 4", date:"1 September 2025", time:"11:00am", participants:"Kofi, Ama, Kwame"},
  ])
  
  // const fetchData = async () => {
  //   try {
  //     const res = await axios.get(
  //       "0.0.0.0:5000/schedules"
  //     );

  //     console.log(res.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(()=>{
  //   fetchData()
  // })

  const handleSchedule = (event) => {
    window.location.href = "/schedule";
  };
  const localizer = momentLocalizer(moment);

  return (
    <div className="w-[100vw] h-[100vh] gap-[20px] grid grid-cols-1 sm:grid-cols-2 p-[20px] items-center bg-[#0096ffaa] overflow-auto">
      <div className="flex flex-col gap-[20px] h-full">
        <p className="font-bold text-[24px] text-white uppercase">
          Upcoming Meetings
        </p>
        <div className="flex flex-col gap-[10px] h-[50vh]  sm:h-[85vh] overflow-auto">
          {loading ? (
            <CircularProgress />
          ) : (
            meetings.map((meeting) => (
              <MeetingsCard
                title={meeting.title}
                description={meeting.description}
                participants={meeting.participants}
                date={meeting.date}
                time={meeting.time}
              />
            ))
          )}
        </div>
      </div>
      <div className="flex flex-col gap-[20px] h-[100vh]">
        <button
          onClick={handleSchedule}
          className="bg-[#0093ff] hover:bg-[#333333] text-white font-bold text-[20px] py-[10px] uppercase rounded-md border-white border-[1px] shadow-md"
        >
          Click To Schedule Meeting
        </button>
        <Calendar
          localizer={localizer}
          startAccessor="startTime"
          endAccessor="endTime"
        />
      </div>
    </div>
  );
}

export default SchedulerDashboard;

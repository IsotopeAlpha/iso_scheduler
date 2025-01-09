import React, { useState } from 'react';

const SchedulerForm = ({ onEventCreate }) => {
  const [title, setTitle] = useState('');
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const handleSubmit = (event) => {
    event.preventDefault();
    onEventCreate({ title, start, end });
    setTitle('');
    setStart(new Date());
    setEnd(new Date());
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Start:
        <input type="datetime-local" value={start} onChange={(e) => setStart(new Date(e.target.value))} />
      </label>
      <br />
      <label>
        End:
        <input type="datetime-local" value={end} onChange={(e) => setEnd(new Date(e.target.value))} />
      </label>
      <br />
      <button type="submit">Create Event</button>
    </form>
  );
};

export default SchedulerForm;
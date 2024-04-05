import { useState, useEffect } from 'react';

const DateTime = () => {
  const [currentTime, setCurrentTime] = useState({
    day: '',
    date: '',
    time: '',
  });

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });
      const date = `${now.getDate()} ${now.toLocaleString('en-US', { month: 'short' })} ${now.getFullYear()}`;
      const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hourCycle: 'h23' });

      setCurrentTime({ day: dayOfWeek, date, time });
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 20000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='date-time-box'>
      <h2 id='day'>{currentTime.day}</h2>
      <h3 id='date'>{currentTime.date}</h3>
      <h4 id='time'>{currentTime.time}</h4>
    </div>
  );
};

export default DateTime;

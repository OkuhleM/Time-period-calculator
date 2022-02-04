import React, { useState } from 'react';
import './App.css';
import 'moment-timezone'
import { render } from '@testing-library/react';

const TimePeriodCalculaTor = () => {

  const [date, setDate] = useState({ startDate: "", endDate: "" })
  const [timeDifference, setTimeDifference] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeDifference(

      getTimePeriod(date.startDate, date.endDate)
    )
  }

  const getTimePeriod = (startDate, endDate) => {

    let firstDate = new Date(startDate);
    let secondDate = new Date(endDate);
    let finalDate = Number(secondDate.getTime()) - Number(firstDate.getTime());
    let years = parseInt((secondDate - firstDate) / (1000 * 60 * 60 * 24) / 365);
    let months = parseInt((secondDate - firstDate) / (1000 * 3600 * 24) % 31)
    let days = parseInt((secondDate - firstDate) / (1000 * 60 * 60 * 24) %24);
    // let day = Math.floor(days * 31);
    // console.log('day',days, day);
    let hours = parseInt(Math.abs(secondDate - firstDate) / (1000 * 60 * 60) % 24)
    let minutes = parseInt(Math.abs(secondDate.getTime() - firstDate.getTime()) / (1000 * 60) % 60);
    let seconds = parseInt(Math.abs(secondDate.getTime() - firstDate.getTime()) / (1000) % 60);
    
    
    return years + " years" +" " + months + " months" + " " + days + " days" + " " + hours
    + " hours" + " " + minutes + " minutes " + seconds + " seconds";
  
  }

  const handleChange = (e) => {
    setDate({
      ...date, [e.target.name]: e.target.value
    })

  }

  return <div className="timePeriod">
    <div>
      <label>From:</label>
      <input type="datetime-local" onChange={handleChange} name="startDate" value={date.startDate}></input><br /><br />
    </div>
    <label>To:</label>

    <input type="datetime-local" onChange={handleChange} name="endDate" value={date.endDate}></input><br />

    <button onClick={handleSubmit}>Calculate Period</button>

    <div>
      <p>{date.startDate}</p>
      <p>{date.endDate}</p>
      <h1>Final Date</h1>

    </div>
    <div>
      <p>{timeDifference}</p>
    </div>


  </div>;
}


export default TimePeriodCalculaTor;

import React, { useEffect } from "react";
import "./clock.css";

const $ = (selector) => {
  return document.querySelector(selector);
};

const Clock = (props) => {
  useEffect(() => {
    const hours = $(".hours");
    const minutes = $(".minutes");
    const seconds = $(".seconds");
    const month = $(".month");
    const day = $(".day");
    const year = $(".year");
    let showDow = true;

    function setDate() {
      const now = new Date();
      const mm = now.getMonth();
      const dd = now.getDate();
      const yyyy = now.getFullYear();
      const secs = now.getSeconds();
      const mins = now.getMinutes();
      const hrs = now.getHours();
      const monthName = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      if (hrs > 12) {
        hours.innerHTML = hrs - 12;
      } else {
        hours.innerHTML = hrs;
      }
      seconds.innerHTML = String(secs).padStart(2, "0");
      minutes.innerHTML = String(mins).padStart(2, "0");
      month.innerHTML = monthName[mm];
      day.innerHTML = dd;
      year.innerHTML = yyyy;
    }

    const intervalId = setInterval(setDate, 500);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="alarm-clock">
      <div className="time">
        <span className="hours">12</span>
        <span className="colon">:</span>
        <span className="minutes">15</span>
        <span className="colon">:</span>
        <span className="seconds">30</span>
      </div>
      <div className="date">
        <span className="month">November</span>
        <span className="day">6</span>,<span className="year">2023</span>
      </div>
    </div>
  );
};

export default Clock;

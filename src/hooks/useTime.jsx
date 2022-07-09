import React from "react";
// import { useTimer } from "../context/timer-context";
import style from "../pages/main.module.css";

function MyTime() {
  // const { minutes, hours } = useTimer();
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const updatedHour = hours > 12 ? hours - 12 : hours;
  const ampm = hours >= 12 ? "pm" : "am";

  return (
    <div className={style.time}>
      <div className={style.timeFormat}>
        <span>{updatedHour < 10 ? `0${updatedHour}` : updatedHour}</span>:
        <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
        <span>{ampm}</span>
      </div>
    </div>
  );
}

export default MyTime;

import React from "react";
import Quotes from "../components/Quotes";
import ToDo from "../components/ToDo/ToDo";
import { useInfo } from "../context/info-context";
import { useTimer } from "../context/timer-context";
import MyTime from "../hooks/useTime";
import { greetings, textFormat } from "../utils";
import style from "./main.module.css";

const Hero = () => {
  const { name, focus, setFocus } = useInfo();
  const { hours } = useTimer();

  const focusHandler = (e) => {
    setFocus(textFormat(e.target.value));
    localStorage.setItem("focus", textFormat(e.target.value));
  };

  return (
    <div className="hero">
      <MyTime />
      <div className={style.welcomeMessage}>
        {`Hi ${greetings(hours)}, ${name}.`}
      </div>
      {focus ? (
        <div className={style.focus}>Your main focus is {focus}</div>
      ) : (
        <input
          className={style.name}
          style={{ fontSize: "2rem" }}
          placeholder={`What is your focus today?`}
          type="text"
          onKeyDown={(e) =>
            e.code === "Enter" && e.target.value !== "" && focusHandler(e)
          }
        />
      )}
      <div className={style.quotes}>
        <Quotes />
      </div>
      <ToDo />
    </div>
  );
};

export default Hero;

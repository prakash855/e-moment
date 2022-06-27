import React from "react";
import { useInfo } from "../context/info-context";
import { nameFormat } from "../utils/nameFormat";
import style from "./main.module.css";

const Onboarding = () => {
  const { setName } = useInfo();
  const userNameHandler = (e) => {
    setName(nameFormat(e.target.value));
    localStorage.setItem("userName", nameFormat(e.target.value));
  };

  return (
    <div className={style.onboarding}>
      <div className={style.welcome}>Hello, what's your name?</div>
      <input
        className={style.name}
        type="text"
        onKeyDown={(e) =>
          e.code === "Enter" && e.target.value !== "" && userNameHandler(e)
        }
      />
    </div>
  );
};

export default Onboarding;

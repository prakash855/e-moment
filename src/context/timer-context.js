import { createContext, useContext } from "react";
import { useTime } from "react-timer-hook";

const TimerContext = createContext();

const useTimer = () => useContext(TimerContext);

const TimerProvider = ({ children }) => {
  const { hours, minutes } = useTime({ format: "12-hour" });
  return (
    <TimerContext.Provider value={{ hours, minutes }}>
      {children}
    </TimerContext.Provider>
  );
};

export { useTimer, TimerProvider };

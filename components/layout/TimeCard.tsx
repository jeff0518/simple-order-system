import { useEffect, useState } from "react";
import moment from "moment";

import style from "./TimeCard.module.scss";

function TimeCard() {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className={style.timeCard_container}>
      <div className={style.timeCard_card}>
        {currentTime.format("MMMM Do YYYY, h:mm:ss")}
      </div>
    </div>
  );
}

export default TimeCard;

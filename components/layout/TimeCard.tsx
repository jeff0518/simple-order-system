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
  // 出現Error: Text content does not match server-rendered HTML. 因此改成這樣
  const formattedTime = currentTime.format("MMMM Do YYYY, h:mm:ss");

  return (
    <div className={style.timeCard_container}>
      <div className={style.timeCard_card}>{formattedTime}</div>
    </div>
  );
}

export default TimeCard;

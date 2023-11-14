import moment from "moment";

import style from "./TimeCard.module.scss";

function TimeCard() {
  const now = moment();
  return (
    <div className={style.timeCard_container}>
      <div className={style.timeCard_card}>
        {now.format("MMMM Do YYYY, h:mm:ss")}
      </div>
    </div>
  );
}

export default TimeCard;

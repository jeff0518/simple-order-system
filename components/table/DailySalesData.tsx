import InfoCard from "../card/InfoCard";

import style from "./DailySalesData.module.scss";
function DailySalesData() {
  return (
    <div className={style.dailySalesData_container}>
      <div className={style.title}>日營業額</div>
      <div className={style.daily_info}>
        <InfoCard fistText="日期" lastText="11.21" />
        <InfoCard fistText="營業額" lastText={12345} />
        <InfoCard fistText="桌數" lastText={5} />
        <InfoCard fistText="單桌消費" lastText={246.8} />
      </div>
    </div>
  );
}
export default DailySalesData;

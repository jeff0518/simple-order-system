import InfoCard from "../card/InfoCard";

import style from "./MonthlySalesData.module.scss";
function MonthlySalesData() {
  return (
    <div className={style.monthlySalesData_container}>
      <div className={style.title}>月報表</div>
      <div>選擇月份</div>
      <div className={style.monthly_info}>
        <InfoCard fistText="11.1" lastText={12345} />
        <InfoCard fistText="11.2" lastText={22345} />
        <InfoCard fistText="11.3" lastText={115} />
        <InfoCard fistText="11.4" lastText={246.8} />
      </div>
    </div>
  );
}
export default MonthlySalesData;

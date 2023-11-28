import CtrlSearch from "../search/CtrlSearch";
import InfoCard from "../card/InfoCard";

import style from "./SalesRecordData.module.scss";
function SalesRecordData() {
  return (
    <div className={style.salesRecordData_container}>
      <div className={style.title}>商品銷售紀錄</div>
      <div className={style.search}>
        <CtrlSearch />
      </div>
      <div className={style.monthly_info}>
        <InfoCard fistText="牛肉" lastText={456} />
        <InfoCard fistText="豬肉" lastText={345} />
        <InfoCard fistText="雞肉" lastText={115} />
        <InfoCard fistText="可樂" lastText={75} />
        <InfoCard fistText="無糖綠茶" lastText={125} />
      </div>
    </div>
  );
}
export default SalesRecordData;

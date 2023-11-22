import DailySalesData from "@/components/table/DailySalesData";

import style from "./index.module.scss";
function DataPage() {
  return (
    <div className={style.dataPage_container}>
      <ul className={style.nav_tabs}>
        <li className={style.nav_item}>日營業額</li>
        <li className={style.nav_item}>月營業額</li>
        <li className={style.nav_item}>銷售紀錄</li>
      </ul>
      <div className={style.tabs_info}>
        <DailySalesData />
      </div>
    </div>
  );
}
export default DataPage;

import { useState, useEffect } from "react";

import DailySalesData from "@/components/table/DailySalesData";
import MonthlySalesData from "@/components/table/MonthlySalesData";
import SalesRecordData from "@/components/table/SalesRecordData";

import style from "./index.module.scss";

function DataPage() {
  const [selectTab, setSelectTab] = useState("每日報表");

  const tabClickHandler = (tab: string) => {
    setSelectTab(tab);
  };

  useEffect(() => {
    tabClickHandler("每日報表");
  }, []);
  return (
    <div className={style.dataPage_container}>
      <ul className={style.nav_tabs}>
        <li
          className={style.nav_item}
          onClick={() => tabClickHandler("每日報表")}
        >
          每日報表
        </li>
        <li
          className={style.nav_item}
          onClick={() => tabClickHandler("月營業報表")}
        >
          月營業報表
        </li>
        <li
          className={style.nav_item}
          onClick={() => tabClickHandler("商品銷售紀錄")}
        >
          商品銷售紀錄
        </li>
      </ul>
      <div className={style.tabs_info}>
        {selectTab === "每日報表" && <DailySalesData />}
        {selectTab === "月營業報表" && <MonthlySalesData />}
        {selectTab === "商品銷售紀錄" && <SalesRecordData />}
      </div>
    </div>
  );
}
export default DataPage;

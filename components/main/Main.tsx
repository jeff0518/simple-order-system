import { useEffect, useState } from "react";

import { getTableData } from "@/services/MainAPI";
import useAuthCheck from "@/hooks/useAuthCheck";
import TableCard from "./TableCard";

import style from "./Main.module.scss";

interface Props {
  id: number;
  total: number;
  time: string;
}

function Main() {
  useAuthCheck();
  const [tableData, setTableData] = useState([]);
  const [update, setUpdate] = useState(true);

  const fetchData = async () => {
    try {
      const data = await getTableData();
      setTableData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    setUpdate(true);
  }, [update]);
  return (
    <div className={style.main_container}>
      {tableData &&
        tableData.map((item: any) => {
          return (
            <TableCard
              key={item.tableId}
              isActive={item.isActive}
              tableId={item.tableId}
              totalAmount={item.isActive ? item.totalAmount : "0"}
              diningTime={item.isActive ? item.diningTime : "未點餐"}
              setUpdate={setUpdate}
            />
          );
        })}
    </div>
  );
}

export default Main;

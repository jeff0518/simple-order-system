import { useEffect, useState, useContext } from "react";

import { getTableData } from "@/services/MainAPI";
import { TableContext } from "@/context/TableData";
import useAuthCheck from "@/hooks/useAuthCheck";
import TableCard from "./TableCard";

import style from "./Main.module.scss";

function Main() {
  useAuthCheck();
  const [tableData, setTableData] = useState([]);
  const [update, setUpdate] = useState(true);
  const { setTotalAmount } = useContext(TableContext);

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

  useEffect(() => {
    if (tableData) {
      const arr = tableData.map((item: any) => {
        return item.isActive ? Number(item.totalAmount) : 0;
      });

      const totalAmountSum = arr.reduce((acc, arr) => acc + arr, 0);
      setTotalAmount(totalAmountSum);
    }
  }, [tableData]);
  return (
    <div className={style.main_container}>
      {tableData &&
        tableData.map((item: any) => {
          return (
            <TableCard
              key={item.tableId}
              isActive={item.isActive}
              tableId={item.tableId}
              tableDataBase={item}
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

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
  }, []);
  return (
    <div className={style.main_container}>
      {tableData &&
        tableData.map((item: any) => {
          return (
            <TableCard
              tableId={item.tableId}
              totalAmount={1000}
              diningTime={"12:30"}
            />
          );
        })}
    </div>
  );
}

export default Main;

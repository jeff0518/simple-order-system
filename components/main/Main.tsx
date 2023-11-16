import TableCard from "./TableCard";

import style from "./Main.module.scss";

interface Props {
  id: number;
  total: number;
  time: string;
}

function Main() {
  return (
    <div className={style.main_container}>
      <TableCard tableId={1} totalAmount={1000} diningTime={"12:30"} />
      <TableCard tableId={2} totalAmount={1000} diningTime={"12:30"} />
      <TableCard tableId={3} totalAmount={1000} diningTime={"12:30"} />
      <TableCard tableId={4} totalAmount={1000} diningTime={"12:30"} />
      <TableCard tableId={5} totalAmount={1000} diningTime={"12:30"} />
      <TableCard tableId={6} totalAmount={1000} diningTime={"12:30"} />
      <TableCard tableId={1} totalAmount={1000} diningTime={"12:30"} />
      <TableCard tableId={2} totalAmount={1000} diningTime={"12:30"} />
      <TableCard tableId={3} totalAmount={1000} diningTime={"12:30"} />
      <TableCard tableId={4} totalAmount={1000} diningTime={"12:30"} />
      <TableCard tableId={5} totalAmount={1000} diningTime={"12:30"} />
      <TableCard tableId={6} totalAmount={1000} diningTime={"12:30"} />
    </div>
  );
}

export default Main;

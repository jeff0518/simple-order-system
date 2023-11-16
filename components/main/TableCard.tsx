import { AiFillDollarCircle, AiFillClockCircle } from "react-icons/ai";
import ButtonUI from "../shared/ButtonUI";

import style from "./TableCard.module.scss";

interface TableCardProps {
  tableId: number;
  totalAmount: number;
  diningTime: string;
}

function TableCard(props: TableCardProps) {
  const { tableId, totalAmount, diningTime } = props;
  const orderHandler = () => {};
  const checkoutHandler = () => {};
  return (
    <div className={style.tableCard_container}>
      {/* 桌號 */}
      <div className={style.title}>{tableId}桌</div>
      {/* 顯示資訊 */}
      <div className={style.information}>
        <div className={style.info_icon}>
          <AiFillDollarCircle />：{totalAmount}
        </div>
        <div className={style.info_icon}>
          <AiFillClockCircle />：{diningTime}
        </div>
      </div>
      {/* 控制面板（點餐、結帳） */}
      <div className={style.control}>
        <ButtonUI text="點餐" btnStyle="btn__pill" onClick={orderHandler} />
        <ButtonUI text="結帳" btnStyle="btn__pill" onClick={checkoutHandler} />
      </div>
    </div>
  );
}

export default TableCard;

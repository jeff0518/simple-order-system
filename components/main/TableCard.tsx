import { useState, useEffect } from "react";
import { AiFillDollarCircle, AiFillClockCircle } from "react-icons/ai";

import { ShoppingCarProps } from "@/utils/type";
import OrderModal from "../modal/main/OrderModal";
import ButtonUI from "../shared/ButtonUI";
import style from "./TableCard.module.scss";

interface TableCardProps {
  tableId: string;
  totalAmount: number;
  diningTime: string;
}

function TableCard(props: TableCardProps) {
  const { tableId, totalAmount, diningTime } = props;
  const [shoppingCar, setShoppingCar] = useState<ShoppingCarProps[]>([]);
  const [dataBase, setDataBase] = useState<ShoppingCarProps[]>([]);
  const [isShowOrderModal, setIsShowOrderModal] = useState(false);

  const closeModalHandler = () => {
    setIsShowOrderModal(false);
  };
  const orderHandler = () => {
    setIsShowOrderModal(true);
  };
  const checkoutHandler = () => {};

  useEffect(() => {}, []);
  return (
    <>
      {isShowOrderModal && (
        <OrderModal
          tableId={tableId}
          shoppingCar={shoppingCar}
          setShoppingCar={setShoppingCar}
          dataBase={dataBase}
          setDataBase={setDataBase}
          onClick={closeModalHandler}
        />
      )}
      <div className={style.tableCard_container}>
        {/* 桌號 */}
        <div className={style.title}>{tableId}</div>
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
          <ButtonUI
            text="結帳"
            btnStyle="btn__pill"
            onClick={checkoutHandler}
          />
        </div>
      </div>
    </>
  );
}

export default TableCard;

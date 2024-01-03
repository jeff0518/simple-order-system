import { useState, useEffect } from "react";
import { AiFillDollarCircle, AiFillClockCircle } from "react-icons/ai";

import { ShoppingCarProps, TableDataBase } from "@/utils/type";
import { Toast } from "@/utils/getSweetalert";
import OrderModal from "../modal/main/OrderModal";
import CheckoutModal from "../modal/main/CheckoutModal";
import ButtonUI from "../shared/ButtonUI";
import style from "./TableCard.module.scss";

interface TableCardProps {
  tableId: string;
  totalAmount: number;
  tableDataBase: TableDataBase;
  diningTime: string;
  isActive: boolean;
  setUpdate: (perv: boolean) => void;
}

function TableCard(props: TableCardProps) {
  const {
    tableId,
    totalAmount,
    tableDataBase,
    diningTime,
    isActive,
    setUpdate,
  } = props;
  const [temporary, setTemporary] = useState<ShoppingCarProps[]>([]);
  const [dataBase, setDataBase] = useState<TableDataBase[]>([]);
  const [isShowOrderModal, setIsShowOrderModal] = useState(false);
  const [isShowCheckout, setIsShowCheckout] = useState(false);

  const closeModalHandler = () => {
    setIsShowOrderModal(false);
    setIsShowCheckout(false);
    setUpdate(false);
  };
  const orderHandler = () => {
    setIsShowOrderModal(true);
  };
  const checkoutHandler = () => {
    if (!isActive) {
      Toast.fire({ icon: "warning", title: "還沒有點餐!" });
      // setIsOrderPlaced(true); // 避免重複顯示 Toast
      // onClick();
    } else {
      setIsShowCheckout(true);
    }
  };

  useEffect(() => {
    const arrayTable = [tableDataBase];
    setDataBase(arrayTable);
  }, []);

  return (
    <>
      {isShowOrderModal && (
        <OrderModal
          tableId={tableId}
          temporary={temporary}
          setTemporary={setTemporary}
          dataBase={dataBase}
          setDataBase={setDataBase}
          onClick={closeModalHandler}
        />
      )}
      {isShowCheckout && (
        <CheckoutModal
          tableId={tableId}
          onClick={closeModalHandler}
          setTemporary={setTemporary}
          setDataBase={setDataBase}
        />
      )}
      <div
        className={`${style.tableCard_container} ${
          isActive ? style.isActive : style.isNotActive
        }`}
      >
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

import { useEffect, useState } from "react";

import ButtonUI from "@/components/shared/ButtonUI";
import InfoCard from "@/components/card/InfoCard";
import Loading from "@/components/loading/Loading";
import { getShoppingCar, getCheckout } from "@/services/OrderAPI";
import { Checkout, Toast } from "@/utils/getSweetalert";
import { ShoppingCarProps, TableDataBase } from "@/utils/type";
import style from "./CheckoutModal.module.scss";

interface CheckoutProps {
  tableId: string;
  onClick: () => void;
  setTemporary: (temporary: ShoppingCarProps[]) => void;
  setDataBase: (shoppingCar: TableDataBase) => void;
}

interface CheckoutData {
  tableId: string;
  shoppingCar: [
    {
      productId: string;
      name: string;
      quantity: number;
      selling: string;
    }
  ];
  totalAmount: number;
}

function CheckoutModal({
  tableId,
  onClick,
  setDataBase,
  setTemporary,
}: CheckoutProps) {
  const [checkoutData, setCheckoutData] = useState<CheckoutData | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  if (!checkoutData && !isOrderPlaced) {
    Toast.fire({ icon: "warning", title: "還沒有點餐!" });
    setIsOrderPlaced(true); // 避免重複顯示 Toast
    onClick();
  }

  const fetchCheckoutData = async () => {
    try {
      const { data } = await getShoppingCar(tableId);
      setCheckoutData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const checkoutHandler = async () => {
    try {
      const refuel = await getCheckout(tableId);
      if (refuel) {
        Checkout.fire({
          title: `今天消費為 ${checkoutData?.totalAmount} 元`,
          text: "感謝您今日的消費",
        });
        setIsOrderPlaced(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isLoading) {
      fetchCheckoutData();
    }
  }, [isLoading]);

  useEffect(() => {
    if (isOrderPlaced) {
      setTemporary([]);
      // setDataBase([]);
    }
  }, [isOrderPlaced, setTemporary, setDataBase]);
  return (
    <>
      {isLoading && <Loading />}
      <div className={style.backdrop} onClick={onClick} />
      <div className={style.checkoutModal_container}>
        <div className={style.info}>
          <p className={style.info_title}>桌號：{tableId}</p>
          <div className={style.info_container}>
            {checkoutData &&
              checkoutData.shoppingCar.map((item) => {
                return (
                  <InfoCard
                    key={item.productId}
                    fistText={item.name}
                    lastText={`${item.quantity} 份`}
                  />
                );
              })}
          </div>
        </div>
        <div className={style.btnBox}>
          <div className={style.totalAmount}>
            <InfoCard fistText="總金額" lastText={checkoutData?.totalAmount} />
          </div>
          <ButtonUI
            text="結帳"
            btnStyle="btn__pill__modal"
            onClick={checkoutHandler}
          />
        </div>
      </div>
    </>
  );
}
export default CheckoutModal;

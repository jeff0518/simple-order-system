import { useEffect, useState } from "react";

import ButtonUI from "@/components/shared/ButtonUI";
import InfoCard from "@/components/card/InfoCard";
import style from "./CheckoutModal.module.scss";

interface CheckoutProps {
  tableId: string;
  onClick: () => void;
}

function CheckoutModal({ tableId, onClick }: CheckoutProps) {
  const [checkoutData, setCheckoutData] = useState();
  const fetchCheckoutData = () => {};

  useEffect(() => {
    fetchCheckoutData();
  }, []);
  return (
    <>
      <div className={style.backdrop} onClick={onClick} />
      <div className={style.checkoutModal_container}>
        <div className={style.info}>
          <p className={style.info_title}>桌號：1桌</p>
          <p className={style.info_container}>
            <InfoCard fistText="牛肉" lastText={1} />
            <InfoCard fistText="豬肉" lastText={2} />
            <InfoCard fistText="牛肉" lastText={1} />
            <InfoCard fistText="豬肉" lastText={2} />
            <InfoCard fistText="牛肉" lastText={1} />
            <InfoCard fistText="豬肉" lastText={2} />
            <InfoCard fistText="牛肉" lastText={1} />
            <InfoCard fistText="豬肉" lastText={2} />
            <InfoCard fistText="牛肉" lastText={1} />
            <InfoCard fistText="豬肉" lastText={2} />
            <InfoCard fistText="牛肉" lastText={1} />
            <InfoCard fistText="豬肉" lastText={2} />
            <InfoCard fistText="牛肉" lastText={1} />
            <InfoCard fistText="豬肉" lastText={2} />
          </p>
        </div>
        <div className={style.btnBox}>
          <ButtonUI text="結帳" btnStyle="btn__pill__modal" />
        </div>
      </div>
    </>
  );
}
export default CheckoutModal;

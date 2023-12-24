import { useEffect } from "react";

import { ShoppingCarProps } from "@/utils/type";
import { Alert, Dialog } from "@/utils/getSweetalert";
import ButtonUI from "@/components/shared/ButtonUI";
import style from "./ShoppingCarModal.module.scss";

interface ShoppingCarModalProps {
  shoppingCar: ShoppingCarProps[];
  setShoppingCar: (shoppingCar: ShoppingCarProps[]) => void;
  uploadData: () => void;
}

function ShoppingCarModal({
  shoppingCar,
  setShoppingCar,
  uploadData,
}: ShoppingCarModalProps) {
  const { items, totalAmount } = shoppingCar[0];
  const newTotalAmount = items.reduce(
    (accumulator, item) => accumulator + item.quantity * Number(item.selling),
    0
  );

  const onClickToAPIHandler = () => {
    Dialog.fire({
      title: "確定要送出？",
      text: "送出後無法做更改！",
      icon: "warning",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        Alert.fire({
          title: "點餐已送出!",
          icon: "success",
        });
        uploadData();
      }
    });
  };

  useEffect(() => {
    // 更新 totalAmount
    const updatedShoppingCar = [...shoppingCar];
    updatedShoppingCar[0].totalAmount = newTotalAmount;
    setShoppingCar(updatedShoppingCar);
  }, [newTotalAmount, setShoppingCar]);

  return (
    <div className={style.shoppingCarModal_container}>
      {items.map((item) => {
        return (
          <div className={style.infoBox} key={item.productId}>
            <p className={style.name}>商品名稱： {item.name}</p>
            <p className={style.quantity}>數量： {item.quantity}</p>
          </div>
        );
      })}

      <div className={style.btnBox}>
        <div className={style.money}>總金額： {totalAmount} 元</div>
        <ButtonUI
          text="送出點餐"
          btnStyle="btn__pill__modal"
          onClick={onClickToAPIHandler}
        />
      </div>
    </div>
  );
}
export default ShoppingCarModal;

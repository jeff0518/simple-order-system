import { useEffect } from "react";

import { ShoppingCarProps } from "@/utils/type";
import { Alert, Dialog } from "@/utils/getSweetalert";
import { patchShoppingCar } from "@/services/OrderAPI";
import ButtonUI from "@/components/shared/ButtonUI";
import style from "./ShoppingCarModal.module.scss";

interface ShoppingCarModalProps {
  shoppingCar: ShoppingCarProps[];
  setShoppingCar: (shoppingCar: ShoppingCarProps[]) => void;
  dataBase: ShoppingCarProps[];
  setDataBase: any;
  setIsShowShoppingCar: (prev: boolean) => void;
  onClick: () => void;
}

function ShoppingCarModal({
  shoppingCar,
  setShoppingCar,
  dataBase,
  setDataBase,
  setIsShowShoppingCar,
  onClick,
}: ShoppingCarModalProps) {
  const { items, totalAmount, tableId } = shoppingCar[0];
  const newTotalAmount = items.reduce(
    (accumulator, item) => accumulator + item.quantity * Number(item.selling),
    0
  );

  const closeShoppingCarHandler = () => {
    setShoppingCar([]);
  };

  const uploadShoppingCar = () => {
    if (dataBase.length === 0) {
      uploadData(shoppingCar);
      setDataBase(shoppingCar);
    } else {
      let newAmount =
        Number(dataBase[0].totalAmount) + Number(shoppingCar[0].totalAmount);

      let newItems = dataBase[0].items;

      shoppingCar[0].items.map((item) => {
        let fount = false;
        const dataBaseItem = dataBase[0].items;

        for (let i = 0; i < dataBase[0].items.length; i++) {
          if (item.productId === dataBaseItem[i].productId) {
            newItems[i].quantity += item.quantity;
            fount = true;
          }
        }

        if (!fount) {
          newItems.push(item);
        }

        console.log("newItems: ", newItems);
      });

      const updatedShoppingCar = [
        {
          items: newItems,
          tableId: tableId,
          totalAmount: newAmount,
        },
      ];
      uploadData(updatedShoppingCar);
      setDataBase(updatedShoppingCar);
    }
  };

  const uploadData = async (shoppingCarData: any) => {
    try {
      const result = await patchShoppingCar(shoppingCarData);

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

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
        uploadShoppingCar();
        closeShoppingCarHandler();
        // setIsShowShoppingCar(false);
        onClick();
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

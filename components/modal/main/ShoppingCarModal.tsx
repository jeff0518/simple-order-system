import { useEffect } from "react";

import { ShoppingCarProps, TableDataBase } from "@/utils/type";
import { Alert, Dialog } from "@/utils/getSweetalert";
import { patchShoppingCar } from "@/services/OrderAPI";
import ButtonUI from "@/components/shared/ButtonUI";
import style from "./ShoppingCarModal.module.scss";

interface ShoppingCarModalProps {
  temporary: ShoppingCarProps[];
  setTemporary: (shoppingCar: ShoppingCarProps[]) => void;
  dataBase: TableDataBase[];
  setDataBase: any;
  setIsShowShoppingCar: (prev: boolean) => void;
  onClick: () => void;
}

function ShoppingCarModal({
  temporary,
  setTemporary,
  dataBase,
  setDataBase,
  setIsShowShoppingCar,
  onClick,
}: ShoppingCarModalProps) {
  const { shoppingCar, totalAmount, tableId } = temporary[0];
  const newTotalAmount = shoppingCar.reduce(
    (accumulator, item) => accumulator + item.quantity * Number(item.selling),
    0
  );

  const closeShoppingCarHandler = () => {
    setTemporary([]);
  };

  const uploadShoppingCar = () => {
    console.log(dataBase);
    console.log(dataBase[0].totalAmount);
    let newAmount =
      Number(dataBase[0].totalAmount) + Number(temporary[0].totalAmount);
    console.log(
      "Number(dataBase.totalAmount)",
      Number(dataBase[0].totalAmount)
    );
    console.log("newAmount: ", newAmount);
    if (dataBase[0].shoppingCar.length >= 0) {
      let newItems = dataBase[0].shoppingCar;

      temporary[0].shoppingCar.map((item) => {
        let fount = false;
        const dataBaseItem = dataBase[0].shoppingCar;

        for (let i = 0; i < dataBaseItem.length; i++) {
          if (item.productId === dataBaseItem[i].productId) {
            newItems[i].quantity += item.quantity;
            fount = true;
          }
        }

        if (!fount) {
          newItems.push(item);
        }
      });

      const updatedShoppingCar = [
        {
          shoppingCar: newItems,
          tableId: tableId,
          totalAmount: newAmount,
        },
      ];

      uploadData(updatedShoppingCar);
      setDataBase(updatedShoppingCar);
    } else {
      console.log("else的newAmount", newAmount);
      const updatedShoppingCar = [
        {
          shoppingCar: shoppingCar,
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
      await patchShoppingCar(shoppingCarData);
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
    const updatedShoppingCar = [...temporary];
    updatedShoppingCar[0].totalAmount = newTotalAmount;
    setTemporary(updatedShoppingCar);
  }, [newTotalAmount, setTemporary]);

  return (
    <div className={style.shoppingCarModal_container}>
      {shoppingCar.map((item) => {
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

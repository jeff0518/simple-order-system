import { useState } from "react";
import { IoAddCircle, IoRemoveCircle } from "react-icons/io5";

import { MenuProps } from "@/utils/type";
import { ShoppingCarProps } from "@/utils/type";
import ButtonUI from "../shared/ButtonUI";
import style from "./OrderMenuCard.module.scss";

interface OrderMenuCardProps extends MenuProps {
  tableId: string;
  shoppingCar: ShoppingCarProps[];
  setShoppingCar: (shoppingCar: ShoppingCarProps[]) => void;
}

function OrderMenuCard({
  productId,
  imageUrl,
  name,
  selling,
  isActive,
  tableId,
  shoppingCar,
  setShoppingCar,
}: OrderMenuCardProps) {
  const [quantity, setQuantity] = useState(0);
  const imgUrl = typeof imageUrl === "string" ? imageUrl : undefined;

  const addQuantityHandler = () => {
    let newQuantity = quantity + 1;
    if (newQuantity >= 10) {
      newQuantity = 10;
    }
    setQuantity(newQuantity);
  };
  const removeQuantityHandler = () => {
    if (quantity === 0) {
      return;
    } else {
      let newQuantity = quantity - 1;
      setQuantity(newQuantity);
    }
  };

  const addToShoppingCarHandler = () => {
    const isTableIdExist = shoppingCar.some((item) => {
      return item.tableId === tableId;
    });

    if (isTableIdExist) {
      const updatedShoppingCar = shoppingCar.map((item) => {
        if (item.tableId === tableId) {
          const existingItem = item.items.find(
            (product) => product.productId === productId
          );
          if (existingItem) {
            existingItem.quantity += quantity;
          } else {
            item.items.push({
              productId: productId,
              name: name,
              quantity: quantity,
              selling: selling,
            });
          }
        }
        return item;
      });

      setShoppingCar(updatedShoppingCar);
      setQuantity(0);
    } else {
      setShoppingCar([
        ...shoppingCar,
        {
          tableId: tableId,
          items: [
            {
              productId: productId,
              name: name,
              quantity: quantity,
              selling: selling,
            },
          ],
          totalAmount: 0,
        },
      ]);
      setQuantity(0);
    }
  };
  return (
    <div className={style.orderMenuCard_container}>
      {!isActive && (
        <div className={style.isActive}>
          <p>此商品已售完！</p>
        </div>
      )}
      <div className={style.card_container}>
        <div className={style.imgBox}>
          <img
            src={imgUrl}
            alt="圖片"
            className={style.imgBox_img}
            width={180}
            height={120}
          />
        </div>
        <div className={style.orderBox}>
          <div className={style.info}>
            <p>名稱： {name}</p>
            <p>售價： {selling} 元</p>
          </div>
          <div className={style.quantityBox}>
            <IoRemoveCircle size={20} onClick={removeQuantityHandler} />
            <div className={style.input}>{quantity}</div>
            <IoAddCircle size={20} onClick={addQuantityHandler} />
          </div>
        </div>
      </div>
      <div className={style.btn}>
        <ButtonUI
          text="加入購物車"
          btnStyle="btn__pill__order"
          onClick={addToShoppingCarHandler}
        />
      </div>
    </div>
  );
}
export default OrderMenuCard;

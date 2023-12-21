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
  const imgUrl = typeof imageUrl === "string" ? imageUrl : undefined;

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
            existingItem.quantity += 1;
          } else {
            item.items.push({ productId: productId, quantity: 1 });
          }
        }
        return item;
      });

      setShoppingCar(updatedShoppingCar);
    } else {
      setShoppingCar([
        ...shoppingCar,
        {
          tableId: tableId,
          items: [{ productId: productId, quantity: 1 }],
        },
      ]);
    }
  };
  return (
    <div className={style.orderMenuCard_container}>
      {!isActive && (
        <div className={style.isActive}>
          <p>此商品已售完！</p>
        </div>
      )}
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
        <div className={style.btn}>
          <ButtonUI
            text="加入"
            btnStyle="btn__pill__order"
            onClick={addToShoppingCarHandler}
          />
        </div>
      </div>
    </div>
  );
}
export default OrderMenuCard;

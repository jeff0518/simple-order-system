import { useState, useEffect } from "react";

import { getMenu } from "@/services/MenuAPI";
import { MenuProps } from "@/utils/type";
import { ShoppingCarProps } from "@/utils/type";
import OrderMenuCard from "@/components/card/OrderMenuCard";
import style from "./OrderModal.module.scss";

interface OrderModalProps {
  tableId: string;
  shoppingCar: ShoppingCarProps[];
  setShoppingCar: (shoppingCar: ShoppingCarProps[]) => void;
  onClick: () => void;
}
function OrderModal({
  onClick,
  tableId,
  shoppingCar,
  setShoppingCar,
}: OrderModalProps) {
  const [menuData, setMenuData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await getMenu();
      setMenuData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    console.log("這是：", tableId, " 的 ", shoppingCar);
  }, [shoppingCar]);
  return (
    <>
      <div className={style.backdrop} onClick={onClick} />
      <div className={style.orderModal_container}>
        <div className={style.menuBox}>
          {menuData &&
            menuData.map((item: MenuProps) => {
              return (
                <OrderMenuCard
                  key={item.productId}
                  tableId={tableId}
                  productId={item.productId}
                  name={item.name}
                  place={item.place}
                  selling={item.selling}
                  imageUrl={item.imageUrl}
                  isActive={item.isActive}
                  shoppingCar={shoppingCar}
                  setShoppingCar={setShoppingCar}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
export default OrderModal;

import { useState, useEffect } from "react";
import { TiShoppingCart } from "react-icons/ti";

import { getMenu } from "@/services/MenuAPI";
import { MenuProps, ShoppingCarProps } from "@/utils/type";
import { postShoppingCar } from "@/services/OrderAPI";
import OrderMenuCard from "@/components/card/OrderMenuCard";
import ShoppingCarModal from "./ShoppingCarModal";
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
  const [isShowShoppingCar, setIsShowShoppingCar] = useState(false);

  const fetchData = async () => {
    try {
      const { data } = await getMenu();
      setMenuData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadData = async () => {
    try {
      const data = await postShoppingCar(shoppingCar);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    // console.log("這是：", tableId, " 的 ", shoppingCar);
  }, [shoppingCar]);
  return (
    <>
      {isShowShoppingCar && (
        <ShoppingCarModal
          shoppingCar={shoppingCar}
          setShoppingCar={setShoppingCar}
        />
      )}
      <div className={style.backdrop} onClick={onClick} />
      <div className={style.orderModal_container}>
        <div className={style.addImage}>
          <button
            className={style.addImage__btn}
            onClick={() => {
              setIsShowShoppingCar((prev) => !prev);
            }}
          >
            <TiShoppingCart size={50} />
          </button>
        </div>
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

import { useState, useEffect } from "react";
import { TiShoppingCart } from "react-icons/ti";

import { getMenu } from "@/services/MenuAPI";
import { MenuProps, ShoppingCarProps, TableDataBase } from "@/utils/type";
import OrderMenuCard from "@/components/card/OrderMenuCard";
import ShoppingCarModal from "./ShoppingCarModal";
import { Alert } from "@/utils/getSweetalert";
import style from "./OrderModal.module.scss";

interface OrderModalProps {
  tableId: string;
  temporary: ShoppingCarProps[];
  setTemporary: (temporary: ShoppingCarProps[]) => void;
  dataBase: TableDataBase[];
  setDataBase: (shoppingCar: TableDataBase[]) => void;
  onClick: () => void;
}
function OrderModal({
  onClick,
  tableId,
  temporary,
  setTemporary,
  dataBase,
  setDataBase,
}: OrderModalProps) {
  const [menuData, setMenuData] = useState([]);
  const [isShowShoppingCar, setIsShowShoppingCar] = useState(false);
  const fetchMenuData = async () => {
    try {
      const { data } = await getMenu();
      setMenuData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMenuData();
  }, []);
  return (
    <>
      {isShowShoppingCar && (
        <ShoppingCarModal
          temporary={temporary}
          setTemporary={setTemporary}
          dataBase={dataBase}
          setDataBase={setDataBase}
          onClick={onClick}
          setIsShowShoppingCar={setIsShowShoppingCar}
        />
      )}
      <div className={style.backdrop} onClick={onClick} />
      <div className={style.orderModal_container}>
        <div className={style.addImage}>
          <button
            className={style.addImage__btn}
            onClick={() => {
              if (temporary.length === 0) {
                Alert.fire({
                  title: "您還沒有點餐！",
                  icon: "error",
                });
                return;
              }
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
                  temporary={temporary}
                  setTemporary={setTemporary}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
export default OrderModal;

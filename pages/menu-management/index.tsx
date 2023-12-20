import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { IoMdAdd } from "react-icons/io";

import useAuthCheck from "@/hooks/useAuthCheck";
import { getMenu } from "@/services/MenuAPI";
import { MenuProps } from "@/utils/type";
import { MenuContext } from "@/context/MenuContext";
import MenuCard from "@/components/card/MenuCard";

import style from "./index.module.scss";

function MenuManagement() {
  useAuthCheck();
  const { menuData, setMenuData, dataUpdated } = useContext(MenuContext);
  const router = useRouter();

  const fetchData = async () => {
    try {
      const data = await getMenu();
      setMenuData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dataUpdated]);
  return (
    <>
      <div className={style.menuManagement_container}>
        <div className={style.addImage}>
          <button
            className={style.addImage__btn}
            onClick={() => {
              router.push({
                pathname: "/menu-management/addMenu",
              });
            }}
          >
            <IoMdAdd size={50} />
          </button>
        </div>
        <div className={style.imgBox}>
          {menuData &&
            menuData.map((item: MenuProps) => {
              return (
                <MenuCard
                  key={item.productId}
                  productId={item.productId}
                  imageUrl={item.imageUrl}
                  name={item.name}
                  place={item.place}
                  selling={item.selling}
                  isActive={item.isActive}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
export default MenuManagement;

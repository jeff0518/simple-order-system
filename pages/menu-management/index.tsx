import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { IoMdAdd } from "react-icons/io";

import { getMenu } from "@/services/MenuAPI";
import { MenuProps } from "@/utils/type";
import MenuCard from "@/components/card/MenuCard";

import style from "./index.module.scss";
function MenuManagement() {
  const [menuData, setMenuData] = useState<MenuProps[]>([]);
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
  }, []);
  return (
    <>
      <div className={style.menuManagement_container}>
        <div className={style.addImage}>
          <button
            className={style.addImage__btn}
            onClick={() => {
              router.push("/menu-management/addMenu");
            }}
          >
            <IoMdAdd size={50} />
          </button>
        </div>
        <div className={style.imgBox}>
          {menuData &&
            menuData.map((item) => {
              return (
                <MenuCard
                  imageUrl={item.imageUrl}
                  name={item.name}
                  place={item.place}
                  selling={item.selling}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
export default MenuManagement;

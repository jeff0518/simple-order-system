import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

import MenuCard from "@/components/card/MenuCard";

import style from "./index.module.scss";
function MenuManagement() {
  return (
    <>
      <div className={style.menuManagement_container}>
        <div className={style.addImage}>
          <button className={style.addImage__btn} onClick={() => {}}>
            <IoMdAdd size={50} />
          </button>
        </div>
        <div className={style.imgBox}>
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
      </div>
    </>
  );
}
export default MenuManagement;

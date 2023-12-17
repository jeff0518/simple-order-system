import { useState } from "react";
import { useRouter } from "next/router";
import { IoMdAdd } from "react-icons/io";

import MenuCard from "@/components/card/MenuCard";

import style from "./index.module.scss";
function MenuManagement() {
  const router = useRouter();
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

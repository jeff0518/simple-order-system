import MenuCard from "@/components/card/MenuCard";

import style from "./index.module.scss";
function MenuManagement() {
  return (
    <div className={style.menuManagement_container}>
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
  );
}
export default MenuManagement;

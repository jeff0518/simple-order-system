import MenuIdModal from "@/components/modal/MenuIdModal";

import style from "./index.module.scss";
function MenuIdPage() {
  return (
    <div className={style.menuIdPage_container}>
      <MenuIdModal />
    </div>
  );
}
export default MenuIdPage;

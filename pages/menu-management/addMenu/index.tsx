import AddMenuModal from "@/components/modal/AddMenuModal";

import style from "./index.module.scss";
function AddMenuPage() {
  return (
    <div className={style.addMenu_container}>
      <AddMenuModal />
    </div>
  );
}
export default AddMenuPage;

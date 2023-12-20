import AddMenuModal from "@/components/modal/AddMenuModal";
import useAuthCheck from "@/hooks/useAuthCheck";

import style from "./index.module.scss";
function AddMenuPage() {
  useAuthCheck();
  return (
    <div className={style.addMenu_container}>
      <AddMenuModal />
    </div>
  );
}
export default AddMenuPage;

import Image from "next/image";
import ButtonUI from "../shared/ButtonUI";
import ChangeInfoCard from "../card/ChangeInfoCard";
import { AiOutlineFolderAdd } from "react-icons/ai";

import beef from "../../assets/image/beef.jpg";

import style from "./MenuIdModal.module.scss";

function MenuIdModal() {
  const fileChangeHandler = () => {};
  const uploadHandler = () => {};
  return (
    <div className={style.menuIdModal_container}>
      <div className={style.infoBox}>
        <div className={style.image}>
          <Image
            src={beef}
            width={400}
            height={300}
            alt="圖片"
            objectFit="fill"
            className={style.image_img}
          />
        </div>
        <div className={style.info}>
          <ChangeInfoCard type="string" fistText="名稱" lastText="牛肉" />
          <ChangeInfoCard type="string" fistText="產地" lastText="美國" />
          <ChangeInfoCard type="number" fistText="售價" lastText={200} />
        </div>
      </div>
      <div className={style.controlPanel}>
        <label className={style.controlPanel_label}>
          <input
            className={style.controlPanel_input}
            type="file"
            onChange={fileChangeHandler}
          />
          <AiOutlineFolderAdd size={25} /> 上傳新圖片
        </label>

        <ButtonUI
          text="儲存"
          btnStyle="btn__pill__modal"
          onClick={uploadHandler}
        />
      </div>
    </div>
  );
}
export default MenuIdModal;

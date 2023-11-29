import Image from "next/image";
import InputUI from "../shared/InputUI";
import ButtonUI from "../shared/ButtonUI";
import { AiOutlineFolderAdd } from "react-icons/ai";

import defaultImage from "../../assets/image/default.jpg";

import style from "./AddMenuModal.module.scss";

function AddMenuModal() {
  const addNewMenuHandler = () => {};
  const uploadNewImageHandler = () => {};
  return (
    <div className={style.addMenuModal_container}>
      <div className={style.infoBox}>
        <div className={style.image}>
          <Image
            src={defaultImage}
            width={400}
            height={300}
            alt="圖片"
            objectFit="fill"
            className={style.image_img}
          />
        </div>
        <div className={style.info}>
          <InputUI
            inputId="productName"
            inputPlaceholder="請輸入商品名稱"
            inputStyle="input_control"
            inputText="名稱"
            inputType="string"
          />
          <InputUI
            inputId="placeOfOrigin"
            inputPlaceholder="請輸入商品產地"
            inputStyle="input_control"
            inputText="產地"
            inputType="string"
          />
          <InputUI
            inputId="sellingPrice"
            inputPlaceholder="請輸入商品售價"
            inputStyle="input_control"
            inputText="售價"
            inputType="number"
          />
        </div>
      </div>
      <div className={style.controlPanel}>
        <label className={style.controlPanel_label}>
          <input
            className={style.controlPanel_input}
            type="file"
            onClick={uploadNewImageHandler}
          />
          <AiOutlineFolderAdd size={25} />{" "}
          <span className={style.controlPanel_span}>上傳新圖片</span>
        </label>

        <ButtonUI
          text="儲存"
          btnStyle="btn__pill__modal"
          onClick={addNewMenuHandler}
        />
      </div>
    </div>
  );
}
export default AddMenuModal;

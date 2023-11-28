import Image from "next/image";
import ButtonUI from "../shared/ButtonUI";

import style from "./MenuCard.module.scss";
import beef from "../../assets/image/beef.jpg";
function MenuCard() {
  return (
    <div className={style.menuCard_container}>
      <Image
        src={beef}
        width={300}
        height={200}
        alt="圖片"
        objectFit="fill"
        className={style.menuCard_container_img}
      />
      <div className={style.menuCard_container_info}>
        <div className={style.title}>品名：牛肉</div>
        <div className={style.origin}>產地：美國</div>
        <div className={style.sellingPrice}>售價：200元</div>
        <div className={style.controlPanel}>
          <ButtonUI
            text="修改"
            btnStyle="btn__pill__small"
            onClick={() => {}}
          />
          <ButtonUI
            text="沽清"
            btnStyle="btn__pill__small"
            onClick={() => {}}
          />
          <ButtonUI
            text="刪除"
            btnStyle="btn__pill__small"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
export default MenuCard;

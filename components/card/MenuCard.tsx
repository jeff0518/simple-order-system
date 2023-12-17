import Image from "next/image";
import ButtonUI from "../shared/ButtonUI";
import { MenuProps } from "@/utils/type";

import style from "./MenuCard.module.scss";
import beef from "../../assets/image/beef.jpg";
function MenuCard({ imageUrl, name, place, selling }: MenuProps) {
  const imgUrl = typeof imageUrl === "string" ? imageUrl : undefined;
  return (
    <div className={style.menuCard_container}>
      <Image
        src={imgUrl ? imgUrl : beef}
        width={300}
        height={200}
        alt="圖片"
        objectFit="fill"
        className={style.menuCard_container_img}
      />
      <div className={style.menuCard_container_info}>
        <div className={style.title}>品名：{name}</div>
        <div className={style.origin}>產地：{place}</div>
        <div className={style.sellingPrice}>售價： {selling} 元</div>
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

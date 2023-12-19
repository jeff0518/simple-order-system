import Image from "next/image";

import { patchIsActive } from "@/services/MenuAPI";
import ButtonUI from "../shared/ButtonUI";
import { MenuProps } from "@/utils/type";

import style from "./MenuCard.module.scss";
import beef from "../../assets/image/beef.jpg";
function MenuCard({
  productId,
  imageUrl,
  name,
  place,
  selling,
  isActive,
}: MenuProps) {
  const imgUrl = typeof imageUrl === "string" ? imageUrl : undefined;

  const changeIsActiveHandler = async () => {
    console.log("轉換前： " + isActive);
    isActive = !isActive;
    console.log("轉換後： " + isActive);
    const result = await patchIsActive({ isActive, productId });
    console.log(result);
  };
  return (
    <div className={style.menuCard_container}>
      {!isActive && (
        <div className={style.isActive}>
          <p>售完！</p>
          <ButtonUI
            text="解除"
            btnStyle="btn__pill__modal"
            onClick={changeIsActiveHandler}
          />
        </div>
      )}
      <img
        src={imgUrl}
        alt="圖片"
        className={style.menuCard_container_img}
        width={300}
        height={200}
        style={{ objectFit: "fill" }}
      />
      {/* <Image
        src={imgUrl ? imgUrl : beef}
        width={300}
        height={200}
        alt="圖片"
        objectFit="fill"
        className={style.menuCard_container_img}
      /> */}
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
            text="禁售"
            btnStyle="btn__pill__small"
            onClick={changeIsActiveHandler}
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

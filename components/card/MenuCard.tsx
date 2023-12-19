import Image from "next/image";
import { useState, useContext } from "react";

import { patchIsActive, deleteMenu } from "@/services/MenuAPI";
import ButtonUI from "../shared/ButtonUI";
import { MenuProps } from "@/utils/type";
import { MenuContext } from "@/context/MenuContext";

import style from "./MenuCard.module.scss";
function MenuCard({
  productId,
  imageUrl,
  name,
  place,
  selling,
  isActive: initialIsActive,
}: MenuProps) {
  const { setDataUpdated } = useContext(MenuContext);
  const [isActive, setIsActive] = useState(initialIsActive);
  const imgUrl = typeof imageUrl === "string" ? imageUrl : undefined;

  const changeIsActiveHandler = async () => {
    setIsActive((prev) => !prev);
    await patchIsActive({ isActive: !isActive, productId });
  };

  const deleteMenuHandler = async () => {
    await deleteMenu(productId).then(() => {
      setDataUpdated((prev: boolean) => !prev);
    });
  };
  return (
    <div className={style.menuCard_container}>
      {!isActive && (
        <div className={style.isActive}>
          <p>此商品禁售！</p>
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
            onClick={deleteMenuHandler}
          />
        </div>
      </div>
    </div>
  );
}
export default MenuCard;

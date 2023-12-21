import { MenuProps } from "@/utils/type";
import ButtonUI from "../shared/ButtonUI";
import style from "./OrderMenuCard.module.scss";
function OrderMenuCard({
  productId,
  imageUrl,
  name,
  selling,
  isActive,
}: MenuProps) {
  const imgUrl = typeof imageUrl === "string" ? imageUrl : undefined;
  return (
    <div className={style.orderMenuCard_container}>
      <div className={style.imgBox}>
        <img
          src={imgUrl}
          alt="圖片"
          className={style.alreadyOrder_img}
          width={180}
          height={120}
        />
      </div>
      <div className={style.orderBox}>
        <div className={style.info}>
          <p>名稱： {name}</p>
          <p>售價： {selling} 元</p>
        </div>
        <div className={style.btn}>
          <ButtonUI
            text="加入"
            btnStyle="btn__pill__order"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
export default OrderMenuCard;

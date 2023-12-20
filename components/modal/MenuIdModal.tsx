import { useRef, useState, useContext } from "react";
import { FormEvent } from "@/utils/type";
import { Toast } from "@/utils/getSweetalert";
import { AiOutlineFolderAdd } from "react-icons/ai";

import ButtonUI from "../shared/ButtonUI";
import ChangeInfoCard from "../card/ChangeInfoCard";
import { patchMenu } from "@/services/MenuAPI";
import { MenuContext } from "@/context/MenuContext";

import style from "./MenuIdModal.module.scss";

interface MenuIdModalProps {
  productId: string;
  name: string;
  place: string;
  selling: string;
  imageUrl: string | undefined;
  onClick: () => void;
}

function MenuIdModal({
  productId,
  imageUrl,
  name,
  place,
  selling,
  onClick,
}: MenuIdModalProps) {
  const nameInputRef = useRef<HTMLInputElement>(null!);
  const placeInputRef = useRef<HTMLInputElement>(null!);
  const sellingInputRef = useRef<HTMLInputElement>(null!);
  const { setDataUpdated } = useContext(MenuContext);
  const [changeImageFile, setChangeImageFile] = useState<
    string | ArrayBuffer | null
  >();
  const [changeImagePreview, setChangeImagePreview] = useState<
    string | undefined
  >(undefined);

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();

    if (
      !nameInputRef.current ||
      !placeInputRef.current ||
      !sellingInputRef.current
    ) {
      console.log("未補抓到InputRef");
      Toast.fire({
        icon: "warning",
        title: "輸入欄位填寫不完全!",
      });
      return;
    }

    const productName = nameInputRef.current.value;
    const placeOfOrigin = placeInputRef.current.value;
    const sellingPrice = sellingInputRef.current.value;
    const image = changeImageFile ? changeImageFile : imageUrl;

    try {
      const result = await patchMenu({
        productId,
        productName,
        placeOfOrigin,
        sellingPrice,
        image,
      });
      if (result) {
        Toast.fire({
          icon: "success",
          title: "修改商品資料成功!",
        });
      } else {
        Toast.fire({
          icon: "warning",
          title: "修改商品資料失敗!",
        });
      }
      setDataUpdated((prev: boolean) => !prev);
      onClick();
    } catch (error) {
      Toast.fire({
        icon: "warning",
        title: "修改商品資料失敗!",
      });
      console.log(error);
    }
  };

  return (
    <>
      <div className={style.backdrop} onClick={onClick} />
      <form className={style.menuIdModal_container} onSubmit={submitHandler}>
        <div className={style.infoBox}>
          <div className={style.image}>
            <img
              src={changeImagePreview || imageUrl}
              alt="圖片"
              className={style.container_img}
              width={300}
              height={200}
              style={{ objectFit: "fill" }}
            />
          </div>
          <div className={style.info}>
            <ChangeInfoCard
              type="text"
              fistText="名稱"
              lastText={name}
              inputRef={nameInputRef}
            />
            <ChangeInfoCard
              type="text"
              fistText="產地"
              lastText={place}
              inputRef={placeInputRef}
            />
            <ChangeInfoCard
              type="text"
              fistText="售價"
              lastText={selling}
              inputRef={sellingInputRef}
            />
          </div>
        </div>
        <div className={style.controlPanel}>
          <label className={style.controlPanel_label}>
            <input
              className={style.controlPanel_input}
              type="file"
              name="file"
              accept="image/*"
              onChange={(event) => {
                const selectedFile = event.target.files?.[0];

                if (selectedFile) {
                  const reader = new FileReader();
                  reader.readAsDataURL(selectedFile);
                  reader.onloadend = (e) => {
                    const imageData = e.target ? e.target.result : null;
                    if (imageData && e.target) {
                      setChangeImageFile(e.target.result);
                    }
                  };
                  const previewUrl = URL.createObjectURL(selectedFile);
                  setChangeImagePreview(previewUrl);
                } else {
                  setChangeImagePreview(undefined);
                }
              }}
            />
            <AiOutlineFolderAdd size={25} /> 上傳新圖片
          </label>

          <ButtonUI text="儲存" btnStyle="btn__pill__modal" />
        </div>
      </form>
    </>
  );
}
export default MenuIdModal;

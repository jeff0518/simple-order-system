import { useRef, useState, FormEvent } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { AiOutlineFolderAdd } from "react-icons/ai";

import { upload, createMenu } from "@/services/MenuAPI";
import { Toast } from "@/utils/getSweetalert";
import InputUI from "../shared/InputUI";
import ButtonUI from "../shared/ButtonUI";
import defaultImage from "../../assets/image/default.jpg";
import style from "./AddMenuModal.module.scss";

function AddMenuModal() {
  const router = useRouter();
  const [imageFile, setImageFile] = useState<string | ArrayBuffer | null>();
  const [imagePreview, setImagePreview] = useState<string | undefined>(
    undefined
  );
  const nameInputRef = useRef<HTMLInputElement>(null!);
  const placeInputRef = useRef<HTMLInputElement>(null!);
  const priceInputRef = useRef<HTMLInputElement>(null!);

  const addNewMenuHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!imageFile) {
      Toast.fire({
        icon: "warning",
        title: "上傳圖片失敗！",
      });
      return;
    }

    try {
      const productName = nameInputRef.current.value;
      const placeOfOrigin = placeInputRef.current.value;
      const sellingPrice = priceInputRef.current.value;
      const image = imageFile;

      const result = await createMenu({
        productName,
        placeOfOrigin,
        sellingPrice,
        image,
      });
      console.log(result);
      Toast.fire({
        icon: "success",
        title: "建立新商品成功!",
      });
      router.push("/menu-management");
    } catch (error) {
      console.log(error);
      Toast.fire({
        icon: "warning",
        title: "建立新商品失敗！",
      });
    }
  };
  // const uploadNewImageHandler = () => {};
  return (
    <form className={style.addMenuModal_container} onSubmit={addNewMenuHandler}>
      <div className={style.infoBox}>
        <div className={style.image}>
          <Image
            src={imagePreview || defaultImage}
            width={400}
            height={300}
            alt="圖片"
            priority
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
            inputRef={nameInputRef}
          />
          <InputUI
            inputId="placeOfOrigin"
            inputPlaceholder="請輸入商品產地"
            inputStyle="input_control"
            inputText="產地"
            inputType="string"
            inputRef={placeInputRef}
          />
          <InputUI
            inputId="sellingPrice"
            inputPlaceholder="請輸入商品售價"
            inputStyle="input_control"
            inputText="售價"
            inputType="number"
            inputRef={priceInputRef}
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
                    setImageFile(e.target.result);
                  }
                };
                const previewUrl = URL.createObjectURL(selectedFile);
                setImagePreview(previewUrl);
              } else {
                setImagePreview(undefined);
              }
            }}
          />
          <AiOutlineFolderAdd size={25} />
          <span className={style.controlPanel_span}>上傳新圖片</span>
        </label>

        <ButtonUI text="儲存" btnStyle="btn__pill__modal" />
      </div>
    </form>
  );
}
export default AddMenuModal;

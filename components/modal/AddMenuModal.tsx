import { useRef, useState, FormEvent, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { AiOutlineFolderAdd } from "react-icons/ai";

import { MenuContext } from "@/context/MenuContext";
import { createMenu } from "@/services/MenuAPI";
import { Toast } from "@/utils/getSweetalert";
import InputUI from "../shared/InputUI";
import ButtonUI from "../shared/ButtonUI";
import defaultImage from "../../assets/image/default.jpg";
import style from "./AddMenuModal.module.scss";

function AddMenuModal() {
  const router = useRouter();
  const { menuData, setMenuData } = useContext(MenuContext);
  const [imageFile, setImageFile] = useState<string | ArrayBuffer | null>();
  const [imagePreview, setImagePreview] = useState<string | undefined>(
    undefined
  );
  const [productId, setProductId] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState("");
  const nameInputRef = useRef<HTMLInputElement>(null!);
  const placeInputRef = useRef<HTMLInputElement>(null!);
  const priceInputRef = useRef<HTMLInputElement>(null!);

  const handleRadioChange = (event: any) => {
    const { value } = event.target;
    setSelectedValue(value);
  };

  const productIdHandler = () => {
    if (menuData.length > 0) {
      const filteredData = menuData.filter((item: any) => {
        const itemSelectedValue = item.productId.split("_")[0];
        return itemSelectedValue === selectedValue;
      });

      if (filteredData.length > 0) {
        const maxNumber = Math.max(
          ...filteredData.map((item: any) =>
            parseInt(item.productId.split("_")[1], 10)
          )
        );
        const formattedNumber = String(maxNumber + 1).padStart(5, "0");
        setProductId(selectedValue + "_" + formattedNumber);
      } else {
        setProductId(selectedValue + "_" + "00001");
      }
      // let index = menuData.length - 1;
      // let lastProductId = menuData[index].productId.split("_");
      // if (lastProductId[0] === selectedValue) {
      //   let changeNumber = Number(lastProductId[1]) + 1;
      //   let formattedNumber = String(changeNumber).padStart(5, "0");
      //   setProductId(selectedValue + "_" + formattedNumber);
      // } else {
      //   setProductId(selectedValue + "_" + "00001");
      // }
    } else {
      setProductId(selectedValue + "_" + "00001");
    }
  };

  const addNewMenuHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedValue) {
      Toast.fire({
        icon: "warning",
        title: "沒有點選產品總類！",
      });
      return;
    }
    if (!imageFile) {
      Toast.fire({
        icon: "warning",
        title: "上傳圖片失敗或沒有選擇圖片！",
      });
      return;
    }

    try {
      const productName = nameInputRef.current.value;
      const placeOfOrigin = placeInputRef.current.value;
      const sellingPrice = priceInputRef.current.value;
      const image = imageFile;

      const result = await createMenu({
        productId,
        productName,
        placeOfOrigin,
        sellingPrice,
        image,
      });
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

  useEffect(() => {
    productIdHandler();
  }, [selectedValue]);

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
          <div className={style.info_input_control}>
            <label>
              <input
                type="radio"
                value="meat"
                checked={selectedValue === "meat"}
                onChange={handleRadioChange}
                required
              />
              <span>肉類</span>
            </label>
            <label>
              <input
                type="radio"
                value="veg"
                checked={selectedValue === "veg"}
                onChange={handleRadioChange}
              />
              <span>蔬菜</span>
            </label>
            <label>
              <input
                type="radio"
                value="ings"
                checked={selectedValue === "ings"}
                onChange={handleRadioChange}
              />
              <span>火鍋料</span>
            </label>
            <label>
              <input
                type="radio"
                value="drink"
                checked={selectedValue === "drink"}
                onChange={handleRadioChange}
              />
              <span>飲料</span>
            </label>
          </div>
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

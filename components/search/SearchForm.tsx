import { useRef } from "react";

import InputUI from "../shared/InputUI";
import ButtonUI from "../shared/ButtonUI";

import style from "./SearchForm.module.scss";

interface SearchFormProps {
  inputId: string;
  inputPlaceholder: string;
  inputText: string;
  onClick: () => void;
}

function SearchForm(props: SearchFormProps) {
  const { inputText, inputId, inputPlaceholder, onClick } = props;
  const searchInputRef = useRef<HTMLInputElement>(null!);
  return (
    <div className={style.searchForm_container}>
      <div className={style.searchForm_input}>
        <InputUI
          inputId={inputId}
          inputPlaceholder={inputPlaceholder}
          inputStyle="input_search"
          inputText={inputText}
          inputType="text"
          inputRef={searchInputRef}
        />
      </div>
      <div className={style.searchForm_bnt}>
        <ButtonUI text="送出" btnStyle="btn__pill" onClick={onClick} />
      </div>
    </div>
  );
}

export default SearchForm;

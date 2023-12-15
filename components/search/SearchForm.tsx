import { useRef } from "react";
import { FormEvent } from "@/utils/type";

import InputUI from "../shared/InputUI";
import ButtonUI from "../shared/ButtonUI";

import style from "./SearchForm.module.scss";

interface SearchFormProps {
  inputId: string;
  inputPlaceholder: string;
  inputText: string;
  setState: (value: string) => void;
  onClick: () => void;
}

function SearchForm(props: SearchFormProps) {
  const { inputText, inputId, inputPlaceholder, setState, onClick } = props;
  const searchInputRef = useRef<HTMLInputElement>(null!);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enterSearchInput = searchInputRef.current.value;
    setState(enterSearchInput);
  };
  return (
    <form className={style.searchForm_container} onSubmit={submitHandler}>
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
        <ButtonUI text="送出" btnStyle="btn__pill" />
      </div>
    </form>
  );
}

export default SearchForm;

import style from "./InputUI.module.scss";

interface InputUIProps {
  inputId: string;
  inputType: string;
  inputText: string;
  inputStyle: string;
  inputPlaceholder: string;
  inputMaxLength?: number;
  inputPattern?: string;
  inputValue?: string;
  inputRef: React.RefObject<HTMLInputElement>;
}

function InputUI(props: InputUIProps) {
  const {
    inputId,
    inputType,
    inputText,
    inputStyle,
    inputPlaceholder,
    inputRef,
    inputMaxLength,
    inputPattern,
    inputValue,
  } = props;
  return (
    <div className={style[inputStyle]}>
      <label htmlFor={inputId}>{inputText}</label>
      <input
        type={inputType}
        id={inputId}
        placeholder={inputPlaceholder}
        ref={inputRef}
        maxLength={inputMaxLength}
        pattern={inputPattern}
        value={inputValue}
        required
      />
    </div>
  );
}

export default InputUI;

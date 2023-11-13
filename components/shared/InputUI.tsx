import style from "./InputUI.module.scss";

interface InputUIProps {
  inputId: string;
  inputType: string;
  inputText: string;
  inputStyle: string;
  inputPlaceholder: string;
}

function InputUI(props: InputUIProps) {
  const { inputId, inputType, inputText, inputStyle, inputPlaceholder } = props;
  return (
    <div className={style[inputStyle]}>
      <label htmlFor={inputId}>{inputText}</label>
      <input
        type={inputType}
        id={inputId}
        placeholder={inputPlaceholder}
        required
      />
    </div>
  );
}

export default InputUI;

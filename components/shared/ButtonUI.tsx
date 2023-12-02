import style from "./ButtonUI.module.scss";

interface ButtonUIProps {
  text: string;
  btnStyle: string;
  onClick?: () => void;
}

function ButtonUI(props: ButtonUIProps) {
  const { text, btnStyle, onClick } = props;
  return (
    <button className={style[btnStyle]} onClick={onClick}>
      {text}
    </button>
  );
}

export default ButtonUI;

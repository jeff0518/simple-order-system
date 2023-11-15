import InputUI from "../shared/InputUI";
import ButtonUI from "../shared/ButtonUI";
import style from "./AuthForm.module.scss";

function AuthForm() {
  const submitHandler = () => {};
  const authHandler = () => {};

  return (
    <div className={style.authForm_container}>
      <section className={style.auth}>
        <p>登入</p>
        <form onSubmit={submitHandler}>
          <InputUI
            inputId="text"
            inputType="text"
            inputStyle="input_control"
            inputText="帳號:"
            inputPlaceholder="請輸入帳號"
          />
          <InputUI
            inputId="password"
            inputType="password"
            inputStyle="input_control"
            inputText="密碼:"
            inputPlaceholder="請輸入密碼"
          />
          <div className={style.bnt_box}>
            <ButtonUI btnStyle="btn__pill" text="Login" onClick={authHandler} />
          </div>
        </form>
      </section>
    </div>
  );
}

export default AuthForm;

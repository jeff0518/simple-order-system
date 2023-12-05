import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { FormEvent } from "@/utils/type";
import { CreateUser } from "@/hooks/CreateUser";
import { Toast } from "@/utils/getSweetalert";

import InputUI from "../shared/InputUI";
import ButtonUI from "../shared/ButtonUI";
import style from "./AuthForm.module.scss";
import { signIn } from "next-auth/react";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const accountInputRef = useRef<HTMLInputElement>(null!);
  const passwordInputRef = useRef<HTMLInputElement>(null!);
  const router = useRouter();

  async function submitHandler(event: FormEvent) {
    event.preventDefault();

    if (!accountInputRef.current || !passwordInputRef.current) {
      console.log("未補抓到accountInputRef或passwordInputRef");
      Toast.fire({
        icon: "warning",
        title: "輸入欄位填寫不完全!",
      });
      return;
    }

    const enterAccount = accountInputRef.current.value;
    const enterPassword = passwordInputRef.current.value;

    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        account: enterAccount,
        password: enterPassword,
      });

      if (result && !result.error) {
        Toast.fire({
          icon: "success",
          title: "成功登入!",
        });
        router.replace("/main");
      } else {
        Toast.fire({
          icon: "warning",
          title: "帳號密碼錯誤!",
        });
      }
    } else {
      try {
        const result = await CreateUser(enterAccount, enterPassword);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }

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
            inputRef={accountInputRef}
          />
          <InputUI
            inputId="password"
            inputType="password"
            inputStyle="input_control"
            inputText="密碼:"
            inputPlaceholder="請輸入密碼"
            inputRef={passwordInputRef}
          />
          <div className={style.bnt_box}>
            <ButtonUI btnStyle="btn__pill" text="Login" />
          </div>
        </form>
      </section>
    </div>
  );
}

export default AuthForm;

import { useRef } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

import style from "./Burger.module.scss";

function Burger() {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const { data: session, status } = useSession();
  const loading = status === "loading";

  function logoutHandler() {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
    signOut();
  }
  // 點擊後收起漢堡排
  const linkClickHandler = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };
  return (
    <div className={style.flexBox}>
      <input
        type="checkbox"
        className={style.navbar_toggle}
        id="navbar_toggle"
        ref={checkboxRef}
      />
      <nav className={style.nav}>
        {session && (
          <ul className={style.nav_list}>
            <li className={`${style.nav_item}`}>
              <Link
                className={style.nav_link}
                href="/main"
                onClick={linkClickHandler}
              >
                首頁
              </Link>
            </li>
            <li className={`${style.nav_item}`}>
              <Link
                href="/menu-management"
                className={style.nav_link}
                onClick={linkClickHandler}
              >
                商品內容
              </Link>
            </li>
            {/* <li className={`${style.nav_item}`}>
              <Link
                href="/data"
                className={style.nav_link}
                onClick={linkClickHandler}
              >
                數據資料庫
              </Link>
            </li> */}
            <li className={`${style.nav_item}`}>
              <Link
                href="/member-management"
                className={style.nav_link}
                onClick={linkClickHandler}
              >
                會員資料庫
              </Link>
            </li>
            <li className={`${style.nav_item}`}>
              <Link
                href="/employee"
                className={style.nav_link}
                onClick={linkClickHandler}
              >
                員工資料庫
              </Link>
            </li>
            <li className={`${style.nav_phone}`}>
              <Link
                href="/data"
                className={style.nav_link}
                onClick={linkClickHandler}
              >
                數據資料庫
              </Link>
            </li>
            <li className={`${style.nav_item}`}>
              <Link href="/" className={style.nav_link} onClick={logoutHandler}>
                登出
              </Link>
            </li>
          </ul>
        )}
      </nav>
      <label className={style.navbar_toggle_label} htmlFor="navbar_toggle">
        <span className={style.hamburger} />
      </label>
    </div>
  );
}

export default Burger;

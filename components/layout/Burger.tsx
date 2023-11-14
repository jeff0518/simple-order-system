import style from "./Burger.module.scss";

function Burger() {
  return (
    <div className={style.flexBox}>
      <input
        type="checkbox"
        className={style.navbar_toggle}
        id="navbar_toggle"
      />
      <nav className={style.nav}>
        <ul className={style.nav_list}>
          <li className={style.nav_item}>
            <div className={style.nav_link}>首頁</div>
          </li>
          <li className={style.nav_item}>
            <div className={style.nav_link}>商品</div>
          </li>
          <li className={style.nav_item}>
            <div className={style.nav_link}>數據</div>
          </li>
          <li className={style.nav_item}>
            <div className={style.nav_link}>會員</div>
          </li>
          <li className={style.nav_item}>
            <div className={style.nav_link}>員工</div>
          </li>
        </ul>
      </nav>
      <label className={style.navbar_toggle_label} htmlFor="navbar_toggle">
        <span className={style.hamburger} />
      </label>
    </div>
  );
}

export default Burger;

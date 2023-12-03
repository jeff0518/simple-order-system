import Swal from "sweetalert2";

import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  heightAuto: false,
  width: 250,
  timer: 3000,
});

export const successAlert = MySwal.fire({
  icon: "success",
  title: "登入成功",
  text: "歡迎回來！",
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  heightAuto: false,
  width: 250,
  timer: 3000,
});

export const errorAlert = MySwal.fire({
  icon: "error",
  title: "登入失敗",
  text: "請檢查您的帳號和密碼。",
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  heightAuto: false,
  width: 250,
  timer: 3000,
});

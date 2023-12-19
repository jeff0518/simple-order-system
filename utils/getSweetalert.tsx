import Swal from "sweetalert2";

import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  // heightAuto: false,
  width: 300,
  timer: 2000,
});

export const Alert = Swal.mixin({
  showConfirmButton: false,
  width: 1200,
  timer: 3000,
});

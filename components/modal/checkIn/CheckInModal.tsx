import ButtonUI from "@/components/shared/ButtonUI";
import style from "./CheckInModal.module.scss";
function CheckInModal() {
  return (
    <>
      <div className={style.checkIn_container}>
        <div className={style.title}>XXX 辛苦了！</div>
        <div className={style.buttonBox}>
          <ButtonUI
            btnStyle="btn__checkIn__pill"
            text="上班"
            onClick={() => {}}
          />
          <ButtonUI
            btnStyle="btn__checkIn__pill"
            text="下班"
            onClick={() => {}}
          />
        </div>
      </div>
    </>
  );
}
export default CheckInModal;

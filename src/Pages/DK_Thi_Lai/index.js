import style from "../Form_Generate_CSS/Form_Generate_CSS.module.scss";
import classNames from "classnames/bind";
import FormModelContent from "../../Compoments/FormModelContentDK_ThiLai_HocLai";
import NoteText from "../../Compoments/NoteText";

const cx = classNames.bind(style);

function TextNote() {
  return (
    <>
      <span>
        <i>
          <b>* Ghi chú: </b>Học phần có kết quả thi lần 1 điểm D và D+ mới đủ
          điều kiện thi cải thiện. Khi đăng ký thi cải thiện thành công hệ thống
          tự động hủy kết quả thi lần 1
        </i>
      </span>
    </>
  );
}

function DK_Thi_Lai() {
  console.log("ào Mainv");
  return (
    <div className={cx("wrapper")}>
      <h3 className={cx("title")}>
        <span>ĐĂNG KÍ Thi LẠI</span>
      </h3>

      {/* From đăng ký thi lại  */}
      <FormModelContent />

      <div className={cx("wrapper-footer")}>
        <div className={cx("note")}>
          <NoteText title={"Ghi chú"} content={<TextNote />} />
        </div>
      </div>
    </div>
  );
}

export default DK_Thi_Lai;

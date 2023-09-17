import style from "../Form_Generate_CSS/Form_Generate_CSS.module.scss";
import classNames from "classnames/bind";
import FormModelContent from "../../Compoments/FormModelContentDK_ThiLai_HocLai";
import NoteText from "../../Compoments/NoteText";

const cx = classNames.bind(style);
function TextNote() {
  return (
    <>
      <p>
        Ghi chú: - Để đăng ký học lại, học cải thiện điểm, sinh viên cần lưu ý:
      </p>
      <p>
        + Chỉ được đăng ký học cải thiện đối với các học phần đạt điểm D, D+.
      </p>
      <p>
        + Nghiên cứu kỹ TKB để chọn các lớp học phần sao cho không trùng với TKB
        của các học phần đã đăng ký.
      </p>
      <p>
        + Đối với các môn bị trùng TKB không chọn được lớp học phần học ghép thì
        ghi rõ vào phần ghi chú là trùng lịch học - GVCN/CVHT kiểm tra học phần
        sinh viên đăng ký và ký xác nhận gửi TKGV khoa tổng hợp lại gửi cho
        phòng QLĐT theo đúng thời gian trong kế hoạch để xếp lịch học cho sinh
        viên.
      </p>
      <p>
        - Sinh viên không chủ động đăng ký học trả nợ các học phần sẽ phải ra
        trường muộn so với khóa học và Nhà trường sẽ xóa tên nếu hết thời gian
        tối đa hoàn thành chương trình đào tạo theo quy định.
      </p>
    </>
  );
}

function DK_Hoc_Lai() {
  console.log('dk học lại re render');
  return (
    <div className={cx("wrapper")}>
      <h3 className={cx("title")}>
        <span>ĐĂNG KÍ Học Lại,Cải Thiện</span>
      </h3>

      {/* From đăng ký thi lại  */}
      <FormModelContent checkTable={1} />

      <div className={cx("wrapper-footer")}>
        <div className={cx("note")}>
            <NoteText title={"Chú ý "} content={<TextNote />} />
        </div>
      </div>
    </div>
  );
}

export default DK_Hoc_Lai;

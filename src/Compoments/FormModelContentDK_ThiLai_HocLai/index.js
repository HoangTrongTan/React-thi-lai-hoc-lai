import style from "./FormModelContent.module.scss";
import classNames from "classnames/bind";

import RowInfo from "../Row_Info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { PaperPlaneIcon, ThungRacIcon } from "../icons";

const cx = classNames.bind(style);
function FormModelContent({ checkTable }) {
  console.log('content re-render');
  const [rowValue, setRowValue] = useState([{ id: 0, emty: true, ghichu: "" }]);
  const curentRow = rowValue[rowValue.length - 1].id;

  const handleAddRow = () => {
    setRowValue((prev) => [...prev, { id: curentRow + 1, emty: true }]);
  };

  const handleSendRegister = () => {
    // console.log(JSON.stringify(rowValue));
    alert(JSON.stringify(rowValue));
  };

  const handleDelRow = () => {
    if (rowValue.length === 1) return;
    setRowValue((prev) => prev.slice(0, prev.length - 1)); 
  };
  return (
    <>
      <div className={cx("form-wrapper")}>
        <div className={cx("form")}>
          <table style={{ width: "100%", borderSpacing: 5 }}>
            <tr style={{ width: "100%" }}>
              <th style={{ minWidth: 30 }}>
                <span>STT</span>
              </th>
              <th style={{ minWidth: 200, textAlign: "left" }}>
                <span>Tên Học Phần</span>
              </th>
              <th style={{ minWidth: 70 }}>
                <span>Số Tín</span>
              </th>
              <th style={{ minWidth: 60 }}>
                <span>Kỳ</span>
              </th>
              <th style={{ minWidth: 100 }}>
                {checkTable === 1 ? (
                  <span>Điểm đã đạt</span>
                ) : (
                  <span>Điểm lần 1</span>
                )}
              </th>
              <th style={{ minWidth: 100 }}>
                {checkTable === 1 ? (
                  <span>Lý do học</span>
                ) : (
                  <span>Đăng kí thi</span>
                )}
              </th>
              {checkTable === 1 && (
                <th style={{ minWidth: 150 }}>
                  <span>Ghép lớp</span>
                </th>
              )}
              <th style={{ width: "100%" }}>
                <span>Ghi chú</span>
              </th>
            </tr>
            {rowValue.map((obj, index) => (
              <RowInfo
                checkTable={checkTable}
                key={obj.id}
                STT={obj.id}
                state={[rowValue, setRowValue]}
              />
            ))}
          </table>

          <div className={cx("button")} onClick={handleAddRow}>
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <div className={cx("btn-xoa-wrapper")} onClick={handleDelRow}>
            <div className={cx("button-del")}>
              <ThungRacIcon className={cx("svgIcon")} />
            </div>
          </div>

          <div className={cx("BtnSend-wrapper")}>
            <button className={cx("btn-send")} onClick={handleSendRegister}>
              <div>
                <div className={cx("svg-wrapper")}>
                  <PaperPlaneIcon />
                </div>
              </div>
              <span>Send</span>
            </button>
          </div>

          {/* phần ghi chú địa chỉ ngày giờ  */}
        </div>
      </div>
    </>
  );
}

export default FormModelContent;

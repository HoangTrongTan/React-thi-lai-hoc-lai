import Tippy from "@tippyjs/react/headless";
import { useEffect, useState } from "react";
import style from "./RowInfo.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function RowInfo({ STT, state, checkTable }) {
  const [hocKy, setHocKy] = useState(1);
  const [dangKyThi, setDangKyThi] = useState(1);
  const [rowValue, setRowValue] = state;
  const handleInputTenMon = (e) => {
    const arrNew = rowValue;
    arrNew[STT] = {
      id: STT,
      tenMon: e.target.value,
      emty: false,
      hocky: hocKy,
      dangKyThi: dangKyThi,
    };
    console.log(arrNew);
    setRowValue(arrNew);
  };
  useEffect(() => {
    const arrNew = rowValue;
    arrNew[STT] = { ...arrNew[STT], hocky: hocKy };
    setRowValue(arrNew);
  }, [hocKy]);
  useEffect(() => {
    const arrNew = rowValue;
    arrNew[STT] = { ...arrNew[STT], dangKyThi: dangKyThi };
    setRowValue(arrNew);
  }, [dangKyThi]);
  const handleInputTinChi = (value) => {
    const arrNew = rowValue;
    arrNew[STT] = { ...arrNew[STT], tinchi: value };
    setRowValue(arrNew);
  };
  const handleInputDiemThiLan1 = (value) => {
    const arrNew = rowValue;
    arrNew[STT] = { ...arrNew[STT], DiemThiLan: value };
    setRowValue(arrNew);
  };
  const handleInputGhiChu = (value) => {
    const arrNew = rowValue;
    arrNew[STT] = { ...arrNew[STT], ghichu: value };
    setRowValue(arrNew);
  };
  console.log(rowValue);
  return (
    <tr className={cx("wapper")}>
      <td>
        <div className={cx("item")}>{STT + 1}</div>
      </td>
      {/* Tên học phần */}
      <td>
        <div className={cx("item")}>
          <div className={cx("form")}>
            <input
              onChange={handleInputTenMon}
              spellCheck="false"
              className={cx("input")}
              placeholder="..."
              required=""
              type="text"
            />
            <span className={cx("input-border")}></span>
          </div>
        </div>
      </td>
      {/* Số tín chỉ */}
      <td>
        <div className={cx("item")}>
          <div className={cx("form")}>
            <input
              onChange={(e) => handleInputTinChi(e.target.value)}
              spellCheck="false"
              className={cx("input")}
              placeholder="..."
              required=""
              type="text"
            />
            <span className={cx("input-border")}></span>
          </div>
        </div>
      </td>
      {/* Học kỳ */}
      <td>
        <div className={cx("item")}>
          <Tippy
            interactive
            placement="bottom-start"
            render={(attrs) => (
              <div className={cx("choose-for-item")} style={{ width: 60 }}>
                <button onClick={() => setHocKy(1)}>kì 1</button>
                <button onClick={() => setHocKy(2)}>kì 2</button>
              </div>
            )}
          >
            <div className={cx("choose")}>
              <span>Kì {hocKy}</span>
            </div>
          </Tippy>
        </div>
      </td>
      {/* Điểm thi lần 1 */}
      <td>
        <div className={cx("item")}>
          <div className={cx("form")}>
            <input
              onChange={(e) => handleInputDiemThiLan1(e.target.value)}
              spellCheck="false"
              className={cx("input")}
              placeholder="..."
              required=""
              type="text"
            />
            <span className={cx("input-border")}></span>
          </div>
        </div>
      </td>
      {/* Đăng kí thi */}
      <td>
        <div className={cx("item")}>
          <Tippy
            interactive
            placement="bottom-start"
            render={(attrs) => (
              <div className={cx("choose-for-item")}>
                <button onClick={() => setDangKyThi(1)}>lại</button>
                <button onClick={() => setDangKyThi(2)}>Cải thiện</button>
              </div>
            )}
          >
            <div className={cx("choose")}>
              <span>{dangKyThi === 1 ? "lại" : "Cải thiện"}</span>
            </div>
          </Tippy>
        </div>
      </td>
      {/* Đăng kí ở ghép với lớp */}
      {checkTable === 1 && (
        <td>
          <div className={cx("item")}>
            <Tippy
              interactive
              placement="bottom-start"
              render={(attrs) => (
                <div className={cx("choose-for-item")}>
                    {/* đang phát triển */}
                </div>
              )}
            >
              <div className={cx("choose")}>
                <span>{dangKyThi === 1 ? "Thi lại" : "Thi cải thiện"}</span>
              </div>
            </Tippy>
          </div>
        </td>
      )}
      {/* ghi chú */}
      <td>
        <div className={cx("item")}>
          <div className={cx("form")}>
            <input
              onChange={(e) => handleInputGhiChu(e.target.value)}
              spellCheck="false"
              className={cx("input")}
              placeholder="..."
              required=""
              type="text"
            />
            <span className={cx("input-border")}></span>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default RowInfo;

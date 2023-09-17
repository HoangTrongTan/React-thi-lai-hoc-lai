import style from "./Menu.module.scss";
import classNames from "classnames/bind";
import MenuItem from "./MenuItem";
import { FormIcon, ThiLaiIcon } from "../icons";
import { useState } from "react";

const menu_item = [
  {
    icon: <FormIcon />,
    title: "Đăng kí thi,học",
    data: [
      {
        title: "Học lại,cải thiện",
        path: "/hoclai",
      },
      {
        title: "Thi lại,cải thiện",
        path: "/thilai",
      },
    ],
  },
  {
    icon: <ThiLaiIcon />,
    title: "Trang chủ",
    data: "",
    path: "/",
  },
];

const cx = classNames.bind(style);
function Menu({isExpan}) {
  const [expan,setExpan] = isExpan;

  const handleToggleExpanModel = () => {
    console.log("vào",expan)
    setExpan(!expan);
  }
  // console.log("hiện tại",expan)
  return (
    <div className={cx("wrapper")} style={{ width: expan && 80 }}>
      <div className={cx("TiTle")}>
        <h4
          className={cx("text")}
          style={{
            display: expan && "none",
          }}
        >
          Menu
        </h4>
        <div className={cx("btn")} >
          <input type="checkbox" className={cx("checkbox")} id="checkbox" />
          <label htmlFor="checkbox" className={cx("toggle")} onClick={ handleToggleExpanModel }>
            <div className={cx("bars", "bar1")}></div>
            <div className={cx("bars", "bar2")}></div>
            <div className={cx("bars", "bar3")}></div>
          </label>
        </div>
      </div>
      <MenuItem title={"Menu"} menu_item={menu_item} isExpand={expan}/>
      {/* -----------------------Item---------------------- */}
    </div>
  );
}

export default Menu;

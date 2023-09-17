import style from "./MenuItem.module.scss";
import classNames from "classnames/bind";
import { useEffect } from "react";

import {
  Sidebar,
  Menu as Menu1,
  MenuItem as MenuItem1,
  SubMenu,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
const cx = classNames.bind(style);

function MenuItem({ title, menu_item,isExpand }) {
  // Chú ý mỗi MenuItem có chứa 1 thẻ a nên khi Dùng <Link /> thì sẽ gây ra lỗi thẻ a bọc thẻ a nên anh em có thể custom lại menu nhé hiện tôi đang dùng thư viện pro-sidebar để tạo cái menu thui
  // 
  // useEffect(() => {
  //   const linkElement = document.querySelector(".ps-menu-button");
  //   linkElement.onClick = (e) => {
  //     e.preventDefault();
  //   }
  // }, []);
  return (
    <div className={cx("wrapper")}>
      {isExpand?(
        <div className={cx('title-expan-wrraper')}><div className={cx('title-expan')}></div></div>
      ):(
      <div className={cx("title")}>{title}</div>
      )}
      {/*  */}
      <Sidebar
        style={{ border: "none", backgroundColor: "#fff", marginLeft: isExpand?"-20px":"-5px" }}
        rootStyles={cx("btn-expan")}
        collapsed={isExpand}
        collapsedWidth="75px"
      >
        <Menu1 style={{ backgroundColor: "#fff" }}>
          {menu_item.map((obj, index) => {
            if (Array.isArray(obj.data)) {
              return (
                <SubMenu label={obj.title} icon={obj.icon} key={index}>
                  <div className={cx("item-expan")}>
                    {obj.data.map((item,index) => (
                      <Link to={item.path} key={index} >
                        <MenuItem1
                          style={{ color: "#000", textDecoration: "none" }}
                        >
                          <p>{item.title}</p>
                        </MenuItem1>
                      </Link>
                    ))}
                  </div>
                </SubMenu>
              );
            }
            if (obj.path) {
              return (
                <Link to={obj.path} key={index}>
                  <MenuItem1 icon={obj.icon} style={{ color: "#000", textDecoration: "none" }} >
                    <p>{obj.title}</p>
                  </MenuItem1>
                </Link>
              );
            }
            return (
              <MenuItem1 icon={obj.icon}>
                {obj.title}
              </MenuItem1>
            );
          })}
          
        </Menu1>
      </Sidebar>
    </div>
  );
}

export default MenuItem;

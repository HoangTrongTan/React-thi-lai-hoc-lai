import "rsuite/dist/rsuite.css";
import React, { useEffect, useState } from "react";
import { Modal} from "rsuite";
import style from "./LoginForm.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser } from "@fortawesome/free-regular-svg-icons";
import { PassWordIcon } from "../icons";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(style);


const LoginForm = ({open}) => {
  
  const [isOpen,setOpen] = open;

  const handleClose = () => {
    setOpen(prev => !prev);
  }
  console.log('re-render');
  return (
    <>
      <Modal style={{ top: 70 }} size="xs" open={isOpen} onClose={handleClose}>
        <Modal.Body >
          <div className={cx('form')}>
            <p className={cx('form-title')}>Đăng nhập</p>
            <div className={cx('input-container')} >
              <input  className={cx('input-field')} type="text" />
              <label  className={cx('input-label')} >Mã sinh viên</label>
              <span className={cx('input-highlight')} ></span>
              <FontAwesomeIcon icon={faUser} className={cx('icon')} />
            </div>

            <div className={cx('input-container')} >
              <input  className={cx('input-field')} type="password" />
              <label  className={cx('input-label')} >Mật khẩu</label>
              <span className={cx('input-highlight')} ></span>
              <PassWordIcon className={cx('icon')} />
            </div>

            <button className={cx("btn-login")}>
              
              <span>BUTTON <FontAwesomeIcon icon={faArrowRightToBracket} /></span>
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginForm;

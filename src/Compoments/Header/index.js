import style from "./Header.module.scss";
import classNames from "classnames/bind";
import { memo, useState } from "react";
import LoginForm from "../LoginForm";
import Loginsucess from "./Loginsucess";
import NoAccount from "./NoAccount";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Button, ButtonToolbar} from "rsuite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const cx = classNames.bind(style);

function Header() {
  
  const hasAccount = false;
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(prev => !prev);
  };
  console.log(open);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("info")}>
        {!hasAccount ? (
          <NoAccount />
        ) : (
          <>
            <h3>Name</h3>
            <p>Info Name</p>
          </>
        )}
      </div>
      <div className={cx("actions")}>
        {
          !hasAccount?(
            <>
              <ButtonToolbar>
                <Button
                  onClick={handleOpen}
                  style={{ backgroundColor: "#B05CFF" }}
                  appearance="primary"
                >
                  <p style={{letterSpacing:5}}>Đăng nhập <FontAwesomeIcon icon={faArrowRightToBracket} /></p>
                </Button>
              </ButtonToolbar>
              <LoginForm open={[open, setOpen]} />
            </>
          ):(
            <Loginsucess />
          )
        }
        
      </div>
    </div>
  );
}

export default memo(Header);

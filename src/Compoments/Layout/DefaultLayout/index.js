import Header from "../../Header";
import Menu from "../../Menu";
import Footer from "../../Footer";
import style from './DefaultLayout.module.scss';
import classNames from "classnames/bind";
import { useState } from "react";

const cx = classNames.bind(style);


function DefaultLayout({ children }) {
  const [expan, setExpan] = useState(false) ;
  // console.log("cha",expan)
  return (
    <div className={cx('wrapper')}>
        {/* ---------------------Menu-------------- */}
      <Menu isExpan={[expan, setExpan]} />
      
      <div className={cx('container', {'container-expan':expan})}>
        <Header />

        <div className={cx('content')}>
            {children}
        </div>

        <Footer />
      </div>

    </div>
  );
}

export default DefaultLayout;

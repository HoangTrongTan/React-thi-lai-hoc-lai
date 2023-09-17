import style from "./NoteText.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function NoteText({ title, content }) {
  return (
    <div className={cx("book")}>
      <div>{content}</div>
      <div className={cx("cover")}>
        {/* <div dangerouslySetInnerHTML={{__html:content}} /> */}
        <p>{title}</p>
      </div>
    </div>
  );
}

export default NoteText;

import style from "./Button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);
function Button() {
  return (
    <div class="buttons">
      <button class="btn">
        <span></span>
        <p data-start="good luck!" data-text="start!" data-title="new game"></p>
      </button>
    </div>
  );
}

export default Button;

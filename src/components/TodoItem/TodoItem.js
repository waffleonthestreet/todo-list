import React, { Component } from "react";
import styles from "./TodoItem.scss";
import className from "classnames/bind";

const cx = className.bind(styles);

// 나중에 성능을 최적화할 때 shouldComponentUpdate 라이프사이클 메서드를 사용해야 하기 때문에 class 문법으로 생성
class TodoItem extends Component {
  render() {
    const { done, children, onToggle, onRemove } = this.props;
    /*
    앞 코드에서는 비구조화 할당을 이용하여 this.props 안에 있는
    done, children, onToggle, onRemove 레퍼런스를 만들어주었습니다.
    */
    return (
      <div className={cx("todo-item")} onClick={onToggle}>
        <input className={cx("tick")} type="checkbox" checked={done} readOnly />
        <div className={cx("text", { done })}>{children}</div>
        <div
          className={cx("delete")}
          onClick={(e) => {
            onRemove();
            e.stopPropagation();
          }}
        >
          [지우기]
        </div>
      </div>
    );
  }
}

export default TodoItem;

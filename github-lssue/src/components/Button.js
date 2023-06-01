import styles from "./Button.module.css";

// 여러번 쓰일수 있는 컴포넌트 - components
export default function Button({ style, children }) {
  return (
    <button className={styles.button} style={style}>
      {children}
    </button>
  );
}

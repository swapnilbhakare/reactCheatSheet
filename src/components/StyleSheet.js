import React from "react";
import styles from "./style.module.css";
function StyleSheet(props) {
  return (
    <div>
      <h1 className={styles.primary}>hello</h1>
      <h2 className={styles.secoundary}>helo</h2>
    </div>
  );
}
export default StyleSheet;

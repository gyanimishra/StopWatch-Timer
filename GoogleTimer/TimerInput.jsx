import React from "react";
import styles from "./Timer.module.css";

const TimerInput = ({ setmin }) => {
  return (
    <div className={styles.input}>
      <input
        type="number"
        placeholder="Enter Minutes"
        onChange={(e) => setmin(e.target.value)}
      />
    </div>
  );
};

export default TimerInput;

import React, { useState, useEffect } from "react";
import styles from "./Modal.modul.css";
import cx from "clsx";

export default function Modal({
  opened,
  title,
  onClose,
  placeholder,
  searchDataList,
  onClickCell,
}) {
  const [serachValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState(searchDataList);

  useEffect(() => {
    setFilteredData(searchDataList.filter((item) => item === serachValue));
  }, [searchDataList, serachValue]);

  return (
    <div className={cx(styles.modal, { [styles.opened]: opened })}>
      <div className={styles.header}>
        <span>{title}</span>
        <button onClick={onClose}>X</button>
      </div>
      <div className={styles.input}>
        <input
          placeholder={placeholder}
          value={serachValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      {filteredData.map((date) => (
        <div key={date} onClick={onClickCell} role="button">
          {date}
        </div>
      ))}
    </div>
  );
}

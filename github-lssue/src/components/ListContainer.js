import styles from "./ListContainer.module.css";
import Button from "./Button";
import ListItem from "./ListItem";

import { useState } from "react";
import ListItemLayout from "./ListItemLayout";

export default function ListContainer() {
  const [inputValue, setInputValue] = useState("is:issue is:open");

  // useEffect(() => {
  //   console.log(inputValue);
  // }, [inputValue]);

  return (
    <div className={styles.listContainer}>
      <div className={styles.topSection}>
        <input
          className={styles.input}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          style={{ fontSize: "14px", backgroundColor: "green", color: "white" }}
        >
          New Issue
        </Button>
      </div>
      <ListItemLayout className={styles.listFilter}>
        <div className={styles.filterLists}>
          <span>Author</span>
          <span>Label</span>
          <span>Projects</span>
          <span>Milestines</span>
          <span>Assignee</span>
          <span>Sort</span>
        </div>
      </ListItemLayout>
      <div className={styles.container}>
        <ListItem
          badges={[
            {
              color: "red",
              title: "Bug2",
            },
          ]}
        />
      </div>
    </div>
  );
}

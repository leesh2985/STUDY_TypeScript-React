import cx from "clsx";
import Button from "./Button";
import ListItem from "./ListItem";
import ListFilter from "./ListFilter";

import Pagination from "./Pagination";

import { useState } from "react";
import ListItemLayout from "./ListItemLayout";

import styles from "./ListContainer.module.css";

export default function ListContainer() {
  const [inputValue, setInputValue] = useState("is:issue is:open");
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  return (
    <>
      <div className={styles.listContainer}>
        <div className={styles.topSection}>
          <input
            className={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button
            style={{
              fontSize: "14px",
              backgroundColor: "green",
              color: "white",
            }}
          >
            New Issue
          </Button>
        </div>
        <OpenClosedFilters />
        <ListItemLayout className={styles.listFilter}>
          <ListFilter
            onChangeFilter={(filteredData) => {
              //필터링된 요소에 맞게 데이터를 불러오기
              // const data = getData('필터링된 정보')
              // setList(data)
            }}
          />
        </ListItemLayout>
        <div className={styles.container}>
          {list.map((listItem, index) => (
            <ListItem
              key={index}
              // checked={checkedList.filter((item) => item.id === "0")[0]}
              // onChangeCheckBox={() =>
              //   const currentChecked = checkedList.filter((item) => item.id === "0")[0]
              //   if(currentChecked){
              //     // 리스트에서빼기
              //   }else{
              //     // 리스트에 추가하기
              //   }
              //   setCheckedList((checkedList) => [...checkedList, 0])
              // }
              badges={[
                {
                  color: "red",
                  title: "Bug2",
                },
              ]}
            />
          ))}
        </div>
      </div>
      <div className={styles.PaginationContainer}>
        <Pagination
          maxPage={10}
          currentPage={page}
          onClickPageButton={(number) => setPage(number)}
        />
      </div>
    </>
  );
}

function OpenClosedFilters({ data }) {
  const [isOpenMode, setIsOpenMode] = useState(true);

  // const data = getData();
  // const opendDate = date.filter((d) => d.state ==='open);
  // const closeddDate = date.filter((d) => d.state ==='closed');
  const openModeDataSize = 1;
  const closeModeDataSize = 2;

  return (
    <>
      <OpenClosedFilter
        size={openModeDataSize}
        state="Open"
        selected={isOpenMode}
        onClick={() => setIsOpenMode(true)}
      />
      <OpenClosedFilter
        size={closeModeDataSize}
        state="Closed"
        selected={!isOpenMode}
        onClick={() => setIsOpenMode(false)}
      />
    </>
  );
}

function OpenClosedFilter({ size, state, onClick, selected }) {
  return (
    <span
      role="button"
      className={cx(styles.textFilter, { [styles.selected]: selected })}
      onClick={onClick}
    >
      {size}
      {state}
    </span>
  );
}

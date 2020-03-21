import React, {useState} from "react";
import classes from "./Pagination.module.css";

const Pagination = ({totalCount, pageSize, currentPage, handlePageNumClick, currentPagesIntervalSize}) => {
  const pagesCount = Math.ceil(totalCount/pageSize);
  const intervalsCount = Math.ceil(pagesCount/currentPagesIntervalSize );
  let currentInterval = 1;

  for (let i = currentPagesIntervalSize; i < pagesCount; i += currentPagesIntervalSize) {
    if (currentPage <= i) {
      break;
    }
    currentInterval++;
  }

  const [currentPagesInterval, setCurrentPagesInterval] = useState(currentInterval);

  const intervalMin = (currentPagesInterval - 1) * currentPagesIntervalSize + 1;
  const intervalMax = currentPagesInterval * currentPagesIntervalSize;

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return (
    <div className={classes.pageNumbersContainer}>
      {currentPagesInterval > 1 ? <button onClick={() => setCurrentPagesInterval(currentPagesInterval - 1)}>Prev</button> : null}
      {pages.filter(page => page >= intervalMin && page <= intervalMax).map( page => <span
        className={currentPage === page ? classes.pageNum + ' ' + classes.active : classes.pageNum}
        onClick={() => handlePageNumClick(pageSize, page)} key={page}
      >{page}</span>)}
      {currentPagesInterval < intervalsCount ?
        <button onClick={() => setCurrentPagesInterval(currentPagesInterval + 1)}>Next</button> : null}
    </div>
  )
}

export  default Pagination
import React, { useEffect, useState, useCallback, memo } from "react";

const Pagination = ({ setActivePage }) => {
  console.log("----- pagination called -----");
  const totalPages = 30;
  const [currentActivePage, setCurrentActivePage] = useState(1);
  const [pages, setPages] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const getPages = useCallback(
    (totalPages, maxVisiblePageCount, currentPage) => {
      console.log("______________ getPages called __________");
      const maxResultSize =
        totalPages > maxVisiblePageCount ? maxVisiblePageCount : totalPages;
      const activePage =
        currentPage + maxResultSize > totalPages
          ? totalPages - maxResultSize + 1
          : currentPage;
      return [...Array(maxResultSize)].map((_, idx) => {
        return activePage + idx;
      });
    },
    []
  );
  useEffect(() => {
    console.log(" pagination useEffect call");
    const newPages = getPages(totalPages, 10, currentActivePage);
    setPages(newPages);
  }, [currentActivePage]);

  const handleClick = useCallback(
    (e) => {
      console.log("**** handleClick called ****");
      let selectedPageNo = 0;
      console.log("e ", e.target.innerHTML);
      if (e.target.innerHTML == "Prev") {
        selectedPageNo = currentActivePage - 1;
      } else if (e.target.innerHTML == "Next") {
        selectedPageNo = currentActivePage + 1;
      } else {
        selectedPageNo = e.target.innerHTML;
      }
      setCurrentActivePage(Number(selectedPageNo));
      setActivePage(Number(selectedPageNo));
    },
    [currentActivePage]
  );
  return (
    <div className="pagination" onClick={(e) => handleClick(e)}>
      <button data-id="prev" disabled={currentActivePage == 1}>
        Prev
      </button>
      {pages.map((page, idx) => {
        return (
          <button
            className={`pageButton ${
              currentActivePage == Number(page) ? "active" : ""
            }`}
            data-id={page}
            key={idx}
          >
            {page}
          </button>
        );
      })}
      <button data-id="next" disabled={currentActivePage == totalPages}>
        Next
      </button>
    </div>
  );
};

export default memo(Pagination);

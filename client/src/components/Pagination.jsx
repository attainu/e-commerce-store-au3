import React from "react";

const Pagination = ({ itemsPerPage, totalItems, setCurrentPage }) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      <nav className="d-flex justify-content-center py-3">
        <ul className="pagination">
          {pages.map(pagenum => {
            return (
              <li key={pagenum} className="page-item">
                <button
                  onClick={e => {
                    setCurrentPage(pagenum);
                  }}
                  className="page-link"
                >
                  {pagenum}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;

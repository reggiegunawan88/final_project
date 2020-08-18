import React from "react";

const pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav style={{ marginBottom: "50px", marginTop: "50px" }}>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a href="!#" className="page-link" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default pagination;

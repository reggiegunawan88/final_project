import React, { useState, useEffect } from "react";
import "../style/listmobil.css";
import Dropdown from "./page_components/productlist/mini components/dropdown";
import GroupCards from "./page_components/productlist/group-cards";
import Pagination from "./page_components/productlist/pagination";

const ListMobil = ({ items, loading, itemsTotal }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  // Get current cards
  const idxOfLastCard = currentPage * itemsPerPage;
  const idxOfFirstCard = idxOfLastCard - itemsPerPage;
  const currentItems = items.slice(idxOfFirstCard, idxOfLastCard);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const get_dropdownvalue = async (event, data) => {
    const selected_value = data.value;
    console.log(selected_value);
    // setSortValue(selected_value);
  };

  return (
    <div>
      <div className="row upper-part">
        <div className="col-6">
          <p style={{ position: "relative", top: "20px" }}>
            Ditemukan: {itemsTotal} mobil
          </p>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-6" style={{ textAlign: "right" }}>
              <p style={{ position: "relative", top: "20px", left: "15px" }}>
                Urut berdasarkan:
              </p>
            </div>
            <div className="col-6">
              <div className="dropdown-area">
                <Dropdown onChange={get_dropdownvalue} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="hr-line" />
      <div className="container-fluid">
        <GroupCards items={currentItems} loading={loading} />
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={items.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default ListMobil;

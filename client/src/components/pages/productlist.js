import React, { useState } from "react";
import "../style/listmobil.css";
import Dropdown from "./../page_components/dropdown/dropdown";
import GroupCards from "./../page_components/productlist/group-cards";
import Pagination from "./../page_components/productlist/pagination";

const ListMobil = ({ items, loading, itemsTotal, triggerSortBy }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  //state for define dropdown properties
  const [dropdown_placeholder] = useState("Pilih Kriteria...");
  const [dropdown_data] = useState([
    {
      key: "Harga Termurah",
      text: "Harga Termurah",
      value: "Harga Termurah",
    },
    {
      key: "Harga Termahal",
      text: "Harga Termahal",
      value: "Harga Termahal",
    },
    {
      key: "Tahun Terbaru",
      text: "Tahun Terbaru",
      value: "Tahun Terbaru",
    },
    {
      key: "Tahun Terlama",
      text: "Tahun Terlama",
      value: "Tahun Terlama",
    },
  ]);

  // Get current cards
  const idxOfLastCard = currentPage * itemsPerPage;
  const idxOfFirstCard = idxOfLastCard - itemsPerPage;
  const currentItems = items.slice(idxOfFirstCard, idxOfLastCard);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const get_dropdownvalue = async (event, data) => {
    const selected_value = data.value;
    const result_arr = [...items];
    if (selected_value === "Harga Termurah") {
      result_arr.sort((a, b) => (a.harga > b.harga ? 1 : -1));
      triggerSortBy(result_arr);
    } else if (selected_value === "Harga Termahal") {
      result_arr.sort((a, b) => (a.harga < b.harga ? 1 : -1));
      triggerSortBy(result_arr);
    } else if (selected_value === "Tahun Terbaru") {
      result_arr.sort((a, b) => (a.tahun < b.tahun ? 1 : -1));
      triggerSortBy(result_arr);
    } else if (selected_value === "Tahun Terlama") {
      result_arr.sort((a, b) => (a.tahun > b.tahun ? 1 : -1));
      triggerSortBy(result_arr);
    }
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
                <Dropdown
                  placeholder={dropdown_placeholder}
                  options={dropdown_data}
                  onChange={get_dropdownvalue}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="hr-line" />
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

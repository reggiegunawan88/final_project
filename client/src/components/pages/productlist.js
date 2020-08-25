import React, { useState, useEffect } from "react";
import "../style/listmobil.css";
import axios from "axios";
import Dropdown from "./page_components/productlist_components/mini components/dropdown";
import GroupCards from "./page_components/productlist_components/group-cards";
import Pagination from "./page_components/productlist_components/pagination";

const ListMobil = () => {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/mobil");
      setItems(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  // Get current cards
  const idxOfLastCard = currentPage * itemsPerPage;
  const idxOfFirstCard = idxOfLastCard - itemsPerPage;
  const currentItems = items.slice(idxOfFirstCard, idxOfLastCard);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="row upper-part">
        <div className="col-6">
          <p style={{ position: "relative", top: "20px" }}>
            Ditemukan: {items.length} mobil
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
                <Dropdown />
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

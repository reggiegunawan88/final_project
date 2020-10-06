import React, { useState } from "react";
import CardMobil from "./mini components/card-mobil";

const GroupCards = ({ items, loading, sortvalue }) => {
  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (items.length === 0) {
    return <h3>Maaf, mobil tidak ditemukan.</h3>;
  }

  // const [sortedItems, setsortedItems] = useState([]);

  // useEffect(() => {
  //   const sortItems = () => {
  //     setsortedItems(items.sort((a, b) => b.tahun - a.tahun));
  //   };
  //   sortItems();
  // }, [items]);

  return (
    <div className="row">
      {items.map((item) => (
        <div className="col-4" key={item.nama}>
          <CardMobil items={item} />
        </div>
      ))}
    </div>
  );
};

export default GroupCards;

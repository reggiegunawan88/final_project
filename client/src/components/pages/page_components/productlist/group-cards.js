import React, { useState } from "react";
import CardMobil from "./mini components/card-mobil";

const GroupCards = ({ items, loading }) => {
  // console.log(items)
  if (items.length === 0) {
    return <h3>Maaf, mobil tidak ditemukan.</h3>;
  }
  else{
    if (loading) {
      return <h3>Loading...</h3>;
    }
  }

  return (
    <div className="row">
      {items.map((item) => (
        <div className="col-4" key={item.nama}>
          <CardMobil item={item} />
        </div>
      ))}
    </div>
  );
};

export default GroupCards;

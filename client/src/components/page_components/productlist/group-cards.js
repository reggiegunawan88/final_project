import React from "react";
import CardMobil from "./../productlist/card-mobil";

const GroupCards = ({ items, loading }) => {
  if (items.length === 0) {
    return (
      <h3>
        Maaf, mobil tidak ditemukan. <br /> Silahkan cari mobil lain.
      </h3>
    );
  } else {
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

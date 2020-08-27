import React, { useEffect } from "react";
import CardMobil from "./mini components/card-mobil";

const GroupCards = ({ items, loading }) => {
  const data = localStorage.getItem("car_database");

  useEffect(() => {
    const getData = () => {
      localStorage.setItem("car_database", JSON.stringify(items));
    };
    getData();
  }, []);
  console.log(items);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="row">
      {items.map((item) => (
        <div className="col-4">
          <CardMobil items={item} />
        </div>
      ))}
    </div>
  );
};

export default GroupCards;

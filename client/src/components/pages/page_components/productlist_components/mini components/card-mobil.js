import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";
import "../../../../style/card.css";
import { withRouter } from "react-router-dom";
// import Switch from "react-bootstrap/esm/Switch";
// import ProductDetailPage from "../../pages/productdetail";

const CardMobil = ({ items, history }) => {
  // const url_name = items.nama;
  // const handleClick = () => {
  //   history.push("/" + url_name, { items });
  // };
  const productname = "/" + items.nama;
  console.log(items);
  return (
    <div>
      <Link to={{ pathname: `/productdetail/${items.nama}`, data: items }}>
        <Card className="mobil-card">
          <Image
            src={require("../../../../../assets/kia-rio.jpg")}
            wrapped
            ui={true}
          />
          <Card.Content>
            <Card.Header>KIA</Card.Header>
            <Card.Meta>
              <span className="date">{items.tahun}</span>
            </Card.Meta>
            <Card.Description>{items.nama}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <p>Rp {items.harga},00</p>
          </Card.Content>
        </Card>
      </Link>
    </div>
  );
};

export default withRouter(CardMobil);

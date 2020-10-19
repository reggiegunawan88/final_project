import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";
import "./../../style/card.css";
import { withRouter } from "react-router-dom";
import NumberFormat from "react-number-format";

const CardMobil = ({ item }) => {
  const image_url = "https://naripanmotor.com/wp-content/uploads/";

  return (
    <div>
      <Link to={{ pathname: `/productdetail/${item.nama}`, data: item }}>
        <Card className="mobil-card">
          <Image src={image_url + item.img[0].url} wrapped ui={true} />
          <Card.Content>
            <Card.Header>{item.merk}</Card.Header>
            <Card.Meta>
              <span className="date">{item.tahun}</span>
            </Card.Meta>
            <Card.Description>{item.nama}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <NumberFormat
              value={item.harga}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"Rp "}
              suffix={",00"}
            />
          </Card.Content>
        </Card>
      </Link>
    </div>
  );
};

export default withRouter(CardMobil);

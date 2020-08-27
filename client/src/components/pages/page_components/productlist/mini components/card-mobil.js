import React from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";
import "../../../../style/card.css";
import { withRouter } from "react-router-dom";
import NumberFormat from "react-number-format";

const CardMobil = ({ items }) => {
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
            <Card.Header>{items.merk}</Card.Header>
            <Card.Meta>
              <span className="date">{items.tahun}</span>
            </Card.Meta>
            <Card.Description>{items.nama}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <NumberFormat
              value={items.harga}
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

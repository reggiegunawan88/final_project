import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import "../../style/card.css";

const CardMobil = ({ items }) => {
  return (
    <Card className="mobil-card">
      <Image src={require("../../../assets/kia-rio.jpg")} wrapped ui={true} />
      <Card.Content>
        <Card.Header>KIA</Card.Header>
        <Card.Meta>
          <span className="date">{items.tahun}</span>
        </Card.Meta>
        <Card.Description>{items.nama}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="dollar" />
          {items.harga}
        </a>
      </Card.Content>
    </Card>
  );
};

export default CardMobil;

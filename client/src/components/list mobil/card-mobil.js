import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import "../style/card.css";

const CardMobil = () => (
  <Card className="mobil-card">
    <Image src={require("./../../assets/kia-rio.jpg")} wrapped ui={true} />
    <Card.Content>
      <Card.Header>KIA</Card.Header>
      <Card.Meta>
        <span className="date">2013</span>
      </Card.Meta>
      <Card.Description>KIA ALL NEW RIO 1.4</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="dollar" />
        Rp. 120.000.000,-
      </a>
    </Card.Content>
  </Card>
);

export default CardMobil;

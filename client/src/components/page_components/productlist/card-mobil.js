import React from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";
import "./../../style/card.css";
import { withRouter } from "react-router-dom";
import NumberFormat from "react-number-format";

//format result into 3 num behind comma
function format_value(value) {
  var res = value.toLocaleString(undefined, { maximumFractionDigit: 3 });
  return res;
}

const CardMobil = ({ item }) => {
  return (
    <div>
      <Link to={{ pathname: `/productdetail/${item.nama}`, data: item }}>
        <Card className="mobil-card">
          {item.img ? (
            <Image
              //* dynamic local img must be put in public folder
              src={"/img/" + item.img[0].url}
              wrapped
              ui={true}
            />
          ) : (
            <Image
              //empty img
              src="http://naripanmotor.com/wp-content/themes/naripanmotor2017/img/img-slider-1.jpg"
              wrapped
              ui={true}
            />
          )}
          <Card.Content>
            <Card.Header>{item.merk}</Card.Header>
            <Card.Meta>
              <span className="date">{item.tahun}</span>
              {item.hasOwnProperty("LPM") && (
                <span className="lpm-value">{format_value(item.LPM)}</span>
              )}
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

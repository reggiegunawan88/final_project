import React from "react";
import { Card } from "react-bootstrap";
import "../../style/feature_list.css";

const description = () => {
  return (
    <div className="container" style={{ marginBottom: 30 }}>
      <Card className="custom-card">
        <Card.Header>
          <b>DESKRIPSI</b>
        </Card.Header>
        <Card.Body>
          <Card.Text style={{ margin: 5 }}>- Mobil siap pakai</Card.Text>
          <Card.Text style={{ margin: 5 }}>
            - Kelengkapan surat dijamin 100%
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default description;

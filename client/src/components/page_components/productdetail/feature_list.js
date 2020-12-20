import React from "react";
import { Card } from "react-bootstrap";
import { FaCheckCircle, FaWindowClose } from "react-icons/fa";
import "../../style/feature_list.css";

const feature_list = ({ items }) => {
  return (
    <div className="container" style={{ marginBottom: 30 }}>
      <Card className="custom-card">
        <Card.Header>
          <b>FITUR</b>
        </Card.Header>
        <Card.Body>
          <div className="row" style={{ margin: 15 }}>
            <div className="col-sm-6">
              <div className="text-icon">
                <p>
                  Power Steering &nbsp;{" "}
                  {items.power_steering === "YA" ? (
                    <FaCheckCircle className="check-icon" />
                  ) : (
                    <FaWindowClose className="cross-icon" />
                  )}
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <p>
                GPS &nbsp;{" "}
                {items.gps === "YA" ? (
                  <FaCheckCircle className="check-icon" />
                ) : (
                  <FaWindowClose className="cross-icon" />
                )}
              </p>
            </div>
          </div>
          <div className="row" style={{ margin: 15 }}>
            <div className="col-sm-6">
              <p>
                Smart Key &nbsp;{" "}
                {items.smart_key === "YA" ? (
                  <FaCheckCircle className="check-icon" />
                ) : (
                  <FaWindowClose className="cross-icon" />
                )}
              </p>
            </div>
            <div className="col-sm-6">
              <p>
                Airbag &nbsp;{" "}
                {items.airbag === "YA" ? (
                  <FaCheckCircle className="check-icon" />
                ) : (
                  <FaWindowClose className="cross-icon" />
                )}
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default feature_list;

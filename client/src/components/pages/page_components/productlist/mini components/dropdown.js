import React from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
  {
    key: "Harga Termurah",
    text: "Harga Termurah",
    value: "Harga Termurah",
  },
  {
    key: "Harga Termahal",
    text: "Harga Termahal",
    value: "Harga Termahal",
  },
  {
    key: "Tahun Terbaru",
    text: "Tahun Terbaru",
    value: "Tahun Terbaru",
  },
  {
    key: "Tahun Terlama",
    text: "Tahun Terlama",
    value: "Tahun Terlama",
  },
];

const SortBy = (props) => (
  <Dropdown
    placeholder="Pilih kriteria"
    fluid
    selection
    options={options}
    onChange={props.onChange}
  />
);

export default SortBy;

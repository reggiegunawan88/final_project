import React from "react";
import { Dropdown } from "semantic-ui-react";

const dropdown = (props) =>
  console.log() || (
    <Dropdown
      placeholder={props.placeholder}
      fluid
      selection
      options={props.options}
      onChange={props.onChange}
    />
  );

export default dropdown;

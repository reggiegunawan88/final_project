import React, { Component } from "react";
import ModalPrioritas1 from "./modal_prioritas1";
import ModalPrioritas2 from "./modal_prioritas2";
import ModalBobot from "./modal_bobot";

class modal_BG extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_1st_modal: false,
      show_2nd_modal: false,
      show_3rd_modal: false,
    };
  }

  // *method for show next modal then close current modal
  show_nextModal() {
    this.setState({ show_2nd_modal: true });
    this.props.onHide();
  }

  //* method for close next modal and re-open current modal
  close_nextModal() {
    this.setState({ show_2nd_modal: false });
    this.props.reopenModal();
  }

  //* method for opening final modal
  show_finalModal() {
    this.setState({ show_3rd_modal: true, show_2nd_modal: false });
  }

  close_finalModal() {
    this.setState({ show_3rd_modal: false, show_2nd_modal: true });
  }

  render() {
    return (
      <div className="modal-transition">
        <ModalPrioritas1
          show={this.props.show}
          onHide={this.props.onHide}
          onReceivedProps={() => this.show_nextModal()}
        />
        <ModalPrioritas2
          show={this.state.show_2nd_modal}
          onHide={() => this.close_nextModal()}
          onReceivedProps={() => this.show_finalModal()}
        />
        <ModalBobot
          show={this.state.show_3rd_modal}
          onHide={() => this.close_finalModal()}
        />
      </div>
    );
  }
}

export default modal_BG;

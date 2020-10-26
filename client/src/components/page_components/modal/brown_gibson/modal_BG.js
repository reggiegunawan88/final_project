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
      obj_data: [],
      subj_data: [],
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

  //* method for receive props data from modal 1
  get_subj_data(data) {
    this.setState({ subj_data: data });
  }

  //* method for receive props data from modal 2
  get_obj_data(data) {
    this.setState({ obj_data: data });
  }

  render() {
    return (
      <div className="modal-transition">
        <ModalPrioritas1
          show={this.props.show}
          onHide={this.props.onHide}
          onReceivedProps={() => this.show_nextModal()}
          onSendDataSubj={(data_subj) => this.get_subj_data(data_subj)}
        />
        <ModalPrioritas2
          show={this.state.show_2nd_modal}
          onHide={() => this.close_nextModal()}
          onReceivedProps={() => this.show_finalModal()}
          onSendDataObj={(data_obj) => this.get_obj_data(data_obj)}
        />
        <ModalBobot
          show={this.state.show_3rd_modal}
          onHide={() => this.close_finalModal()}
          onReceivedSubjData={this.state.subj_data}
          onReceivedObjData={this.state.obj_data}
          onTriggerFunc={this.get_data_for_modal3}
        />
      </div>
    );
  }
}

export default modal_BG;

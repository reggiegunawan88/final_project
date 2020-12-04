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
      SECC_processed_data: this.props.getSECCData,
    };
  }

  //* always update if new SECC data is received
  componentDidUpdate() {
    if (this.props.getSECCData !== this.state.SECC_processed_data) {
      this.setState({ SECC_processed_data: this.props.getSECCData });
    }
  }

  // *close 1st modal and show 2nd modal
  show_2nd_modal() {
    this.setState({ show_2nd_modal: true });
    this.props.onHide();
  }
  //* close 2nd modal and show 3rd modal
  show_finalModal() {
    this.setState({ show_3rd_modal: true, show_2nd_modal: false });
  }

  //* close 2nd modal and back to 1st modal
  close_2nd_modal() {
    this.setState({ show_2nd_modal: false });
    this.props.reopenModal();
  }

  //* back from 3rd to 2nd modal
  back_to_prevModal() {
    this.setState({ show_3rd_modal: false, show_2nd_modal: true });
  }

  //*close 3rd modal
  close_final_modal() {
    this.setState({ show_3rd_modal: false });
  }

  //* method for receive props data from modal 1
  get_subj_data(data) {
    this.setState({ subj_data: data });
  }

  //* method for receive props data from modal 2
  get_obj_data(data) {
    this.setState({ obj_data: data });
  }

  //*send result dataset to mainpage
  get_final_result(result, input_data) {
    this.props.getFinalResult(result, input_data);
  }

  render() {
    return (
      <div className="modal-transition">
        <ModalPrioritas1
          show={this.props.show}
          onHide={this.props.onHide}
          onReceivedProps={() => this.show_2nd_modal()}
          onSendDataSubj={(data_subj) => this.get_subj_data(data_subj)}
        />
        <ModalPrioritas2
          show={this.state.show_2nd_modal}
          onHide={() => this.close_2nd_modal()}
          onReceivedProps={() => this.show_finalModal()}
          onSendDataObj={(data_obj) => this.get_obj_data(data_obj)}
        />
        <ModalBobot
          show={this.state.show_3rd_modal}
          onHide={() => this.back_to_prevModal()}
          onCloseModal={() => this.close_final_modal()}
          onReceivedSubjData={this.state.subj_data}
          onReceivedObjData={this.state.obj_data}
          getSECCData={this.state.SECC_processed_data}
          receivedFinalResult={(data, input_data) =>
            this.get_final_result(data, input_data)
          }
        />
      </div>
    );
  }
}

export default modal_BG;

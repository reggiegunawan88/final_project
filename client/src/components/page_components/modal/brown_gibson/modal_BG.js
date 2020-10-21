import React, { Component } from "react";
import ModalPrioritas1 from "./modal_prioritas2";
import ModalPrioritas2 from "./modal_prioritas2";

class modal_BG extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_1st_modal: false,
      show_2nd_modal: false,
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
        />
      </div>
    );
  }
}

// const modal_BG = (props) => {
//   const [index, setIndex] = useState(0);
//   allModal = [ModalPrioritasOb, ModalPrioritasSub];

//   const onClick = useCallback(() => setIndex((state) => (state + 1) % 2), []);
//   const transitions = useTransition(index, (p) => p, {
//     from: { opacity: 0, transform: "translate3d(100%,0,0)" },
//     enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
//     leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
//   });

//   return (
//     <div className="modal-transition">
//       <ModalPrioritasSub show={props.show} onHide={props.onHide} />
//       {/* <ModalPrioritasOb show={props.show} onHide={props.onHide} /> */}
//     </div>
//   );
// };

export default modal_BG;

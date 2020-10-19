import React, { useEffect, useState, useCallback } from "react";
import ModalSubjektif from "./modal_subjektif";
import ModalPrioritas from "./modal_prioritas";
import { useTransition, animated } from "react-spring";

const modal_BG = (props) => {
  const [index, setIndex] = useState(0);
  const onClick = useCallback(() => setIndex((state) => (state + 1) % 2), []);
  const transitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div className="modal-transition">
      <ModalSubjektif show={props.show} onHide={props.onHide} />
      <ModalPrioritas />
    </div>
  );
};

export default modal_BG;

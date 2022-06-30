import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtoms";

const Modal = () => {
  const [open, setOpen] = useRecoilState(modalState);

  return <div>{open && <p>THE MODAL IS OPEN</p>}</div>;
};

export default Modal;

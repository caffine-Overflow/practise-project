import React from "react";
import ReactDOM from "react-dom";
import Card from "../UI/Card";
import "./ErrorModal.css";
import Button from "../UI/Button";

const ErrorModal = (props) => {
  const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.onConfirm} />;
  };
  const ModalOverlay = (props) => {
    return (
      <Card className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    );
  };
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};
export default ErrorModal;

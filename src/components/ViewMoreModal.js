import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";

function ViewModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          handleShow();
        }}
      >
        View More
      </Button>
      <Modal
        show={show}
        size="lg"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header style={{ backgroundColor: "yellow" }}>
          <Modal.Title>{props.item.uid}</Modal.Title>
          <p>{props.item.time}</p>
        </Modal.Header>
        <Modal.Body style={{ fontFamily:"monospace", fontWeight: "bolder" }}
        className="text-center fs-3">
          <p>Task : {props.item.task}</p>

          <p className="bg-warning rounded pt-2">Type : {props.item.type}</p>

          <p className="text-wrap">Description : {props.item.describe}</p>
        </Modal.Body>
        <Modal.Footer className="bg-dark">
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    itemsData: state.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //selectedTask: (id) => dispatch(selectedTask(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewModal);

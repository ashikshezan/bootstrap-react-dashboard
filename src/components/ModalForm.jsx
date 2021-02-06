import { Button, Modal } from "react-bootstrap";
import Form from './Form'



const ModalForm = (props) => {
    return (
        <Modal
            show={props.show}
            onHide={() => props.onHide}

            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            {console.log('MODAL-FORM', props)}

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create Account
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form
                    preFillValue={props.preFillValue}
                    setModalShow={props.setModalShow}
                    setPreFillValue={props.setPreFillValue}
                />
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalForm;
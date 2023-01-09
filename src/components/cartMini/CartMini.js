import { Modal } from "react-bootstrap";

export default function Example({ smShow, handleSmClose, cartMiniText, cartMiniTextColor }) {
    return (
        <>
            <Modal size="sm" show={smShow} onHide={handleSmClose}>
                <Modal.Header closeButton>
                    <Modal.Title className={cartMiniTextColor} id="example-modal-sizes-title-sm">
                        {cartMiniText}
                    </Modal.Title>
                </Modal.Header>
            </Modal>
        </>
    );
}

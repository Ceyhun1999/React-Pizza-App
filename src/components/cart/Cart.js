import { Component } from "react";
import { Button, CloseButton, Modal, Table } from "react-bootstrap";
import "./Cart.css";

export default class Cart extends Component {
    render() {
        let { show, handleClose, order } = this.props;

        return (
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Sifarişlər</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table responsive="lg">
                        <thead>
                            <tr className="bg-warning">
                                <th>№</th>
                                <th>Şəkil</th>
                                <th>Adı</th>
                                <th>Ölçüsü</th>
                                <th>Qiyməti</th>
                                <th>Ədədi</th>
                                <th>Yekun</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.map((item, index) => {
                                let { id, img, name, size, price, stateSize, quant } = item;
                                let { quantChange, deleteOrder } = this.props;
                                return (
                                    <tr className="align-middle" key={id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <img className="thumb" src={"./assets/img/pizzas/" + img} alt="" />
                                        </td>
                                        <td>{name}</td>
                                        <td>{size[stateSize]}</td>
                                        <td>{price[stateSize]} ₼</td>
                                        <td>
                                            <div className="d-flex">
                                                <Button
                                                    onClick={() => {
                                                        quantChange(id, -1);
                                                    }}
                                                    size="sm"
                                                    variant="outline-warning border-0"
                                                >
                                                    ▼
                                                </Button>
                                                <span>{quant}</span>
                                                <Button
                                                    onClick={() => {
                                                        quantChange(id, 1);
                                                    }}
                                                    size="sm"
                                                    variant="outline-warning border-0"
                                                >
                                                    ▲
                                                </Button>
                                            </div>
                                        </td>
                                        <td>
                                            <span>{quant * price[stateSize]}</span>
                                            <span> ₼</span>
                                        </td>
                                        <td>
                                            <CloseButton onClick={() => deleteOrder(id)} />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                        <tbody>
                            <td className="a text-end" colspan="7">
                                
                            </td>
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

import { Component } from "react";
import { Button, CloseButton, Modal, Table } from "react-bootstrap";

export default class Cart extends Component {
    render() {
        let { show, handleClose, order, totalPrice } = this.props;
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
                                    <tr className="align-middle border border-light" key={id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <img style={{ width: "60px" }} src={"./assets/img/pizzas/" + img} alt="" />
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
                                            <CloseButton onClick={() => deleteOrder(id, quant * price[stateSize])} />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                        <tbody className="a">
                            <tr className="text-center border  border-light">
                                <td colSpan="8">Ümumi qiymət {totalPrice} ₼</td>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer className="border-0">
                    <Button variant="secondary" onClick={handleClose}>
                        Bağla
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Sifarişi göndər
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

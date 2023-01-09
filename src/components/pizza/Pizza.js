import { Component } from "react";
import { Button, Card, Col, Form } from "react-bootstrap";
import "./Pizza.css";

export default class Pizza extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stateSize: Object.keys(this.props.pizza.size)[0],
        };
    }

    changePrice = (e) => {
        this.setState({
            stateSize: e.target.value,
        });
    };

    render() {
        let { pizza, addToOrder, handleSmShow } = this.props;
        let { name, img, desc, size, price } = pizza;
        return (
            <Col>
                <Card className="h-100">
                    <Card.Img variant="top" src={"./assets/img/pizzas/" + img} />
                    <Card.Body className="d-flex flex-column">
                        <Card.Title>{name}</Card.Title>
                        <Card.Text className="flex-grow-1">{desc}</Card.Text>
                        <div>
                            <div className="d-flex align-items-center mb-3">
                                <Form.Select onChange={this.changePrice}>
                                    {Object.keys(size).map((item) => (
                                        <option key={item} value={item}>
                                            {size[item]}
                                        </option>
                                    ))}
                                </Form.Select>
                                <span className="w-50 text-end fs-3">{price[this.state.stateSize]} ₼</span>
                            </div>
                            <div className="text-center">
                                <Button
                                    onClick={() => {
                                        addToOrder(pizza, this.state.stateSize);
                                        handleSmShow();
                                    }}
                                    variant="warning"
                                >
                                    Sifariş et
                                </Button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}

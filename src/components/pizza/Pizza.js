import { Component } from "react";
import { Button, Card, Col, Form } from "react-bootstrap";
import ButtonAdd from "../buttonAdd/ButtonAdd";
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
        let style = {
            img: {
                width: this.props.width + "%",
            },
        };
        return (
            <Col>
                <Card className="h-100">
                    <div className="magazine_card">
                        <img src={"./assets/img/pizzas/" + img} style={style.img} alt="sad" />
                        <p className="magazine_title">{name}</p>
                        <p className="magazine_desc">{desc}</p>
                        <div className="splitter"></div>
                        <div className="shadow" />
                    </div>
                    <div>
                        <div className="d-flex align-items-center mb-3 px-3">
                            <Form.Select onChange={this.changePrice}>
                                {Object.keys(size).map((item) => (
                                    <option key={item} value={item}>
                                        {size[item]}
                                    </option>
                                ))}
                            </Form.Select>
                            <span className="w-50 text-end fs-3">{price[this.state.stateSize]} ₼</span>
                        </div>
                        <div className="text-center pb-3">
                            <ButtonAdd 
                                onClick={() => {
                                    addToOrder(pizza, this.state.stateSize);
                                    handleSmShow();
                                }}
                            ></ButtonAdd>
                        </div>
                    </div>
                </Card>
            </Col>
        );
    }
}

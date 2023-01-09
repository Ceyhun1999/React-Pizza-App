import { Row } from "react-bootstrap";
import Pizza from "../pizza/Pizza";
import "./Pizzas.css";

export default function Pizzas({ data, addToOrder, changePrice, handleSmShow }) {
    return (
        <div className="pizzas py-4">
            <Row xs={1} md={2} xl={3} className="g-4">
                {data.map((item) => (
                    <Pizza
                        key={item.id}
                        pizza={item}
                        addToOrder={addToOrder}
                        changePrice={changePrice}
                        handleSmShow={handleSmShow}
                    />
                ))}
            </Row>
        </div>
    );
}

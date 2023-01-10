import { Badge, Button, Container } from "react-bootstrap";
import { FaShoppingBasket } from "react-icons/fa";
import "./Header.css";

export default function Header({ handleShow, number, onTotalPrice }) {
    return (
        <header className="bg-warning py-2">
            <Container className="d-flex justify-content-between">
                <h1>Pizza App</h1>
                <Button
                    variant="success"
                    onClick={() => {
                        handleShow();
                        onTotalPrice();
                    }}
                >
                    <FaShoppingBasket />
                    <Badge pill bg="light" className="text-dark align-top">
                        {number}
                    </Badge>
                </Button>
            </Container>
        </header>
    );
}

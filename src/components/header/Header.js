import { Badge, Button, Container } from "react-bootstrap";
import { FaShoppingBasket } from "react-icons/fa";
import "./Header.css";

export default function Header({ handleShow, number, onTotalPrice }) {
    return (
        <header className="bg-dark ">
            <Container className="d-flex justify-content-between py-2">
                <h1 className="text-warning">Pizza App</h1>
                <Button
                    variant="warning"
                    onClick={() => {
                        handleShow();
                        onTotalPrice();
                    }}
                >
                    <FaShoppingBasket color="white" />
                    <Badge pill bg="light" className="text-dark align-top">
                        {number}
                    </Badge>
                </Button>
            </Container>
        </header>
    );
}

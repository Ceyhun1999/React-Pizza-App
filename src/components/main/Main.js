import { Container } from "react-bootstrap";
import Pizzas from "../pizzas/Pizzas";
import Filter from "../filter/Filter";
import "./Main.css";

export default function Main(props) {
    return (
        <main className="p-4">
            <Container>
                <Filter data={props.data} filterData={props.filterData} searchData={props.searchData} />
                <Pizzas {...props} />
            </Container>
        </main>
    );
}

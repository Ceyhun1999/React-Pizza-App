import { Container, Form } from "react-bootstrap";

export default function Filter({ filterData, searchData }) {
    const filters = ["all", "chick", "meat", "vegan", "spicy"];
    const filtersName = ["Hamısı", " Toyuqlu", "Ət ilə", "Vegetarian", "Acılı"];
    return (
        <div className="filter border p-4 bg-dark text-light border-0">
            <Container className="pt-3">
                <Form.Control placeholder="Axtarış..." type="text" onInput={(e) => searchData(e)} />
                <br />
                <Form className="d-md-flex justify-content-around fs-6">
                    {filters.map((type, index) => (
                        <Form.Check
                            key={type}
                            name="filter1"
                            defaultChecked={type === "all" ? "checked" : ""}
                            inline
                            label={filtersName[index]}
                            type="radio"
                            onChange={() => filterData(type)}
                        />
                    ))}
                </Form>
            </Container>
        </div>
    );
}

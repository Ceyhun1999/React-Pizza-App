import { Form } from "react-bootstrap";
import "./Filter.css";

export default function Filter({ data, filterData, searchData }) {
    const filters = ["all", "chick", "meat", "vegan", "spicy"];
    return (
        <div className="filter  border p-4">
            <Form.Label htmlFor="search">Search...</Form.Label>
            <Form.Control type="text" id="search" onInput={(e) => searchData(e)} />
            <br />
            <Form>
                {filters.map((type) => (
                    <Form.Check
                        key={type}
                        name="filter1"
                        defaultChecked={type === "all" ? "checked" : ""}
                        inline
                        label={type.toUpperCase()}
                        type="radio"
                        onChange={() => filterData(type)}
                    />
                ))}
            </Form>
        </div>
    );
}

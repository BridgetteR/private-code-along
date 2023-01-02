import { useState } from "react";
import Quantity from "../../components/Quantity/Quantity";
import Select from "../../components/Select/Select";
import TextField from "../../components/TextField/TextField";

const Form = ({ dropDownOptions }) => {
    const [textState, setTextState] = useState("");

    const [selection, setSelection] = useState(102);

    const [formQty, setFormQty] = useState(5);

    // console.log(selection);

    const handleQtyChange = (newQty) => {
        setFormQty(newQty);
    };

    return (
        <div>
            <TextField textValue={textState} textSetter={setTextState} />
            <Select
                options={dropDownOptions}
                value={selection}
                selectionSetter={setSelection}
            />
            <Quantity count={formQty} changeHandler={handleQtyChange} />
        </div>
    );
};

export default Form;

import { useState } from "react";
export default function Form() {
    const [firstName, setfirstName] = useState("");

    function handleOnChange(event) {
        console.log(event.target.value)
    }

    return (

        <input
            type="text"
            placeholder="First Name"
            onChange={ handleOnChange } />
    )
}
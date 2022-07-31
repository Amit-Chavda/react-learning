import { useState } from "react";
export default function Form() {
    const [formData, setformData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comment: "",
        isFriendly: false,
        employment: "",
        favCar: ""
    });

    console.log(formData)
    function handleOnChange(event) {
        const { name, value, type, checked } = event.target
        setformData((prev) => {
            return {
                ...prev,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    return (
        <>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleOnChange}
                name="firstName"
                value={formData.firstName} />
            <br />
            <br />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleOnChange}
                name="lastName"
                value={formData.lastName} />
            <br />
            <br />
            <input
                type="email"
                placeholder="Email"
                onChange={handleOnChange}
                name="email"
                value={formData.email} />

            <br />
            <br />
            <textarea
                name="comment"
                placeholder="Comments"
                onChange={handleOnChange}
                value={formData.comment} />

            <br />
            <br />
            <input
                type="checkbox"
                onChange={handleOnChange}
                name="isFriendly"
                id="isFriendly"
                checked={formData.isFriendly} />
            <label htmlFor="isFriendly">Are you Friendly?</label>

            <fieldset>
                <legend>
                    Select emplyment status
                </legend>

                <input
                    type="radio"
                    name="employment"
                    value="unemployed"
                    onChange={handleOnChange}
                    id="unemployed" />
                <label htmlFor="unemployed">Unemployed</label>

                <input
                    type="radio"
                    name="employment"
                    value="part-time"
                    onChange={handleOnChange}
                    id="part-time" />
                <label htmlFor="part-time">Part-time</label>

                <input
                    type="radio"
                    name="employment"
                    value="full-time"
                    onChange={handleOnChange}
                    id="full-time" />
                <label htmlFor="full-time">Full-time</label>

            </fieldset>

            <br />
            <label htmlFor="cars">Which is your favourite car:</label>
            <select
                name="favCar"
                id="cars"
                onChange={handleOnChange}
                value={formData.favCar}
            >
                <option value="">--Choose--</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
        </>
    )
}
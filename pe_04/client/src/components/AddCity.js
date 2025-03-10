import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";


const AddRecipe = ({onAddCity}) => {
    const [inputValues, setInputValues] = useState({
        city_name: "",
        country: "",
        state: "",
        population: "",
    })
    const { city_name, country, state, population } = inputValues;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputValues({
            ...inputValues,
            [name]: value
        })
        console.log(inputValues)
    }

    const handleClearInputs = () =>{
        setInputValues({
            ...inputValues,
            city_name: "",
            description: "",
            ingredients: "",
            population: "",
        });
        console.log(inputValues);
    }

    const handleSubmit = (e) => {
        console.log(city_name, country, state, population)
        e.preventDefault();
        if (!inputValues.city_name || !inputValues.country || !inputValues.state || !inputValues.population) {
            console.log("Please enter a city name");
            toast("Please make sure that all the field are filled in.")
        } else {
            try {
                onAddCity(inputValues)
            } catch (err) {
                console.log("handleSubmit error: ")
                console.log(err)
            }
            handleClearInputs()
        }
    }

    return(
        <div className="AddCity">
            <h3>Add City</h3>
            <form className="AddCityForm" onSubmit={e => handleSubmit(e)} onChange={e  => handleChange(e)}>
                <div className="AddCityFormGrid">
                <label htmlFor="city_name">City Name</label>
                <input id="city_name" type="text" name="city_name" placeholder="City Name" required />
                <label htmlFor="country">Country</label>
                <input id="country" type="text" name="country" placeholder="Country" required />
                <label htmlFor="state">State</label>
                <input id="state" type="text" name="state" placeholder="State" required />
                <label htmlFor="population">Population</label>
                <input id="population" type="number" name="population" placeholder="Population" required />
                </div>
                <button className={"AddCityButton"} type="submit">Add City</button>
            </form>
            <ToastContainer/>
        </div>
    );
};
export default AddCity;
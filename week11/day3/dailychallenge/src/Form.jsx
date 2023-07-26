import { useState } from "react"
import './Form.css'
const Form = (props) => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "",
        destination: "",
        restrictions: 'false',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    return (
        <>
            <form className="block" action="http://localhost:3000/?firstName=John&lastName=Doe&age=25&gender=male&destination=Japan&lactoseFree=on">
                <input type='text' name='name' placeholder='name' onChange={(e) => handleChange(e)} />
                <input type='number' name='age' placeholder='age' onChange={(e) => handleChange(e)} />

                <input type="text" name="gender" placeholder='gender' onChange={(e) => handleChange(e)} />
                <select name="destination" onChange={(e) => handleChange(e)}>
                    <option value="1" >1</option>
                    <option value="2" >2</option>
                    <option value="3" >3</option>
                </select>
                <input type="checkbox" name="restrictions" onChange={(e) => handleChange(e)} />X
                <input type="checkbox" name="restrictions" onChange={(e) => handleChange(e)} />Y
                <input type="checkbox" name="restrictions" onChange={(e) => handleChange(e)} />Z
                <button>Submit</button>
            </form>
            <div className="result">
                <h2>Name:{formData.name}</h2>
                <h2>Age:{formData.age}</h2>
                <h2>Gender:{formData.gender}</h2>
                <h2>Destination:{formData.destination}</h2>
                <h2>Dietary Restrictions:{formData.restrictions}</h2>
            </div>
        </>
    )

}

export default Form
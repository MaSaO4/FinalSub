import axios from "axios";
import { useState } from "react";
const DeleteEmployee = () => {
    const [id, setId] = useState('');
    const [message, setMessage] = useState('');
    const handleInputChange = (event) => {
        setId('6621f7176f8fb86da8af881f');
    };
    const deleteEmployee = (id) => {
        console.log(id);
        axios.delete(`http://localhost:9091/Class2/delete-emp/${id}`)
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
        // .then((resp) => {
        //     console.log(resp); // Check the value of resp
        //     setMessage(resp.data.message);
        // })
        // .catch((error) => {
        //     console.error(error); // Check the error object
        //     setMessage(`Error deleting employee: ${error.response.data.message}`);
        // });
    };
    return (
        <div className="container" style={{backgroundColor:'red'}}>
            <h2>Delete Employee</h2>
            <div className="mb-3">
                <label htmlFor="id" className="form-label">Employee ID:</label>
                <input
                    type="text"
                    id="id"
                    name="id"
                    value={id}
                    onChange={handleInputChange}
                    className="form-control"
                />
            </div>
            <button onClick={()=>deleteEmployee(id)} className="btn btn-danger" style={{backgroundColor:'black'}}>Delete Employee</button>
            <p className="mt-3">{message}</p>
        </div>
    );
};
export default DeleteEmployee;








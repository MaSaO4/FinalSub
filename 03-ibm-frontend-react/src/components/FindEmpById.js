import React, { useState } from 'react';
import axios from 'axios';
function FindEmpById() {
    const [id, setId] = useState('');
    const [employeeDetails, setEmployeeDetails] = useState(null);
    const handleChange = (event) => {
        setId(event.target.value);
    }
    const handleSubmit = () => {
        console.log("lorem ipsumß");

        axios.get(`http://localhost:9091/Class2/emp-id/${id}`)
            .then(resp => {
                console.log(resp.data); 
                if (resp.data.length > 0) {
                    setEmployeeDetails(resp.data[0]); 
                } else {
                    setEmployeeDetails(null); 
                }
            })
            .catch(err => console.error("Error fetching employee details:", err));
    }
    return (
        <div className="container mt-5">
            <div className="input-group mb-3">
                <input type="text" value={id} className="form-control" placeholder="Enter id to search" onChange={handleChange} />
                <button className="btn btn-primary" type="button" onClick={handleSubmit}>Search</button>
            </div>
            {employeeDetails && (
                <div className="card mt-3">
                    <div className="card-header">Employee Details</div>
                    <div className="card-body">
                        <p><strong>Name:</strong> {employeeDetails.firstName}</p>
                        <p><strong>Aadhar:</strong> {employeeDetails.aadhar || 'N/A'}</p>
                        <p><strong>Email:</strong> {employeeDetails.email || 'N/A'}</p>
                        <p><strong>Employee ID:</strong> {employeeDetails.employeeId}</p>
                        <p><strong>Salary:</strong> {employeeDetails.salary}</p>
                        {/* Add more details as needed */}
                    </div>
                </div>
            )}
        </div>
    );
}
export default FindEmpById;








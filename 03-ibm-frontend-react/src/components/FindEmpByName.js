import React, { useState } from 'react';
import axios from 'axios';
function FindEmpByName() {
    const [name, setName] = useState('');
    const [employeeDetails, setEmployeeDetails] = useState(null);
    const handleChange = (event) => {
        setName(event.target.value);
    }
    const handleSubmit = () => {
        axios.get(`http://localhost:9091/Class2/emp-fname/${name}`)
            .then(resp => {
                console.log(resp.data); // This will log the data returned by the server
                if (resp.data.length > 0) {
                    setEmployeeDetails(resp.data[0]); // Assuming only one employee is returned
                } else {
                    setEmployeeDetails(null); // Reset details if no employee found
                }
            })
            .catch(err => console.error("Error fetching employee details:", err));
    }
    return (
        <div className="container mt-5">
            <div className="input-group mb-3">
                <input type="text" value={name} className="form-control" placeholder="Enter name to search" onChange={handleChange} />
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
export default FindEmpByName;








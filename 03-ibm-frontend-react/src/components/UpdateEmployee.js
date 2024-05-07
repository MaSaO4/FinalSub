import React, { useState, useEffect } from 'react';
import axios from 'axios';
const UpdateEmployee = ({ employeeId: initialEmployeeId }) => {
    const [employeeId, setEmployeeId] = useState(initialEmployeeId);
    const [employee, setEmployee] = useState({
        firstName: '',
        email: '',
        salary: '',
        aadhar: ''
    });
    useEffect(() => {
        // if (initialEmployeeId) {
        //     // Fetch employee details when component mounts
        //     fetchEmployeeDetails(initialEmployeeId);
        // }
    }, [initialEmployeeId]);
    // const fetchEmployeeDetails = (id) => {
    //     axios.put(`http://localhost:9091/Class2/update-emp/${id}`,employee)
    //         .then((response) => {
    //             setEmployee(response.data);
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching employee details:', error);
    //         });
    // };
    const handleChange = (event) => {
        
            setEmployee({...employee , [event.target.name]: event.target.value});
        
    };
    const handleSubmit = async(event) => {
        event.preventDefault();
        
        // Send updated employee details to the server
        await axios.put(`http://localhost:9091/Class2/update-emp`, employee)
            .then((response) => {
                console.log('Employee details updated successfully:', response.data);
                // Optionally, redirect or display a success message
            })
            .catch((error) => {
                console.error('Error updating employee details:', error);
                // Handle error, e.g., display error message to the user
            });
    };
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Update Employee Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="employeeId" className="form-label">Employee ID:</label>
                    <input type="text" className="form-control" id="employeeId" name="employeeId" value={employeeId} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name:</label>
                    <input type="text" className="form-control" id="firstName" name="firstName" value={employee.firstName} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" name="email" value={employee.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="salary" className="form-label">Salary:</label>
                    <input type="number" className="form-control" id="salary" name="salary" value={employee.salary} onChange={handleChange} />
                </div>
                <div className="mb-3">
    <label htmlFor="aadhar" className="form-label">Aadhar:</label>
    <input type="text" className="form-control" id="aadhar" name="aadhar" value={employee.aadhar} onChange={handleChange} />
</div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    );
};
export default UpdateEmployee;
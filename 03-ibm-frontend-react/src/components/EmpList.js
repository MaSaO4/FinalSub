import axios from "axios";
import { useEffect, useState } from "react";

const EmpList = () => {

    const [empList, setEmpList] = useState('');

    useEffect(() => {
        console.log('useEffect');
        axios.get('http://localhost:9091/Class2/all-emp')
            .then((resp) => {
                console.log(resp.data);
                setEmpList(resp.data);
            })
    }, []);

    return (
        // <>
        //     <h1>EmpList Component</h1>
        //     <table>
        //         <thead>
        //             <th>Name</th> <th>Username</th> <th>Email</th> <th>City</th>
        //         </thead>
        //         <tbody>
        //             {empList && empList.map(emp =>
        //                 <tr key={emp.id}>
        //                     <td >{emp.name} </td>
        //                     <td >{emp.username} </td>
        //                     <td >{emp.email} </td>
        //                     <td >{emp.address.city} </td>
        //                 </tr>
        //             )}
        //         </tbody>
        //     </table>
        // </>

        <>
    <div className="container" style={{ backgroundColor: 'grey' }}>
        <h1>EmpList Component</h1>
        <table className="table">
            <thead>
                <tr>
                    {/* <th>Name</th> */}
                    <th>Username</th>
                    <th>Email</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {empList && empList.map(emp =>
                    <tr key={emp.id}>
                        <td>{emp.username}</td>
                        <td>{emp.email}</td>
                        <td>{emp.salary}</td>
                        {/* <td>{emp.address.city}</td> */}
                    </tr>
                )}
            </tbody>
        </table>
    </div>
</>

    );
};

export default EmpList;


// import axios from "axios";
// import { useState } from "react";

// const EmpList = () => {

//     const [empList, setEmpList] = useState('');

//     const getEmpList = () => {
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then((resp) => {
//                 console.log(resp);
//                 setEmpList(resp.data);
//             })
//     };

//     return (
//         <>
//             <h1>EmpList Component</h1>
//             <p> {empList && empList.length} </p>
//             <button onClick={getEmpList}>Get Emp List</button>

//         </>
//     );
// };

// export default EmpList;

import { createSlice } from "@reduxjs/toolkit";
console.log('empSlice');
const empSlice = createSlice({
    name: 'emp',
    initialState : { 
        empObj: {firstName: 'Sonu', salary: 10.50}  
    },
    reducers : { // more methods 
        setEmpObj : (state, action) => {
            console.log(action.payload);
            state.empObj = action.payload;
        },
            addEmployee: (state, action) => {
                state.employees.push(action.payload); // Push new employee to the array
            },
            updatedEmployee:(state,action)=>{
              const index=state.employees.findIndex(emp=>emp.id===action.payload.id);
                 // If the employee is found, update its properties
                 if (index !== -1) {
                    state.employees[index] = action.payload;
                }
            },
            showEmpList:(state,action)=>{
                 state.employees=action.payload;
            }
    }
});
export default empSlice.reducer;

export const {setEmpObj} = empSlice.actions;

// const empSlice = createSlice({
//     name: 'empObj',
//     initialState : '',
//     reducers : {
        
//     }
// });




// import { createSlice } from "@reduxjs/toolkit";
// import Employee from "../components/Employee";

// const EmpSlice = createSlice({
//     name: 'em',
//     initialState: '',
//     reducers : {
//         abc: (state, action) => {
//             state.em = action.payload;
//         }
//     },
// });

// // export default 
// export const {abc}  = EmpSlice.actions;
// export default EmpSlice.reducer;

// // const EmpReducer = createReducer(
// //     {
        
// //     }

// //     );
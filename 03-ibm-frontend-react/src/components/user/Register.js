import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import { useDispatch } from "react-redux";
import { userRegister } from "../../redux/UserSlice";

const Register = () => {

    const [registerData, setRegisterData] = useState({ username: '', password: '' });
    const [afterRegisterMessage, setAfterRegisterMessage] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setRegisterData({
            ...registerData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleRegisterSubmit = async (evt) => {
        evt.preventDefault();
        console.log(registerData);
        UserService.registerUser(registerData)
            .then((response) => {
                console.log(response);
                dispatch(userRegister(response));
                setRegisterData({ username: '', password: '' });
                setAfterRegisterMessage(`Hi ${response.username}! You've registered successfully!`);
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            })
            .catch((error) => {
                console.log(error);
                setAfterRegisterMessage(`Username already exists`);
            });

    };

    return (
        // <>
        //     <h1>Register Component</h1>
        //     <p>Register here</p>
        //     <form onSubmit={handleRegisterSubmit}>
        //         <input type="text" name="username" value={registerData.username}
        //             onChange={handleChange} autoFocus required />
        //         <br />
        //         <input type="password" name="password" value={registerData.password}
        //             onChange={handleChange} required />
        //         <br />
        //         <input type="submit" value="Register" />
        //     </form>
        //     <>
        //         <p>{afterRegisterMessage && afterRegisterMessage} </p>
        //     </>
        //     <p>Already registered? <Link to={'/login'}>Login</Link> </p>

        // </>

        <>
            <div className="container" style={{ backgroundColor: 'black' }}>
                <h1 className="text-success">Register Component</h1>
                <p className="text-success">Register here</p>
                <form onSubmit={handleRegisterSubmit}>
                    <div className="mb-3">
                        <input className="form-control" type="text" name="username" value={registerData.username}
                            onChange={handleChange} autoFocus required placeholder="Username" />
                    </div>
                    <div className="mb-3">
                        <input className="form-control" type="password" name="password" value={registerData.password}
                            onChange={handleChange} required placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
                {afterRegisterMessage && <p>{afterRegisterMessage}</p>}
                <p className="text-success">Already registered? <Link to={'/login'}>Login</Link></p>
            </div>
        </>

    );
};
export default Register;
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/UserSlice";

const Login = () => {

    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [afterSubmit, setAfterSubmit] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setLoginData({
            ...loginData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleLoginSubmit = (evt) => {
        evt.preventDefault();
        console.log(loginData);
        UserService.loginUser(loginData)
            .then((response) => {
                console.log(response);
                setAfterSubmit(`Hi ${loginData.username}! You've logged in successfully!`);
                setTimeout(() => {
                    setLoginData({ username: '', password: '' });
                    dispatch(userLogin(response));
                    navigate('/profile');
                }, 2000);
            })
            .catch((error) => {
                console.log(error);
                setLoginData({ username: '', password: '' });
                setAfterSubmit(`Invalid credentials!`);
            });
    };

    return (
        // <>
        //     <h1 className="text-success">Login Component</h1>
        //     <p className="text-successs ">Login here</p>
        //     <form onSubmit={handleLoginSubmit}>
        //         <input className="shadow" type="text" name="username" value={loginData.username}
        //             onChange={handleChange} autoFocus required />
        //         <br />
        //         <input className="shadow" type="password" name="password" value={loginData.password}
        //             onChange={handleChange} required />
        //         <br />
        //         <input type="submit" value="Login" />
        //     </form>
        //     {afterSubmit && <p>{afterSubmit}</p>}
        //     <p>Not yet registered? <Link to={'/register'}>Register</Link> </p>
        // </>
        <>
    <div className="container" style={{ backgroundColor: 'black' }}>
        <h1 className="text-success">Login Component</h1>
        <p className="text-success">Login here</p>
        <form onSubmit={handleLoginSubmit}>
            <div className="mb-3">
                <input className="form-control shadow" type="text" name="username" value={loginData.username}
                    onChange={handleChange} autoFocus required placeholder="Username" />
            </div>
            <div className="mb-3">
                <input className="form-control shadow" type="password" name="password" value={loginData.password}
                    onChange={handleChange} required placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
        {afterSubmit && <p className="text-success">{afterSubmit}</p>}
        <p className="text-warning">Not yet registered? <Link to={'/register'}>Register</Link> </p>
    </div>
</>

    );
};
export default Login;
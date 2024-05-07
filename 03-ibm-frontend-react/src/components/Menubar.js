import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Menubar = () => {

    const loginStatus = useSelector(store => store.user.loginStatus);

    if (loginStatus) {
        return (
            // <>
            //     <ul>
            //         <li> <Link to={'/'}>Home</Link> </li>
            //         <li> <Link to={'/emp'}>Employee</Link> </li>
            //         <li> <Link to={'/parent'}>Parent</Link> </li>
            //         <li> <Link to={'/logout'}>Logout</Link> </li>
            //     </ul>
            // </>
            <>
                <ul className="navbar-nav mr-auto" style={{ backgroundColor: 'cyan' }}>
                    <li className="nav-item text-primary"> <Link className="nav-link" to={'/'}>Home</Link> </li>
                    <li className="nav-item text-secondary"> <Link className="nav-link" to={'/emp'}>Employee</Link> </li>
                    <li className="nav-item text-info"> <Link className="nav-link" to={'/parent'}>Parent</Link> </li>
                    <li className="nav-item text-danger"> <Link className="nav-link" to={'/logout'}>Logout</Link> </li>
                    <li className="nav-item text-danger"> <Link className="nav-link" to={'/delete'}>Delete Employee</Link> </li>
                </ul>
            </>

        );
    }
    else {
        return (
            // <>
            //     <ul>
            //         <li> <Link to={'/'}>Home</Link> </li>
            //         <li> <Link to={'/register'}>Register</Link> </li>
            //         <li> <Link to={'/login'}>Login</Link> </li>
            //     </ul>
            // </>
            <>
                <ul className="navbar-nav mr-auto" style={{ backgroundColor: 'cyan' }}>
                    <li className="nav-item text-success"> <Link className="nav-link" to={'/'}>Home</Link> </li>
                    <li className="nav-item text-primary"> <Link className="nav-link" to={'/register'}>Register</Link> </li>
                    <li className="nav-item text-warning"> <Link className="nav-link" to={'/login'}>Login</Link> </li>
                </ul>
            </>

        );
    }
};

export default Menubar;

import React from "react";
import { useSelector } from "react-redux";
import UpdateProfile from "./UpdateProfile";

const Profile = () => {
    const userData = useSelector((state) => state.user.loggedInUser);

    return (
        // <>
        //     <h1>User Profile</h1>
        //     {userData && (
        //         <div>
        //             <p>Username: {userData.username}</p>
        //             <p>Fist name: {userData.firstName}</p>
        //             <p>Last Name: {userData.lastName}</p>
        //             <p>Phone: {userData.phone}</p>
        //             <p>Email: {userData.email}</p>
        //             {userData.avatar && <img width={'300px'} src={userData.avatar} alt="Avatar" />}
        //         </div>
        //     )}
        //     <UpdateProfile />
        // </>

        <>
    <div className="container" style={{backgroundColor : 'yellow'}}>
        <h1>User Profile</h1>
        {userData && (
            <div className="card">
                <div className="card-body">
                    <p className="card-text">Username: {userData.username}</p>
                    <p className="card-text">First Name: {userData.firstName}</p>
                    <p className="card-text">Last Name: {userData.lastName}</p>
                    <p className="card-text">Phone: {userData.phone}</p>
                    <p className="card-text">Email: {userData.email}</p>
                    {userData.avatar && <img className="card-img-top" src={userData.avatar} alt="Avatar" />}
                </div>
            </div>
        )}
        <UpdateProfile />
    </div>
</>

    );
};

export default Profile;

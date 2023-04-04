import React from 'react';
import "./User.css"
import { Link, useLoaderData } from 'react-router-dom';

const User = ({user}) => {
    let {id ,name,username,address,email}=user;
    
    return (
        <div className='user'>
            <h2>{name}</h2>
            <h4>{username}</h4>
            <p>{email}</p>
            <Link to={`/user/${id}`}>Details</Link>

        </div>
    );
};

export default User;
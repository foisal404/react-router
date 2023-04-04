import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';
import "./Users.css"

const Users = () => {
    // data load pass from path 
    let data=useLoaderData();
    console.log(data);
    return (
        <div>
            <h1>{data.length}</h1>
            <div className='users'>
                {
                    data.map(user=><User key="user.id" user={user}></User>)
                }
            </div>   
        </div>
    );
};

export default Users;
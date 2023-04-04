import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            {/* <div>{navigation.state}</div> */}
            
            
            <div  className={`spinner-border ${navigation.state === "loading" ?  "loading" :"noloading" }`} role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <Outlet></Outlet>
            
        
            
        </div>
    );
};

export default Home;
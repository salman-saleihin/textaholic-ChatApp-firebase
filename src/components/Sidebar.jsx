import React from 'react';
import Navber from "./Navber" ;
import Search from "./Search" ;

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Navber />
            <Search />
        </div>
    );
};

export default Sidebar;
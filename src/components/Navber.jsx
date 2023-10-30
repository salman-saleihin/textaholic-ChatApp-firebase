import React from 'react';

const Navber = () => {
    return (
        <div className='navbar'>
            <span className='logo'>TextAholic</span>
            <div className='user'>
                <img src="https://scontent-ccu1-2.xx.fbcdn.net/v/t39.30808-6/320652956_725992582013057_5746360113665025003_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7wVe5asv9EkAX-2cxDK&_nc_ht=scontent-ccu1-2.xx&oh=00_AfA7bSk8lCEtP_Kc1I3wCjPLCqVgI2QzBB2o7IPnc8MgjA&oe=6543CEA2" alt="" />
                <span>Salman</span>
                <button>Logout</button>
            </div>
        </div>
    );
};

export default Navber;
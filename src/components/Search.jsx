import React from 'react';

const Search = () => {
    return (
        <div className='search'>
            <div className="searchForm">
                <input type="text" placeholder='Find Someone to Chat' name="" id="" />
            </div>
            <div className="userChat">
                <img src="https://scontent.fdac37-1.fna.fbcdn.net/v/t39.30808-6/396553076_1529197534565566_6679841638574927980_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-m9DwrxHejgAX-0K4d5&_nc_ht=scontent.fdac37-1.fna&oh=00_AfCf0MohlebbdYc58m_hY17GCUBqKgSXX-_-bA-mmWqe0A&oe=6543C912" alt="" />
                <div className="userChatInfo">
                    <span>Reha Rehman</span>

                </div>
            </div>
        </div>
    );
};

export default Search;
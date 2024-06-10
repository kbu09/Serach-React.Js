import React from 'react';

const Search = ({ query, handleSearch }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search by email"
                value={query}
                onChange={handleSearch}
            />
        </div>
    );
};

export default Search;

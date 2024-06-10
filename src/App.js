import React, { useState, useEffect } from 'react';
import Table from './Table';
import Search from './Search';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setFilteredData(data); // Initialize filtered data with all data
      });
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    const lowercasedValue = value.toLowerCase();

    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(lowercasedValue) ||
      item.email.toLowerCase().includes(lowercasedValue)
    );

    setFilteredData(filtered);
  };

  return (
    <div className="App">
      <h1>Searchable Table by Email</h1>
      <Search query={query} handleSearch={handleSearch} />
      <Table data={filteredData} />
    </div>
  );
};

export default App;

import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import DataTable from './component/DataTable'
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <div className="App">
      <DataTable />
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item key="5" active={false}>
          1
        </Pagination.Item>
        <Pagination.Item key="5" active={false}>
          2
        </Pagination.Item>
        <Pagination.Item key="5" active={false}>
          3
        </Pagination.Item>
        <Pagination.Item key="5" active={true}>
          4
        </Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
}

export default App;

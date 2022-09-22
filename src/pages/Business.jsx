import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page ,Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import Widget from '../components/widget/Widget'
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Datatable from '../components/datatable/Datatable'


import Paper from "@mui/material/Paper";

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Business = () => {
  const toolbarOptions = ['Search'];
  const [customers, setCustomer] = useState([])
  const [data, setTransactions] = useState([])
    // const[data,setData]=useState([])
  const [search, setSearch] = useState("")
  const [filteredResults, setFilteredResults] = useState([])
  const editing = { allowDeleting: true, allowEditing: true };



  
  
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header  title="Customers" 
      />
       <div className="widgets">
          <Widget />
          <Widget />
          <Widget />
        </div>
        <Datatable/>
      
    </div>
  );
};
export default Business;

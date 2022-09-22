import "./datatable.css";
import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
// import DataTable from "react-data-table-component";
import { Button, inputAdornmentClasses } from "@mui/material";
import { Link } from 'react-router-dom';
import Paper from "@mui/material/Paper";
import FadeLoader from "react-spinners/FadeLoader";
import DataTable, { createTheme } from 'react-data-table-component';
import { useParams } from 'react-router-dom'

createTheme('dark', {
    background: {
      default: 'transparent',
    },
  });
  
const Datatable = () => {

  const { id } = useParams();
  

  const [customers, setCustomer] = useState([])
  const [search, setSearch] = useState("")
  const [filteredResults, setFilteredResults] = useState([]);
  const [mobileno ,setMobileno] = useState([])

  
  const [user, setUser] = useState([])
  
  const [data, setTransactions] = useState([])
  const [userLoanAccounts, setUserLoanAccount] = useState([])

  console.log(mobileno)


  const getCustomers = async () => {
    try {
      const response = await axios.get('https://hsu36wspzq.eu-west-1.awsapprunner.com/fineract-provider/api/v1/clients/', {
        headers: {
          'fineract-platform-tenantid': 'default',
          'Authorization': 'Basic bWlmb3M6OUtxeSZzcDgmRCFp'
        }

      })
      
      setCustomer(response.data)
      setMobileno(response.data)

      setFilteredResults(response.data.pageItems)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    if (userLoanAccounts && userLoanAccounts.length > 0) {
        try {
            axios.get(`https://hsu36wspzq.eu-west-1.awsapprunner.com/fineract-provider/api/v1/loans/${userLoanAccounts[0].id}?associations=all&exclude=guarantors,futureSchedule`, {
                headers: {
                    'fineract-platform-tenantid': 'default',
                    'Authorization': 'Basic bWlmb3M6OUtxeSZzcDgmRCFp'
                }

            }).then(response => {
                                // setTransactions(response.data.transactions)
                    setTransactions(response.data)
                    console.log(response)
        
                    //setTransactions(response.data)
                    setCustomer(response.data)
        
                    setFilteredResults(response.data.transactions)

            }).catch(err => {
                console.log(`error is ${err}`)
            })


        } catch (error) {
            console.log(error)
        }
    }
}, [id, userLoanAccounts]);

  const[loading,setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
        setLoading(false)
    },800)
  },[])

  const columns = [
    {
      name: 'Name',
      selector: (row) => row.id,
      sortable: true,
      cell: row => {
        return (
          <Link to={"/customer/" + row.id}  >
            <div className="person">{row.displayName}</div>
          </Link>
        )
      }

    },
    {
      name: 'ID No',
      selector: (row) => row.idnumber,
      cell: row => {
        return (
          
            <div className="person">{row.externalId}</div>
          
        )
      }

    },
    
    {
      name: 'Phone Number',
      sortable: true,
      selector: (row) => row.mobileNo
      
    },
    {
      name: 'AccountNumber',
      selector: (row) => row.accountNo

    },
    {
      name: 'Loan Type',
      selector: (row) => row.loanType


    },
    {
      name: 'Device',
      sortable: true,
      selector: (row) => row.device


    },
    {
      name: 'Bracket',
      selector: (row) => row.bracket

    }
  ]

  useEffect(() => {
    getCustomers();
  }, [])







  const customStyles = {
    table: {
        width: '100%',
        // display:'flex',
        // height:'100%',

    },
    rows: {
      style: {
        minHeight: '80px', // override the row height
        // width: '100%',

      },
    },
    headCells: {
      style: {
        // backgroundColor: '8px', // override the cell padding for head cells
         paddingRight: '18px',
         paddingLeft: '18px',
        paddingTop:'12px',
        paddingBottom:'12px',
        backgroundColor:'#000029',
        color:'white'
      },
      body: {
        fontSize: 14,
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        // paddingRight: '8px',
        
        // border: '1px solid #ddd',
        // padding: '8px',

      },
    },
  };

  return (

    // <div className="main-container" >
    <div  >


    {
        loading?
        <div className="sweet-loading">
        <FadeLoader color={'#be97e8'} loading={loading} size={150} /></div>
        :
        <Paper>
        
        <DataTable
        title="Customers"
          columns={columns}
          data={filteredResults}
          fixedHeader
          fixedHeaderScrollHeight="600px"
          direction="auto"
          selectableRows
          selectableRowsHighlight
          highlightOnHover
          subHeader
          responsive
          pagination
          theme="solarized"
          subHeaderComponent={
            <input
              type="text"
              placeholder="Search Name,ID No,Phone No,Account No"
              onChange={(e) => setSearch(e.target.value)}
              className="inputbar"
            />
          }
  
          subHeaderAlign="left"
  
          customStyles={customStyles}
        />
  
  
  </Paper>
        }
   
    </div>
    // </div>
  )


}

export default Datatable
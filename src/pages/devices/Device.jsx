import './deviceprofile.css'
// import Sidebar from '../../components/sidebar/Sidebar'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from "axios";
import Widget from '../../components/widget/Widget'
// import List from '../../components/table/Table'
import { Link } from 'react-router-dom';

import React from 'react'

const Customerprofile = () => {

  const { id } = useParams();

  const [user, setUser] = useState([])
  const [loanSummary, setLoanSummary] = useState({})
  const [status, setStatus] = useState({})

  const [userLoanAccounts, setUserLoanAccount] = useState([])


  useEffect(() => {
    if (id) {
      axios.get(`https://hsu36wspzq.eu-west-1.awsapprunner.com/fineract-provider/api/v1/clients/${id}/`, {
        headers: {
          'fineract-platform-tenantid': 'default',
          'Authorization': 'Basic bWlmb3M6OUtxeSZzcDgmRCFp'
        }
      })
        .then(res => {
          setUser(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [id]);


  useEffect(() => {
    if (id) {
      axios.get(`https://hsu36wspzq.eu-west-1.awsapprunner.com/fineract-provider/api/v1/clients/${id}/accounts`, {
        headers: {
          'fineract-platform-tenantid': 'default',
          'Authorization': 'Basic bWlmb3M6OUtxeSZzcDgmRCFp'
        }
      })
        .then(res => {
          setUserLoanAccount(res.data.loanAccounts)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [id]);

  useEffect(()=>{
      if (userLoanAccounts && userLoanAccounts.length > 0) {
        console.log("loan accounts:", userLoanAccounts)
        axios.get(`https://hsu36wspzq.eu-west-1.awsapprunner.com/fineract-provider/api/v1/loans/${userLoanAccounts[0].id}?associations=all&exclude=guarantors,futureSchedule/`,{
        headers: { 
          'fineract-platform-tenantid': 'default', 
          'Authorization': 'Basic bWlmb3M6OUtxeSZzcDgmRCFp'
        }
      })
      .then(res => {
        //setLoandetails(res.data)
        setLoanSummary(res.data.summary)
        setStatus(res.data.status)
        console.log("loan:", res.data)
      })
      .catch(err => {
        console.log(`errror is ${err}`)
      })

      }
    
  },[id, userLoanAccounts]);

  
  return (
    <div className='customerprofile'>
      <Sidebar />
      <div className="customerprofileContainer">
        <div className="top">
          <div className="topup">
            <Link to="/">
              <span>Home{'>'}</span>
            </Link>
            <Link to="/">
            <span>Customers{'>'}</span>
            </Link>
            <span>Customer Log {'>'}</span>
            <span className='log'>Device History</span>

          </div>
          <div className="topmiddle">
            <span className='profile'>Customer Profileeeeeee</span>
            <span className='customername'>{user.displayName}</span>

          </div>
          <div className="topbottom">
            <span >Customer data</span>
            <span className='customeractive'>Customer data</span>

            <Link to='payments'> <span  className='customeractive'>Payment History</span></Link>
            <span className='customeractive'>Device Association History</span>
            <span>Communication History</span>
          </div>
          <hr className='topline' />
        </div>

        <div className="bottom">
          <div className="bottomtop">
            <div class="avatar">
              <div class="avatar__letters">LS</div>
            </div>
            <div className='name_epc'>
              <span className="nameepc">{user.displayName}</span>
              <span className="epc">EPC4546</span>
            </div>

          </div>
          <div className="bottombottom">
            <div className="left">
              <div className="customer_details ">
                <h5>BASIC DETAILS</h5>
                <div className="customerdetails_specs">
                  <h6>Account Number</h6>
                  <span className='btmleft'>{user.accountNo}</span>
                </div>
                <div className="customerdetails_specs">
                  <h6>ID Number</h6>
                  <span className='btmleft'>{user.externalId}</span>
                </div>
                <div className="customerdetails_specs">
                  <h6>Phone Number</h6>
                  <span className=' btmleft'>+254 567 767</span>
                </div>
              </div>
              <div className="device_details">
                <h5>DEVICE DETAILS</h5>
                <div className="customerdetails_specs">
                  <h6>Device Name</h6>
                  <div className="device_detailsname">
                    <span className='btmleft'>ECOA EPC  -40043271 </span> <br />
                    <span className='btmleft'>ECOA Induction  -40043271 </span> <br />
                    <button>Add Device</button>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="center">
              <div className="payplan">
                <h5>Device Details</h5>
                <div className="customerdetails_specs">
                  <h6>Device Name</h6>
                  <span className='btmleft'>Basic</span>
                </div>
                <div className="customerdetails_specs">
                  <h6>Deposit</h6>
                  <span className='btmleft'>KES 3000</span>
                </div>
                <div className="customerdetails_specs">
                  <h6>Installment</h6>
                  <span className=' btmleft'>KES 300</span>
                </div>
                <div className="customerdetails_specs">
                  <h6>Payment Period</h6>
                  <span className=' btmleft'>15 Weeks</span>
                </div>
              </div>
              <h5>LOAN DETAILS</h5>
              <div className="customerdetails_specs">
                <h6>Loan Status</h6>
                <span className='btmleft'>{status.value}</span>
              </div>
              <div className="customerdetails_specs">
                <h6>Total Paid</h6>
                <span className='btmleft'>KES {loanSummary.totalRepayment}</span>
              </div>
              <div className="customerdetails_specs">
                <h6>Loan Balance</h6>
                <span className=' btmleft'>{loanSummary.totalOutstanding}</span>
              </div>
            </div>
            <hr />
            {/* <div className="right">
              <div className="communication_details">
                <h5>COMMUNICATION DETAILS</h5>
                <div className="customerdetails_specs">
                  <h6>Communication Campaign</h6>
                  <span className='btmleft'>Basic</span>
                </div>
                <div className="customerdetails_specs">
                  <h6>Communication Campaign</h6>
                  <span className='btmleft'>Basic</span>
                </div>
                <div className="customerdetails_specs">
                  <h6>Communiacation Campaign</h6>
                  <span className=' btmleft'>Basic</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customerprofile
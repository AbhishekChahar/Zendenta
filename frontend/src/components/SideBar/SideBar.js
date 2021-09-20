import React from 'react'
import './_SideBar.scss'
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import PatientList from './../Patients-List/PatientsList.js';

const SideBar = () => {
    const style = {
        textDecoration: "none",
        color: "inherit"
    }
    return (
        <div className='sidebar'>
            <img src={Logo} alt="" />
            <ul className='p-0' style={{ paddingLeft: "10px" }}>
                <li><Link style={style} to='/overview' ><i className="far fa-tachometer-fast"></i> Overview</Link></li>
                <li><Link style={style} to='/calendar' ><i className="far fa-calendar"></i> Calender</Link></li>
                <li><Link style={style} to='/PatientList' ><i className="fal fa-user"></i> Patient List</Link></li>
                <li><Link style={style} to='/messages' ><i className="far fa-sms"></i> Messages</Link></li>
                <li><Link style={style} to='/paymentinformation' ><i className="far fa-sack-dollar"></i> Payment Info.</Link></li>
                <li><Link style={style} to='/settings' ><i className="fas fa-sliders-v"></i> Settings</Link></li>
            </ul>
        </div>
    )
}

export default SideBar

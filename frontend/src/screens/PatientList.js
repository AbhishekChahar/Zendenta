import React from 'react'
import './patientList.scss';

const PatientList = () => {
    return (
        <>
            <div className = "patientList container">
                <div className = "patientList__search-bar">
                    <p>search</p>
                </div>
                <div className = "patientList__main">
                    <p>list</p>
                </div>
            </div>
        </>
    )
}
export default PatientList;
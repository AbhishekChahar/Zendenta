import React from 'react'
// import { Col, Container, Row } from 'react-bootstrap'
import './Overview.scss'
import styled from 'styled-components'
import {
    OverviewCard,
} from '../../components/OverviewComponents/OverviewComponents'

const AppointmentStats = styled(OverviewCard)`
`
const AppointmentRequest = styled(OverviewCard)`
width:40%;
`
const TodaysAppointments = styled(OverviewCard)`
height:34vh;
width:24%
`
const TopTreatments = styled(TodaysAppointments)`
`
const TotalPatients = styled(TodaysAppointments)`
`
const Jaspel = styled(TodaysAppointments)`

`;


const Overview = () => {
    return (
        <div className="overview">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: "flex" }}>
                    <AppointmentStats />
                    <AppointmentRequest />
                </div>
                <div style={{ display: "flex" }}>
                    <TodaysAppointments>
                        <div>1</div>
                        <div>2</div>
                    </TodaysAppointments>
                    <TopTreatments></TopTreatments>
                    <TotalPatients></TotalPatients>
                    <Jaspel></Jaspel>
                </div>

            </div>

        </div>
    )
}

export default Overview

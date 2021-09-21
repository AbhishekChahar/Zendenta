import React from 'react'
import './Overview.scss'
import styled from 'styled-components'
import {
    OverviewCard,
    MoreButton,
} from '../../components/OverviewComponents/OverviewComponents'

const AppointmentStats = styled(OverviewCard)`
`
const AppointmentRequest = styled(OverviewCard)`
width:40%;
display:flex;
flex-direction: column;
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
const MoreButtonSec = styled(MoreButton)`
top: 0;
`

const ApprovelRequest = styled(OverviewCard)`
    width: 53%;
    background-color: white;
    margin: 0;
    height: 20vh;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    p{
        font-size: smaller;
    }
`;
const UpcomingAppintments = styled(ApprovelRequest)`
width:47%;
background-color: green;


`;
const ClinicInfo = styled(OverviewCard)`
width:100%;
background-color: pink;
margin: 0;
height: 24vh;
`;


const Overview = () => {
    return (
        <div className="overview">
            <div style={{ display: 'flex', flexDirection: 'column', }}>
                <div style={{ display: "flex" }}>
                    <AppointmentStats />
                    <AppointmentRequest>
                        <div style={{ display: 'flex' }}>
                            <ApprovelRequest>
                                <div>
                                    <h6>Approvel Request</h6>
                                    <h1>26</h1>
                                    <p>Request waiting to Approve </p>
                                </div>
                                <MoreButtonSec>
                                    <p>More</p>
                                    <i className="fas fa-chevron-circle-right"></i>
                                </MoreButtonSec>
                            </ApprovelRequest>
                            <UpcomingAppintments>
                                <h6>UPCOMING APPOINTMENT</h6>
                                <h1>14</h1>

                                <MoreButtonSec>
                                    <p>More</p>
                                    <i className="fas fa-chevron-circle-right"></i>
                                </MoreButtonSec></UpcomingAppintments>
                        </div>
                        <div>
                            <ClinicInfo>
                                <h6>CLININC INFORMATION</h6>
                                <p> <i className="fas fa-chevron-circle-right"></i>Request waiting to Approve </p>
                                <p><i className="fas fa-chevron-circle-right"></i>Request waiting to Approve </p>

                            </ClinicInfo>
                        </div>
                    </AppointmentRequest>
                </div>
                <div style={{ display: "flex" }}>
                    <TodaysAppointments>
                        <MoreButton>
                            <p>More</p>
                            <i className="fas fa-chevron-circle-right"></i>
                        </MoreButton>
                    </TodaysAppointments>
                    <TopTreatments><MoreButton>
                        <p>More</p>
                        <i className="fas fa-chevron-circle-right"></i>
                    </MoreButton></TopTreatments>
                    <TotalPatients><MoreButton>
                        <p>More</p>
                        <i className="fas fa-chevron-circle-right"></i>
                    </MoreButton></TotalPatients>
                    <Jaspel><MoreButton>
                        <p>More</p>
                        <i className="fas fa-chevron-circle-right"></i>
                    </MoreButton></Jaspel>
                </div>

            </div>

        </div>
    )
}

export default Overview

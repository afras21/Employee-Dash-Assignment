import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DashData from '../dashboardpage.json'


class Dashboard extends React.Component{
    constructor () {
        super()
    };

    // state = {
    //     userData: DashData
    // }
 


    render() {
        return DashData.map((item, index) => {
            return(
            <div>
                <span style={{background: '#fff', borderRadius:'100'}}>
                </span>
                <span>
                {item.id}
                </span>
                <span style={{marginLeft: '5%', color: '#000'}}>
                {item.name}
                </span>
                <span style={{marginLeft: '5%', color: '#000'}}>
                {item.age}
                </span>
                <span style={{marginLeft: '5%', color: '#000'}}>
                {item.gender}
                </span>
                <span style={{marginLeft: '5%', color: '#000'}}>
                {item.email}
                </span>
                <span style={{marginLeft: '5%', color: '#000', marginBottom: '5%'}}>
                {item.phoneNo}
                </span>
            </div>
            )
        });
    }
}
export default Dashboard;

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
        return (
            <div>
                <div style = {{fontFamily: 'Roboto', fontWeight: 600, fontSize: 30, marginBottom: '10%', color: '#b3b3b3'}}>
                    Employee Dashboard ( {DashData.length} )
                </div>
              <div>
                <span style={{background: '#fff', borderRadius:'100'}}>
                </span>
                <span style={{marginLeft: '1%', color: '#000'}}>
                {'S.no'}
                </span>
                <span style={{marginLeft: '9%', color: '#000'}}>
                {'Name'}
                </span>
                <span style={{marginLeft: '7%', color: '#000'}}>
                {'Age'}
                </span>
                <span style={{marginLeft: '8%', color: '#000'}}>
                {'Gender'}
                </span>
                <span style={{marginLeft: '10%', color: '#000'}}>
                {'Email'}
                </span>
                <span style={{marginLeft: '20%', color: '#000', marginBottom: '8%'}}>
                {'Phone'}
                </span> 
            </div>  
            <div>
                {this.renderData()}
            </div>
            </div>
        );
    }

    renderData() {
        return DashData.map((item, index) => {
            return(
            <div
            className="PageSwitcher__Item1">
                <span style={{background: '#fff', borderRadius:'100'}}>
                </span>
                <span style={{marginLeft: '1%', color: '#000'}}>
                {item.id}
                </span>
                <span style={{marginLeft: '10%', color: '#000'}}>
                {item.name}
                </span>
                <span style={{marginLeft: '10%', color: '#000'}}>
                {item.age}
                </span>
                <span style={{marginLeft: '10%', color: '#000'}}>
                {item.gender}
                </span>
                <span style={{marginLeft: '10%', color: '#000'}}>
                {item.email}
                </span>
                <span style={{marginLeft: '10%', color: '#000', marginBottom: '8%'}}>
                {item.phoneNo}
                </span>
            </div>
            )
        });
    }
}
export default Dashboard;

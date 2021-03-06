import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginData from '../Login.json'
import DashData from '../dashboardpage.json'

class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        // alert(LoginData.username)
        if((this.state.email == LoginData.username) && (this.state.password == LoginData.password)) {
          this.props.history.push("/dashboard");
        } else {
          alert('Please enter valid credentials')
        }
        


        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
        <div style={{padding: '5%'}}>
          <div className="LoginHeader">
          Empify Login
            </div>
                  <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button
                  // onClick={window.alert('hiii')}
                  className="FormField__Button mr-20">Sign In</button>
                   {/* <Link to="/" className="FormField__Link">Create an account</Link> */}
              </div>
            </form>
          </div>
        </div>

        );
    }
}

export default SignInForm;

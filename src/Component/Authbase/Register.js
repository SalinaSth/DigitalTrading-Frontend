import React, { Component } from 'react';

import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon, MDBBtn, MDBCarouselItem } from 'mdbreact';

class Register extends Component{
        state = {
            fullname : "",
            branchName : "",
            email:"",
            password:"",
            contact:"",
            citizenship:"",
            kyc:"",
            clientType:"",
        }
        
    ChangeItems=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    fileHandler = (e)=>{
        this.setState({
            [e.target.name]: e.target.files[0]
        })
    }
    
    SendItems=(e)=>{
        e.preventDefault();
        const data = new FormData();
        data.append('fullname',this.state.fullname)
        data.append('branchName',this.state.branchName)
        data.append('email',this.state.email)
        data.append('password',this.state.password)
        data.append('contact',this.state.contact)
        data.append('citizenship',this.state.citizenship)
        data.append('kyc',this.state.kyc)
        data.append('clientType',this.state.clientType)
        
        
        console.log(data)
    
        axios.post("http://localhost:90/client/register",data, this.state.config)
        .then((response)=>{
            console.log(response)
            alert("Registration successful!")
            window.location.reload(true);
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }
    
    render(){  
    return(
        <div className="container-fluid containerMargin ">
            <div className="container-fluid row ">
                <div className="col-md-3"></div>
                <div className="col-md-6 custom-reg">
                    <img className="" src="/images/logo.jpg" style={{width:"80px", height:"80px"}}/>
                    <h5>Digital Trading System</h5>
                    <form className="custom-form">
                    <p><input type="text" id="Fullname" className="form-control" name="fullname" placeholder="Enter Full Name" 
                    value={this.state.fullname} onChange={this.ChangeItems} required /></p>

                    <p><select name="branchName" className="browser-default custom-select form-control" 
                            value={this.state.branchName} onChange={this.ChangeItems}>
                            <option >Choose Your Bank Branch</option>
                            <option>LTP 11200</option>
                            <option >KTM 12900</option>
                            <option >BKT 28900</option>
                        </select></p>

                    <p><input type="text" className="form-control" name="email" placeholder="Enter Email Address" 
                    value={this.state.email} onChange={this.ChangeItems} /></p>

                    <p><input type="password" className="form-control" name="password" placeholder="Enter Password"
                    value={this.state.password} onChange={this.ChangeItems} /></p>

                    <p><input type="number" id="Contact" className="form-control" name="contact" placeholder="Enter Contact number"  
                    value={this.state.contact} onChange={this.ChangeItems}/></p>
                    
                    <label>Upload your citizenship</label>
                    <p><input type="file" className="form-control" name="citizenship" placeholder="Upload your citizenship"
                    onChange={this.fileHandler} /></p>
                    
                    <label>Upload your Bank's KYC document</label>
                    <p><input type="file" className="form-control" name="kyc" placeholder="Upload your KYC"
                     onChange={this.fileHandler} /></p>

                    <p><select name="clientType" className="browser-default custom-select form-control"
                        value={this.state.clientType} onChange={this.ChangeItems}>
                        <option className="opt">Choose Client Type</option>
                        <option value="coorporate" >Coorporate</option>
                        <option value="individual">Individual</option>
                        <option value="mutual">Mutual Funds</option>
                        </select></p>
                    
                    <p><input type="checkbox"/> Do you agree with our <u>Terms and Conditions?</u></p>

                    <button className="btn btn-lg btn-block" onClick={this.SendItems}>Sign up</button>
                    <p className="text-center">
                        Already have an account? <a href="/login">Log in</a>
                    </p>
                </form>
                    
                </div>
                <div className="col-md-3"></div>
            </div>       
        </div>
    )
    }
}

export default Register;
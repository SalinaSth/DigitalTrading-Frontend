import { Component } from "react";
import axios from "axios"
import { Redirect } from 'react-router-dom';
class Login extends Component{
    state = {
        email : "",
        password : "",
        chklogin : false
    }

    changeHandler =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    submitLogin = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:90/client/login", this.state)
            .then((response)=>{
                console.log(response);
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('email', response.data.clientData.email)
                localStorage.setItem('fullname', response.data.clientData.fullname)
                this.setState({
                    chkLogin: true
                })
                window.location.reload(true)
            })        
            .catch((err)=>{
                console.log(err.response)
                alert("Invalid Username or Password. Try again")
            })
        }
    render(){
        if (this.state.chkLogin === true) {
            //if login is true redirect to dashboard
            return <Redirect to='/dashboard' />
        }
        return(
            <div className="container-fluid containerMargin row"> 
                <div className="col-md-4"></div>                                   
                <div className="col-md-4 logFormWrap" style={{marginTop:"50px"}}>                                     
                    <form>
                        <img src="/images/logo2.png" alt="logo" className="custom-img"/>
                        <h4>Login here</h4>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" name = "email" placeholder="Enter Email" value={this.state.email}
                            onChange={this.changeHandler} className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name = "password" placeholder="Enter Password" value={this.state.password}
                            onChange={this.changeHandler} className="form-control"/>
                        </div>

                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>

                        <button onClick={this.submitLogin} type="submit" className="btn btn-lg btn-block">
                            LOG IN
                        </button>  
                        <p className="text-center">
                            Don't have an account? <a href="/register">Register</a>
                        </p>                          
                    </form>
                </div>   
                <div className="col-md-4"></div>            
            </div>   
        )
    }
}

export default Login
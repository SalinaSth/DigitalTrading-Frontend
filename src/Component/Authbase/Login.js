import { Component } from "react";

class Login extends Component{
    state = {
        email : "",
        password : "",
        chklogin : false
    }

    changeHandler =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        }
           
        )
    }
    submitLogin = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:90/client/login", this.state)
        .then((response)=>{
            console.log(response);
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('email',response.data.data)
            this.setState({
                chklogin : true
            })
        })        
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        return(
            <div className="container-fluid containerMargin row"> 
                <div className="col-md-4"></div>                                   
                <div className="col-md-4">                                     
                    <form>
                        <h3>Login Here</h3>

                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" name = "username" placeholder="Enter Username" value={this.state.username}
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

                        <button onClick={this.sendLoginData} type="submit" className="btn btn-lg btn-block">
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
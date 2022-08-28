import React from "react";
import logo from "./images/image001.png";
import login1 from "./images/loginn1.png";
import Home from "./Home";
import Explore from "./Explore"
import ReactDOM from 'react-dom/client';

class Login extends React.Component{
    validate=() =>{
        const root = ReactDOM .createRoot(document.getElementById('root'));
        const user = document.getElementById('name').value;
        const pwd = document.getElementById('pwd').value;
        if (user==='admin' && pwd==="admin123"){
            root.render(<Home/>)
        }
        else{
            return (<div><p>Wrong pass</p>{this.elem}</div>);
            
        }
        
    }
    explore = ()=>{
        const root = ReactDOM .createRoot(document.getElementById('root'));
        root.render(<Explore/>)

    }
    
     elem=(<div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="navbar-brand" href="#">
                                <img src={logo} width="30" height="30" class="d-inline-block align-top" alt=""/>
                            CD Shoppe</a>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
                        <li class="nav-item active"><a class="nav-link" href="#" onClick={this.explore}>Explore</a></li>
                        <li class="nav-item active"><a class="nav-link" href="#">Signup</a></li>
                    </ul>
                </div>
                </nav>
                <div class="row">
                    <div class="col-sm-3">
                        <img src={login1} width="200%"/>
                    </div>
                    <div class="col-sm-4"></div>
                    <div class="col-sm-5">
                        <br/>
                        <h2>Login</h2>
                        <br/>
                        <form>
                            <div class="form-group w-75">
                                <label for="email">Email:</label>
                                <input type="text" class="form-control border-info" id="name" placeholder="Enter email" name="name"/><br/>
                            </div>
                            <div class="form-group w-75">
                                <label for="pwd">Password:</label>
                                <input type="password" class="form-control border-info" id="pwd" placeholder="Enter password" name="pswd"/><br/>
                            </div>
                            <button type="submit" class="btn btn-danger w-25 " onClick={this.validate}>Login</button>
                        </form>
                    </div>
                    <div class="col-sm-12"><br/><br/></div>
                </div>
            </div>);
        render(){
            return (<div>{this.elem}</div>);
          }
}
export default Login;
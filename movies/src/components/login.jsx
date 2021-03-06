import React, { Component } from 'react';

class Login extends Component {
    
    render() { 
        return (
            <div>
                {/* HTML FORM  */}

              <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6 px-0 d-none d-sm-block">
                    <img src="/images/login.jpg" alt="login image" class="login-img" />
                    </div>
                    <div class="col-sm-6 login-section-wrapper">
                    <div className="Login-align">
                    <div class="login-wrapper my-auto offset-3">
                        <h1 class="login-title"><p className="Login">Log in</p></h1>
                        <form action="#!">
                        <div class="form-group">
                            <label for="text">Username</label>
                            <input type="text" name="test" id="email" class="form-control" placeholder="your username" />
                        </div>
                        <div class="form-group mb-4">
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" class="form-control" placeholder="enter your passsword" />
                        </div>
                        <input name="login" id="login" class="btn btn-block login-btn" type="button" value="Login" />
                        </form>
                        <br/>
                        <a href="#" class="forgot-password-link">Forgot password?</a>
                        
                    </div>
                    </div>
                    </div>
                    
                </div>
                </div>
            </div>
          );
    }
}
 
export default Login;
import React, { Component } from "react";
import {
	FormBuilder,
	FieldGroup,
	FieldControl,
	Validators,
} from "react-reactive-form";

let loginAttempts = 0;
const TextInput = ({ handler, touched, hasError, meta }) => (
  <div className="form-group">
    <input placeholder={`Enter ${meta.label}`} {...handler()} className="form-control" type={meta.type}/>
    <span>
        { touched
        && hasError("required")
        && `${meta.label} is required`}
    </span>
		<span>
			{ touched && hasError("email") && `Please enter a valid email address`}
		</span>
  </div>  
)


export default class Login extends Component {
	
	loginForm = FormBuilder.group({
		username: ["", [Validators.required, Validators.email]],
		password: ["", Validators.required]
	});

	handleSubmit=(e) => {
		e.preventDefault();
		if (this.loginForm.value.username === 'admin@test.com' && this.loginForm.value.password === 'password02') {
			this.props.history.push('/home')
		} else {
			alert("Wrong username/password");
			loginAttempts = loginAttempts + 1;
			if (loginAttempts >= 3) {
					alert("You have entered an invalid username or password 3 times, please wait for 60 secs before you can try again.")
					this.loginForm.reset();		
			}
		}
	}	
	
    render() {
        return (
					<div className="container">
							<div className="row justify-content-center">
								<div className="Absolute-Center is-Responsive">
								<div className="logo-container"></div>
								<div className="col-sm-12 col-md-12">
								<FieldGroup control={this.loginForm} render={({ get, invalid }) => ( 
												<form onSubmit={this.handleSubmit}>
													<h3>Sign In</h3>

													<FieldControl
														name="username"
														render={TextInput}
														meta={{ label: "Username", type: "email" }}
													/>

													<FieldControl
														name="password"
														render={TextInput}
														meta={{ label: "Password", type: "password" }}
													/>
													<button type="submit" className="btn btn-primary btn-block" disabled={invalid}>Submit</button>
												</form>
											)}
										/>
								</div>
								</div>
						</div>
					</div>
        );
    }
}
import React, { Component } from 'react'
import './SignIn.css'


export default class SignIn extends Component {

  state = {
    email: "",
    password: "",
    passwordMatch: "",
    newUser: false
  }

    signInWithGoogle = () => {
      const provider = new this.props.firebase.auth.GoogleAuthProvider();
      this.props.auth.signInWithPopup(provider);
    }

    signInWithEmail = () => {
      this.props.firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(() => alert("Invalid Email or Password"))
    }

    signUpWithEmail = () => {
      if(this.state.password === this.state.passwordMatch) {
        if(this.state.password.length  >= 8) {
          if(/[A-Z]/g.test(this.state.password)) {
            if(/[0-9]/g.test(this.state.password)) {
                this.props.firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                .catch(() => alert("Account Already Exists"))
            } else {
              alert("Password must contain at least one number")
            }
          } else {
            alert("Password must contain at least one capital letter")
          }
        } else {
          alert("Password must be at least 8 characters")
        }
      } else {
        alert("Passwords do not match")
      }
    }

    render() {
      if(this.state.newUser) {
        return(
          <div className="sign-in-page">
            <div className="sign-in-area">
              <h1>Welcome To Chatterbot!</h1>
              <div className="sign-in-email-password">
                <h2>Sign Up</h2>
                <input className="email-password-input" placeholder="Enter Email" type="email" onChange={(e) => this.setState({ email: e.target.value })}/>
                <input className="email-password-input" placeholder="Enter Password" type="password"  onChange={(e) => this.setState({ password: e.target.value })}/>
                <input className="email-password-input" placeholder="Repeat Password" type="password"  onChange={(e) => this.setState({ passwordMatch: e.target.value })}/>
                <button className="sign-in-email-button" onClick={this.signUpWithEmail}>Submit</button>
              </div>
              <p>or</p>
              <button className="sign-in" onClick={this.signInWithGoogle}>Sign up with Google</button>
              <p>Existing User?</p>
              <button className="new-user" onClick={() => {this.setState({newUser: false})}}> Click Here</button>
            </div>
          </div>
        )
      } else {
        return (
          <div className="sign-in-page">
            <div className="sign-in-area">
              <h1>Welcome To Chatterbot!</h1>
              <div className="sign-in-email-password">
                <h2>Sign In</h2>
                <input className="email-password-input" placeholder="Enter Email" type="email" onChange={(e) => this.setState({ email: e.target.value })}/>
                <input className="email-password-input" placeholder="Enter Password" type="password"  onChange={(e) => this.setState({ password: e.target.value })}/>
                <button className="sign-in-email-button" onClick={this.signInWithEmail}>Submit</button>
              </div>
              <p>or</p>
              <button className="sign-in" onClick={this.signInWithGoogle}>Sign in with Google</button>
              <p>New User?</p>
              <button className="new-user" onClick={() => {this.setState({newUser: true})}}> Click Here</button>
            </div>
          </div>
        )
      }
    }
  
  }
  
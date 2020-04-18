import React, { Component } from 'react';

class Register extends Component {

    state = {
        email: '',
        password: '',
        name: ''
    }

    onEmailChange = (e) => {
        this.setState({email: e.target.value })
    }

    onPasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }
    onNameChange = (e) => {
        this.setState({ name: e.target.value })
    }


    onSubmitRegister = () => {
        fetch('https://protected-fjord-47913.herokuapp.com/register', {
            'method': 'post',
            'headers': { 'Content-Type': 'application/json' },
            'body': JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home')
                }
            })

    }

    render() {
        // const { onRouteChange } = this.props;
        return (
           
            <article className="c2">
                <div className="signin">
                    <h1 class="signup1">REGISTER</h1>

                    <input
                        className="inputs"
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Name . . ."
                        onFocus={(e) => e.target.placeholder = ""} 
                        onChange={this.onNameChange}
                    />

                    <input
                        className="inputs"
                        type="email"
                        name="email-address"
                        id="email-address"
                        placeholder="Email . . ."
                        onFocus={(e) => e.target.placeholder = ""} 
                        onChange={this.onEmailChange}
                    />


                    <input
                        className="inputs"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password . . ."
                        onFocus={(e) => e.target.placeholder = ""} 
                        onChange={this.onPasswordChange}
                    />


                    <input
                        onClick={this.onSubmitRegister}
                        className="btn"
                        type="submit"
                        value="Let's Go!"
                    />

                    {/* <div className="noAcc">Have an account?</div>
                    <div className="">
                        <button onClick={() => onRouteChange('signin')} className="btnReg">Sign In</button>
                    </div> */}

                </div>



            </article>
        );
    }

}

export default Register;
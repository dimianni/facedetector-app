import React, { Component } from 'react';



class Signin extends Component {


    state = {
        signInEmail: '',
        signInPassword: ''
    }


    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value })
    }

    onSubmitSignIn = () => {
        fetch('https://protected-fjord-47913.herokuapp.com/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home');
                }
            })
    }

    render() {
        const { onRouteChange } = this.props;
        return (

            <article className="c2">
                <div className="signin">
                    <h1 class="signup1">SIGN IN</h1>

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
                        onClick={this.onSubmitSignIn}
                        className="btn"
                        type="submit"
                        value="Let's Go!"
                    />

                    <div className="noAcc">Don't have an account?</div>
                    <div className="">
                        <button onClick={() => onRouteChange('register')} className="btnReg">Register</button>
                    </div>

                </div>



            </article>

        );
    }
}

export default Signin;
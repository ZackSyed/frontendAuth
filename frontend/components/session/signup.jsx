import React from 'react';


class Signup extends React.Component {
    constructor(props){
        super(props); 

        this.state = { 
            username: "", 
            email: "", 
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);  
        this.fillForm = this.fillForm.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.createNewUser(this.state)
            .then( () => this.props.history.push('/chirps'));
    }

    fillForm(type) {
        return (e) => {
            this.setState({  [type]: e.target.value });
        };
    }

    render() {
        return (
            <div className="session-form">
                <h2>Sign Up!</h2>
                <form>
                    <label>Username: 
                    <input onChange={this.fillForm('username')} type="text" value={this.state.username}/>
                    </label>

                    <label>Email: 
                    <input onChange={this.fillForm('email')} type="text" value={this.state.email}/>
                    </label>

                    <label>Password: 
                    <input onChange={this.fillForm('password')} type="password" value={this.state.password}/>
                    </label>

                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default Signup;


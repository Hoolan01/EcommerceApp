import React from "react";

import "./sign-in.styles.scss";

import FormInput from "../../components/form-input/form-input.component.jsx";
import CustomButton from "../../components/custom-button/custom-button.component.jsx";

import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: "", password: "" });
        } catch (error) {
            console.log(error);
        }
    };

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label="Email" name="email" type="email" value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput label="Password" name="password" type="password" value={this.state.password} handleChange={this.handleChange} required />

                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" isGoogleSignIn onClick={signInWithGoogle}>
                        Sign In with google
                    </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;

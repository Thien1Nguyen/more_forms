import React, { useState } from 'react'

const UserInfo = (props) => {
    //==data======
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    //======for validation========

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    
    //===Conditional render test=======
    const [hasBeenSubmitted, setHasbeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setHasbeenSubmitted(true);
    };

    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thanks for the Data ;3"
        } else {
            return "Please Feed me Data :O"
        }
    };
    //==== Validation methods for first name========
    const firstNameVali = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1) {
            setFirstNameError("Please Enter a First Name!");
        } else if(e.target.value.length < 2 ){
            setFirstNameError("First Name must be at least 2 characters long");
        } else {
            setFirstNameError("");
        }
    }

    //==== Validation methods for last name========
    const lastNameVali = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 1) {
            setLastNameError("Please Enter a Last Name");
        } else if(e.target.value.length < 2 ){
            setLastNameError("Last Name must be at least 2 characters long");
        } else {
            setLastNameError("");
        }
    }
    //==== Validation methods for email========
    const emailVali = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("Please Enter an Email");
        } else if(e.target.value.length < 5){
            setEmailError("A Valid Email must be at least 5 characters long")
        }
        else {
            setEmailError("");
        }
    }
    //==== Validation methods for password========
    const passwordVali = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1) {
            setPasswordError("Please Enter a Password");
        } else if(e.target.value.length < 8){
            setPasswordError("A Valid Password must be at least 8 characters long");
        }else {
            setPasswordError("");
        }
    }
    //what if we...
    //bind this state slice to handle only the change
    //we make a new func that compares them, and pass that into the changehandler
    //==== Validation methods for confirm password========
    const confirmPasswordVali = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value.length < 1) {
            setConfirmPasswordError("Please confirm your Password");
        } else if(password !== e.target.value){
            setConfirmPasswordError("Password and Confirmpassword did not match");
        } else {
            setConfirmPasswordError("");
        }
    }


        
        return (
            <form onSubmit={createUser}>
                <h3>{formMessage()}</h3>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={ firstNameVali } />
                    {
                        firstNameError ?
                        <p style={{color:'red'}}> { firstNameError }</p>
                        : ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={ lastNameVali } />
                    {
                        lastNameError ?
                        <p style={{color:'red'}}> { lastNameError }</p>
                        : ''
                    }
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={ emailVali } />
                    {
                        emailError ?
                        <p style={{color:'red'}}> { emailError }</p>
                        : ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={passwordVali} />
                    {
                        passwordError ?
                        <p style={{color:'red'}}> { passwordError }</p>
                        : ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={confirmPasswordVali} />
                    {
                        confirmPasswordError ?
                        <p style={{color:'red'}}> { confirmPasswordError }</p>
                        : ''
                    }
                </div>
                <input type="submit" value="Create User" />

                <div>
                    <br />
                    <p>Your Form Data</p>
                    <br />
                    <p>First Name: {firstName}</p>
                    <p>Last Name: {lastName}</p>
                    <p>Email: {email}</p>
                    <p>Password: {password}</p>
                    <p>Confirm Password: {confirmPassword}</p>
                </div>
            </form>
        )
    }


export default UserInfo
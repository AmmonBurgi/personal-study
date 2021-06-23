import React, {useState} from 'react'
import {FormInput, FormTitle, FormButton} from './FormStyles';
import styled from 'styled-components'

const AuthComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const AuthForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 1%;
    width: 25%;
    height: 45%;
    background: rgb(169,171,184);
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const AuthText = styled.p`
    font-size: 1vw;
`;

function Auth(){
    const [email, setEmail] = useState(''),
        [firstName, setFirstName] = useState(''),
        [lastName, setLastName] = useState(''),
        [password, setPassword] = useState(''),
        [toggleForm, setToggleForm] = useState(false)

    return (
        <AuthComponent>
            {toggleForm === false ? 
            (
            <AuthForm>
                <FormTitle>Login</FormTitle>
                <FormInput type='email' onChange={(e) => setEmail(e.target.value)} />
                <FormInput type='password' onChange={(e) => setPassword(e.target.value)} />
                <AuthText>Click <b onClick={() => setToggleForm(true)}>HERE</b> to register!</AuthText>
                <FormButton>Login</FormButton>
            </AuthForm>
            )
            :
            (
            <AuthForm>
                <FormTitle>Register</FormTitle>
                <FormInput type='email' onChange={(e) => setEmail(e.target.value)} />
                <FormInput type='text' onChange={(e) => setFirstName(e.target.value)} />
                <FormInput type='text' onChange={(e) => setLastName(e.target.value)} />
                <FormInput type='password' onChange={(e) => setPassword(e.target.value)} />
                <AuthText>Click <b onClick={() => setToggleForm(false)}>HERE</b> to Login!</AuthText>
                <FormButton>Register</FormButton>
            </AuthForm>
            )
            }
        </AuthComponent>
    )
}

export default Auth;
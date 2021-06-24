import React, {useState} from 'react'
import {FormInput, FormTitle, FormButton} from './FormStyles';
import styled from 'styled-components'
import Axios from 'axios'

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

function Auth(props){
    const [email, setEmail] = useState(''),
        [firstName, setFirstName] = useState(''),
        [lastName, setLastName] = useState(''),
        [password, setPassword] = useState(''),
        [toggleForm, setToggleForm] = useState(false)

    const handleLogin = () => {
        Axios({
            method: 'POST',
            data: {
                email,
                password
            },
            url: '/api/auth/login'
        }).then(res => {
            props.history.push('/home')
            console.log(res)
        }).catch(err => {
            console.log(err.response)
            alert(err.response.data)
        });
    };

    const handleRegister = () => {
        Axios({
            method: 'POST',
            data: {
                email,
                firstName,
                lastName,
                password
            },
            url: '/api/auth/register'
        }).then(res => {
            props.history.push('/home')
            console.log(res.data)
        }).catch(err => {
            console.log(err.response)
            alert(err.response.data)
        });
    }

    return (
        <AuthComponent>
            {toggleForm === false ? 
            (
            <AuthForm onSubmit={handleLogin}>
                <FormTitle>Login</FormTitle>
                <FormInput 
                placeholder='Email'
                value={email} 
                type='email' 
                onChange={(e) => setEmail(e.target.value)} />
                <FormInput 
                placeholder='Password'
                value={password} 
                type='password' 
                onChange={(e) => setPassword(e.target.value)} />
                <AuthText>Click <b onClick={() => setToggleForm(true)}>HERE</b> to register!</AuthText>
                <FormButton type='submit' >Login</FormButton>
            </AuthForm>
            )
            :
            (
            <AuthForm onSubmit={handleRegister}>
                <FormTitle>Register</FormTitle>
                <FormInput 
                placeholder='Email'
                value={email} 
                type='email' 
                onChange={(e) => setEmail(e.target.value)} />
                <FormInput 
                placeholder='First Name'
                value={firstName} 
                type='text' 
                onChange={(e) => setFirstName(e.target.value)} />
                <FormInput
                placeholder='Last Name' 
                value={lastName} 
                type='text' 
                onChange={(e) => setLastName(e.target.value)} />
                <FormInput 
                placeholder='Password'
                value={password} 
                type='password' 
                onChange={(e) => setPassword(e.target.value)} />
                <AuthText>Click <b onClick={() => setToggleForm(false)}>HERE</b> to Login!</AuthText>
                <FormButton type='submit'>Register</FormButton>
            </AuthForm>
            )
            }
        </AuthComponent>
    )
}

export default Auth;
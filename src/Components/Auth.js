import React, {useState, useEffect} from 'react'
import {FormInput} from './FormStyles';
import Axios from 'axios'
import styled from 'styled-components'

const AuthComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

const AuthForm = styled.div`
    width: 100px;
    height: 200px;
    background: blue;
`;

function Auth(){

    const getDataFromServer = () => {
        Axios.get(`/api/data/?connect=${'CONNECT'}`).then(res => {
            console.log(res)
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        getDataFromServer()
    }, [])

    return (
        <AuthComponent>
            <AuthForm>
                <FormInput />
            </AuthForm>
        </AuthComponent>
    )
}

export default Auth;
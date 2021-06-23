import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import styled from 'styled-components'

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
        <div>
            <AuthForm>
                <input />
            </AuthForm>
        </div>
    )
}

export default Auth;
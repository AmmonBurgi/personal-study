import React from 'react'
import styled from 'styled-components'

const CreateMain = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const CreateButtons = styled.button`
    width: 22vw;
    height: 22vw;
    background: ${props => props.theme.sBack};
    border-radius: 5px;
    font-size: 3.5vw;
    text-transform: uppercase;
    border: solid ${props => props.theme.pBorder};
    transition: .25s;
    &:hover{
        font-weight: bolder;
        color: ${props => props.theme.hColor};
        background: ${props => props.theme.hBack};
        border-color: ${props => props.theme.hBorder};
        box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    }
`;

function Create(props) {
    return (
        <CreateMain>
            <CreateButtons onClick={() => props.history.push('/create/deck')} >Deck</CreateButtons>
            <CreateButtons onClick={() => props.history.push('/create/topic')} >Topic</CreateButtons>
        </CreateMain>
    )
}

export default Create
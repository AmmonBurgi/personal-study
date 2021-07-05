import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FaHome} from 'react-icons/fa';
import {ImPlus} from 'react-icons/im';
import {BsChatFill} from 'react-icons/bs';
import {BiLogOut} from 'react-icons/bi';
import Axios from 'axios';

const NavMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 8%;
    height: 100%;
    min-height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background: rgb(169,171,184);
    border-right: solid rgb(49,101,138);
`;

const NoButton = styled.button`
    background: transparent;
    outline: none;
    border: none;
    &:hover {
        cursor: pointer;
        color: blue;
    }
`;

function NavBar(props){

    const handleLogout = () => {
        Axios({
            method: 'GET',
            url: '/api/auth/logout'
        }).then(() => {
            props.navigateToAuth()
        }).catch(err => {
            console.log(err)
            console.log(err.response.data)
        })
    }

    return (
        <NavMain>
            <Link to='/home'>
                <FaHome className='nav-bar-icon' />
            </Link>
            <Link to='/create'>
                <ImPlus className='nav-bar-icon' />
            </Link>
            <Link to='/chat-room'>
                <BsChatFill className='nav-bar-icon' />
            </Link>
            <NoButton onClick={handleLogout}>
                <BiLogOut className='nav-bar-icon' />
            </NoButton>
        </NavMain>
    )
}

export default NavBar
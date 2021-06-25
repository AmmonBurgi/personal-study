import React from 'react'
import styled from 'styled-components'

const NavMain = styled.div`
    width: 12%;
    height: 100%;
    min-height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background: darkblue
`;

function NavBar(){
    return (
        <NavMain>
            Navbar component
        </NavMain>
    )
}

export default NavBar
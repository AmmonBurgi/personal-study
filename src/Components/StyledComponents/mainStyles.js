import styled from 'styled-components';

export const MainTitle = styled.h1`
    font-size: ${props => props.theme.mainFontSize}
`;

export const SecondaryTitle = styled.h2`
    margin-top: 0;
    font-size: ${props => props.theme.sFontSize}
`;

export const MainInput = styled.input`
    outline: none;
    border-right: none;
    border-left: none;
    border-top: solid ${props => props.theme.hBorder};
    border-bottom: solid ${props => props.theme.hBorder};
    padding: 2% 1% 2% 1%;
    background: ${props => props.theme.pBorder};
    color: ${props => props.theme.sBack};
    opacity: .9;
    width: 50%;
`;
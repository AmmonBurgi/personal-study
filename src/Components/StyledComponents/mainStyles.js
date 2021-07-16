import styled from 'styled-components';

export const MainTitle = styled.h1`
    font-size: ${props => props.theme.mainFontSize};
    text-transform: uppercase;
`;

export const SecondaryTitle = styled.h2`
    margin-top: 0;
    text-transform: uppercase;
    font-size: ${props => props.theme.sFontSize}
`;

export const TopicTitle = styled.h3`
    font-size: ${props => props.theme.tFontSize};
    margin-bottom: 0;
    margin-top: 0;
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

export const CardTextArea = styled.textarea`
    width: 100%;
    height: 70%;
    z-index: 100;
    resize: none;
    box-sizing: border-box;
    backface-visibility: hidden;
    font-size: 1.3vw;
    background: ${props => props.theme.pBorder};
    outline: none;
    color: ${props => props.theme.sBack};
    padding: 1%;
`;

export const TopicBorder = styled.div`
    border-bottom: solid ${props => props.theme.pBorder};
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const MainButton = styled.button`
outline: none;
background: ${props => props.theme.pBorder};
border: solid ${prop => prop.theme.hBorder};
color: ${props => props.theme.sBack};
transitions: .5s;
&:hover{
    border-radius: 5px;
    cursor: pointer;
}
`;

export const MainText = styled.p`
    margin-top: 0;
    font-size: ${props => props.theme.mainText};
`;

export const SubText = styled.p`
    margin-top: 0;
    font-size: ${props => props.theme.subText};
    text-transform: uppercase;
`;
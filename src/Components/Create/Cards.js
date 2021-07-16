import React, {useState} from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { CardTextArea, SubText, MainButton, MainText } from '../StyledComponents/mainStyles';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { FaChevronCircleDown } from 'react-icons/fa';

const CardsMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;
const InnerCard = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    text-align: center;
    transform: ${props => props.cardToggle ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`;
const CardMain = styled.div`
    background-color: ${props => props.theme.sBack};
    width: 50%;
    min-height: 35%;
    height: auto;
    border-top: solid ${props => props.theme.hBorder};
    border-right: solid ${props => props.theme.hBorder};
    border-left: solid ${props => props.theme.hBorder};
    perspective: 1500px;
    box-sizing: border-box;
    z-index: 10;
`;
const FrontCard = styled.div`
    background: ${props => props.theme.sBack};
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    padding: 1%;
    box-sizing: border-box;
`;
const BackCard = styled.div`
    background: ${props => props.theme.sBack};
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    box-sizing: border-box;
    padding: 1%;
`;
const CardButton = styled.button`
    margin-top: 2.6vh;
    width: 50%;
    padding: 1%;
    border: solid ${props => props.theme.hBorder};
    background: ${props => props.theme.sBack};
    text-transform: uppercase;
    font-size: 1.2vw;
`;
const ExampleSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    box-sizing: border-box;
    width: 50%;
    height: ${props => props.exampleToggle ? '30%' : '0%'};
    transition: .5s;
    background: ${props => props.theme.sBack};
    border-bottom: solid ${props => props.theme.hBorder};
    border-right: solid ${props => props.theme.hBorder};
    border-left: solid ${props => props.theme.hBorder};
    padding: .5%;
`;
const ExampleButton = styled.button`
    width: 10%;
    height: 25px;
    position: absolute;
    right: 0;
    left: 0;
    margin-right: auto;
    margin-left: auto;
    bottom: -25px;
    background: ${props => props.theme.sBack};
    outline: none;
    border-right: solid ${props => props.theme.hBorder};
    border-left: solid ${props => props.theme.hBorder};
    border-bottom: solid ${props => props.theme.hBorder};
    border-top: none;
    &hover{
        color: brown;
    }
`;
const ExampleTextArea = styled.textarea`
    width: 100%;
    height: 100%;
    display: ${props => props.exampleToggle ? 'initial' : 'none'};
    resize: none;
    box-sizing: border-box;
    font-size: 1.3vw;
    background: ${props => props.theme.pBorder};
    outline: none;
    color: ${props => props.theme.sBack};
    padding: 1%;
    transition: .5s;
`;
const ExampleText = styled.p`
    font-size: ${props => props.exampleToggle ? '1.6vw' : '0'};
    margin-top: 0;
    margin-bottom: 1%;
    transition: .25s;
`


function Cards() {
    const [cardToggle, setCardToggle] = useState(false),
        [exampleToggle, setExampleToggle] = useState(false),
        [answerInput, setAnswerInput] = useState(''),
        [questionInput, setQuestionInput] = useState(''),
        [exampleCode, setExampleCode] = useState('')

    const addCardToDeck = () => {
        Axios({
            method: 'POST',
            data: {answerInput, questionInput, exampleCode},
            url: '/api/deck/card',   
        })
    }

    return (
        <CardsMain>
            <CardMain >
                <InnerCard cardToggle={cardToggle}>
                    <FrontCard>
                        <RiArrowGoBackLine 
                        id='flip-arrow' 
                        className='topic-icon' 
                        onClick={() => setCardToggle(!cardToggle)} />
                        <SubText>- Question -</SubText>
                        <CardTextArea onChange={(e) => setAnswerInput(e.target.value)} />
                    </FrontCard>
                    <BackCard cardToggle={cardToggle}>
                        <RiArrowGoBackLine 
                        id='flip-arrow' 
                        className='topic-icon' 
                        onClick={() => setCardToggle(!cardToggle)} />
                        <SubText>- Answer -</SubText>
                        <CardTextArea onChange={(e) => setQuestionInput(e.target.value)} />
                    </BackCard>
                </InnerCard>
            </CardMain>
            <ExampleSection exampleToggle={exampleToggle}>
                <ExampleButton onClick={() => setExampleToggle(!exampleToggle)} >
                    <FaChevronCircleDown />
                </ExampleButton>
                <ExampleText exampleToggle={exampleToggle}>- Example Code -</ExampleText>
                <ExampleTextArea exampleToggle={exampleToggle} />
            </ExampleSection>
            <CardButton onClick={addCardToDeck} >Add Card</CardButton>
        </CardsMain>
    )
}

export default Cards
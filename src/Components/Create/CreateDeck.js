import React, { useState } from 'react';
import { SecondaryTitle, MainTitle, MainInput, TopicBorder, TopicTitle, MainButton } from '../StyledComponents/mainStyles';
import styled from 'styled-components';
import { FaTimes, FaCheck, FaPlus } from 'react-icons/fa';

const PopUp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
`;
const PopUpBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    opacity: .3;
    top: 0;
    left: 0;
`;
const PopUpMain = styled.div`
    width: 50vw;
    height: 25vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.sBack};
    border-radius: 5px;
    border: solid ${props => props.theme.pBorder};
    z-index: 10;
    position: relative;
`;

const CreateDeckMain = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1%;
    box-sizing: border-box;
`;

const ConfirmBox = styled.div`
    padding: 1%;
    background: ${props => props.theme.pBorder};
    position: absolute;
    top: 3%;
    left: 2%;
    border: solid ${prop => prop.theme.hBorder};
    transitions: .5s;
    &:hover{
        border-radius: 5px;
        cursor: pointer;
    }
`;

function CreateDeck(props) {
    const [deckName, setDeckName] = useState(''),
        [popUpToggle, setPopUpToggle] = useState(true)


    return (
        <CreateDeckMain>
            { popUpToggle ?
            <PopUp>
                <PopUpMain>
                    <ConfirmBox onClick={deckName.length === 0 ? () => props.history.push('/create') : () => setPopUpToggle(false)}>
                        {deckName.length === 0 ? 
                        <FaTimes className='pop-icons' />
                        :
                        <FaCheck className='pop-icons' />
                        }
                    </ConfirmBox>
                    <SecondaryTitle>Name Your Deck</SecondaryTitle>
                    <MainInput onChange={(e) => setDeckName(e.target.value)} />
                </PopUpMain>
                <PopUpBack></PopUpBack>
            </PopUp>
            :
            null
            }

            <MainTitle>{deckName} Deck</MainTitle>
            <TopicBorder>
                <TopicTitle>Cards</TopicTitle>
                <FaPlus className='topic-icon' />
            </TopicBorder>
        </CreateDeckMain>
    )
};

export default CreateDeck;
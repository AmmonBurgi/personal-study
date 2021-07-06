import React, {useState} from 'react';
import styled from 'styled-components';

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
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    transform: ${props => props.cardToggle ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`;
const CardMain = styled.div`
    background-color: transparent;
    width: 50%;
    height: 30%;
    border: solid ${props => props.theme.pBorder};
    perspective: 1000px;
`;
const FrontCard = styled.div`
    background: blue;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
`;
const BackCard = styled.div`
    background: red;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transform: rotateY(180deg);
`;


function Cards() {
    const [cardToggle, setCardToggle] = useState(false);

    return (
        <CardsMain>
            <CardMain onClick={() => setCardToggle(!cardToggle)}>
                <InnerCard cardToggle={cardToggle}>
                    <FrontCard>
                        <p>Front</p>
                    </FrontCard>
                    <BackCard cardToggle={cardToggle}>
                        <p>Back</p>
                    </BackCard>
                </InnerCard>
            </CardMain>
        </CardsMain>
    )
}

export default Cards
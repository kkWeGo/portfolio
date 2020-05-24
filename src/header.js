import React from 'react';
import styled from 'styled-components';
import CurrentSect from './context';
import { ReactSVG } from 'react-svg';
import Plx from 'react-plx';
import Navbar from './navbar';
import Social from './social';
import { MyselfShort, WhatAmI } from './myself';
import { primary, secondary, tertiary } from './configs/colors';

const StyledHeader = styled.div`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    & .arrow{
        z-index: 3;
        position: absolute;
        left: 50%;
        width: 2.5vw;
        height: 2.5vw;
        transform: rotate(270deg) translate(-1.25vw, -1.25vw);
        animation: arrowdown 1.7s ease infinite;
    }
    & .arrow path{
        fill: ${props => props.primary || '#E57853'};
    }
    & .arrow.bottom{
        opacity: 0;
        animation: arrowdown 1.7s ease infinite 1.7s;
    }
    & .iconatt{
        position: absolute;
        left: 50%;
        bottom: 2vh;
        width: auto;
        height: 1.5rem;
        transform: translateX(-50%);
        font-size: 1.7rem;
        color: ${props => props.primary || '#E57853'};
    }
    & .iconatt a{
        color: inherit;
    }
`

const NavbarBgContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: calc(20vh + 6rem);
    padding: 0;
    z-index: 20;
`

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 0;
    z-index: 1;
`

const NavbarBg = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100vw;
    height: 6rem;
    padding: 10vh 0 10vh 0;
    background-color: ${props => props.tertiary || '#383838'};
    z-index: 2;
`

const parallaxDataNavbg = [
    {
    start: '0vh',
    duration: '25vh',
        properties: [
            {
                startValue: -25,
                endValue: 0,
                unit: 'vh',
                property: 'translateY',
            },
        ],
    },
    {
    start: '0vh',
    duration: '102vh',
        properties: [
            {
                startValue: 1,
                endValue: 1,
                property: 'opacity',
            },
        ],
    },
    {
    start: '102vh',
    duration: '2vh',
        properties: [
            {
                startValue: 1,
                endValue: 0,
                property: 'opacity',
            },
        ],
    },
];

// eslint-disable-next-line
const parallaxDataNavbgColor = [
    {
    start: '95vh',
    duration: '5vh',
        properties: [
            {
                startValue: tertiary,
                endValue: tertiary,
                property: 'backgroundColor',
            },
        ],
    },
    {
    start: '195vh',
    duration: '5vh',
        properties: [
            {
                startValue: tertiary,
                endValue: primary,
                property: 'backgroundColor',
            },
        ],
    },
    {
    start: '395vh',
    duration: '5vh',
        properties: [
            {
                startValue: primary,
                endValue: secondary,
                property: 'backgroundColor',
            },
        ],
    },
    {
    start: '595vh',
    duration: '5vh',
        properties: [
            {
                startValue: secondary,
                endValue: '#000000',
                property: 'backgroundColor',
            },
        ],
    },
];


class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return(
            <>  
                <NavbarBgContainer>
                    <Plx parallaxData={ parallaxDataNavbg }>
                        <NavbarBg tertiary={ this.context.tertiaryColor }/>
                    </Plx>
                    <Navbar />
                </NavbarBgContainer>
                <Social />
                <Container>
                    <MyselfShort />
                    <WhatAmI />
                </Container>
                <StyledHeader primary={ this.context.primaryColor }>
                    <ReactSVG className='arrow' src='./img/icons/arrow.svg' />
                    <ReactSVG className='arrow bottom' src='./img/icons/arrow.svg' />
                    <div className='iconatt' >Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </StyledHeader>
            </>
        );
    }
}
Header.contextType = CurrentSect;

export default Header;

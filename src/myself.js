import React from 'react';
import styled from 'styled-components';
import CurrentSect from './context';
import Plx from 'react-plx';

const MyDesc = styled.p`
    z-index: 1;
    position: absolute;
    top: 90vh;
    left: 10vh;
    width: 40vw;
    height: 6rem;
    color: ${props => props.primary || 'black'};
    font-weight: 600;
    font-size: 3rem;
    transform: translate(0, -6rem);
`

const MyDescBigLeft = styled.div`
    z-index: 2;
    position: absolute;
    //top: calc(20vh + 4rem);
    left: 5vw;
    bottom: 0;
    width: 40vw;
    height: calc(78vh - 4rem);
    //background-color: ${props => props.primary || 'black'};
    font-weight: 600;
    font-size: 3rem;
`

const MyDescBigRight = styled.div`
    z-index: 2;
    position: absolute;
    //top: calc(20vh + 4rem);
    right: 5vw;
    bottom: 0;
    width: 40vw;
    height: calc(80vh - 4rem);
    //background-color: ${props => props.primary || 'black'};
    font-weight: 600;
    font-size: 3rem;
`

const MyDescBigImg = styled.img`
    z-index: 3;
    position: relative;
    top: 0;
    left: 0;
    width: auto;
    height: calc(78vh - 4rem);
`

const MyDescBigSkills = styled.div`
    z-index: 3;
    position: absolute;
    bottom: 5vh;
    right: 0;
    width: auto;
    height: auto;
    & p{
        line-height: 4rem;
        font-size: 2rem;
        text-align: right;
        font-weight: 200;
    }
    & h6{
        line-height: 4rem;
        font-weight: 600;
        font-size: 3rem;
        margin-top: 1vh;
        text-align: right;
    }
`

const MyDescBigDesc = styled.p`
    z-index: 3;
    position: absolute;
    top: 5vh;
    right: 0vh;
    width: 60vw;
    height: 20vh;
    line-height: 6rem;
    font-size: 4rem;
    font-weight: 600;
    text-align: right;
    color: ${props => props.primary || 'black'};
`

const ContainerWhatAmI = styled.div`
    z-index: 1;
    position: absolute;
    bottom: 0vh;
    right: 0vh;
    width: 20rem;
    height: 20rem;
    transform: rotate(${props => props.rotation || '0'}deg) ;
    transform-origin: 100% 100%;
`

const ContainerWhatAmIPrlx = styled.div`
    position: absolute;
    top: 90vh;
    right: 10vh;
    width: 20rem;
    height: 20rem;
    transform: rotate(${props => props.rotation || '0'}deg) translateY(-100%);
    transform-origin: 100% 100%;
`

const WhatAmIAm = styled.p`
    z-index: 2;
    position: relative;
    width: 2rem;
    height: auto;
    float: right;
    top: 100%;
    transform: translateY(-100%) rotate(-${props => props.rotation || '0'}deg);
    transform-origin: 50% 100%;
    margin: 0 0 0 3rem;
    color: ${props => props.secondary || 'white'};
    font-weight: 600;
    font-size: 3rem;
    text-align: center;
`

const parallaxDataBottom = [
    {
    start: 0,
    duration: 500,
        properties: [
            {
                startValue: 0,
                endValue: 20,
                unit: 'rem',
                property: 'translateY',
            },
        ],
    },
];

const parallaxDataRight = [
    {
    start: 0,
    duration: 500,
        properties: [
            {
                startValue: 0,
                endValue: 30,
                unit: 'rem',
                property: 'translateX',
            },
        ],
    },
];

const parallaxDataBio = [
    {
    start: '0vh',
    duration: '20vh',
        properties: [
            {
                startValue: -20,
                endValue: -20,
                unit: 'rem',
                property: 'translateY',
            },
        ],
    },
    {
    start: '20vh',
    duration: '80vh',
        properties: [
            {
                startValue: -20,
                endValue: 0,
                unit: 'rem',
                property: 'translateY',
            },
        ],
    },
];

class MySelf extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return(
            <>
                <MyDescBigLeft primary={ this.context.primaryColor } >
                    <Plx parallaxData={ parallaxDataBio }>
                        <MyDescBigImg src="./img/photocolorsoldnew.svg" />
                    </Plx>
                </MyDescBigLeft>
                <MyDescBigRight>
                    <MyDescBigDesc primary={ this.context.primaryColor } >
                        Hi! I'm Nicola Pasqualini and I'm studying Interface and Communication Technology at the University of Trento. I love to develop software or interfaces and to think about how they will help people. My biggest passion is to get myself and my works every day better. 
                    </MyDescBigDesc>
                    <MyDescBigSkills>
                        <h6>Web Languages and Libraries:</h6>
                        <p>HTML, CSS, JavaScript, React, React-plx</p>
                        <h6>Other Languages and Libraries:</h6>
                        <p>PHP, SQL, Python, Java, C</p>
                        <h6>Some tools i can use:</h6>
                        <p>GIMP, Darktable, Inkscape</p>
                    </MyDescBigSkills>
                </MyDescBigRight>
            </>
        );
    }
}
MySelf.contextType = CurrentSect;

class MyselfShort extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return(
            <Plx parallaxData={ parallaxDataBottom }>
                <MyDesc primary={ this.context.primaryColor } >
                    { this.context.bio[0] }
                    <br/>
                    { this.context.bio[1] }
                </MyDesc>
            </Plx>
        );
    }
}
MyselfShort.contextType = CurrentSect;

class WhatAmI extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return(
            <Plx parallaxData={ parallaxDataRight }>
                <ContainerWhatAmIPrlx>
                    <ContainerWhatAmI rotation={ this.context.rotation }>
                        <WhatAmIAm secondary={ this.context.secondaryColor } rotation={ this.context.rotation }>
                            { this.context.whatiam[0] }
                        </WhatAmIAm>
                        <WhatAmIAm secondary={ this.context.secondaryColor } rotation={ this.context.rotation }>
                            { this.context.whatiam[1] }
                        </WhatAmIAm>
                        <WhatAmIAm secondary={ this.context.secondaryColor } rotation={ this.context.rotation }>
                            { this.context.whatiam[2] }
                        </WhatAmIAm>
                    </ContainerWhatAmI>
                </ContainerWhatAmIPrlx>
            </Plx>
        );
    }
}
WhatAmI.contextType = CurrentSect;

export { MySelf, MyselfShort, WhatAmI };

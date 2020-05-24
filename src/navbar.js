import React from 'react';
import styled from 'styled-components';
import Button from './button';
import CurrentSect from './context'
import Plx from 'react-plx';
import { primary, secondary } from './configs/colors';

const StyledNav = styled.nav`
    z-index: 3;
    position: fixed;
    top: 10vh;
    right: 10vh;
    transform: translateX(2rem);
    width: 200rem;
    height: 6rem;
`
const NavList = styled.ul`
    width: 100%;
    height: 100%;
    color: inherit;
`
const StyledNavItem = styled.li`
    position: relative;
    float: right;
    width: 12rem;
    height: 4rem;
    cursor: pointer;
    margin: 0rem 0rem 0rem 6rem;
    padding: 0 2rem 0 2rem;
    font-size: 2rem;
    color: inherit;
    &::after{
        content: '';
        position: absolute;
        bottom: 0.75rem;
        left: 0;
        width: 0%;
        height: .1rem;
        border-radius: .25rem;
        background-color: ${props => props.secondary || '#F2F2F2'};
        transition: all .8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    &:hover::after{
        width: 100%;
    }
    & a{
        color: inherit;
    }
`

const parallaxDataColor = [
    {
    start: '0vh',
    duration: '5vh',
        properties: [
            {
                startValue: secondary,
                endValue: secondary,
                property: 'color',
            },
        ],
    },
    {
    start: '5vh',
    duration: '20vh',
        properties: [
            {
                startValue: secondary,
                endValue: primary,
                property: 'color',
            },
        ],
    },
    {
    start: '200vh',
    duration: '20vh',
        properties: [
            {
                startValue: primary,
                endValue: secondary,
                property: 'color',
            },
        ],
    },
    {
    start: '470vh',
    duration: '20vh',
        properties: [
            {
                startValue: secondary,
                endValue: primary,
                property: 'color',
            },
        ],
    },
    {
    start: '670vh',
    duration: '20vh',
        properties: [
            {
                startValue: primary,
                endValue: '#FFFFFF',
                property: 'color',
            },
        ],
    },
];

class NavItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render(){
        return(
            <StyledNavItem secondary={ this.context.secondaryColor }> 
                <Button label={ this.props.label } />  
            </StyledNavItem>
        );
    }
}
NavItem.contextType = CurrentSect;

class Navbar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return(
            <Plx parallaxData={ parallaxDataColor }>
                <StyledNav> 
                    <NavList>
                        <NavItem label={ this.context.section[0] } /> 
                        <NavItem label={ this.context.section[1] } /> 
                        <NavItem label={ this.context.section[2] } /> 
                        <NavItem label={ this.context.section[3] } /> 
                    </NavList>
                </StyledNav>
            </Plx>
        );
    }
}
Navbar.contextType = CurrentSect;

export default Navbar;

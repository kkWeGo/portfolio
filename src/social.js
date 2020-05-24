import React from 'react';
import styled from 'styled-components';
import CurrentSect from './context'
import { ReactSVG } from 'react-svg';
import Plx from 'react-plx';

const MyUl = styled.ul`
    z-index: 20;
    position: fixed;
    top: 10vh;
    left: 10vh;
    width: 4rem;
    height: 48rem;
    //padding: 1rem;
    //background-color: #f2f2f2;
    //transform: translateX(-2rem);
    //transform-origin: 0% 50%;
    transition: all .8s ease;
    & div li{
        float: left;
        position: absolute;
        height: 4rem;
        width: 4rem;
        transition: all .4s ease .4s;
    }
    & div{
        position: absolute;
        top: 0;
        left: 0;
    }
    & div li::before{
        content: '' ;
        position: absolute;
        top: 0rem;
        left: 0rem;
        height: 6rem;
        width: 6rem;
        background-color: #F2F2F2;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        clip-path: circle(0%);
        transform: translate(-1rem, -1rem);
        transition: all .8s ease 0s;
    }
    & div:nth-of-type(1) li::before{
        transition: all .8s ease .8s;
    }
    & div:hover li::before{
        transition: all .8s ease 0s;
        clip-path: circle(50%);
    }
    & div:nth-of-type(1) li span{
        content: '';
        position: absolute;
        top: -1rem;
        left: -1rem;
        height: 6rem;
        width: 6rem;
        border-radius: 3rem;
        background-color: transparent;
        transform: rotate(${props => props.rotation || '0'}deg);
        transform-origin: 3rem 3rem;
        transition: width .8s ease 0s, background-color 0s ease .8s;
    }
    & div:nth-of-type(1) li span::after{
        content: 'nicolapasqua99@gmail.com';
        position: absolute;
        top: 0rem;
        left: 0rem;
        height: 2rem;
        width: 100%;
        text-align: center;
        font-size: 2.2rem;
        margin: 1.8rem 0rem 2rem 0rem;
        color: transparent;
        transition: all .4s ease 0s;
        cursor: pointer;
    }
    & div:nth-of-type(1):hover li span::after{
        color: ${props => props.primary || ''};
        transition: all .8s ease 1.2s;
        text-decoration: underline;
    }
    & div:hover li span{
        width: 44rem;
        background-color: #F2F2F2;
        transition: width .8s ease .8s, background-color 0s ease .8s;
    }
    & div li svg{
        position: absolute;
        top: 0;
        left: 0;
        height 4rem;
        width: 4rem;
        padding: 0rem;
        z-index: 4;
        cursor:pointer;
    }
    & div li svg path{
        transition: all .8s ease 0s;
        opacity: 1;
    }
    & div li svg path, & div li svg rect{
        fill: inherit !IMPORTANT;
    }
    & div:hover li svg path, & div:hover li svg rect{
        transition: all .8s ease 0s;
    }
    & div:nth-of-type(1):hover li svg path{
        fill: #D32E2A !IMPORTANT;
    }
    & div:nth-of-type(2):hover li svg path{
        fill: #0077B7 !IMPORTANT;
    }  
    & div:nth-of-type(3):hover li svg path{
        opacity: 1;
    }
    & div:nth-of-type(4):hover li svg path{
        fill: #76A9EA !IMPORTANT;
    } 
    & div:nth-of-type(5):hover li svg path{
        fill: #E60023 !IMPORTANT;
    }  
    & div:nth-of-type(6):hover li svg path:nth-of-type(1){
        fill: #1769FF !IMPORTANT;
    } 
    & div:nth-of-type(6):hover li svg rect{
        fill: #1769FF !IMPORTANT;
    }
    & div:nth-of-type(6):hover li svg path:nth-of-type(2){
        fill: #1769FF !IMPORTANT;
    } 

`

function ContactList(props) {
    const list = props.list;
    const listItems = list.map((item, index) =>
        <Plx key={index + '_li'} parallaxData={ item.parallaxPosition }>
            <li>
                <span />
                <a href="https://www.google.it/">
                    <Plx parallaxData={ item.parallaxColor }>
                        <ReactSVG src={ item.src } />
                    </Plx>
                </a>
            </li>
        </Plx>
    );

    return (
            <MyUl rotation={ props.rotation } primary={ props.primary }>{listItems}</MyUl>
    );
}

class Social extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
    }

    render() {
        return(
            <ContactList list={ this.context.contacts } rotation={ this.context.rotation } primary={ this.context.primaryColor }/>
        );
    }
}
Social.contextType = CurrentSect;

export default Social;

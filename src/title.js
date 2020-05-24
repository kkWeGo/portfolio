import React from 'react';
import styled from 'styled-components';
import CurrentSect from './context'

const StyledTitle = styled.h1`
    z-index: 1;
    position: fixed;
    top: -5rem;
    left: 0;
    width: 26rem;
    height: 10rem;
    padding-left: 50%;
    transform: rotate(${props => props.rotation || '0'}deg) ;
    transform-origin: 0% 50%;
    font-size: 4.5rem;
    line-height: 5rem;
    cursor: default;
    color: #F2F2F2;
    text-align: center;
    font-weight: 600;
    background: linear-gradient(0deg, ${props => props.primary || '#383838'} 50%, ${props => props.secondary || '#E57853'} 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

class Title extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return(
            <StyledTitle middle={ this.context.middle } rotation={ this.context.rotation }  primary={ this.context.primaryColor } secondary={ this.context.secondaryColor } >
                NICOLA PASQUALINI
            </StyledTitle>
        );
    }
}
Title.contextType = CurrentSect;

export default Title;

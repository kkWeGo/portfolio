import React from 'react';
import styled from 'styled-components';
import CurrentSect from './context';
//import scrollToComponent from 'react-scroll-to-component';

const StyledButton = styled.button`
    position: absolute;
    height: 2rem;
    width: 100%;
    top: 1rem;
    left: 0;
    outline: none;
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    font-weight: bolder;
    font-size: 2rem;
    text-align: center;
    cursor: pointer;
    color: inherit;
    text-decoration: none;
    //color: ${props => props.secondary || '#F2F2F2'};
`

class Button extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }   

    componentDidMount(){
        //refer={this.context.ref[0]} 
        //console.log(this.props.refer);    
        //onClick={() => scrollToComponent(this.props.refer, { offset: 0, align: 'middle', duration: 1000, ease:'inQuad'})}>
    }

    render() {
        return(
            <CurrentSect.Consumer>
                {({ secondaryColor }) => (
                    <a href={ '#' + this.props.label } >
                        <StyledButton secondary={ secondaryColor }>
                            {this.props.label}
                        </StyledButton>
                    </a>
                )}
            </CurrentSect.Consumer>
        );
    }
}

export default Button;

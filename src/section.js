import React from 'react';
import styled from 'styled-components';
import Plx from 'react-plx';
import CurrentSect from './context';

const StyledSection = styled.div`
    z-index: ${props => props.z || '2'};
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: ${props => props.top || '0'}vh;
    left: ${props => props.left || '0'}vw;
`

const StyledSectionBg = styled.div`
    z-index: ${props => props.z || '1'};
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: ${props => props.top || '0'}vh;
    left: ${props => props.left || '0'}vw;
    background-color: ${props => props.color || '0'};
`

class Section extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return(
            <Plx parallaxData={ this.props.prlx }>
                <StyledSection top={ this.props.top } left={ this.props.left } color={ this.props.color } z={ this.props.z } >
                    { this.props.children }
                </StyledSection>
            </Plx>
        );
    }
}
Section.contextType = CurrentSect;


class SectionBg extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return(
            <Plx parallaxData={ this.props.prlx }>
                <StyledSectionBg top={ this.props.top } left={ this.props.left } color={ this.props.color } z={ this.props.z } />
            </Plx>
        );
    }
}
SectionBg.contextType = CurrentSect;

export { Section, SectionBg};

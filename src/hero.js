import React from 'react';
import styled from 'styled-components';
import CurrentSect from './context';
import Title from './title';

const StyledHero = styled.div`
    z-index: 0;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0vh;
    left: 0vw;
    background-color: ${props => props.secondary || '#383838'};
`

const BottomHero = styled.div`
    z-index: 1;
    width: 200vw;
    height: 100vh;
    position: absolute;
    top: 0vh;
    left: 0vw;
    background: ${props => props.secondary || 'linear-gradient(0deg, #A43A48 20%, #E57853 100%)'};
    transform: rotate(${props => props.rotation || '0'}deg) ;
    transform-origin: 0% 0%;
    box-shadow: 0 -10px 20px rgba(0,0,0,0.19);
`

const TopHero = styled.div`
    z-index: 1;
    width: 200vw;
    height: 100vh;
    position: absolute;
    top: -100vh;
    left: 0vw;
    background-color: ${props => props.primary || '#E57853'};
    transform: rotate(${props => props.rotation || '0'}deg) ;
    transform-origin: 0% 100%;
`

class Hero extends React.Component{
    constructor(props) {
        super(props);
        this.rectDim = React.createRef();
        this.state = {
            value: null,
        };
    }

    updateRotation(){
        if (this.context.middle){
            var rot;
            var width;
            var height;
            width = this.rectDim.current.offsetWidth;
            height = this.rectDim.current.offsetHeight;
            rot = height / width;
            rot = Math.atan(rot);
            var pi = Math.PI;
            rot = rot * (180/pi);
            this.context.setRotation( rot );
        }
    }

    componentDidMount() {
        var rot;
        var width;
        var height;
        width = this.rectDim.current.offsetWidth;
        height = this.rectDim.current.offsetHeight;
        rot = height / width;
        rot = Math.atan(rot);
        var pi = Math.PI;
        rot = rot * (180/pi);
        this.context.setRotation( rot );
        window.addEventListener("resize", this.updateRotation.bind(this));        
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateRotation.bind(this));
    }

    render() {
        return(
            <>
                <StyledHero ref={ this.rectDim } rotation={ this.context.rotation }>
                    <TopHero primary={ this.context.primaryColor } rotation={ this.context.rotation }/>
                    <BottomHero secondary={ this.context.secondaryColor } rotation={ this.context.rotation }/>
                </StyledHero>
                <Title />
            </>
        );
    }
}
Hero.contextType = CurrentSect;

export default Hero;

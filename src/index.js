import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import CurrentSect from './context';
import styled from 'styled-components';
import contacts from './configs/socialnames';   
import Hero from './hero';
import Header from './header';
import { Section, SectionBg } from './section';
import { MySelf } from './myself';
import Projects from './projects';
import './css/reset.css';
import './css/index.css';
import { primary, secondary, tertiary } from './configs/colors';

var bio = ['Student of Interface and Communication Technology', 'University of Trento'];
var whatiam = ['d e s i g n e r', 'd e v e l o p e r', 'g e e k'];
const section = ['ABILITY', 'PROJECTS', 'EXPERIENCES', 'ME'];

const ContainerSect = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 0;
    z-index: 3;
`

const SpanId = styled.span`
    position: absolute;
    top: ${props => props.top || '0'}vh;
    left: 0;
    width: 0vw;
    height: 0vh;
`

const parallaxDataSec1 = [
    {
    start: '0vh',
    duration: '100vh',
        properties: [
            {
                startValue: 0,
                endValue: 100,
                unit: 'vh',
                property: 'translateY',
            },
        ],
    },
];

const parallaxDataSec2 = [
    {
    start: '200vh',
    duration: '100vh',
        properties: [
            {
                startValue: 0,
                endValue: -100,
                unit: 'vw',
                property: 'translateX',
            },
        ],
    },
];

const parallaxDataSec3 = [
    {
    start: '0vh',
    end: '400vh',
        properties: [
            {
                startValue: 100,
                endValue: 100,
                unit: 'vh',
                property: 'translateY',
            },
        ],
    },
    {
    start: '400vh',
    duration: '100vh',
        properties: [
            {
                startValue: 100,
                endValue: 0,
                unit: 'vh',
                property: 'translateY',
            },
        ],
    },
];

const parallaxDataSec4 = [
    {
    start: '600vh',
    duration: '100vh',
        properties: [
            {
                startValue: 0,
                endValue: 100,
                unit: 'vw',
                property: 'translateX',
            },
        ],
    },
];

class Page extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            section : section,
            contacts : contacts,
            bio: bio,
            whatiam: whatiam,
            middle: true,  
            rotation: 0,
            primaryColor: primary,
            secondaryColor: secondary,
            tertiaryColor: tertiary,
            setRotation: this.setRotation,
            setProjects: this.setProjects,
            setProjectsTimer: this.setProjectsTimer,
        };
    };

    componentDidMount(){
        /*console.log(this.state);    
        const temp = [];
        temp.push(this.sec1.current); 
        temp.push(this.sec2.current); 
        temp.push(this.sec3.current); 
        temp.push(this.sec4.current);  
        this.setState({ ref: temp});  

        <SpanId top='250' ref={this.sec4} />
        <SpanId top='450' ref={this.sec3} />
        <SpanId top='650' ref={this.sec2} />
        <SpanId top='850' ref={this.sec1} />

        this.sec1 = React.createRef();
        this.sec2 = React.createRef();
        this.sec3 = React.createRef();
        this.sec4 = React.createRef(); */
    }

    setRotation = rot => {
        this.setState( { rotation: rot } );
    };

    setProjects = (hover, color) => {
        console.log('projects'); 
        if (hover && !this.state.hoverProjects){
            this.setState({ hoverProjects: true, colorProjects: color });
        } 
        if (hover){
            this.setState({ colorProjects: color });
        } 
        if (!hover && this.state.hoverProjects){
            this.setState({ hoverProjects: false, colorProjects: color });
        }
    };

    setProjectsTimer = (hovering, timer) => {
        console.log('timer'); 
        if (!hovering){
            clearTimeout(this.state.timer);     
        } else {
            this.setState({timer: timer});
        }
    };

    render(){
        return (
            <CurrentSect.Provider value={ this.state }>
                <Hero />
                <Header />
                <SpanId top='200' id="ME" />
                <SpanId top='400' id="EXPERIENCES" />
                <SpanId top='600' id="PROJECTS" />
                <SpanId top='800' id="ABILITY" />
                <ContainerSect>
                    <SectionBg prlx={ parallaxDataSec1 } top='-100' color={ tertiary } z='3' />
                    <Section prlx={ parallaxDataSec1 } top='-100' color={ tertiary } z='4' >
                        <MySelf />
                    </Section>
                    <SectionBg prlx={ parallaxDataSec2 } left='100' color={ primary } z='5' />
                    <Section prlx={ parallaxDataSec2 } left='100' color={ primary } z='6'>
                        <Projects />
                    </Section>
                    <SectionBg prlx={ parallaxDataSec3 } top='0' color={ secondary } z='7' />
                    <Section prlx={ parallaxDataSec3 } top='0' color={ secondary } z='8' ></Section>
                    <SectionBg prlx={ parallaxDataSec4 } left='-100' color='#000000' z='9' />
                    <Section prlx={ parallaxDataSec4 } left='-100' color='#000000' z='10' ></Section>
                </ContainerSect>
            </CurrentSect.Provider>
        )
    }
}

function FullPage(){
    const FullPage = (
        <Page />
    );
    
    ReactDOM.render(
        FullPage,
        document.getElementById('root')
    );
}

FullPage();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

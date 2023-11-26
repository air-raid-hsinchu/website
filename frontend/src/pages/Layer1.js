import { Component } from 'react';
import '../assets/styles/layer1.css'; // Import your CSS file for styling
import Parallax from 'parallax-js';

class Layer1 extends Component {
    componentDidMount() {
        let scene = document.getElementById('scene');
        let parallaxInstance = new Parallax(scene, {
            relativeInput: true,
        });
    }
    render() {
        return (
            <>
                <div id="scene">
                    
                    <div data-depth="0.4"  id="buildings_1" >
                        <img src="./buildings_1.png" alt="buildings_1"/>
                    </div>
                    <div data-depth="0.4" id="buildings_2" >
                        <img src="./buildings_2.png" alt="buildings_2" />
                    </div>
                    <div data-depth="0.5"  id="airship">
                        <img src="./airship.png" alt="airship" />
                    </div>
                    <div data-depth="0.2" id="house" >
                        <img src="./house.png" alt="house" />
                    </div>
                </div>
            </>
        );
    }
};

export default Layer1;

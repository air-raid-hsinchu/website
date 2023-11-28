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
                <div className="container">
                    <div className="row" id="scene">
                        <div data-depth="0.4" id="buildings">
                            <img src="./buildings.png" alt="buildings"  className="img-fluid" />
                        </div>
                        <div data-depth="0.6" id="airship">
                            <img src="./airship.png" alt="airship" className="img-fluid"/>
                        </div>
                        <div data-depth="0.2" id="house">
                            <img src="./house.png" alt="house" className="img-fluid" />
                        </div>

                    </div>
                </div>
            </>
        );
    }
};

export default Layer1;

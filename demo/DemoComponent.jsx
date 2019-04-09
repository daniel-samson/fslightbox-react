import React, { Component } from 'react';
import "./css/demo.css";
import FsLightbox from "../src";
import { testVideoURL } from "../tests/schemas/testVariables";

class DemoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
        };
        this.slide = 1;
        this.toggleLightbox = this.toggleLightbox.bind(this);
    }

    toggleLightbox() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <>
                <button onClick={ this.toggleLightbox }>Toggle Lightbox</button>
                <div className="images">
                    <img className="image" src="../demo/images/1.jpeg" alt=""/>
                    <img className="image" src="../demo/images/2.jpg" alt=""/>
                    <img className="image" src="../demo/images/3.jpeg" alt=""/>
                </div>
                <FsLightbox
                    isOpen={ this.state.isOpen }
                    urls={ [
                        // testVideoURL,
                        // "../demo/images/1.jpeg",
                        // "../demo/images/2.jpg",
                        // "../demo/images/3.jpeg",
                        // "../demo/images/4.jpeg",
                        "../demo/images/5.jpg",
                        "../demo/images/6.jpg",
                        "../demo/images/7.jpg",
                        // "../demo/images/6.jpg"
                    ] }
                    slide={ this.slide }
                    videosPosters={ [
                        "../demo/images/1.jpeg"
                    ] }
                />
            </>
        );
    }
}

export default DemoComponent;
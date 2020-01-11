import React, { Component } from 'react';
import full from '../../Assets/icons/full-screen.svg';

export default class AnimPreview extends Component {
    constructor (props) {
        super(props);
        this.frames = undefined;
        this.state = {
            counter: 0,
            FPS: 12,
            fullScreen: false
        };
        this.interval = undefined;

        this.changeFPSCounter = this.changeFPSCounter.bind(this);
        this.startAnimation = this.startAnimation.bind(this);
    }

    componentDidUpdate (prevProps, prevState) {
        if (this.state.FPS !== prevState.FPS) {
            clearInterval(this.interval);
            this.startAnimation(1000 / this.state.FPS);
        }
    }

    fullScreen () {
        this.setState(({ fullScreen }) => ({ fullScreen: !fullScreen }));
    }

    startAnimation (delay) {
        this.interval = setInterval(() => {
            this.frames = document.querySelectorAll('.frames-bar__frame-preview-canvas');
            const images = document.getElementById('animation-preview');
            images.src = this.frames[this.state.counter].toDataURL();
            this.setState((state) => ({
                counter: state.counter + 1
            }));

            if (this.state.counter === this.frames.length) {
                this.setState({
                    counter: 0
                });
            }
        }, delay);
    }

    changeFPSCounter () {
        const range = document.querySelector('.frame-rate');
        this.setState({
            FPS: range.value
        });
    }

    render () {
        return (
            <div>
                <div className={`animation-preview ${this.state.fullScreen ? 'full-screen-preview' : ''}`}>
                    <img id="animation-preview" src="" alt="" />
                    <div>
                        <img
                            className="full-screen" src={full}
                            onClick={() => this.fullScreen()} />
                    </div>
                </div>
                <div className="fps-slider">
                    <div className="fps-counter">
                        {this.state.FPS}
                        {' '}
                        FPS
                    </div>
                    <input
                        className="frame-rate"
                        type="range"
                        min="1"
                        max="24"
                        step="1"
                        defaultValue="12"
                        onChange={this.changeFPSCounter}
                    />
                </div>
            </div>
        );
    }
}

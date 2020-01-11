import React, { Component } from 'react';
import GIF from 'gif.js/dist/gif';

const automaticallyDownloadFile = (link, extension = 'png') => {
    const element = document.createElement('a');

    element.setAttribute('href', link);
    element.setAttribute('download', `image.${extension}`);
    document.body.appendChild(element);
    element.click();

    if (element.parentNode) {
        element.parentNode.removeChild(element);
    }
};

export default class DownloadTools extends Component {
    downloadPng () {
        try {
            const canvas = document.getElementById('main-canvas');
            const link = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
            automaticallyDownloadFile(link);
        } catch (e) {
            console.warn(e);
        }
    }

    downloadGif () {
        const gif = new GIF({
            workers: 2,
            quality: 10
        });

        const canvases = [...document.getElementsByClassName('frames-bar__frame-preview-canvas')];
        canvases.forEach((canvas) => {
            gif.addFrame(canvas, { delay: 100 });
        });
        gif.on('finished', (blob) => {
            automaticallyDownloadFile(URL.createObjectURL(blob), 'gif');
        });
        gif.render();
    }

    render () {
        return (
            <>
                <button
                    className="download-image-btn"
                    onClick={() => this.downloadPng()}
                >
                    Download as png image12
                </button>
                <button
                    className="download-image-btn"
                    onClick={() => this.downloadGif()}
                >
                    Download as gif
                </button>
            </>
        );
    }
}

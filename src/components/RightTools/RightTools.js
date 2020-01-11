import React, { Component } from 'react';

import AnimPreview from './AnimPreview';
import DownloadTools from './DownloadTools';
import Layers from './Layers';
// import PreviewContainer from '../../loading/preview-container';
// import Save from './Save';

export default class RightTools extends Component {
    render () {
        return (
            <div className="right-side-tools">
                <AnimPreview />
                <DownloadTools />
                <Layers
                    layers={this.props.layers}
                    activeLayer={this.props.activeLayer}
                    addNewLayer={this.props.addNewLayer.bind(this)}
                    deleteLayer={this.props.deleteLayer.bind(this)}
                    setActiveLayer={this.props.setActiveLayer.bind(this)}
                    setNewLayerName={this.props.setNewLayerName.bind(this)}
                />
            </div>
        );
    }
}

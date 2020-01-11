import React, { Component } from 'react';

// Components import
import PenSizeBar from './ToolsBar/PenSizeBar';
import ToolsBar from './ToolsBar/ToolsBar';
import Frames from './Frames/Frames';
import Workspace from './Workspace/Workspace';
import RightTools from './RightTools/RightTools';
import Canvas from './Canvas/Canvas';

// Tools import
import * as penTool from '../Tools/penTool';
import * as colotPickerTool from '../Tools/colorPickerTool';
import * as lineTool from '../Tools/lineTool';
import * as squareTool from '../Tools/squareTool';
import * as eraserTool from '../Tools/eraserTool';
import * as bucketTool from '../Tools/bucketTool';

// Loading import
import * as frameLoading from '../loading/FramesLoading';
import LayersLoading from '../loading/LayersLoading';

const canvasSize = 32;

// var image = Canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
// window.location.href=image;

// class Size {
//    render(canvasSize){
//       return (
//          <div>
//          <button  onClick={canvasSize=32}>32</button>
//          <button  onClick={canvasSize=64}>64</button>
//          <button  onClick={canvasSize=128}>128</button>
//          </div>
//       )
//    }
// }

// const canvasSize ={
//    if (canvasSize===32){
//       return canvasSize=32;
//    }else if(canvasSize===64){
//       return canvasSize= 64;
//    }else if(canvasSize===128){
//       return canvasSize=128;
//    }
// };

export default class Main extends Component {
    constructor (props) {
        super(props);
        this.state = {
            frames: [{ number: 0, id: 0, img: [] }], // All frames info
            layers: [],
            activeFrame: 0, // current actve frame
            activeLayer: 0,
            proxyFrame: undefined, // Element under which we want to draw frame skeleton
            // canvasSize: 32,
            // function canvasSize (){
            //
            // }
            // setcanvasSize(canvasSize) {
            //   switch (canvasId) {
            //     case 0:
            //       this.setTool();
            //       break;

            mouseUpContainer: () => {
            },
            mouseMoveContainer: () => {
            },
            mouseDownContainer: () => {
            },
            activeToolId: 0, // Id of current active tool

            mainColor: { r: 255, g: 0, b: 0 },
            semiColor: { r: 57, g: 73, b: 171 }
        };

        this.layersLoading = new LayersLoading();

        this.setActiveFrame = frameLoading.setActiveFrame.bind(this);
        this.addNewFrame = frameLoading.addNewFrame.bind(this, undefined);
        this.deleteFrame = frameLoading.deleteFrame.bind(this);
        this.updateFramePreview = frameLoading.updateFramePreview.bind(this);
        this.setProxyFrame = frameLoading.setProxyFrame.bind(this);
        this.changeFramePos = frameLoading.changeFramePos.bind(this);
        this.dublicateFrame = frameLoading.dublicateFrame.bind(this);
        this.setActiveTool = this.setActiveTool.bind(this);
    }


    componentDidMount () {
        this.setActiveTool(0); // Set active tool to pen tool
        this.layersLoading.addNewLayer.bind(this)();
    }

    setTool (tool) {
        // Assign a tools drawing functions to containers functions, which later will be past to canvas,
        this.setState({
            mouseDownContainer: tool.mouseDown,
            mouseMoveContainer: tool.mouseMove,
            mouseUpContainer: tool.mouseUp
        });
    }

    setActiveTool (toolId) {
        switch (toolId) {
            case 0:
                this.setTool(penTool);
                break;
            case 1:
                this.setTool(colotPickerTool);
                break;
            case 2:
                this.setTool(lineTool);
                break;
            case 3:
                this.setTool(squareTool);
                break;
            case 4:
                this.setTool(eraserTool);
                break;
            case 5:
                this.setTool(bucketTool);
                break;
            default:
                break;
        }
        this.setState({ activeToolId: toolId });
    }

    setMainColor (r, g, b) {
        this.setState({ mainColor: { r, g, b } });
    }

    setSemiColor (r, g, b) {
        this.setState({ semiColor: { r, g, b } });
    }

    swapColors () {
        this.setState((state, props) => ({
            mainColor: state.semiColor,
            semiColor: state.mainColor
        }));
    }

    setLocal () {
        localStorage.setItems();
    }

    render () {
        return (
            <main>
                <PenSizeBar />
                <ToolsBar
                    setActiveTool={this.setActiveTool}
                    activeToolId={this.state.activeToolId}
                    mainColor={this.state.mainColor}
                    semiColor={this.state.semiColor}
                    setMainColor={this.setMainColor.bind(this)}
                    setSemiColor={this.setSemiColor.bind(this)}
                    swapColors={this.swapColors.bind(this)}
                />
                <Frames
                    onSetActiveFrame={this.setActiveFrame}
                    activeFrame={this.state.activeFrame}
                    activeLayer={this.state.activeLayer}
                    proxyFrame={this.state.proxyFrame}
                    frames={this.state.frames}
                    onAddNewFrame={this.addNewFrame}
                    onDeleteFrame={this.deleteFrame}
                    onDublicateFrame={this.dublicateFrame}
                    setProxyFrame={this.setProxyFrame}
                    changeFramePos={this.changeFramePos}
                    canvasSize={canvasSize}
                />
                <Workspace />
                <Canvas
                    onUpdateFramePreview={this.updateFramePreview}
                    onMouseDown={this.state.mouseDownContainer}
                    onMouseMove={this.state.mouseMoveContainer}
                    onMouseUp={this.state.mouseUpContainer}
                    mainColor={this.state.mainColor}
                    semiColor={this.state.semiColor}
                    activeLayer={this.state.activeLayer}
                    setMainColor={this.setMainColor.bind(this)}
                    setSemiColor={this.setSemiColor.bind(this)}
                    canvasSize={canvasSize}
                />
                <RightTools
                    layers={this.state.layers}
                    activeLayer={this.state.activeLayer}
                    addNewLayer={this.layersLoading.addNewLayer.bind(this)}
                    deleteLayer={this.layersLoading.deleteLayer.bind(this)}
                    setActiveLayer={this.layersLoading.setActiveLayer.bind(this)}
                    setNewLayerName={this.layersLoading.setNewName.bind(this)}
                />
            </main>
        );
    }
}

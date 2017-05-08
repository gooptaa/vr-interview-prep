import React from 'react'
import {Link} from 'react-router'
import aframe from 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
require('aframe-fence-component')

export class Room extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: 'red'};
  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  render () {
    return (
      <Scene physics="debug: true">
        <a-assets>
          <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
          <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>
          <img id="brick" src="https://ucarecdn.com/9ea05677-13be-42d3-b7a0-6c365b105dab/"/>
          <img id="wood" src="https://ucarecdn.com/6d4846b5-72fa-4014-9676-58188c287274/"/>
          <img id="ceiling" src="https://ucarecdn.com/3be112de-62f6-4199-a12f-a0219c78d2eb/"/>
          <img id="chantilly" src="https://ucarecdn.com/954adc21-3056-476c-ab04-082153e9c6dd/"/>
          <a-asset-item id="person-obj" src="objects/person.obj"/>
          <a-asset-item id="person-mtl" src="objects/person.mtl"/>
          <a-asset-item id="office-chair-obj" src="objects/office-chair.obj"/>
          <a-asset-item id="office-chair-mtl" src="objects/office-chair.mtl"/>
          <a-asset-item id="flower-obj" src="objects/flower.obj"/>
          <a-asset-item id="flower-mtl" src="objects/flower.mtl"/>
          <a-asset-item id="couch-obj" src="objects/couch.obj"/>
          <a-asset-item id="couch-mtl" src="objects/couch.mtl"/>
        </a-assets>

        <a-plane src="#wood" rotation="-90 0 0" height="14" width="14"/>
        <a-box static-body src="#chantilly" repeat="14 14" position="0 0 -7" rotation="0 0 0" height="14" width="14"/>
        <a-box static-body src="#chantilly" repeat="14 14" position="0 0 7" rotation="0 180 0" height="14" width="14"/>
        <a-box static-body src="#chantilly" repeat="14 14" position="7 0 0" rotation="0 -90 0" height="14" width="14"/>
        <a-box static-body src="#chantilly" repeat="14 14" position="-7 0 0" rotation="0 90 0" height="14" width="14"/>
        <a-plane src="#ceiling" repeat="14 14" position="0 7 0" rotation="90 0 0" height="14" width="14"/>

        <Entity obj-model="obj: #office-chair-obj; mtl: #office-chair-mtl" position="0 0 .5" scale="1.75 1.5 2"/>
        <Entity obj-model="obj: #office-chair-obj; mtl: #office-chair-mtl" position="1 0 .5" scale="1.75 1.5 2"/>
        <Entity obj-model="obj: #office-chair-obj; mtl: #office-chair-mtl" position="2 0 .5" scale="1.75 1.5 2"/>

        <Entity obj-model="obj: #flower-obj; mtl: #flower-mtl" position="3 0 .5" scale="0.01 0.01 0.01"/>
        <Entity obj-model="obj: #couch-obj; mtl: #couch-mtl" position="-3 0.14 -6" scale="1 1 1"/>

        <Entity primitive="a-light" type="ambient" intensity="1" color="white"/>
        <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>
        <Entity particle-system={{preset: 'snow', particleCount: 2000}}/>
        <Entity text={{value: 'Hello, A-Frame React!', align: 'center'}} position={{x: 0, y: 2, z: -1}}/>

        <Entity id="box"
          geometry={{primitive: 'box'}}
          material={{color: this.state.color, opacity: 0.6}}
          animation__rotate={{property: 'rotation', dur: 2000, loop: true, to: '360 360 360'}}
          animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1'}}
          position={{x: 0, y: 1, z: -3}}
          events={{click: this.changeColor.bind(this)}}>
          <Entity animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '2 2 2'}}
                  geometry={{primitive: 'box', depth: 0.2, height: 0.2, width: 0.2}}
                  material={{color: '#24CAFF'}}/>
        </Entity>

        <a-entity position="0 0 0">
          <a-camera fence="width: 10; depth: 10">
            <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
            <a-entity obj-model="obj: #person-obj; mtl: #person-mtl" position="0 -1.6 .5"/>
          </a-camera>
        </a-entity>
      </Scene>
    );
  }
}


/*
        <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
        <Entity primitive="a-plane" src="#groundTexture" position="0 0 -7" rotation="0 0 0" height="100" width="100"/>
        <Entity primitive="a-plane" src="#groundTexture" position="0 0 7" rotation="0 180 0" height="100" width="100"/>
        <Entity primitive="a-plane" src="#groundTexture" position="7 0 0" rotation="0 -90 0" height="100" width="100"/>
        <Entity primitive="a-plane" src="#groundTexture" position="-7 0 0" rotation="0 90 0" height="100" width="100"/>
        <Entity primitive="a-plane" src="#groundTexture" position="0 14 0" rotation="90 0 0" height="100" width="100"/>
 */

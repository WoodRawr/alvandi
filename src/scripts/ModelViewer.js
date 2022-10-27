/*
Three JS Libraries
*/
import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/*
Media Imports
*/
import kazumi from './WRLogo.png'
import WRWRBG from 'C:/Users/gerad/Desktop/pw/alvandi/src/img/WRWRBG.png'
import gltfPath from 'C:/Users/gerad/Desktop/pw/alvandi/src/model/robotbossthreejs.glb'

export default class ModelViewer extends React.Component {

  componentDidMount() {

    /* 
    PREREQUISITES 
    */
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearAlpha(0);
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(renderer.domElement);
    const loader = new THREE.TextureLoader();
    const _3dloader = new GLTFLoader();

    /*
     3D MODEL IMPORTING
     */
    var _3dmodel;
    var _3dhead;
    var testing = _3dloader.load(gltfPath,  (gltf) => {
      _3dmodel = gltf.scene;
      _3dhead = _3dmodel.getObjectByName("RobotHead");
      scene.add(_3dmodel);
      scene.add(_3dhead);
      /*
      Uncomment down below to shift the robot to the left
      */
      //_3dmodel.position.x = -2.5;
      //_3dhead.position.x = -2.5;
    }, undefined, (error)=>{
      console.error(error);
    });

    /*
     PLANE GENERATION
     */
    const texture = new THREE.TextureLoader().load('../img/kazumi.jpg');
    const planematerial = new THREE.MeshBasicMaterial({
      //map: loader.load('https://threejsfundamentals.org/threejs/resources/images/wall.jpg'),
      map: loader.load(WRWRBG),
      side: THREE.DoubleSide,
      transparent: true, opacity: 0.5,
    });
    var geo = new THREE.PlaneBufferGeometry(35, 25, 12, 12);
    var mat = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide });
    var plane = new THREE.Mesh(geo, planematerial);

    scene.add(plane);
    plane.position.z = -3;

    /*
     CUBE GENERATION
     */
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    //scene.add(cube);
    camera.position.z = 12;

    /*
     ORBIT CONTROLS
     */
    /*
    var controls = new OrbitControls(camera, renderer.domElement);
     controls.enablePan = false;
     controls.enableZoom = false;

     cube.renderOrder = 3;
     */

    /*
     MOUSELOCATION
     */
    var xp = 0, yp = 0;
    var mouseX = 0, mouseY = 0;
    var diff = 0;

    document.addEventListener('mousemove' , (e) => {
      mouseX = e.clientX * 100 / window.innerWidth;
      mouseY = e.clientY * 100 / window.innerHeight;
    });

    setInterval(function(){
      xp += ((mouseX - xp)/10);
      yp += ((mouseY - yp)/10);
    }, 20);

    /*
     ANIMATION
     */
    var animate = function () {
      requestAnimationFrame(animate);

      if(_3dmodel) {
       diff += 0.001;

        _3dmodel.rotation.y = xp*0.06 + diff;
        _3dmodel.rotation.x = yp*0.001;

        _3dhead.rotation.y = xp*0.06 + diff;
        _3dhead.rotation.x = yp*0.01;
      }

      renderer.render(scene, camera);
    };
    animate();
  }

  render() {
    return (
      <div>
        <div ref={ref => (this.mount = ref)} />
      </div>
    )
  }

}
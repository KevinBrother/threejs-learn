// @ts-check
import * as THREE from 'three';
console.log(THREE);

// 目标： 了解three.js的最基本使用

// 创建场景
const scene = new THREE.Scene();

// 创建相机，透视相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// 设置相机的位置
camera.position.z = 5;

// 把相机添加到场景中
scene.add(camera);

// 创建几何体、材质
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// 根据几何体和材质创建物体
const cube = new THREE.Mesh(geometry, material);
// 把物体添加到场景中
scene.add(cube);

// 创建渲染器、设置渲染器的大小
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
console.log(renderer);

// 把渲染器添加到页面中
document.body.appendChild(renderer.domElement);

// 使用渲染器，通过相机，把场景渲染出来
renderer.render(scene, camera);

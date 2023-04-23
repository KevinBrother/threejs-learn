// @ts-check
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// 目标： 使用控制器查看3d物体

// 创建场景
const scene = new THREE.Scene();

// 创建相机，透视相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// 设置相机的位置
camera.position.z = 15;
console.log('%c [ camera ]-15', 'font-size:13px; background:pink; color:#bf2c9f;', camera);

// 把相机添加到场景中
scene.add(camera);
console.log('%c [ camera ]-18', 'font-size:13px; background:pink; color:#bf2c9f;', camera);

// 创建几何体、材质
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// 根据几何体和材质创建物体
const cube = new THREE.Mesh(geometry, material);
// 把物体添加到场景中
scene.add(cube);

// 添加坐标轴辅助器
const axesHelper = new THREE.AxesHelper(15);
console.log('%c [ axesHelper ]-29', 'font-size:13px; background:pink; color:#bf2c9f;', axesHelper);
scene.add(axesHelper);

// 创建渲染器、设置渲染器的大小
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// 把渲染器添加到页面中
document.body.appendChild(renderer.domElement);

// 使用渲染器，通过相机，把场景渲染出来
// renderer.render(scene, camera);

// 创建控制器
const controls = new OrbitControls(camera, renderer.domElement);

// 渲染函数
function render() {
  // 渲染
  renderer.render(scene, camera);
  // 递归调用
  requestAnimationFrame(render);
}

// 调用渲染函数
render();

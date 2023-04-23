// @ts-check
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// 目标： 使用控制器查看3d物体

// 创建场景
const scene = new THREE.Scene();

// 创建相机，透视相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// 设置相机的位置
camera.position.set(0, 0, 5);

// 把相机添加到场景中
scene.add(camera);

// 添加坐标轴辅助器
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// 创建几何体、材质
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// 根据几何体和材质创建物体
const cube = new THREE.Mesh(geometry, material);
// 把物体添加到场景中
scene.add(cube);

// 设置物体的位置
cube.position.set(2, 0, 0);

// 设置物体的缩放与旋转
cube.scale.set(1.5, 1, 1);
cube.rotation.set(Math.PI / 4, 0, 0, 'XYZ');

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
function render(time) {
  cube.rotation.x += 0.01;

  // cube.position.x += 0.01;
  // if (cube.position.x > 5) {
  //   cube.position.x = 0;
  // }

  let t = (time / 1000) % 5;

  // cube.position.x += 0.01;
  // if (cube.position.x > 5) {
  //   cube.position.x = 0;
  // }
  // 动画基本原理： 通过时间来控制物体的位置，移动的距离等于速度乘以时间
  cube.position.x = t * 1;

  // 渲染
  renderer.render(scene, camera);
  // 递归调用
  requestAnimationFrame(render);
}

// 调用渲染函数
render();

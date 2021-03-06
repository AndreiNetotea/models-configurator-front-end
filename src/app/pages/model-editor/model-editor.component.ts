import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
// import Stats from 'stats-js';
// import { GUI } from 'stats-js';

// import { OrbitControls } from 'stats-js';
// import { TransformControls } from 'stats-js';

@Component({
  selector: 'models-list',
  templateUrl: './model-editor.component.html'
})
export class ModelEditorComponent implements OnInit {

  ngOnInit() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    const animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    camera.position.z = 5;
    renderer.render(scene, camera);
    animate();
  }
}

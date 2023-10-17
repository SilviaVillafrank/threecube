// Importa la libreria Three.js
import * as THREE from 'three'

// Crea la scena
const scene = new THREE.Scene();

// Crea una telecamera prospettica
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Crea un renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crea un materiale rosso
const redMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// Crea un cubo rosso
const redCube = new THREE.Mesh(new THREE.BoxGeometry(), redMaterial);
scene.add(redCube);

// Crea un materiale verde
const greenMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// Crea un cubo verde
const greenCube = new THREE.Mesh(new THREE.BoxGeometry(), greenMaterial);
scene.add(greenCube);

// Imposta la posizione dei cubi
redCube.position.x = -1.5;
greenCube.position.x = 1.5;

// Funzione per animare i cubi
function animateCubes() {
  requestAnimationFrame(animateCubes);

  // Fai ruotare i cubi
  redCube.rotation.x += 0.01;
  redCube.rotation.y += 0.01;
  greenCube.rotation.x += 0.01;
  greenCube.rotation.y += 0.01;

  // Rendi visibile la scena
  renderer.render(scene, camera);
}

// Chiama la funzione per iniziare l'animazione
animateCubes();

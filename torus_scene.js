const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.TorusGeometry(10, 4, 50, 60, Math.PI * 2);
const material = new THREE.MeshNormalMaterial({});

const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

camera.position.z = 30;

function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.02;

    renderer.render(scene, camera);
};

animate();

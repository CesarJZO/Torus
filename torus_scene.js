const geometry = new THREE.TorusGeometry(
    10, // Radius 
    4, // Thickness
    50, // Radial segments, aka radial polygons
    60, // Tube polygons
    Math.PI * 2 // Length of tue tube
);
const material = new THREE.MeshNormalMaterial({});

const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

camera.position.z = 30;

function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.02;
    // torus.rotation.z += 0.5;

    renderer.render(scene, camera);
};

animate();

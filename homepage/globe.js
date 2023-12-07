function initGlobe() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(document.getElementById('globe-container').clientWidth, 400);
    document.getElementById('globe-container').appendChild(renderer.domElement);

    // Texture loader
    const loader = new THREE.TextureLoader();
    const dayTexture = loader.load('day.jpg');
    const nightTexture = loader.load('night.jpg');

    // Create Earth sphere
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ map: dayTexture }); // Start with day texture
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    camera.position.z = 5;

    // OrbitControls for zoom and rotation
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Function to update texture based on time
    function updateTexture() {
        var hour = new Date().getHours();
        if (hour >= 6 && hour < 18) {
            material.map = dayTexture;
        } else {
            material.map = nightTexture;
        }
        material.needsUpdate = true;
    }

    // Animate function
    function animate() {
        requestAnimationFrame(animate);

        // Update texture and controls each frame
        updateTexture();
        controls.update();

        renderer.render(scene, camera);
    };

    animate();
}

window.onload = initGlobe;

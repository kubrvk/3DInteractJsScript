// 3DInteractJS Core Entry Point
(function() {
  const canvas = document.getElementById('canvas3d');
  if (!canvas) return;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0b0d12);

  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 2, 5);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;

  // Studio Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 1.4);
  dirLight.position.set(5, 10, 7);
  scene.add(dirLight);

  // Demo Mesh (PBR Torus Knot)
  const geometry = new THREE.TorusKnotGeometry(1, 0.35, 128, 32);
  const material = new THREE.MeshStandardMaterial({
    color: 0x4a9eff,
    metalness: 0.85,
    roughness: 0.25,
  });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // Global methods for UI
  window.setMaterialColor = function(hex) {
    material.color.setHex(hex);
  };

  window.toggleWireframe = function() {
    material.wireframe = !material.wireframe;
  };

  // Render loop
  function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.y += 0.006;
    mesh.rotation.x += 0.003;
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
})();

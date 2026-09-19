export class Engine {
  constructor(canvas) {
    this.canvas = canvas;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 500);
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  }

  init() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }
}

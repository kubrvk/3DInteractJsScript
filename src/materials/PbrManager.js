export class PbrManager {
  static createMaterial(options = {}) {
    return new THREE.MeshStandardMaterial({
      color: options.color || 0xffffff,
      metalness: options.metalness !== undefined ? options.metalness : 0.5,
      roughness: options.roughness !== undefined ? options.roughness : 0.5,
      wireframe: !!options.wireframe
    });
  }
}

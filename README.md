# 3DInteractJS

<img align="left" width="40%" src="https://raw.githubusercontent.com/kubrvk/portfolio/main/img/galeri/site/13.jpg"/>

<h3><a href="https://github.com/kubrvk/3DInteractJsScript"><img src="https://img.shields.io/badge/GitHub-kubrvk%2F3DInteractJsScript-000000?style=flat-square&logo=github&logoColor=white" height="25"/></a></h3>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badges&logo=javascript&logoColor=black) ![WebGL](https://img.shields.io/badge/WebGL-990000?style=for-the-badges&logo=webgl&logoColor=white) ![3ds Max](https://img.shields.io/badge/3ds_Max-0696D7?style=for-the-badges&logo=autodesk&logoColor=white) ![Blender](https://img.shields.io/badge/Blender-E87D0D?style=for-the-badges&logo=blender&logoColor=white)

<br>

Browser-based interactive 3D configurator script built with WebGL to showcase 3ds Max & Blender 3D models with interactive real-time material and lighting controls.

<br clear="left"/>

---

## Technical Details

| Component | Specification |
|---|---|
| Core Engine | Vanilla JavaScript (ES6+), WebGL 2.0 Canvas Renderer |
| 3D Pipeline | 3ds Max & Blender High-to-Low Poly Bake & UV Mapping |
| Material Engine | PBR (Physically Based Rendering) Shader Pipelines |
| Controls | Interactive 360-degree Orbit, Pan & Smooth Zoom |
| Performance | 60 FPS Target with Frustum Culling & Texture Compression |

---

## Code Overview & Architecture

```text
3DInteractJsScript/
├── assets/
│   ├── models/            # Optimized 3D model meshes & geometry
│   ├── textures/          # Diffuse, Normal & Roughness PBR maps
│   └── shaders/           # Custom GLSL vertex & fragment shaders
├── src/
│   ├── camera/            # OrbitControls & viewport projections
│   ├── materials/         # Dynamic shader & material swapper
│   ├── renderer/          # WebGL render loop & light setup
│   └── main.js            # Configurator initialization & event bus
└── README.md
```

---

## License & Author

Developed by **[Beraat Yetkin](https://github.com/kubrvk)**. All rights reserved.

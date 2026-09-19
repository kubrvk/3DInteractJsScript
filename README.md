# 3DInteractJS — WebGL PBR Model Configurator Script

![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square)
![WebGL](https://img.shields.io/badge/Render-WebGL_2.0-blue?style=flat-square&logo=webgl)
![Three.js](https://img.shields.io/badge/Three.js-r128-black?style=flat-square&logo=three.js)
![PBR Shaders](https://img.shields.io/badge/Materials-Physically_Based_Rendering-orange?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-purple?style=flat-square)

3DInteractJS is an ultra-fast, zero-dependency browser 3D configurator and model viewer script. Built to render 3ds Max, Blender, and CAD models with physically based rendering (PBR) lighting, custom roughness/metalness channels, and responsive orbit interaction across desktop and mobile browsers.

---

## 🏛️ Pipeline Architecture

```
  +-------------------------------+      +-------------------------------+
  |    3ds Max / Blender Models   |      |     HDRI Environment Maps     |
  +---------------+---------------+      +---------------+---------------+
                  | GLTF / GLB Export                    | Radiance Textures
                  v                                      v
  +----------------------------------------------------------------------+
  |                        3DInteractJS Engine                           |
  |                                                                      |
  |   +-----------------------+              +-----------------------+   |
  |   |    GLTF Model Loader  |              |  PBR Material Manager |   |
  |   +-----------+-----------+              +-----------+-----------+   |
  |               |                                      |               |
  |               +-------------------+------------------+               |
  |                                   |                                  |
  |                                   v                                  |
  |                   +-------------------------------+                  |
  |                   |   ACESFilmic Tone Mapping     |                  |
  |                   +---------------+---------------+                  |
  |                                   |                                  |
  |                                   v                                  |
  |                   +-------------------------------+                  |
  |                   |   WebGL 2.0 Canvas Context    |                  |
  |                   +---------------+---------------+                  |
  +-----------------------------------|----------------------------------+
                                      v
                      +-------------------------------+
                      | 60 FPS Browser User Viewport  |
                      +-------------------------------+
```

---

## 🚀 Key Technical Highlights

- **Physically Based Rendering (PBR)**: Realistic metallic reflections, surface roughness diffusion, and normal map micro-detail.
- **Hardware Agnostic**: Automatic pixel ratio capping and dynamic level-of-detail (LOD) ensures stable 60 FPS on low-power mobile devices.
- **Plug-and-Play Script**: Single `<script>` embed into any e-commerce or architectural landing page.

---

## 💻 Quickstart

```bash
git clone https://github.com/kubrvk/3DInteractJsScript.git
cd 3DInteractJsScript

# Serve locally
npx serve . -p 8080
```
Open `http://localhost:8080` in any modern WebGL-supported browser.

---

## 👤 Author & License

- **Author**: `kubrvk` ([GitHub Profile](https://github.com/kubrvk))
- **License**: MIT License.

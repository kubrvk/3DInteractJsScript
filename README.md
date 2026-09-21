# 3DInteractJS 🧊
> **Etkileşimli PBR 3D Materyal Stüdyosu • WebGL 2.0 & Three.js CAD Konfigüratörü**

[![Canlı Demo](https://img.shields.io/badge/Canl%C4%B1_Demo-3dinteract.web.app-4f46e5?style=for-the-badge&logo=google-chrome&logoColor=white)](https://3dinteract.web.app)
[![Lisans](https://img.shields.io/badge/Lisans-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![3D Engine](https://img.shields.io/badge/3D_Motoru-Three.js_r128_WebGL_2.0-black?style=for-the-badge&logo=three.js)](https://threejs.org)
[![Arayüz](https://img.shields.io/badge/Aray%C3%BCz-Koyu_CAD_Grid_%26_Beyaz_HUD-indigo?style=for-the-badge&logo=css3)](https://developer.mozilla.org)
[![Dil](https://img.shields.io/badge/Dil-T%C3%BCrk%C3%A7e_%7C_English-green?style=for-the-badge)](https://3dinteract.web.app)

---

## 📸 Canlı Önizleme (Preview)

### CAD Çalışma Tezgahı & PBR Materyal Stüdyosu
Karanlık PBR grid zemin, döner stand, neon hedefleme halkası, sağda yüzen beyaz tasarım paneli ve ekranın altında yüzen modern HUD rozeti:
![3DInteractJS CAD Stüdyo Önizleme](docs/preview.png)

---

## 🌟 Öne Çıkan Özellikler

### 1. Profesyonel CAD & PBR Stüdyo Mimarisi
- **Doğrudan Açılış (Login Engeli Yok)**: Kullanıcı deneyimini kesintiye uğratmamak adına giriş ekranı olmadan doğrudan tam ekran interaktif 3D çalışma tezgahı olarak açılır.
- **Koyu CAD Izgarası & PBR Zemin**: Endüstriyel tasarım araçlarına (Blender, Maya, SolidWorks) uygun hassas ızgara zemini, yön eksenleri ve ışık yansıtıcı döner platform.
- **Yüzen Saf Beyaz HUD Panelleri**:
  - Sol üstte marka, anlık FPS sayacı, `[ TR | EN ]` dil seçici ve yüksek çözünürlüklü PNG ekran görüntüsü alma aracı.
  - Sağda gerçek zamanlı PBR parametre kontrol paneli.
  - Altta şık ve göze batmayan yüzen telif rozeti (`Developed by Beraat Yetkin` - `GitHub`).

### 2. Gerçek Zamanlı PBR (Fizik Tabanlı Render) Kontrolleri
- **3D Geometri Seçimi**: Torus Knot, Polyhedron, Silindir, Küre, Küp ve Halka modelleri arasında tek tıkla geçiş.
- **Yüzey Materyal Ayarları**:
  - Yüzey Temel Rengi (Hex Color Picker).
  - Mikro Pürüzlülük (*Roughness*: 0.00 - 1.00).
  - Metalik Oran (*Metalness*: 0.00 - 1.00).
  - Optik Geçirgenlik / Cam Etkisi (*Transmission / Glass*: 0.00 - 1.00).
- **Stüdyo Işık Atmosferleri**: *Koyu Stüdyo*, *Cyber Neon*, *Sıcak Altın* ve *Derin Uzay* HDR ışık simülasyonları.
- **Tel Kafes (Wireframe) & Otomatik Döndürme (Auto-Rotate)** modları.
- **Hazır Tasarımcı Paletleri**: *Titanyum*, *Altın Fırça*, *Zümrüt*, *Yakut Parlak*, *Buzlu Cam*, *Karbon*, *Bakır Tel*, *Obsidyen*.

### 3. Çift Dilli Tam Destek (TR | EN)
- Sol üstteki `[ TR | EN ]` dil seçici ile stüdyodaki tüm geometri adları, materyal parametreleri, ışık modları ve palet etiketleri Türkçe ve İngilizce arasında anında dönüştürülür.

---

## 🛠️ Teknoloji Yığını (Tech Stack)

| Bileşen | Teknoloji | Açıklama |
| :--- | :--- | :--- |
| **3D Rendering** | Three.js r128 (WebGL 2.0) | PBR MeshPhysicalMaterial, OrbitControls, gölge haritaları |
| **Arayüz (UI)** | HTML5, CSS3 Glassmorphism | Yüzen saf beyaz yarı saydam HUD panelleri, modern tipografi |
| **İkonlar** | Bootstrap Icons v1.11.3 | Vektörel stüdyo ikonları |
| **Yayın** | Firebase Hosting | Google CDN üzerinden optimize edilmiş yüksek hızlı statik barındırma |

---

## 📁 Proje Dizin Yapısı

```
3DInteractJsScript/
├── index.html              # 3D motoru, WebGL canvas ve HUD kontrolleri
├── docs/                   # Dokümantasyon ve ekran görüntüleri
│   └── preview.png         # 3D CAD stüdyosu yüksek çözünürlüklü önizleme
└── README.md               # Proje dokümantasyonu
```

---

## ⚡ Hızlı Başlangıç (Local Setup)

1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/kubrvk/3DInteractJsScript.git
   cd 3DInteractJsScript
   ```
2. `index.html` dosyasını tarayıcınızda açın:
   ```bash
   start index.html
   ```
3. Alternatif yerel HTTP sunucusu ile çalıştırmak için:
   ```bash
   npx serve .
   ```
4. Tarayıcınızda `http://localhost:3000` adresine gidin.

---

## 🌐 Canlı Sistem

- **Canlı URL**: [https://3dinteract.web.app](https://3dinteract.web.app)

---

## 👤 Geliştirici

**Developed by Beraat Yetkin**
- GitHub: [@kubrvk](https://github.com/kubrvk)
- Proje Deposu: [3DInteractJsScript](https://github.com/kubrvk/3DInteractJsScript)
- Portfolyo: [Beraat Yetkin Portfolio](https://github.com/kubrvk/portfolio)

# Encuentra las Diferencias

Aplicación web construida con React + Vite que presenta un minijuego de encontrar diferencias entre dos imágenes. Incluye pantalla de bienvenida, sistema de puntuación, temporizador y soporte para marcadores internos (sólo visibles en modo desarrollo).

## Requisitos

- Node.js 18 o superior
- npm (viene incluido con Node.js)

## Ejecución local

```bash
npm install
npm run dev
```

Abre la URL que indica Vite (por defecto http://localhost:5173) para probar la app.

## Deployment en GitHub Pages

El repositorio incluye un flujo automático (`.github/workflows/deploy.yml`) que compila y publica la app en GitHub Pages cada vez que haces push a `main`.

Pasos para activarlo la primera vez:

1. En GitHub, ve a **Settings → Pages** del repositorio.
2. En **Build and deployment**, selecciona `GitHub Actions` como fuente.
3. Guarda los cambios.
4. Haz push a `main` (o usa el botón **Run workflow** en **Actions → Deploy to GitHub Pages**) y espera a que el job termine.

El sitio quedará disponible en `https://<tu-usuario>.github.io/Encuentra-las-diferencias/`.

## Personalización de imágenes

Coloca tus imágenes en `public/images` con los nombres `original.png` y `modified.png`. El componente usa rutas relativas (`/images/original.png`, `/images/modified.png`).

## Notas técnicas

- Tailwind se importa mediante CDN desde `index.html` para simplificar el prototipo; se puede migrar a una configuración completa si hace falta.
- El modo edición de diferencias sólo se muestra cuando la app se ejecuta en modo desarrollo (`npm run dev`).
- El archivo `vite.config.js` define `base: '/Encuentra-las-diferencias/'` para que los assets se resuelvan correctamente en GitHub Pages.

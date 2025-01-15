# Guía Completa de Gestión de Imágenes en Desarrollo Web

## 1. Optimización de Imágenes

### Formatos Recomendados

- **JPEG/JPG**
  - Ideal para: Fotografías y imágenes con muchos colores
  - Compresión: Con pérdida
  - Uso: Imágenes de fondo, fotos de productos

- **PNG**
  - Ideal para: Gráficos con transparencia
  - Compresión: Sin pérdida
  - Uso: Logos, iconos, imágenes con texto

- **WebP**
  - Ventajas: 25-35% menor tamaño que JPEG/PNG
  - Soporte: Navegadores modernos
  - Uso: Alternativa moderna para JPEG/PNG
  ```html
  <picture>
    <source srcset="imagen.webp" type="image/webp">
    <img src="imagen.jpg" alt="Descripción">
  </picture>
  ```

- **AVIF**
  - Ventajas: Mejor compresión que WebP
  - Limitaciones: Soporte limitado
  - Uso: Proyectos que priorizan rendimiento extremo

### Técnicas de Compresión

```javascript
// Ejemplo de configuración con Sharp
import sharp from 'sharp';

sharp('input.jpg')
  .resize(800, 600)
  .jpeg({ quality: 80 })
  .toFile('output.jpg');
```

### Dimensiones Óptimas
- Resolución máxima: 2x para pantallas retina
- Ancho máximo recomendado: 1920px
- Considerar breakpoints responsive

## 2. Rendimiento

### Lazy Loading
```html
<img 
  src="small-placeholder.jpg"
  data-src="full-image.jpg"
  loading="lazy"
  alt="Descripción"
>
```

### CDN y Caching
```nginx
# Ejemplo de configuración Nginx para cache
location /images/ {
    expires 1y;
    add_header Cache-Control "public, no-transform";
}
```

### Responsive Images
```html
<img 
  srcset="
    small.jpg 300w,
    medium.jpg 600w,
    large.jpg 900w"
  sizes="(max-width: 320px) 300px,
         (max-width: 640px) 600px,
         900px"
  src="fallback.jpg"
  alt="Descripción"
>
```

## 3. Performance

### Métricas Clave
- **LCP (Largest Contentful Paint)**
  - Objetivo: < 2.5 segundos
  - Impacto: SEO y experiencia usuario

- **CLS (Cumulative Layout Shift)**
  - Objetivo: < 0.1
  - Solución: Definir dimensiones
  ```html
  <img 
    width="800"
    height="600"
    style="aspect-ratio: 4/3"
    src="imagen.jpg"
    alt="Descripción"
  >
  ```

### Monitorización
```javascript
// Ejemplo de Web Vitals monitoring
import {getLCP, getFID, getCLS} from 'web-vitals';

function sendToAnalytics({name, value}) {
  console.log(`${name}: ${value}`);
}

getCLS(sendToAnalytics);
getLCP(sendToAnalytics);
getFID(sendToAnalytics);
```

## 4. Mantenimiento

### Sistema de Nomenclatura
```
[categoría]-[id]-[dimensiones].[formato]
producto-001-800x600.webp
```

### Estructura de Directorios
```
images/
├── products/
│   ├── original/
│   ├── thumbnails/
│   └── optimized/
├── backgrounds/
└── icons/
```

### Automatización
```javascript
// Ejemplo de script de optimización
import imagemin from 'imagemin';
import mozjpeg from 'imagemin-mozjpeg';
import webp from 'imagemin-webp';

async function optimizeImages() {
  await imagemin(['images/*.{jpg,png}'], {
    destination: 'dist/images',
    plugins: [
      mozjpeg({ quality: 80 }),
      webp({ quality: 80 })
    ]
  });
}
```

## 5. Escalabilidad

### Arquitectura Recomendada
```javascript
// Ejemplo de servicio de imágenes
class ImageService {
  async transform(image, options) {
    const { width, format, quality } = options;
    return await sharp(image)
      .resize(width)
      .toFormat(format)
      .toBuffer();
  }

  async store(buffer, path) {
    // Implementación de almacenamiento
  }
}
```

### Microservicios
```yaml
# docker-compose.yml ejemplo
services:
  image-service:
    build: ./image-service
    ports: 
      - "3000:3000"
    volumes:
      - images:/data/images
```

### Estrategia Multi-dispositivo
```javascript
const deviceBreakpoints = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  wide: 1920
};

function getImageUrl(path, device) {
  return `${CDN_URL}/${path}?w=${deviceBreakpoints[device]}`;
}
```

## Mejores Prácticas Generales

1. **Siempre especificar dimensiones**
   - Previene CLS
   - Mejora rendimiento

2. **Usar formatos modernos**
   - WebP como primera opción
   - JPEG/PNG como fallback

3. **Implementar lazy loading**
   - Nativo cuando sea posible
   - Bibliotecas para soporte extendido

4. **Optimizar automaticamente**
   - Usar herramientas CI/CD
   - Validar calidad y tamaño

5. **Monitorear performance**
   - Tracking de métricas
   - Alertas de degradación
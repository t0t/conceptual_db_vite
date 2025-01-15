---
title: Estilos en Markdown
description: Guía sobre cómo aplicar estilos personalizados en archivos Markdown
head:
  - - meta
    - property: og:title
      content: Estilos en Markdown
  - - meta
    - property: og:description
      content: Guía sobre cómo aplicar estilos personalizados en archivos Markdown
  - - style
    - |
      .custom-page-style {
        color: #2c3e50;
        padding: 20px;
        border-radius: 8px;
        background-color: #f8f9fa;
      }
      .highlight-text {
        color: #3eaf7c;
        font-weight: bold;
      }
---

# Guía de Estilos en Markdown

Esta guía muestra las diferentes formas de aplicar estilos personalizados en archivos Markdown en VitePress.

## 1. Estilos Nativos de Markdown

Markdown proporciona sintaxis básica para estilos:

```md
*Este texto estará en cursiva*
**Este texto estará en negrita**
```

Resultado:
*Este texto estará en cursiva*
**Este texto estará en negrita**

## 2. HTML Inline con Estilos

Puedes usar HTML directamente en Markdown con atributos style:

```md
<div style="color: blue; font-size: 20px; padding: 15px; border: 1px solid #ddd;">
  Este es un texto con estilo personalizado
</div>
```

Resultado:
<div style="color: blue; font-size: 20px; padding: 15px; border: 1px solid #ddd;">
  Este es un texto con estilo personalizado
</div>

## 3. Usando Clases CSS Predefinidas

Puedes usar clases definidas en tu archivo `custom.css`:

```md
<div class="custom-page-style">
  Este contenido usa una clase CSS predefinida
</div>

<span class="highlight-text">Texto resaltado</span>
```

Resultado:
<div class="custom-page-style">
  Este contenido usa una clase CSS predefinida
</div>

<span class="highlight-text">Texto resaltado</span>

## 4. Estilos en Frontmatter

Como puedes ver en la parte superior de este archivo, hemos definido estilos específicos para esta página usando frontmatter. Estos estilos solo se aplican a esta página en particular.

## Mejores Prácticas

1. **Mantén la Consistencia**: Usa el mismo enfoque en todo tu proyecto para mantener la coherencia.
2. **Prioriza CSS Global**: Define estilos en `custom.css` para reutilización y mantenibilidad.
3. **Usa Frontmatter con Moderación**: Los estilos en frontmatter son útiles para casos específicos, pero no abuses de ellos.
4. **Considera la Accesibilidad**: Asegúrate de que tus estilos personalizados no afecten la legibilidad.
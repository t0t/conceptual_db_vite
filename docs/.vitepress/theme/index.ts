// Importamos el tema por defecto y nuestros estilos personalizados
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { injectCodePlayground } from './playground'
// Importamos nuestro Layout personalizado que contiene la animación
import Layout from './Layout.vue'

export default {
  ...DefaultTheme,
  // Sobreescribimos el Layout por defecto con el nuestro
  Layout,
  enhanceApp({ app }) {
    injectCodePlayground(app)
  }
}
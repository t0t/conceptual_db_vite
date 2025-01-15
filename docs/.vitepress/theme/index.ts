import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { injectCodePlayground } from './playground'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // Inject code playground component
    injectCodePlayground(app)
  }
}
import { App } from 'vue'

export function injectCodePlayground(app: App) {
  app.component('CodePlayground', {
    props: {
      src: String,
    },
    template: `
      <div class="code-playground" role="region" aria-label="Code playground">
        <iframe
          :src="src"
          style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
          title="Interactive code example"
          loading="lazy"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </div>
    `
  })
}
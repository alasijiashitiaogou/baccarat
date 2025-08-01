import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss';

export default defineConfig({
  presets: [
    presetAttributify({
      prefix: 'un-',
      prefixedOnly: true // <--
    }),
    presetIcons(),
    presetUno()
  ],
  // theme: {
  //   breakpoints: {
  //     xxs: '0px',
  //     xs: '320px',
  //     sm: '480px',
  //     md: '768px',
  //     lg: '1024px',
  //     xl: '1280px',
  //     xxl: '1600px'
  //   }
  // },
  rules: [],
  shortcuts: []
});

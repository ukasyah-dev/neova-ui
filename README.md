# Neova UI

A Svelte UI library designed to simplify your web development. It offers a collection of customizable, performance-optimized components that integrate seamlessly with Svelte applications.

## Getting Started

This library expects you have setup a SvelteKit project. Here's how to do so:

```bash
pnpm create svelte my-project
cd my-project
pnpm install
```

You also need to install TailwindCSS.

```bash
pnpm add -D tailwindcss postcss autoprefixer
pnpm tailwindcss init -p
```

Let's continue by installing the library.

```bash
pnpm add -D neova-ui
```

Update `tailwind.config.js` file:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/neova-ui/dist/**/*.{js,svelte}'
  ],
  theme: {
    extend: {}
  },
  plugins: [],
  presets: [require('neova-ui/preset.cjs')]
};
```

Update `src/+layout.svelte` file:

```svelte
<script>
  import { NeovaProvider } from 'neova-ui';
  import 'neova-ui/styles.css';
</script>

<NeovaProvider>
  <slot />
</NeovaProvider>
```

That's it. Now, you can start using the components like this:

```svelte
<script>
  import { Button } from 'neova-ui';
</script>

<Button>Hello Button</Button>
```

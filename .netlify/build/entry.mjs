import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DRrFfQxk.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/404.astro.mjs');
const _page1 = () => import('./pages/index.xml.astro.mjs');
const _page2 = () => import('./pages/portfolio.astro.mjs');
const _page3 = () => import('./pages/posts/_slug_/index.png.astro.mjs');
const _page4 = () => import('./pages/posts/_slug_.astro.mjs');
const _page5 = () => import('./pages/posts.astro.mjs');
const _page6 = () => import('./pages/search.astro.mjs');
const _page7 = () => import('./pages/tags/_tag_.astro.mjs');
const _page8 = () => import('./pages/tags.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/404.astro", _page0],
    ["src/pages/index.xml.ts", _page1],
    ["src/pages/portfolio.astro", _page2],
    ["src/pages/posts/[slug]/index.png.ts", _page3],
    ["src/pages/posts/[slug]/index.astro", _page4],
    ["src/pages/posts/index.astro", _page5],
    ["src/pages/search.astro", _page6],
    ["src/pages/tags/[tag].astro", _page7],
    ["src/pages/tags/index.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "82586199-3f18-4eef-80ea-f57d4bed7de2"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

import { s as sanityClient, $ as $$MainLayout } from '../chunks/MainLayout_0CGFxs9z.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bi3JP2cz.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allRenders = await sanityClient.fetch(`
  *[_type  == "renderType"] {
  _id,
      title,
      "imageUrl": image.asset->url,
      "width": image.asset->metadata.dimensions.width,
      "height": image.asset->metadata.dimensions.height
  }
  `);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "gallery" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="font-title col-span-2">The Gallery of Galleries</h1> <p class="col-span-3 lg:col-start-5 mb-12">
you can find all my personal work here. enjoy. notice i said <i>personal</i>, if you're looking for my professional work, click on <u>works</u> on the menu.
</p> <div class="col-span-6 text-base"> ${renderComponent($$result2, "Gallery", null, { "items": allRenders, "client:only": true, "client:component-hydration": "only", "client:component-path": "/Users/pedro/Developer/graphs/portfolio/src/components/Gallery.vue", "client:component-export": "default" })} </div> ` })}`;
}, "/Users/pedro/Developer/graphs/portfolio/src/pages/gallery/index.astro", void 0);

const $$file = "/Users/pedro/Developer/graphs/portfolio/src/pages/gallery/index.astro";
const $$url = "/gallery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

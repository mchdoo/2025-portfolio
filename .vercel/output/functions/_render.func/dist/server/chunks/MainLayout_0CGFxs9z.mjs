import { createClient } from '@sanity/client';
import { c as createComponent, m as maybeRenderHead, a as renderTemplate, b as createAstro, d as renderSlot, e as addAttribute, r as renderComponent, f as renderHead, g as renderScript } from './astro/server_Bi3JP2cz.mjs';
/* empty css                         */

const sanityClient = createClient(
            {"apiVersion":"v2023-08-24","projectId":"vdh771pd","dataset":"production","useCdn":true}
          );

globalThis.sanityClient = sanityClient;

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="layout py-3 border-b "> <a href="/" class="text-4xl font-title main-col cursor-pointer mt-auto no-underline">pedro machado</a> <div x-data="{show:false}" class="text-left col-start-5 w-fit h-fit text-sm relative overflow-hidden pr-4"> <button class="text-left" @click="show = !show" x-text="show ? 'close' : 'menu'"></button> <ul x-show="show" @click="show = false" x-collapse class="text-muted mt-1 space-y-4 text-base"> <a href="/ "> <li>home</li> </a> <a href=""> <li>tools</li> </a> <a href="/gallery"> <li>
gallery
<ul> <li>art</li> <li>design</li> <li>code</li> <li>texts</li> </ul> </li> </a> </ul> </div> </div>`;
}, "/Users/pedro/Developer/graphs/portfolio/src/components/Navbar.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", ' <html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"><link rel="icon" href="/face_photo.png"><title>\n      ', "\n    </title>", '</head> <body data-barba="wrapper" class="relative"> <header class="sticky layout top-0 z-50 px-3 bg-white min-h-[var(--nav-height)]"> ', ' </header> <main class="px-3 layout absolute w-full left-0" data-barba="container"', '> <span class="h-[var(--nav-height)] col-span-full"></span> ', ' <span class="h-[var(--nav-height)] col-span-full"></span> <!-- <script is:inline src="/src/scripts/p5.js"><\/script>\n    <script is:inline src="/src/scripts/sketch.js"><\/script> --> </main> </body></html>'])), renderScript($$result, "/Users/pedro/Developer/graphs/portfolio/src/layouts/MainLayout.astro?astro&type=script&index=0&lang.ts"), title === "pedro machado: portfolio" ? title : title + " | pm", renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), addAttribute({ title }, "data-barba-namespace"), renderSlot($$result, $$slots["default"]));
}, "/Users/pedro/Developer/graphs/portfolio/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $, sanityClient as s };

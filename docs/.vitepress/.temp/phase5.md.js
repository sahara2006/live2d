import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"phase5.md","filePath":"phase5.md"}');
const _sfc_main = { name: "phase5.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="まとめ" tabindex="-1">まとめ <a class="header-anchor" href="#まとめ" aria-label="Permalink to &quot;まとめ&quot;">​</a></h2><p>今回はまばたきだけでしたが、Live2Dでは、口の動き、髪の揺れ、上下左右への回転など幅広い表現が行えます。</p><p>また、エディター上でアニメーションを付けられるほか、Ae上で操作することもできます。ほかにも、Live2D公式の提供しているVtuberソフトもあります。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("phase5.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const phase5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  phase5 as default
};

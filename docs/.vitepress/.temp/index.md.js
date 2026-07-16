import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Live2D講習会","tagline":"一枚絵から作れるアニメーション","actions":[{"theme":"brand","text":"Phase 1から始める","link":"/phase1"}]},"features":[{"title":"Phase 1 - Live2Dとは","details":"Live2Dの基本的な内容について知る","link":"/phase1","linkText":"詳しく見る"},{"title":"Phase 2 - 素材の下処理","details":"関係ないパーツの非表示、クリッピングをする。","link":"/phase2","linkText":"詳しく見る"},{"title":"Phase 3 - メッシュ追加","details":"アートメッシュを追加して、パラメータに紐づける。","link":"/phase3","linkText":"詳しく見る"},{"title":"Phase 4 - メッシュ変形","details":"キーを追加し、アートメッシュを変形させて動きをつける。","link":"/phase4","linkText":"詳しく見る"},{"title":"まとめ","details":"Live2Dの発展的な使い方、連携する機能を紹介する。","link":"/phase5","linkText":"詳しく見る"}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

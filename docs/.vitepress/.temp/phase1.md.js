import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"phase1.md","filePath":"phase1.md"}');
const _sfc_main = { name: "phase1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="live2dとは" tabindex="-1">Live2Dとは <a class="header-anchor" href="#live2dとは" aria-label="Permalink to &quot;Live2Dとは&quot;">​</a></h2><blockquote><p>株式会社Live2Dが開発した、面制御を軸とする2Dモーフィングによるシームレスなアニメーション（一部はボーン制御にも対応）を可能にする映像表現、および関連ソフトウェアの総称。 3Dで制作するよりも原画の画風を保ったままキャラクターを動かせるという特徴があり、低コストでの制作を可能にする。</p></blockquote><h3 id="用語説明" tabindex="-1">用語説明 <a class="header-anchor" href="#用語説明" aria-label="Permalink to &quot;用語説明&quot;">​</a></h3><ul><li>面制御 <ul><li>レイヤーのイラストに対して面を割り当て、その面を移動・変形させることでアニメーションを実現する方法。</li><li>3次元的な表現もできる。</li><li>対義語は「ボーン制御」。</li></ul></li><li>モーフィング <ul><li>ある画像を変形させる際、その途中の画像をコンピューターで補間しながら変化させていくアニメーション手法。</li></ul></li></ul><h3 id="要するに" tabindex="-1">要するに <a class="header-anchor" href="#要するに" aria-label="Permalink to &quot;要するに&quot;">​</a></h3><p>1枚のイラストから滑らかな動画を作成できるソフトです。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("phase1.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const phase1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  phase1 as default
};

import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"phase4.md","filePath":"phase4.md"}');
const _sfc_main = { name: "phase4.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h3 id="目を閉じてみよう" tabindex="-1">目を閉じてみよう <a class="header-anchor" href="#目を閉じてみよう" aria-label="Permalink to &quot;目を閉じてみよう&quot;">​</a></h3><p>いよいよ実際に変形させて行きます！</p><h4 id="変形パスツールを使ってみよう" tabindex="-1">変形パスツールを使ってみよう <a class="header-anchor" href="#変形パスツールを使ってみよう" aria-label="Permalink to &quot;変形パスツールを使ってみよう&quot;">​</a></h4><p>Live2Dでは、頂点を移動させて変形を表現します。しかし、一つ一つ変更させると膨大な手間がかかります。なので、変形パスを用いて線的な表現をします。</p><p>画面右上の「変形パスツール」（線に二重丸があるもの）を選択してください。 右上まつ毛を選択して、端から端まで5,6個変形パスを置いてみましょう！</p><p>ここで、変形パスには線変形の幅と硬さの二種類のパラメータがあります。幅は変形パスの影響範囲を表します。小さすぎるとほとんど動かなくなるので、ある程度の大きさ（ひとまずは、そのままか、変形パスの赤い円が隣のコントロールポイント（緑の点）に重なる+アルファくらい）にしておきましょう。</p><p>次に、「編集レベル」を変更してみましょう。編集レベルが大きいほど、おおざっぱな編集ができます。 画面中央上部の編集レベルを3に（初期状態は2です）してみましょう。 その状態で、変形パスを3個置いてみましょう。</p><p>同様に、二重、白目、目玉にも変形パスを追加していきましょう。 白目、目玉は円形に変形パスを追加することになります</p><h4 id="動かしてみよう" tabindex="-1">動かしてみよう <a class="header-anchor" href="#動かしてみよう" aria-label="Permalink to &quot;動かしてみよう&quot;">​</a></h4><p>オブジェクトに動きをつけていきましょう。 右上まつ毛を選択して、右目 開閉パラメータのつまみを左端に（数値を0.0に）してください。 この状態が目を閉じた状態になるように、今から変形させていきます。</p><p>ここで大切なこととして、大きな変更を優先的にしていきましょう。 例えば、頂点をいちいち編集するよりも、変形パスを一回移動させた方が手間が減りますし、全体的なバランスも保ちやすいです。 また、見た目のきれいさよりも、メッシュのきれいさを見ながら変形しましょう。 変形操作はあまり直感的な挙動をしないことがあります。 まずはメッシュが崩壊しないことを意識して操作をして、一番最後に見た目を整えていきましょう。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>パラメータにキーを追加しているか、都度確認してください！！！</p></div><ul><li><p>上まつ毛</p><ul><li>一番大きく変化します</li><li>まずは「バウンディボックス」（オブジェクトの赤い枠）を、白目の下のあたりまでおろしましょう。</li><li>編集レベルを3にして、弧の向きを上下逆にしましょう。また、この時、外側の変形パスを、目頭のほうへ寄せると自然になります。</li><li>あとは、編集レベルを下げつつ、なめらかな曲線になるように変形しましょう。</li><li>端はあまり動かないことを意識するとよいかもしれません。</li></ul></li><li><p>二重</p><ul><li>上まつ毛と同様です。</li><li>上まつ毛に比べてまっすぐになる傾向があります。</li></ul></li><li><p>まつ毛 ハネ</p><ul><li>特に変形させないので、ボックスで移動させましょう。</li><li>まつ毛に合わせて、横方向に移動させたり、回転させたり（ボックス頂点の少し外をクリック長押し）してもよいでしょう。</li></ul></li><li><p>白目</p><ul><li>まつ毛の中に隠します。</li><li>まつ毛の形に添わせるときれいになります</li><li>クリッピングしているので、目玉、ハイライトは自動的に見えなくなります。</li></ul></li><li><p>まつげ 目尻</p><ul><li>白目に添いながら、まつ毛の中に隠します。</li></ul></li><li><p>下まつ毛</p><ul><li>まつ毛の中に隠します。</li><li>少し上に動かします。</li></ul></li><li><p>ハイライト</p><ul><li>少し下げる動きをつけると、半目でもハイライトが見えてよいです。</li></ul></li></ul><h2 id="演習" tabindex="-1">演習 <a class="header-anchor" href="#演習" aria-label="Permalink to &quot;演習&quot;">​</a></h2><p>左目も動かしてみましょう！</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("phase4.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const phase4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  phase4 as default
};

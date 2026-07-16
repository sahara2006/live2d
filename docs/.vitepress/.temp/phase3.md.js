import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"phase3.md","filePath":"phase3.md"}');
const _sfc_main = { name: "phase3.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="右目を動かしてみよう" tabindex="-1">右目を動かしてみよう <a class="header-anchor" href="#右目を動かしてみよう" aria-label="Permalink to &quot;右目を動かしてみよう&quot;">​</a></h2><h3 id="まつ毛にメッシュを追加してみよう" tabindex="-1">まつ毛にメッシュを追加してみよう <a class="header-anchor" href="#まつ毛にメッシュを追加してみよう" aria-label="Permalink to &quot;まつ毛にメッシュを追加してみよう&quot;">​</a></h3><p>動かすために必要なメッシュを実際に追加してみましょう！ まず、右上まつ毛を選択してください。（オブジェクト一覧や、直接クリックによって選択できます。）（右二重、右まつ毛ハネ、右白目とは異なります）</p><p>無事に選択できると、まつ毛の周りに赤い枠とその内側に薄い灰色の枠が表示されます。その灰色の枠がアートメッシュです。</p><p>「メッシュの手動編集」をクリック、またはオブジェクトをダブルクリックすると、メッシュの編集画面が表示されます。 初期で設定されているメッシュは必要ないので、ctrl+A(command+A)で全選択、Del(fn)で削除しましょう。</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>ここで、メッシュ打ちに使えるツールの紹介します</p><ul><li>矢印 <ul><li>頂点を移動できます。</li></ul></li><li>投げ縄 <ul><li>頂点を自由な形で一括選択できます</li></ul></li><li>ペン(プラス) <ul><li>頂点を追加できます。</li></ul></li><li>ペン(マイナス) <ul><li>頂点を削除できます。</li></ul></li><li>消しゴム - 頂点をなぞって削除できます。</li></ul></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>メッシュで囲まれていない部分のイラストは削除されます。イラストがメッシュからはみ出ないようにしましょう。</p></div><p>まずまつ毛の境界から少し内側に、境界に沿ってメッシュを打っていきましょう。メッシュが正三角形になるように打つと、変形の際に便利です。 内側に頂点を打つことができたら、次は境界の少し外側にも打っていきましょう。内側の点と点の間に打つと、正三角形にしやすいです。 内側、外側ともに頂点の追加が終わったら、ctrl+Rを押すことで自動的にメッシュが張られます。 これで完成です。</p><h3 id="ほかのオブジェクトにもメッシュを追加してみよう" tabindex="-1">ほかのオブジェクトにもメッシュを追加してみよう <a class="header-anchor" href="#ほかのオブジェクトにもメッシュを追加してみよう" aria-label="Permalink to &quot;ほかのオブジェクトにもメッシュを追加してみよう&quot;">​</a></h3><p>右上まつ毛にメッシュを追加出来たら、その他の目の部位にもメッシュを追加していきましょう。</p><h4 id="二重" tabindex="-1">二重 <a class="header-anchor" href="#二重" aria-label="Permalink to &quot;二重&quot;">​</a></h4><p>細長いので、二重の中央に頂点を打っていって、その後上下に点を打っていく形がよいです。</p><h4 id="目玉・白目" tabindex="-1">目玉・白目 <a class="header-anchor" href="#目玉・白目" aria-label="Permalink to &quot;目玉・白目&quot;">​</a></h4><p>「メッシュの自動生成」を使ってみましょう。「メッシュの手動編集」の右側にあるAUTOと書かれているものがそれです。 プリセットの項目から、変形度合い（小）をクリックして、そのままウィンドウを閉じましょう。もう終わっています。</p><h4 id="まつ毛-ハネ・下まつ毛・ハイライト" tabindex="-1">まつ毛 ハネ・下まつ毛・ハイライト <a class="header-anchor" href="#まつ毛-ハネ・下まつ毛・ハイライト" aria-label="Permalink to &quot;まつ毛 ハネ・下まつ毛・ハイライト&quot;">​</a></h4><p>そこまで変形しないので、大雑把に囲ってメッシュを張りましょう。</p><h3 id="パラメータに紐づけよう" tabindex="-1">パラメータに紐づけよう <a class="header-anchor" href="#パラメータに紐づけよう" aria-label="Permalink to &quot;パラメータに紐づけよう&quot;">​</a></h3><p>Live2Dでは、パラメータで動きを管理します。まず、パラメータにキーを追加して、オブジェクトと紐づけてみましょう。 右目フォルダ内のすべてのファイルを選択して(ctrl長押しで複数選択できます)、パラメータ内の「右目 開閉」を選択した後、「キーの二点追加」(ダンベルみたいなやつ)を押してください。 右目 開閉の両端に緑の点が追加されたら、紐づけは完了です。</p><p>この作業をする前にオブジェクトを変形させると、動きがつかないので気を付けましょう。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("phase3.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const phase3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  phase3 as default
};

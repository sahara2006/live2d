import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"phase2.md","filePath":"phase2.md"}');
const _sfc_main = { name: "phase2.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="今回やること" tabindex="-1">今回やること <a class="header-anchor" href="#今回やること" aria-label="Permalink to &quot;今回やること&quot;">​</a></h2><p>モデルに瞬きのモーションをつけていきます。</p><p>モデルファイル: <a href="https://docs.live2d.com/cubism-editor-tutorials/eye-blink/" target="_blank" rel="noreferrer">https://docs.live2d.com/cubism-editor-tutorials/eye-blink/</a></p><p>今回の講習会は以下の動画の内容に沿って行います。</p><p>動画: <a href="https://www.youtube.com/watch?v=ewkcJDcJZYI" target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=ewkcJDcJZYI</a></p><h3 id="ファイルの読み込み" tabindex="-1">ファイルの読み込み <a class="header-anchor" href="#ファイルの読み込み" aria-label="Permalink to &quot;ファイルの読み込み&quot;">​</a></h3><p>Live2D Cubism Editor を起動して、Free版を選択してください。 そのあと、先ほどダウンロードしたファイルから mao<em>目パチの作り方</em>インポート.psd をドラッグ&amp;ドロップでインポートしてください。 解像度は1/2にしましょう。</p><h3 id="使うものの説明" tabindex="-1">使うものの説明 <a class="header-anchor" href="#使うものの説明" aria-label="Permalink to &quot;使うものの説明&quot;">​</a></h3><ol><li><p>オブジェクト一覧 各オブジェクトの非表示やロック、ファイル管理などができる。（モデルダウンロード時はレイヤー構造のまま）</p></li><li><p>パラメータ それぞれの動きを設定できる。いっぱいあるが、これらは<a href="https://docs.live2d.com/cubism-editor-manual/standard-parameter-list/" target="_blank" rel="noreferrer">標準パラメータ</a>として定められたものなので、あまり削除しない方が良い。</p></li><li><p>メッシュの手動編集 イラストの変形に用いるメッシュを追加・変更できる。Live2Dの基礎。</p></li><li><p>メッシュの自動編集 メッシュを自動で追加してくれる。楽。</p></li><li><p>矢印ツール オブジェクトの移動や矩形選択ができる。</p></li><li><p>変形パスツール メッシュをまとめて動かすことのできる変形パスを追加・変更できる。 (<a href="https://md.trap.jp/uploads/upload_1f41ca9bc994f539feb6a3fdfc623431.png" target="_blank" rel="noreferrer">https://md.trap.jp/uploads/upload_1f41ca9bc994f539feb6a3fdfc623431.png</a>)</p></li></ol><h2 id="下準備" tabindex="-1">下準備 <a class="header-anchor" href="#下準備" aria-label="Permalink to &quot;下準備&quot;">​</a></h2><h3 id="いらない部分を非表示化しよう" tabindex="-1">いらない部分を非表示化しよう <a class="header-anchor" href="#いらない部分を非表示化しよう" aria-label="Permalink to &quot;いらない部分を非表示化しよう&quot;">​</a></h3><p>今回はまばたきをつけるため、「右目」「左目」「顔」以外のオブジェクトフォルダを非表示化しましょう。 非表示化は、オブジェクト一覧の目マークを右クリックすることで行えます。（押しっぱなしスライドで一括非表示もできる）</p><h3 id="クリッピングしてみよう" tabindex="-1">クリッピングしてみよう <a class="header-anchor" href="#クリッピングしてみよう" aria-label="Permalink to &quot;クリッピングしてみよう&quot;">​</a></h3><p>よく見てみると、瞳が眉毛の下に飛び出てしまっています。 なので、クリッピングをして、瞳が白目よりも外側に表示されないようにしましょう。</p><p>（右・左）瞳フォルダの<strong>子ファイルのみ</strong> をすべて選択(shift長押し+クリックで一括選択できます)して、インスペクタのクリッピングから（右・左）白目ファイルを選択してください。（下三角の部分をクリックすることで項目が表示されます。）</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("phase2.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const phase2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  phase2 as default
};

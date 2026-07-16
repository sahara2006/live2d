import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Live2D講習会",
  description: "一枚絵から作れるアニメーション",
  lang: 'ja-JP',  // 日本語対応
  ignoreDeadLinks: [
    /localhost/  // 教材内のlocalhostリンクはチェック対象外
  ],
  themeConfig: {
    // ナビゲーション
    nav: [
      { text: 'ホーム', link: '/' },
      { text: 'はじめに', link: '/phase1' }
    ],

    // サイドバー
    sidebar: [
      {
        text: '演習',
        items: [
          { text: 'Phase 1: Live2Dとは', link: '/phase1' },
          { text: 'Phase 2: 素材の下処理', link: '/phase2' },
          { text: 'Phase 3: メッシュ追加', link: '/phase3' },
          { text: 'Phase 4: メッシュ変形', link: '/phase4' },
          { text: 'Phase 5: まとめ', link: '/phase5' }
        ]
      }
    ],

    // ローカル検索を有効化
    search: {
      provider: 'local'
    },
  }
})

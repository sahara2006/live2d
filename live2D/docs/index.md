---
layout: home # トップページ用のレイアウトを指定

hero: # ページ上部のメインビジュアル部分
  name: "Next.js入門ドキュメント" # 大きく表示されるサイト名
  text: "Next.js入門のための演習教材" # サブタイトル
  tagline: Next.jsに入門してみよう # キャッチコピー
  actions: # CTAボタン
    - theme: brand # メインボタン（強調色）
      text: Phase 1から始める
      link: /phase1
    - theme: alt # サブボタン（控えめな色）
      text: GitHub
      link: https://github.com/yuta-ishii-cm/next-app-task-manager

features: # ページ下部のカード形式で並ぶ特徴紹介セクション
  - title: Phase 1 - 基礎編
    details: App Routerの仕組み、ファイルベースルーティング、Server/Client Componentの違いを理解する
    link: /phase1 # カードクリックで遷移するリンク先
    linkText: 詳しく見る # リンクテキスト（省略可）
  - title: Phase 2 - UI構築編
    details: コンポーネント設計、TypeScriptでの型定義、Tailwind CSSでカンバンボードUIを構築する
    link: /phase2
    linkText: 詳しく見る
  - title: Phase 3 - データ操作編
    details: useStateでの状態管理、フォーム作成、イベントハンドリング、Server Actionsの基礎を学ぶ
    link: /phase3
    linkText: 詳しく見る
  - title: Phase 4 - 完成編
    details: Prismaでデータベース構築、Server ActionsでCRUD操作、Vercelへデプロイする
    link: /phase4
    linkText: 詳しく見る
  - title: 発展課題集（Optional）
    details: ドラッグ&ドロップ、楽観的更新など、さらにスキルアップしたい人向けのチャレンジ課題
    link: /optional
    linkText: 詳しく見る
---

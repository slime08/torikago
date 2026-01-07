# トリカゴ公式サイト

トリカゴの公式Webサイトです。Astro + TypeScriptで構築された静的サイトです。

## 技術スタック

- **フレームワーク**: Astro 5
- **言語**: TypeScript
- **スタイル**: CSS（カスタムプロパティ使用）
- **SEO**: sitemap自動生成、OGP対応

## ローカル開発

### 必要環境

- Node.js 18以上
- npm

### セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動（http://localhost:4321）
npm run dev

# ビルド
npm run build

# ビルド結果のプレビュー
npm run preview
```

## ディレクトリ構造

```
torikago_net/
├── public/              # 静的ファイル
│   ├── favicon.svg
│   ├── midopen-hero.png # みどぺん画像
│   └── robots.txt
├── src/
│   ├── layouts/         # 共通レイアウト
│   │   └── Layout.astro
│   ├── pages/           # ページ
│   │   ├── index.astro      # Home
│   │   ├── about.astro      # About
│   │   ├── character.astro  # Character
│   │   ├── works.astro      # Works
│   │   ├── contact.astro    # Contact
│   │   ├── guidelines.astro # Guidelines
│   │   └── 404.astro        # 404
│   └── styles/          # グローバルスタイル
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## デプロイ

### Vercel

1. GitHubにリポジトリをpush
2. [Vercel](https://vercel.com)にログイン
3. 「New Project」からリポジトリをインポート
4. フレームワークは自動検出（Astro）
5. 「Deploy」をクリック

設定は自動で行われます。追加設定は不要です。

### Cloudflare Pages

1. GitHubにリポジトリをpush
2. [Cloudflare Pages](https://pages.cloudflare.com)にログイン
3. 「Create a project」→「Connect to Git」
4. リポジトリを選択
5. ビルド設定：
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. 「Save and Deploy」

### 本番URLの設定

デプロイ後、`astro.config.mjs` の `site` を実際のURLに変更してください：

```js
export default defineConfig({
  site: 'https://your-actual-domain.com',
  // ...
});
```

## カスタマイズ

### 画像の差し替え

`public/midopen-hero.png` を差し替えることで、みどぺんの画像を変更できます。

### カラーの変更

`src/styles/global.css` の `:root` 内のCSS変数を変更することでカラーを調整できます。

### コンテンツの編集

各ページは `src/pages/` 内の `.astro` ファイルを編集してください。

## リンク

- [YouTube](https://www.youtube.com/@%E3%83%88%E3%83%AA%E3%82%AB%E3%82%B4-oAo)
- [X (Twitter)](https://x.com/TorikagoNoAka)

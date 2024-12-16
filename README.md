# My Tech Blog

このプロジェクトは、開発者のプロフィールとブログを紹介するためのポートフォリオサイトです。このサイトは、Next.jsとMaterial-UIを使用して作成されています。

## 技術スタック

- **Next.js** (`next`): サーバサイドレンダリング（SSR）と静的サイト生成（SSG）に対応したReactフレームワーク。`next dev --turbopack` コマンドを使って開発サーバーを高速化しています。
- **React** (`react`, `react-dom`): ユーザーインターフェースの構築に使用するライブラリです。
- **TypeScript** (`typescript`, `@types/*`): 静的型付けを提供するTypeScriptを使用して、型安全なコードを開発しています。
- **Material-UI** (`@mui/material`, `@mui/icons-material`): UIコンポーネントライブラリで、デザインに基づいた美しいコンポーネントを提供します。
- **MicroCMS** (`microcms-js-sdk`, `microcms-lib`): コンテンツ管理のためのヘッドレスCMSで、ブログやページのデータ管理を行っています。
- **Dprint** (`dprint`): コードの自動フォーマッティングツールです。`dprint fmt` でコードを整形します。
- **Husky** (`husky`): Gitフックを利用して、`pre-commit` フックで `lint-staged` を実行し、コミット前にコードの品質チェックをしています。
- **ESLint** (`eslint`, `@typescript-eslint/*`): コード品質を保つための静的解析ツールです。`lint:fix` コマンドで自動修正も行います。

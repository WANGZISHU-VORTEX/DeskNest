<p align="center">
<a href="https://github.com/WANGZISHU-VORTEX/DeskNest" target="blank"><img src="https://v3.vuejs.org/logo.svg" width="120" alt="DeskNest Web Logo" /></a>
</p>

<p align="center">Vue 3 + Vite で構築されたDeskNestのフロントエンドインターフェースで、デスク予約システムのユーザー操作を簡素化します。</p>

<p align="center">
<a href="https://github.com/WANGZISHU-VORTEX/DeskNest" target="_blank"><img src="https://img.shields.io/github/stars/WANGZISHU-VORTEX/DeskNest.svg?style=social" alt="GitHub Stars" /></a>
<a href="https://github.com/WANGZISHU-VORTEX/DeskNest/blob/main/LICENSE" target="_blank"><img src="https://img.shields.io/badge/license-All%20Rights%20Reserved-red.svg" alt="License" /></a>
<a href="https://nodejs.org" target="_blank"><img src="https://img.shields.io/node/v/vite.svg" alt="Node Version" /></a>
</p>

## 概要

DeskNest Webは、バックエンドAPI（NestJS）と連携したフロントエンドアプリケーションです。ユーザーは直感的なインターフェースを通じてデスクの予約、状況確認、予約管理を行うことができます。

主な機能は以下の通りです：
- デスク予約カレンダー表示
- リアルタイムデスク状況更新
- ユーザー予約履歴管理
- 管理者向けワークスペース分析ダッシュボード

## 前提条件
- Node.js (v16 以上)
- npm または yarn
- 対応するバックエンドAPIの実行（http://localhost:3000 で稼働中）

## インストール

```bash
# リポジトリをクローン（既にクローン済みの場合はスキップ）
git clone git@github.com:WANGZISHU-VORTEX/DeskNest.git
cd DeskNest/web

# 依存関係をインストール
npm install

# 環境変数設定（API接続先等）
cp .env.example .env  # サンプルファイルをコピーして編集
```

## アプリケーションの実行

```bash
# 開発モード（ホットリロード付き）
npm run dev

# 本番ビルド
npm run build

# ビルド成果物のプレビュー
npm run preview
```

デフォルトではフロントエンドは [http://localhost:8080](http://localhost:8080/) で利用可能です。ポートは vite.config.js または.env ファイルで変更可能です。

## プロジェクト構造

```plaintext
src/
├── components/       # 再利用可能なVueコンポーネント
│   ├── common/       # 共通コンポーネント（ボタン、フォーム等）
│   ├── desk/         # デスク関連コンポーネント
│   └── booking/      # 予約関連コンポーネント
├── views/            # ページ単位のコンポーネント
├── router/           # Vue Router設定
├── services/         # API通信サービス（axios）
├── store/            # 状態管理（必要に応じて）
├── utils/            # ユーティリティ関数
├── App.vue           # ルートコンポーネント
└── main.js           # アプリケーションエントリーポイント
```

## 貢献について

本リポジトリは企業内部研修用プロジェクトです。ソースコードの参照は可能ですが、クローンやブランチの作成については以下の方針に従ってください：

- 内部メンバーのみが直接の変更を行うことができます
- 学習目的でのコード参照は許可されています
- 外部への再配布や商用利用は禁止されています
- 必要がある場合は、管理者に連絡して許可を得てから操作を行ってください

## ライセンス

本プロジェクトは企業内部研修用として開発されており、All Rights Reserved に基づいてライセンスされています。

ソースコードの閲覧は許可されていますが、事前の書面による許可なしに、複製、修正、再配布することは禁止されています。

本ソフトウェアの使用は、企業内部の研修目的に限定されます。

## 連絡先

リポジトリ: https://github.com/WANGZISHU-VORTEX/DeskNest

問題点: https://github.com/WANGZISHU-VORTEX/DeskNest/issues
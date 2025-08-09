<p align="center">
<a href="https://github.com/WANGZISHU-VORTEX/DeskNest" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="DeskNest Logo" /></a>
</p>


<h1 align="center">DeskNest</h1>

<p align="center">
スマートなオフィスデスク予約システムで、チームのワークスペース管理を簡素化します。
</p>


<p align="center">
<a href="https://github.com/WANGZISHU-VORTEX/DeskNest" target="_blank"><img src="https://img.shields.io/github/stars/WANGZISHU-VORTEX/DeskNest.svg?style=social" alt="GitHub Stars" /></a>
<a href="https://github.com/WANGZISHU-VORTEX/DeskNest/blob/main/LICENSE" target="_blank"><img src="https://img.shields.io/badge/license-All%20Rights%20Reserved-red.svg" alt="License" /></a>
<a href="https://nodejs.org" target="_blank"><img src="https://img.shields.io/node/v/@nestjs/core.svg" alt="Node Version" /></a>
</p>


## プロジェクト概要

DeskNestは、NestJS（バックエンド）とVue 3 + Vite（フロントエンド）で構築されたオフィスデスク予約システムです。内部研修目的で開発されており、デスクのリアルタイム管理、予約処理、使用状況分析を提供します。

### 全体構成

- `api/`: NestJSによるバックエンドAPI（RESTfulインターフェース、データベース連携）
- `web/`: Vue 3によるフロントエンドインターフェース（ユーザー操作画面）
- `docs/`: プロジェクトドキュメント（設計書、マニュアル等）

## 主な機能

- デスク予約・キャンセル・変更
- リアルタイムデスク状況表示
- ユーザー認証とロール管理（管理者/一般ユーザー）
- 予約履歴と統計分析
- クラウドデプロイメント対応（Dockerサポート）

## 環境要件

- Node.js: v16 以上
- npm または yarn
- PostgreSQL（推奨）または任意のデータベース
- ブラウザ（フロントエンド使用時）：Chrome, Firefox, Edge 最新バージョン

## インストールと実行

### 1. リポジトリのクローン

```bash
git clone git@github.com:WANGZISHU-VORTEX/DeskNest.git
cd DeskNest
```

### 2. バックエンド（api）のセットアップ

```bash
cd api
npm install
cp .env.example .env  # 環境変数を設定（データベース接続等）
npm run start:dev     # 開発モードで実行（http://localhost:3000）
```

### 3. フロントエンド（web）のセットアップ

```bash
cd ../web
npm install
cp .env.example .env  # API接続先を設定（通常はhttp://localhost:3000）
npm run dev           # 開発モードで実行（http://localhost:8080）
```

##   ドキュメント

  詳細なドキュメントは docs/ ディレクトリを参照してください：

- システムアーキテクチャ
- ユーザー操作マニュアル
- 開発者ガイド
- API 仕様（Swagger UI: http://localhost:3000/api）

## 貢献ガイドライン

本プロジェクトは企業内部研修用です。貢献に関する詳細は各サブディレクトリの README を参照してください。基本方針：

- 内部メンバーのみが直接変更可能
- 外部への再配布・商用利用は禁止
- 修正前に管理者の許可を取得

## ライセンス

本プロジェクトは All Rights Reserved ライセンスの下で提供されています。詳細は LICENSE を参照してください。

## 連絡先

リポジトリ: https://github.com/WANGZISHU-VORTEX/DeskNest
問題報告: https://github.com/WANGZISHU-VORTEX/DeskNest/issues
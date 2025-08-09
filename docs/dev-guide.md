# DeskNest 開発者ガイド

## 開発環境セットアップ
### 前提条件
- Node.js v16+ と npm/yarn
- Git
- MySQL（ローカルまたはリモートインスタンス）
- IDE（推奨：VS Code + Volar/Vetur 拡張）

### 初期設定手順
1. リポジトリをクローン
   ```bash
   git clone git@github.com:WANGZISHU-VORTEX/DeskNest.git
   cd DeskNest
   ```
2. バックエンドセットアップ
    ```bash
    cd api
    npm install
    cp .env.example .env  # データベースURL等を設定
    npx prisma migrate dev  # データベースマイグレーション
    npm run start:dev
    ```

3. フロントエンドセットアップ
    ```bash
    cd ../web
    npm install
    cp .env.example .env  # API_BASE_URLを設定（通常はhttp://localhost:3000）
    npm run dev
    ```

## コーディング規約

- バックエンド：NestJS のコーディング規約に準拠（モジュール / コントローラ / サービスの分離）
- フロントエンド：Vue の Style Guide に準拠（コンポーネント名の PascalCase、Props の型定義等）
- 共通：ESLint を使用したコード検査を必須とする

## デバッグ方法

- バックエンド：VS Code のランチ設定（`.vscode/launch.json`）を使用してブレークポイント設定
- フロントエンド：ブラウザのデベロッパーツール（Vue Devtools 拡張推奨）
- API テスト：Swagger UI（http://localhost:3000/api）または Postman を使用

## デプロイ手順

1. バックエンドビルド
    ```bash
    cd api
    npm run build
	```

2. フロントエンドビルド
    ```bash
    cd ../web
    npm run build
	```

3. Docker コンテナ化（オプション）
    ```bash
    # ルートディレクトリで
    docker-compose up -d
    ```

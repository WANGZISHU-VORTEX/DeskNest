# DeskNest API ドキュメント

## 概要
DeskNestのバックエンドAPIはRESTful設計に基づいており、フロントエンドとデータのやり取りを担当します。APIはNestJSで実装されており、Swaggerを通じてインタラクティブなドキュメントを提供しています。

## アクセス方法
- 開発環境：http://localhost:3000/api（Swagger UI）
- OpenAPI仕様：http://localhost:3000/api-json（JSON形式）

## 主要エンドポイント

### ユーザー関連
- `POST /api/users/register`：ユーザー登録
- `POST /api/users/login`：ログイン（JWTトークン発行）
- `GET /api/users/me`：ログインユーザー情報取得

### デスク関連
- `GET /api/desks`：全デスク一覧取得
- `GET /api/desks/:id`：特定のデスク詳細取得
- `PATCH /api/desks/:id`：デスク状態更新（管理者用）

### 予約関連
- `POST /api/bookings`：新しい予約作成
- `GET /api/bookings/my`：自分の予約一覧取得
- `DELETE /api/bookings/:id`：予約キャンセル

## 認証
- ほとんどのAPIはJWT認証を必要とします
- リクエストヘッダーに `Authorization: Bearer {token}` を追加してください
- トークンの有効期限は24時間です

## エラーレスポンス
エラーが発生した場合は、以下の形式のJSONレスポンスを返します：
```json
{
  "statusCode": 400,
  "message": "予約時間が重複しています",
  "error": "Bad Request"
}

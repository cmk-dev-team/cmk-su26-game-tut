# cmk-su26-game-tut
MakeCode tutorial program for CMK summer camp 2026 game course.

## Minecraft Education で使う

1. Minecraft Education の MakeCode を開きます。
2. 「拡張機能」から、この GitHub リポジトリの URL を読み込みます。
3. 「ゲームのせってい」「ハンターのせってい」「ミッション」のブロックを使ってゲームを組み立てます。

ミッションの成功・失敗は、バックエンドから送られる
`mission_success_<びょう>` / `mission_fail_<びょう>` のチャットコマンドで通知されます。
残り時間イベントは `remaining_<びょう>` のチャットコマンドで通知されます。

## コマンド送信 API

ゲームコマンドは `custom.ts` の `sendCommand()` から、Minecraft MakeCode
公式の `player.execute()` を使って実行します。

## ローカル検証

```powershell
npx --yes --package makecode mkc build -j
```

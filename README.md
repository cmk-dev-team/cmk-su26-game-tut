# cmk-su26-game-tut
MakeCode tutorial program for CMK summer camp 2026 game course.

## Minecraft Education で使う

1. Minecraft Education の MakeCode を開きます。
2. 「拡張機能」から、この GitHub リポジトリの URL を読み込みます。
3. 「ゲームのせってい」「ハンターのせってい」「ミッション」のブロックを使ってゲームを組み立てます。

ミッションの成功・失敗は、バックエンドから送られる
`mission_success_<びょう>` / `mission_fail_<びょう>` のチャットコマンドで通知されます。

## コマンド送信 API

仕様に合わせて、ゲームコマンドは `custom.ts` の `sendCommand()` から
`player.runChatCommand()` へ送っています。利用する Minecraft Education /
MakeCode の版で slash command が実行されない場合は、`sendCommand()` を
`player.execute()` を使う実装へ切り替えてください。

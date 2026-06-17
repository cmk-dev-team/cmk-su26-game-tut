# cmk-su26-game-tut
MakeCode tutorial program for CMK summer camp 2026 game course.

## Minecraft Education で使う

1. Minecraft Education の MakeCode を開きます。
2. 「拡張機能」から、この GitHub リポジトリの URL を読み込みます。
3. 「ゲームのせってい」「ハンター」「ミッション」のブロックを使ってゲームを組み立てます。

ミッションは、残り時間などのイベントから
「ミッション◯をせっていしてかいしする」ブロックで発動します。
ミッション番号は1～3から選びます。

ゲーム開始は「カウントダウン◯びょうで／ゲームをかいしする」ブロックで行います。
ゲーム時間は1～600秒の範囲で設定できます。

MakeCode からアドオンへの通知には `/scriptevent` を使います。
アドオンから MakeCode への残り時間・ミッション結果通知には `/tell` を使い、
`player.onTellCommand()` で受信します。

## コマンド送信 API

ゲームコマンドは `custom.ts` の `sendCommand()` から、Minecraft MakeCode
公式の `player.execute()` を使って実行します。通信イベントの一覧は
[`cmk-su26-game-addon`](https://github.com/cmk-dev-team/cmk-su26-game-addon)
を参照してください。

## ローカル検証

```powershell
npx --yes --package makecode mkc build -j
```

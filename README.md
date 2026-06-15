# cmk-su26-game-tut
MakeCode tutorial program for CMK summer camp 2026 game course.

## Minecraft Education で使う

1. Minecraft Education の MakeCode を開きます。
2. 「拡張機能」から、この GitHub リポジトリの URL を読み込みます。
3. 「ゲームのせってい」「ハンターのせってい」「ミッション」のブロックを使ってゲームを組み立てます。

ミッションは「ミッション 1～3 をつくる」ブロックの内側で設定し、
残り時間などのイベントから「ミッション 1～3 をかいしする」ブロックで発動します。
同じ番号の作成ブロックを複数置いた場合、後から置いた重複ブロックは
非アクティブになります。

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

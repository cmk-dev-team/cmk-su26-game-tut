# SUMMER CAMP 2026

### @explicitHints true
### @hideIteration true

```package
cmk-su26-game-tut=github:cmk-dev-team/cmk-su26-game-tut#v1.0.69
```

## ゲームづくりコース

おてほんプログラム

```template
PlayerBlocks.onRemainingTime(150, function () {
    PlayerBlocks.showTitleTo(PlayerBlocks.selector(PlayerSelector.All), "ハンタースピードアップ！！")
    HunterSettings.setSpeed(HunterLevel.Lv2, HunterRemoveTarget.HunterA)
    HunterSettings.setSpeed(HunterLevel.Lv3, HunterRemoveTarget.HunterC)
})
PlayerBlocks.onRemainingTime(299, function () {
    HunterSettings.resumeHunters(HunterRemoveTarget.All)
    AreaB.setGate(ZoneColor.Red, GateState.Closed)
    AreaB.setGate(ZoneColor.Lime, GateState.Open)
})
PlayerBlocks.onRemainingTime(60, function () {
    PlayerBlocks.showTitleTo(PlayerBlocks.selector(PlayerSelector.All), "ラストスパート！！")
})
PlayerBlocks.onRemainingTime(200, function () {
    PlayerBlocks.showTitleTo(PlayerBlocks.selector(PlayerSelector.All), "ピンクゲートが ひらいた！")
    AreaB.setGate(ZoneColor.Pink, GateState.Open)
})
PlayerBlocks.onRemainingTime(100, function () {
    PlayerBlocks.showTitleTo(PlayerBlocks.selector(PlayerSelector.All), "きいろゲートが とじた！")
    AreaB.setGate(ZoneColor.Yellow, GateState.Closed)
})
PlayerBlocks.onRemainingTime(50, function () {
    PlayerBlocks.showTitleTo(PlayerBlocks.selector(PlayerSelector.All), "エリートハンター かいほう！")
    AreaB.setGate(ZoneColor.Purple, GateState.Open)
})
PlayerBlocks.onChatCommand("go", function () {
    VariableBlocks.setTimeLimit(300)
    VariableBlocks.setLives(10)
    VariableBlocks.setBountyStart(20000)
    VariableBlocks.setBountyIncrement(BountyChange.Increase, 100)
    HunterSettings.setSpeed(HunterLevel.Lv1, HunterRemoveTarget.HunterA)
    HunterSettings.setStrength(HunterSightRange.Range48, HunterRemoveTarget.HunterA)
    HunterSettings.setSpeed(HunterLevel.Lv2, HunterRemoveTarget.HunterC)
    HunterSettings.setStrength(HunterSightRange.Range48, HunterRemoveTarget.HunterC)
    HunterSettings.setSpeed(HunterLevel.Lv5, HunterRemoveTarget.HunterD)
    HunterSettings.setStrength(HunterSightRange.Range16, HunterRemoveTarget.HunterD)
    GameSettings.startGame(
    10
    )
})
```

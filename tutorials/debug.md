# CMKゲーム デバッグ用

### @explicitHints true

```package
cmk-su26-game-tut=github:cmk-dev-team/cmk-su26-game-tut
```

```template
//
```

## はじめに @showdialog

拡張ブロックだけを確認するためのデバッグ用チュートリアルです。
```ghost
PlayerBlocks.setGameMode(MinecraftGameMode.Adventure)
PlayerBlocks.onPlayerCaught(function () {
})
PlayerBlocks.onChatCommand("run", function () {
})
PlayerBlocks.onRemainingTime(30, function () {
})
VariableBlocks.setTimeLimit(300)
VariableBlocks.addTimeLimit(10)
VariableBlocks.subtractTimeLimit(10)
VariableBlocks.setLives(3)
VariableBlocks.addLives(1)
VariableBlocks.subtractLives(1)
VariableBlocks.addLivesTo(TargetPlayer.Self, 1)
VariableBlocks.subtractLivesFrom(TargetPlayer.Self, 1)
VariableBlocks.setBountyStart(0)
VariableBlocks.addBounty(100)
VariableBlocks.subtractBounty(100)
VariableBlocks.setBountyIncrement(BountyChange.Increase, 100)
VariableBlocks.timeLimit()
VariableBlocks.lives()
VariableBlocks.bountyStart()
VariableBlocks.bountyIncrement()
VariableBlocks.setCountdown(10)
GameSettings.startGame()
GameSettings.pauseGame()
GameSettings.endGame()
HunterSettings.setSpeed(HunterLevel.Lv1)
HunterSettings.setStrength(HunterSightRange.Range16)
HunterSettings.stopHunters(HunterRemoveTarget.All)
HunterSettings.resumeHunters(HunterRemoveTarget.All)
HunterSettings.spawnHunterAt(HunterType.HunterA, PlayerBlocks.currentPosition())
PlayerBlocks.currentPosition()
HunterSettings.removeHunter(HunterRemoveTarget.All)
AreaA.setGate(ZoneColor.Red, GateState.Open)
AreaA.setGate(ZoneColor.Red, GateState.Closed)
AreaB.setGate(ZoneColor.Red, GateState.Open)
AreaB.setGate(ZoneColor.Red, GateState.Closed)
AreaC.setGate(ZoneColor.Red, GateState.Open)
AreaC.setGate(ZoneColor.Red, GateState.Closed)
AreaD.setGate(ZoneColor.Red, GateState.Open)
AreaD.setGate(ZoneColor.Red, GateState.Closed)
PlayerBlocks.onRemainingTime(30, function () {
})
Missions.missionSettings(MissionNumber.Mission1, ButtonType.Oak, 30)
```

## プレイヤー

プレイヤーカテゴリの表示確認用です。
```ghost
PlayerBlocks.setGameMode(MinecraftGameMode.Adventure)
PlayerBlocks.onPlayerCaught(function () {
})
PlayerBlocks.onChatCommand("run", function () {
})
PlayerBlocks.onRemainingTime(30, function () {
})
VariableBlocks.setTimeLimit(300)
VariableBlocks.addTimeLimit(10)
VariableBlocks.subtractTimeLimit(10)
VariableBlocks.setLives(3)
VariableBlocks.addLives(1)
VariableBlocks.subtractLives(1)
VariableBlocks.addLivesTo(TargetPlayer.Self, 1)
VariableBlocks.subtractLivesFrom(TargetPlayer.Self, 1)
VariableBlocks.setBountyStart(0)
VariableBlocks.addBounty(100)
VariableBlocks.subtractBounty(100)
VariableBlocks.setBountyIncrement(BountyChange.Increase, 100)
VariableBlocks.timeLimit()
VariableBlocks.lives()
VariableBlocks.bountyStart()
VariableBlocks.bountyIncrement()
VariableBlocks.setCountdown(10)
GameSettings.startGame()
GameSettings.pauseGame()
GameSettings.endGame()
HunterSettings.setSpeed(HunterLevel.Lv1)
HunterSettings.setStrength(HunterSightRange.Range16)
HunterSettings.stopHunters(HunterRemoveTarget.All)
HunterSettings.resumeHunters(HunterRemoveTarget.All)
HunterSettings.spawnHunterAt(HunterType.HunterA, PlayerBlocks.currentPosition())
PlayerBlocks.currentPosition()
HunterSettings.removeHunter(HunterRemoveTarget.All)
AreaA.setGate(ZoneColor.Red, GateState.Open)
AreaA.setGate(ZoneColor.Red, GateState.Closed)
AreaB.setGate(ZoneColor.Red, GateState.Open)
AreaB.setGate(ZoneColor.Red, GateState.Closed)
AreaC.setGate(ZoneColor.Red, GateState.Open)
AreaC.setGate(ZoneColor.Red, GateState.Closed)
AreaD.setGate(ZoneColor.Red, GateState.Open)
AreaD.setGate(ZoneColor.Red, GateState.Closed)
PlayerBlocks.onRemainingTime(30, function () {
})
Missions.missionSettings(MissionNumber.Mission1, ButtonType.Oak, 30)
```

```blocks
PlayerBlocks.setGameMode(MinecraftGameMode.Adventure)
```

## へんすう
へんすうカテゴリの表示確認用です。
```ghost
PlayerBlocks.setGameMode(MinecraftGameMode.Adventure)
PlayerBlocks.onPlayerCaught(function () {
})
PlayerBlocks.onChatCommand("run", function () {
})
PlayerBlocks.onRemainingTime(30, function () {
})
VariableBlocks.setTimeLimit(300)
VariableBlocks.addTimeLimit(10)
VariableBlocks.subtractTimeLimit(10)
VariableBlocks.setLives(3)
VariableBlocks.addLives(1)
VariableBlocks.subtractLives(1)
VariableBlocks.addLivesTo(TargetPlayer.Self, 1)
VariableBlocks.subtractLivesFrom(TargetPlayer.Self, 1)
VariableBlocks.setBountyStart(0)
VariableBlocks.addBounty(100)
VariableBlocks.subtractBounty(100)
VariableBlocks.setBountyIncrement(BountyChange.Increase, 100)
VariableBlocks.timeLimit()
VariableBlocks.lives()
VariableBlocks.bountyStart()
VariableBlocks.bountyIncrement()
VariableBlocks.setCountdown(10)
GameSettings.startGame()
GameSettings.pauseGame()
GameSettings.endGame()
HunterSettings.setSpeed(HunterLevel.Lv1)
HunterSettings.setStrength(HunterSightRange.Range16)
HunterSettings.stopHunters(HunterRemoveTarget.All)
HunterSettings.resumeHunters(HunterRemoveTarget.All)
HunterSettings.spawnHunterAt(HunterType.HunterA, PlayerBlocks.currentPosition())
PlayerBlocks.currentPosition()
HunterSettings.removeHunter(HunterRemoveTarget.All)
AreaA.setGate(ZoneColor.Red, GateState.Open)
AreaA.setGate(ZoneColor.Red, GateState.Closed)
AreaB.setGate(ZoneColor.Red, GateState.Open)
AreaB.setGate(ZoneColor.Red, GateState.Closed)
AreaC.setGate(ZoneColor.Red, GateState.Open)
AreaC.setGate(ZoneColor.Red, GateState.Closed)
AreaD.setGate(ZoneColor.Red, GateState.Open)
AreaD.setGate(ZoneColor.Red, GateState.Closed)
PlayerBlocks.onRemainingTime(30, function () {
})
Missions.missionSettings(MissionNumber.Mission1, ButtonType.Oak, 30)
```

```blocks
VariableBlocks.setTimeLimit(300)
VariableBlocks.setLives(3)
VariableBlocks.setBountyStart(0)
```

## ゲームしんこう

ゲームしんこうカテゴリの表示確認用です。
```ghost
PlayerBlocks.setGameMode(MinecraftGameMode.Adventure)
PlayerBlocks.onPlayerCaught(function () {
})
PlayerBlocks.onChatCommand("run", function () {
})
PlayerBlocks.onRemainingTime(30, function () {
})
VariableBlocks.setTimeLimit(300)
VariableBlocks.addTimeLimit(10)
VariableBlocks.subtractTimeLimit(10)
VariableBlocks.setLives(3)
VariableBlocks.addLives(1)
VariableBlocks.subtractLives(1)
VariableBlocks.addLivesTo(TargetPlayer.Self, 1)
VariableBlocks.subtractLivesFrom(TargetPlayer.Self, 1)
VariableBlocks.setBountyStart(0)
VariableBlocks.addBounty(100)
VariableBlocks.subtractBounty(100)
VariableBlocks.setBountyIncrement(BountyChange.Increase, 100)
VariableBlocks.timeLimit()
VariableBlocks.lives()
VariableBlocks.bountyStart()
VariableBlocks.bountyIncrement()
VariableBlocks.setCountdown(10)
GameSettings.startGame()
GameSettings.pauseGame()
GameSettings.endGame()
HunterSettings.setSpeed(HunterLevel.Lv1)
HunterSettings.setStrength(HunterSightRange.Range16)
HunterSettings.stopHunters(HunterRemoveTarget.All)
HunterSettings.resumeHunters(HunterRemoveTarget.All)
HunterSettings.spawnHunterAt(HunterType.HunterA, PlayerBlocks.currentPosition())
PlayerBlocks.currentPosition()
HunterSettings.removeHunter(HunterRemoveTarget.All)
AreaA.setGate(ZoneColor.Red, GateState.Open)
AreaA.setGate(ZoneColor.Red, GateState.Closed)
AreaB.setGate(ZoneColor.Red, GateState.Open)
AreaB.setGate(ZoneColor.Red, GateState.Closed)
AreaC.setGate(ZoneColor.Red, GateState.Open)
AreaC.setGate(ZoneColor.Red, GateState.Closed)
AreaD.setGate(ZoneColor.Red, GateState.Open)
AreaD.setGate(ZoneColor.Red, GateState.Closed)
PlayerBlocks.onRemainingTime(30, function () {
})
Missions.missionSettings(MissionNumber.Mission1, ButtonType.Oak, 30)
```

```blocks
VariableBlocks.setCountdown(10)
GameSettings.startGame()
GameSettings.pauseGame()
GameSettings.endGame()
```

## ハンター

ハンターカテゴリの表示確認用です。
```ghost
PlayerBlocks.setGameMode(MinecraftGameMode.Adventure)
PlayerBlocks.onPlayerCaught(function () {
})
PlayerBlocks.onChatCommand("run", function () {
})
PlayerBlocks.onRemainingTime(30, function () {
})
VariableBlocks.setTimeLimit(300)
VariableBlocks.addTimeLimit(10)
VariableBlocks.subtractTimeLimit(10)
VariableBlocks.setLives(3)
VariableBlocks.addLives(1)
VariableBlocks.subtractLives(1)
VariableBlocks.addLivesTo(TargetPlayer.Self, 1)
VariableBlocks.subtractLivesFrom(TargetPlayer.Self, 1)
VariableBlocks.setBountyStart(0)
VariableBlocks.addBounty(100)
VariableBlocks.subtractBounty(100)
VariableBlocks.setBountyIncrement(BountyChange.Increase, 100)
VariableBlocks.timeLimit()
VariableBlocks.lives()
VariableBlocks.bountyStart()
VariableBlocks.bountyIncrement()
VariableBlocks.setCountdown(10)
GameSettings.startGame()
GameSettings.pauseGame()
GameSettings.endGame()
HunterSettings.setSpeed(HunterLevel.Lv1)
HunterSettings.setStrength(HunterSightRange.Range16)
HunterSettings.stopHunters(HunterRemoveTarget.All)
HunterSettings.resumeHunters(HunterRemoveTarget.All)
HunterSettings.spawnHunterAt(HunterType.HunterA, PlayerBlocks.currentPosition())
PlayerBlocks.currentPosition()
HunterSettings.removeHunter(HunterRemoveTarget.All)
AreaA.setGate(ZoneColor.Red, GateState.Open)
AreaA.setGate(ZoneColor.Red, GateState.Closed)
AreaB.setGate(ZoneColor.Red, GateState.Open)
AreaB.setGate(ZoneColor.Red, GateState.Closed)
AreaC.setGate(ZoneColor.Red, GateState.Open)
AreaC.setGate(ZoneColor.Red, GateState.Closed)
AreaD.setGate(ZoneColor.Red, GateState.Open)
AreaD.setGate(ZoneColor.Red, GateState.Closed)
PlayerBlocks.onRemainingTime(30, function () {
})
Missions.missionSettings(MissionNumber.Mission1, ButtonType.Oak, 30)
```

```blocks
HunterSettings.setSpeed(HunterLevel.Lv1)
HunterSettings.setStrength(HunterSightRange.Range16)
HunterSettings.resumeHunters(HunterRemoveTarget.All)
PlayerBlocks.currentPosition()
HunterSettings.removeHunter(HunterRemoveTarget.All)
```

## チームエリア

チームエリアカテゴリの表示確認用です。
```ghost
PlayerBlocks.setGameMode(MinecraftGameMode.Adventure)
PlayerBlocks.onPlayerCaught(function () {
})
PlayerBlocks.onChatCommand("run", function () {
})
PlayerBlocks.onRemainingTime(30, function () {
})
VariableBlocks.setTimeLimit(300)
VariableBlocks.addTimeLimit(10)
VariableBlocks.subtractTimeLimit(10)
VariableBlocks.setLives(3)
VariableBlocks.addLives(1)
VariableBlocks.subtractLives(1)
VariableBlocks.addLivesTo(TargetPlayer.Self, 1)
VariableBlocks.subtractLivesFrom(TargetPlayer.Self, 1)
VariableBlocks.setBountyStart(0)
VariableBlocks.addBounty(100)
VariableBlocks.subtractBounty(100)
VariableBlocks.setBountyIncrement(BountyChange.Increase, 100)
VariableBlocks.timeLimit()
VariableBlocks.lives()
VariableBlocks.bountyStart()
VariableBlocks.bountyIncrement()
VariableBlocks.setCountdown(10)
GameSettings.startGame()
GameSettings.pauseGame()
GameSettings.endGame()
HunterSettings.setSpeed(HunterLevel.Lv1)
HunterSettings.setStrength(HunterSightRange.Range16)
HunterSettings.stopHunters(HunterRemoveTarget.All)
HunterSettings.resumeHunters(HunterRemoveTarget.All)
HunterSettings.spawnHunterAt(HunterType.HunterA, PlayerBlocks.currentPosition())
PlayerBlocks.currentPosition()
HunterSettings.removeHunter(HunterRemoveTarget.All)
AreaA.setGate(ZoneColor.Red, GateState.Open)
AreaA.setGate(ZoneColor.Red, GateState.Closed)
AreaB.setGate(ZoneColor.Red, GateState.Open)
AreaB.setGate(ZoneColor.Red, GateState.Closed)
AreaC.setGate(ZoneColor.Red, GateState.Open)
AreaC.setGate(ZoneColor.Red, GateState.Closed)
AreaD.setGate(ZoneColor.Red, GateState.Open)
AreaD.setGate(ZoneColor.Red, GateState.Closed)
PlayerBlocks.onRemainingTime(30, function () {
})
Missions.missionSettings(MissionNumber.Mission1, ButtonType.Oak, 30)
```

```blocks
AreaB.setGate(ZoneColor.Red, GateState.Open)
AreaB.setGate(ZoneColor.Red, GateState.Closed)
AreaD.setGate(ZoneColor.Red, GateState.Open)
AreaD.setGate(ZoneColor.Red, GateState.Closed)
```

## ミッション

ミッションカテゴリの表示確認用です。
```ghost
PlayerBlocks.setGameMode(MinecraftGameMode.Adventure)
PlayerBlocks.onPlayerCaught(function () {
})
PlayerBlocks.onChatCommand("run", function () {
})
PlayerBlocks.onRemainingTime(30, function () {
})
VariableBlocks.setTimeLimit(300)
VariableBlocks.addTimeLimit(10)
VariableBlocks.subtractTimeLimit(10)
VariableBlocks.setLives(3)
VariableBlocks.addLives(1)
VariableBlocks.subtractLives(1)
VariableBlocks.addLivesTo(TargetPlayer.Self, 1)
VariableBlocks.subtractLivesFrom(TargetPlayer.Self, 1)
VariableBlocks.setBountyStart(0)
VariableBlocks.addBounty(100)
VariableBlocks.subtractBounty(100)
VariableBlocks.setBountyIncrement(BountyChange.Increase, 100)
VariableBlocks.timeLimit()
VariableBlocks.lives()
VariableBlocks.bountyStart()
VariableBlocks.bountyIncrement()
VariableBlocks.setCountdown(10)
GameSettings.startGame()
GameSettings.pauseGame()
GameSettings.endGame()
HunterSettings.setSpeed(HunterLevel.Lv1)
HunterSettings.setStrength(HunterSightRange.Range16)
HunterSettings.stopHunters(HunterRemoveTarget.All)
HunterSettings.resumeHunters(HunterRemoveTarget.All)
HunterSettings.spawnHunterAt(HunterType.HunterA, PlayerBlocks.currentPosition())
PlayerBlocks.currentPosition()
HunterSettings.removeHunter(HunterRemoveTarget.All)
AreaA.setGate(ZoneColor.Red, GateState.Open)
AreaA.setGate(ZoneColor.Red, GateState.Closed)
AreaB.setGate(ZoneColor.Red, GateState.Open)
AreaB.setGate(ZoneColor.Red, GateState.Closed)
AreaC.setGate(ZoneColor.Red, GateState.Open)
AreaC.setGate(ZoneColor.Red, GateState.Closed)
AreaD.setGate(ZoneColor.Red, GateState.Open)
AreaD.setGate(ZoneColor.Red, GateState.Closed)
PlayerBlocks.onRemainingTime(30, function () {
})
Missions.missionSettings(MissionNumber.Mission1, ButtonType.Oak, 30)
```

```blocks
PlayerBlocks.onRemainingTime(30, function () {
    Missions.missionSettings(MissionNumber.Mission1, ButtonType.Oak, 30)
})
```








# CMKゲーム デバッグ用

### @explicitHints true

```package
cmk-su26-game-tut=github:cmk-dev-team/cmk-su26-game-tut#v1.0.21
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
GameSettings.startGame(10)
GameSettings.pauseGame()
GameSettings.endGame()
HunterSettings.setSpeed(HunterLevel.Lv1)
HunterSettings.setStrength(HunterSightRange.Range16)
HunterSettings.stopHunters()
HunterSettings.resumeHunters()
HunterSettings.spawnHunterMob(0, 0, 0)
HunterSettings.spawnHunterHere()
HunterSettings.removeHunter(HunterRemoveTarget.All)
AreaA.open(ZoneColor.Red)
AreaA.close(ZoneColor.Red)
AreaB.open(ZoneColor.Red)
AreaB.close(ZoneColor.Red)
AreaC.open(ZoneColor.Red)
AreaC.close(ZoneColor.Red)
AreaD.open(ZoneColor.Red)
AreaD.close(ZoneColor.Red)
Missions.onRemainingTime(30, function () {
})
Missions.missionSettings(MissionNumber.Mission1, "ボタンをおそう", MissionType.Button, 1, 30)
Missions.onMissionFinished(MissionNumber.Mission1, function () {
})
if (Missions.missionSucceeded()) {
}
if (Missions.missionFailed()) {
}
```

## プレイヤー

プレイヤーカテゴリの表示確認用です。

```ghost
PlayerBlocks.setGameMode(MinecraftGameMode.Adventure)
PlayerBlocks.onPlayerCaught(function () {
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
GameSettings.startGame(10)
GameSettings.pauseGame()
GameSettings.endGame()
HunterSettings.setSpeed(HunterLevel.Lv1)
HunterSettings.setStrength(HunterSightRange.Range16)
HunterSettings.stopHunters()
HunterSettings.resumeHunters()
HunterSettings.spawnHunterMob(0, 0, 0)
HunterSettings.spawnHunterHere()
HunterSettings.removeHunter(HunterRemoveTarget.All)
AreaA.open(ZoneColor.Red)
AreaA.close(ZoneColor.Red)
AreaB.open(ZoneColor.Red)
AreaB.close(ZoneColor.Red)
AreaC.open(ZoneColor.Red)
AreaC.close(ZoneColor.Red)
AreaD.open(ZoneColor.Red)
AreaD.close(ZoneColor.Red)
Missions.onRemainingTime(30, function () {
})
Missions.missionSettings(MissionNumber.Mission1, "ボタンをおそう", MissionType.Button, 1, 30)
Missions.onMissionFinished(MissionNumber.Mission1, function () {
})
if (Missions.missionSucceeded()) {
}
if (Missions.missionFailed()) {
}
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
GameSettings.startGame(10)
GameSettings.pauseGame()
GameSettings.endGame()
HunterSettings.setSpeed(HunterLevel.Lv1)
HunterSettings.setStrength(HunterSightRange.Range16)
HunterSettings.stopHunters()
HunterSettings.resumeHunters()
HunterSettings.spawnHunterMob(0, 0, 0)
HunterSettings.spawnHunterHere()
HunterSettings.removeHunter(HunterRemoveTarget.All)
AreaA.open(ZoneColor.Red)
AreaA.close(ZoneColor.Red)
AreaB.open(ZoneColor.Red)
AreaB.close(ZoneColor.Red)
AreaC.open(ZoneColor.Red)
AreaC.close(ZoneColor.Red)
AreaD.open(ZoneColor.Red)
AreaD.close(ZoneColor.Red)
Missions.onRemainingTime(30, function () {
})
Missions.missionSettings(MissionNumber.Mission1, "ボタンをおそう", MissionType.Button, 1, 30)
Missions.onMissionFinished(MissionNumber.Mission1, function () {
})
if (Missions.missionSucceeded()) {
}
if (Missions.missionFailed()) {
}
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
GameSettings.startGame(10)
GameSettings.pauseGame()
GameSettings.endGame()
HunterSettings.setSpeed(HunterLevel.Lv1)
HunterSettings.setStrength(HunterSightRange.Range16)
HunterSettings.stopHunters()
HunterSettings.resumeHunters()
HunterSettings.spawnHunterMob(0, 0, 0)
HunterSettings.spawnHunterHere()
HunterSettings.removeHunter(HunterRemoveTarget.All)
AreaA.open(ZoneColor.Red)
AreaA.close(ZoneColor.Red)
AreaB.open(ZoneColor.Red)
AreaB.close(ZoneColor.Red)
AreaC.open(ZoneColor.Red)
AreaC.close(ZoneColor.Red)
AreaD.open(ZoneColor.Red)
AreaD.close(ZoneColor.Red)
Missions.onRemainingTime(30, function () {
})
Missions.missionSettings(MissionNumber.Mission1, "ボタンをおそう", MissionType.Button, 1, 30)
Missions.onMissionFinished(MissionNumber.Mission1, function () {
})
if (Missions.missionSucceeded()) {
}
if (Missions.missionFailed()) {
}
```

```blocks
GameSettings.startGame(10)
GameSettings.pauseGame()
GameSettings.endGame()
```

## ハンター

ハンターカテゴリの表示確認用です。

```ghost
PlayerBlocks.setGameMode(MinecraftGameMode.Adventure)
PlayerBlocks.onPlayerCaught(function () {
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
GameSettings.startGame(10)
GameSettings.pauseGame()
GameSettings.endGame()
HunterSettings.setSpeed(HunterLevel.Lv1)
HunterSettings.setStrength(HunterSightRange.Range16)
HunterSettings.stopHunters()
HunterSettings.resumeHunters()
HunterSettings.spawnHunterMob(0, 0, 0)
HunterSettings.spawnHunterHere()
HunterSettings.removeHunter(HunterRemoveTarget.All)
AreaA.open(ZoneColor.Red)
AreaA.close(ZoneColor.Red)
AreaB.open(ZoneColor.Red)
AreaB.close(ZoneColor.Red)
AreaC.open(ZoneColor.Red)
AreaC.close(ZoneColor.Red)
AreaD.open(ZoneColor.Red)
AreaD.close(ZoneColor.Red)
Missions.onRemainingTime(30, function () {
})
Missions.missionSettings(MissionNumber.Mission1, "ボタンをおそう", MissionType.Button, 1, 30)
Missions.onMissionFinished(MissionNumber.Mission1, function () {
})
if (Missions.missionSucceeded()) {
}
if (Missions.missionFailed()) {
}
```

```blocks
HunterSettings.setSpeed(HunterLevel.Lv1)
HunterSettings.setStrength(HunterSightRange.Range16)
HunterSettings.resumeHunters()
HunterSettings.spawnHunterHere()
HunterSettings.removeHunter(HunterRemoveTarget.All)
```

## チームエリア

チームエリアカテゴリの表示確認用です。

```ghost
PlayerBlocks.setGameMode(MinecraftGameMode.Adventure)
PlayerBlocks.onPlayerCaught(function () {
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
GameSettings.startGame(10)
GameSettings.pauseGame()
GameSettings.endGame()
HunterSettings.setSpeed(HunterLevel.Lv1)
HunterSettings.setStrength(HunterSightRange.Range16)
HunterSettings.stopHunters()
HunterSettings.resumeHunters()
HunterSettings.spawnHunterMob(0, 0, 0)
HunterSettings.spawnHunterHere()
HunterSettings.removeHunter(HunterRemoveTarget.All)
AreaA.open(ZoneColor.Red)
AreaA.close(ZoneColor.Red)
AreaB.open(ZoneColor.Red)
AreaB.close(ZoneColor.Red)
AreaC.open(ZoneColor.Red)
AreaC.close(ZoneColor.Red)
AreaD.open(ZoneColor.Red)
AreaD.close(ZoneColor.Red)
Missions.onRemainingTime(30, function () {
})
Missions.missionSettings(MissionNumber.Mission1, "ボタンをおそう", MissionType.Button, 1, 30)
Missions.onMissionFinished(MissionNumber.Mission1, function () {
})
if (Missions.missionSucceeded()) {
}
if (Missions.missionFailed()) {
}
```

```blocks
AreaB.open(ZoneColor.Red)
AreaB.close(ZoneColor.Red)
AreaD.open(ZoneColor.Red)
AreaD.close(ZoneColor.Red)
```

## ミッション

ミッションカテゴリの表示確認用です。

```ghost
PlayerBlocks.setGameMode(MinecraftGameMode.Adventure)
PlayerBlocks.onPlayerCaught(function () {
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
GameSettings.startGame(10)
GameSettings.pauseGame()
GameSettings.endGame()
HunterSettings.setSpeed(HunterLevel.Lv1)
HunterSettings.setStrength(HunterSightRange.Range16)
HunterSettings.stopHunters()
HunterSettings.resumeHunters()
HunterSettings.spawnHunterMob(0, 0, 0)
HunterSettings.spawnHunterHere()
HunterSettings.removeHunter(HunterRemoveTarget.All)
AreaA.open(ZoneColor.Red)
AreaA.close(ZoneColor.Red)
AreaB.open(ZoneColor.Red)
AreaB.close(ZoneColor.Red)
AreaC.open(ZoneColor.Red)
AreaC.close(ZoneColor.Red)
AreaD.open(ZoneColor.Red)
AreaD.close(ZoneColor.Red)
Missions.onRemainingTime(30, function () {
})
Missions.missionSettings(MissionNumber.Mission1, "ボタンをおそう", MissionType.Button, 1, 30)
Missions.onMissionFinished(MissionNumber.Mission1, function () {
})
if (Missions.missionSucceeded()) {
}
if (Missions.missionFailed()) {
}
```

```blocks
Missions.onRemainingTime(30, function () {
    Missions.missionSettings(MissionNumber.Mission1, "ボタンをおそう", MissionType.Button, 1, 30)
})
Missions.onMissionFinished(MissionNumber.Mission1, function () {
    if (Missions.missionSucceeded()) {
    }
})
```

# CMK繧ｲ繝ｼ繝 繝・ヰ繝・げ逕ｨ

### @explicitHints true

```package
cmk-su26-game-tut=github:cmk-dev-team/cmk-su26-game-tut
```

```template
//
```

## 縺ｯ縺倥ａ縺ｫ @showdialog

諡｡蠑ｵ繝悶Ο繝・け縺縺代ｒ遒ｺ隱阪☆繧九◆繧√・繝・ヰ繝・げ逕ｨ繝√Η繝ｼ繝医Μ繧｢繝ｫ縺ｧ縺吶・
```ghost
PlayerBlocks.setGameMode(MinecraftGameMode.Adventure)
PlayerBlocks.onPlayerCaught(function () {
})
PlayerBlocks.onChatCommand("start", function () {
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
GameSettings.startGame(10)
GameSettings.pauseGame()
GameSettings.endGame()
HunterSettings.setSpeed(HunterLevel.Lv1)
HunterSettings.setStrength(HunterSightRange.Range16)
HunterSettings.stopHunters(HunterRemoveTarget.All)
HunterSettings.resumeHunters(HunterRemoveTarget.All)
HunterSettings.spawnHunterMob(0, 0, 0)
PlayerBlocks.spawnHunterHere()
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
Missions.missionSettings(MissionNumber.Mission1, "繝懊ち繝ｳ繧偵♀縺昴≧", MissionType.Button, 1, 30)
Missions.onMissionFinished(MissionNumber.Mission1, function () {
})
if (Missions.missionSucceeded()) {
}
if (Missions.missionFailed()) {
}
```

## 繝励Ξ繧､繝､繝ｼ

繝励Ξ繧､繝､繝ｼ繧ｫ繝・ざ繝ｪ縺ｮ陦ｨ遉ｺ遒ｺ隱咲畑縺ｧ縺吶・
```ghost
PlayerBlocks.setGameMode(MinecraftGameMode.Adventure)
PlayerBlocks.onPlayerCaught(function () {
})
PlayerBlocks.onChatCommand("start", function () {
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
GameSettings.startGame(10)
GameSettings.pauseGame()
GameSettings.endGame()
HunterSettings.setSpeed(HunterLevel.Lv1)
HunterSettings.setStrength(HunterSightRange.Range16)
HunterSettings.stopHunters(HunterRemoveTarget.All)
HunterSettings.resumeHunters(HunterRemoveTarget.All)
HunterSettings.spawnHunterMob(0, 0, 0)
PlayerBlocks.spawnHunterHere()
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
Missions.missionSettings(MissionNumber.Mission1, "繝懊ち繝ｳ繧偵♀縺昴≧", MissionType.Button, 1, 30)
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

## 縺ｸ繧薙☆縺・
縺ｸ繧薙☆縺・き繝・ざ繝ｪ縺ｮ陦ｨ遉ｺ遒ｺ隱咲畑縺ｧ縺吶・
```ghost
PlayerBlocks.setGameMode(MinecraftGameMode.Adventure)
PlayerBlocks.onPlayerCaught(function () {
})
PlayerBlocks.onChatCommand("start", function () {
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
GameSettings.startGame(10)
GameSettings.pauseGame()
GameSettings.endGame()
HunterSettings.setSpeed(HunterLevel.Lv1)
HunterSettings.setStrength(HunterSightRange.Range16)
HunterSettings.stopHunters(HunterRemoveTarget.All)
HunterSettings.resumeHunters(HunterRemoveTarget.All)
HunterSettings.spawnHunterMob(0, 0, 0)
PlayerBlocks.spawnHunterHere()
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
Missions.missionSettings(MissionNumber.Mission1, "繝懊ち繝ｳ繧偵♀縺昴≧", MissionType.Button, 1, 30)
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

## 繧ｲ繝ｼ繝縺励ｓ縺薙≧

繧ｲ繝ｼ繝縺励ｓ縺薙≧繧ｫ繝・ざ繝ｪ縺ｮ陦ｨ遉ｺ遒ｺ隱咲畑縺ｧ縺吶・
```ghost
PlayerBlocks.setGameMode(MinecraftGameMode.Adventure)
PlayerBlocks.onPlayerCaught(function () {
})
PlayerBlocks.onChatCommand("start", function () {
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
GameSettings.startGame(10)
GameSettings.pauseGame()
GameSettings.endGame()
HunterSettings.setSpeed(HunterLevel.Lv1)
HunterSettings.setStrength(HunterSightRange.Range16)
HunterSettings.stopHunters(HunterRemoveTarget.All)
HunterSettings.resumeHunters(HunterRemoveTarget.All)
HunterSettings.spawnHunterMob(0, 0, 0)
PlayerBlocks.spawnHunterHere()
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
Missions.missionSettings(MissionNumber.Mission1, "繝懊ち繝ｳ繧偵♀縺昴≧", MissionType.Button, 1, 30)
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

## 繝上Φ繧ｿ繝ｼ

繝上Φ繧ｿ繝ｼ繧ｫ繝・ざ繝ｪ縺ｮ陦ｨ遉ｺ遒ｺ隱咲畑縺ｧ縺吶・
```ghost
PlayerBlocks.setGameMode(MinecraftGameMode.Adventure)
PlayerBlocks.onPlayerCaught(function () {
})
PlayerBlocks.onChatCommand("start", function () {
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
GameSettings.startGame(10)
GameSettings.pauseGame()
GameSettings.endGame()
HunterSettings.setSpeed(HunterLevel.Lv1)
HunterSettings.setStrength(HunterSightRange.Range16)
HunterSettings.stopHunters(HunterRemoveTarget.All)
HunterSettings.resumeHunters(HunterRemoveTarget.All)
HunterSettings.spawnHunterMob(0, 0, 0)
PlayerBlocks.spawnHunterHere()
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
Missions.missionSettings(MissionNumber.Mission1, "繝懊ち繝ｳ繧偵♀縺昴≧", MissionType.Button, 1, 30)
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
HunterSettings.resumeHunters(HunterRemoveTarget.All)
PlayerBlocks.spawnHunterHere()
HunterSettings.removeHunter(HunterRemoveTarget.All)
```

## 繝√・繝繧ｨ繝ｪ繧｢

繝√・繝繧ｨ繝ｪ繧｢繧ｫ繝・ざ繝ｪ縺ｮ陦ｨ遉ｺ遒ｺ隱咲畑縺ｧ縺吶・
```ghost
PlayerBlocks.setGameMode(MinecraftGameMode.Adventure)
PlayerBlocks.onPlayerCaught(function () {
})
PlayerBlocks.onChatCommand("start", function () {
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
GameSettings.startGame(10)
GameSettings.pauseGame()
GameSettings.endGame()
HunterSettings.setSpeed(HunterLevel.Lv1)
HunterSettings.setStrength(HunterSightRange.Range16)
HunterSettings.stopHunters(HunterRemoveTarget.All)
HunterSettings.resumeHunters(HunterRemoveTarget.All)
HunterSettings.spawnHunterMob(0, 0, 0)
PlayerBlocks.spawnHunterHere()
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
Missions.missionSettings(MissionNumber.Mission1, "繝懊ち繝ｳ繧偵♀縺昴≧", MissionType.Button, 1, 30)
Missions.onMissionFinished(MissionNumber.Mission1, function () {
})
if (Missions.missionSucceeded()) {
}
if (Missions.missionFailed()) {
}
```

```blocks
AreaB.setGate(ZoneColor.Red, GateState.Open)
AreaB.setGate(ZoneColor.Red, GateState.Closed)
AreaD.setGate(ZoneColor.Red, GateState.Open)
AreaD.setGate(ZoneColor.Red, GateState.Closed)
```

## 繝溘ャ繧ｷ繝ｧ繝ｳ

繝溘ャ繧ｷ繝ｧ繝ｳ繧ｫ繝・ざ繝ｪ縺ｮ陦ｨ遉ｺ遒ｺ隱咲畑縺ｧ縺吶・
```ghost
PlayerBlocks.setGameMode(MinecraftGameMode.Adventure)
PlayerBlocks.onPlayerCaught(function () {
})
PlayerBlocks.onChatCommand("start", function () {
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
GameSettings.startGame(10)
GameSettings.pauseGame()
GameSettings.endGame()
HunterSettings.setSpeed(HunterLevel.Lv1)
HunterSettings.setStrength(HunterSightRange.Range16)
HunterSettings.stopHunters(HunterRemoveTarget.All)
HunterSettings.resumeHunters(HunterRemoveTarget.All)
HunterSettings.spawnHunterMob(0, 0, 0)
PlayerBlocks.spawnHunterHere()
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
Missions.missionSettings(MissionNumber.Mission1, "繝懊ち繝ｳ繧偵♀縺昴≧", MissionType.Button, 1, 30)
Missions.onMissionFinished(MissionNumber.Mission1, function () {
})
if (Missions.missionSucceeded()) {
}
if (Missions.missionFailed()) {
}
```

```blocks
PlayerBlocks.onRemainingTime(30, function () {
    Missions.missionSettings(MissionNumber.Mission1, "繝懊ち繝ｳ繧偵♀縺昴≧", MissionType.Button, 1, 30)
})
Missions.onMissionFinished(MissionNumber.Mission1, function () {
    if (Missions.missionSucceeded()) {
    }
})
```







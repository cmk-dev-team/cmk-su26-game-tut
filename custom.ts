let _timelimit = 5
let _lives = 3
let _bountyStart = 0
let _countdown = 0
let _gameRunning = false
let _gameStateListenersReady = false

function sendCommand(command: string): void {
    player.execute(command)
}

function ensureGameStateListeners(): void {
    if (_gameStateListenersReady) {
        return
    }

    _gameStateListenersReady = true
    player.onTellCommand("game_started", function () {
        _gameRunning = true
    })
    player.onTellCommand("game_ended", function () {
        _gameRunning = false
    })
}

enum HunterLevel {
    //% block="1"
    Lv1 = 1,
    //% block="2"
    Lv2 = 2,
    //% block="3"
    Lv3 = 3,
    //% block="4"
    Lv4 = 4,
    //% block="5"
    Lv5 = 5
}

enum MissionType {
    //% block="ボタンをおす"
    Button = 0
}

enum MissionNumber {
    //% block="1"
    Mission1 = 1,
    //% block="2"
    Mission2 = 2,
    //% block="3"
    Mission3 = 3
}

enum ZoneColor {
    //% block="しろ"
    White = 0,
    //% block="オレンジ"
    Orange = 1,
    //% block="あかむらさき"
    Magenta = 2,
    //% block="そらいろ"
    LightBlue = 3,
    //% block="きいろ"
    Yellow = 4,
    //% block="きみどり"
    Lime = 5,
    //% block="ピンク"
    Pink = 6,
    //% block="はいいろ"
    Gray = 7,
    //% block="うすいはいいろ"
    LightGray = 8,
    //% block="あおみどり"
    Cyan = 9,
    //% block="むらさき"
    Purple = 10,
    //% block="あお"
    Blue = 11,
    //% block="ちゃいろ"
    Brown = 12,
    //% block="みどり"
    Green = 13,
    //% block="あか"
    Red = 14,
    //% block="くろ"
    Black = 15
}

enum TargetPlayer {
    //% block="じぶん"
    Self = 1,
    //% block="ぜんいん"
    All = 0,
    //% block="ミッションせいこうした人"
    MissionSuccess = 2,
    //% block="ミッションしっぱいした人"
    MissionFail = 3
}

enum HunterTarget {
    //% block="じぶん"
    Self = 1,
    //% block="ミッションしっぱいした人"
    MissionFail = 3,
    //% block="せんせい"
    Teacher = 4,
    //% block="スペクテイター"
    Spectator = 5
}

enum EffectTarget {
    //% block="にげる人ぜんいん"
    AllRunner = 0,
    //% block="ハンターぜんいん"
    AllHunter = 1,
    //% block="じぶん"
    Self = 2
}

//% color="#E86D26" weight=100 block="ゲームのせってい"
namespace GameSettings {
    //% blockId=cmk_extension_version block="れんけいバージョン"
    //% blockHidden=true
    //% weight=110
    export function extensionVersion(): string {
        return "1.0.9"
    }

    //% blockId=cmk_set_timelimit block="ゲームじかんを $value びょうにする"
    //% value.defl=5 value.min=1 value.max=600
    //% weight=100
    export function setTimeLimit(value: number): void {
        _timelimit = value
        sendCommand("scoreboard players set @s g_timelimit " + value)
    }

    //% blockId=cmk_set_lives block="ざんきを $value にする"
    //% value.defl=3 value.min=0 value.max=10
    //% weight=90
    export function setLives(value: number): void {
        _lives = value
        sendCommand("scoreboard players set @s g_lives_default " + value)
    }

    //% blockId=cmk_set_bounty_start block="しょうきんを $value にする"
    //% value.defl=0
    //% weight=80
    export function setBountyStart(value: number): void {
        _bountyStart = value
        sendCommand("scoreboard players set @s g_bounty_start " + value)
    }

    //% blockId=cmk_start_game block="カウントダウン $countdown びょうで|ゲームをかいしする"
    //% countdown.defl=0 countdown.min=0 countdown.max=20
    //% weight=59
    export function startGame(countdown: number): void {
        ensureGameStateListeners()
        _gameRunning = false
        _countdown = countdown
        sendCommand("scoreboard players set @s g_countdown " + countdown)
        sendCommand("scriptevent cmk:start " + _timelimit + "|" + _countdown)
    }

    //% blockId=cmk_pause_game block="ゲームをいちじていしする"
    //% weight=58
    export function pauseGame(): void {
        sendCommand("scriptevent cmk:pause")
    }

    //% blockId=cmk_end_game block="ゲームをしゅうりょうする"
    //% weight=57
    export function endGame(): void {
        _gameRunning = false
        sendCommand("scriptevent cmk:stop")
    }

    //% blockId=cmk_on_player_caught block="プレイヤーがつかまったとき"
    //% weight=56
    export function onPlayerCaught(handler: () => void): void {
        player.onTellCommand("player_caught", handler)
    }

    //% blockId=cmk_every_seconds block="ゲームちゅう $seconds びょうごとにじっこう"
    //% seconds.defl=1 seconds.min=1 seconds.max=600
    //% weight=55
    export function everySeconds(seconds: number, handler: () => void): void {
        ensureGameStateListeners()
        loops.forever(function () {
            loops.pause(seconds * 1000)
            if (_gameRunning) {
                handler()
            }
        })
    }

    //% blockId=cmk_on_remaining_time
    //% block="のこり $triggerSec びょうになったとき"
    //% triggerSec.defl=30 triggerSec.min=0
    //% weight=55
    export function onRemainingTime(triggerSec: number, handler: () => void): void {
        Missions.onRemainingTime(triggerSec, handler)
    }

    //% blockId=cmk_add_timelimit block="ゲームじかんを $value びょうふやす"
    //% value.defl=10 value.min=0 value.max=30
    //% weight=54
    export function addTimeLimit(value: number): void {
        _timelimit = _timelimit + value
        sendCommand("scriptevent cmk:timer_add " + value)
    }

    //% blockId=cmk_subtract_timelimit block="ゲームじかんを $value びょうへらす"
    //% value.defl=10 value.min=0 value.max=30
    //% weight=54
    export function subtractTimeLimit(value: number): void {
        _timelimit = Math.max(0, _timelimit - value)
        sendCommand("scriptevent cmk:timer_subtract " + value)
    }

    //% blockId=cmk_add_lives_setting block="ざんきを $value ふやす"
    //% blockHidden=true
    //% value.defl=1 value.min=0 value.max=10
    //% weight=53
    export function addLives(value: number): void {
        _lives = _lives + value
        sendCommand("scriptevent cmk:lives_add " + value)
    }

    //% blockId=cmk_subtract_lives_setting block="ざんきを $value へらす"
    //% blockHidden=true
    //% value.defl=1 value.min=0 value.max=10
    //% weight=52
    export function subtractLives(value: number): void {
        _lives = Math.max(0, _lives - value)
        sendCommand("scriptevent cmk:lives_subtract " + value)
    }

    //% blockId=cmk_add_lives_target block="$target のざんきを $value ふやす"
    //% target.defl=TargetPlayer.Self
    //% value.defl=1 value.min=0 value.max=10
    //% weight=53
    export function addLivesTo(target: TargetPlayer, value: number): void {
        _lives = _lives + value
        sendCommand("scriptevent cmk:lives_add " + target + "|" + value)
    }

    //% blockId=cmk_subtract_lives_target block="$target のざんきを $value へらす"
    //% target.defl=TargetPlayer.Self
    //% value.defl=1 value.min=0 value.max=10
    //% weight=52
    export function subtractLivesFrom(target: TargetPlayer, value: number): void {
        _lives = Math.max(0, _lives - value)
        sendCommand("scriptevent cmk:lives_subtract " + target + "|" + value)
    }

    //% blockId=cmk_add_bounty_setting block="しょうきんを $value ふやす"
    //% value.defl=100
    //% weight=51
    export function addBounty(value: number): void {
        _bountyStart = _bountyStart + value
        sendCommand("scriptevent cmk:bounty_add " + value)
    }

    //% blockId=cmk_subtract_bounty_setting block="しょうきんを $value へらす"
    //% value.defl=100
    //% weight=50
    export function subtractBounty(value: number): void {
        _bountyStart = Math.max(0, _bountyStart - value)
        sendCommand("scriptevent cmk:bounty_subtract " + value)
    }

    //% blockId=cmk_get_timelimit block="ゲームじかん"
    //% weight=40
    export function timeLimit(): number {
        return _timelimit
    }

    //% blockId=cmk_get_lives block="ざんき"
    //% weight=10
    export function lives(): number {
        return _lives
    }

    //% blockId=cmk_get_bounty_start block="しょうきん"
    //% weight=9
    export function bountyStart(): number {
        return _bountyStart
    }
}

//% color="#E74C3C" weight=90 block="ハンター"
namespace HunterSettings {
    //% blockId=cmk_set_hunter_speed block="ハンターのすばやさを $level にする"
    //% level.defl=HunterLevel.Lv1
    //% weight=100
    export function setSpeed(level: HunterLevel): void {
        sendCommand("scriptevent cmk:set_hunter_speed " + level)
    }

    //% blockId=cmk_set_hunter_strength block="ハンターのしかいをレベル $level にする"
    //% level.defl=HunterLevel.Lv1
    //% weight=90
    export function setStrength(level: HunterLevel): void {
        sendCommand("scriptevent cmk:set_hunter_sight " + level)
    }

    //% blockId=cmk_stop_hunters block="ハンターをていしさせる"
    //% weight=80
    export function stopHunters(): void {
        sendCommand("scriptevent cmk:stop_hunters")
    }

    //% blockId=cmk_resume_hunters block="ハンターをうごかす"
    //% weight=79
    export function resumeHunters(): void {
        sendCommand("scriptevent cmk:resume_hunters")
    }

    //% blockId=cmk_make_hunter block="$target をハンターにする"
    //% blockHidden=true
    //% weight=70
    export function makeHunter(target: HunterTarget): void {
        sendCommand("say role_hunter:" + target)
    }

    //% blockId=cmk_spawn_hunter_mob block="ハンターを $x $y $z にスポーンさせる"
    //% x.defl=0 y.defl=0 z.defl=0
    //% weight=69
    export function spawnHunterMob(x: number, y: number, z: number): void {
        sendCommand("scriptevent cmk:spawn_hunter " + x + "|" + y + "|" + z)
    }
}

function sendZoneCommand(area: string, color: ZoneColor, open: boolean): void {
    sendCommand("scriptevent cmk:zone_" + (open ? "open" : "close") + " " + area + "|" + color)
}

//% color="#E74C3C" weight=87 block="あかエリア"
namespace AreaA {
    //% blockId=cmk_open_area_a block="あかエリアの $color ゲートをひらく"
    //% color.defl=ZoneColor.Red
    //% weight=100
    export function open(color: ZoneColor): void {
        sendZoneCommand("A", color, true)
    }

    //% blockId=cmk_close_area_a block="あかエリアの $color ゲートをとじる"
    //% color.defl=ZoneColor.Red
    //% weight=90
    export function close(color: ZoneColor): void {
        sendZoneCommand("A", color, false)
    }
}

//% color="#3498DB" weight=86 block="あおエリア"
namespace AreaB {
    //% blockId=cmk_open_area_b block="あおエリアの $color ゲートをひらく"
    //% color.defl=ZoneColor.Red
    //% weight=100
    export function open(color: ZoneColor): void {
        sendZoneCommand("B", color, true)
    }

    //% blockId=cmk_close_area_b block="あおエリアの $color ゲートをとじる"
    //% color.defl=ZoneColor.Red
    //% weight=90
    export function close(color: ZoneColor): void {
        sendZoneCommand("B", color, false)
    }
}

//% color="#F1C40F" weight=85 block="きいろエリア"
namespace AreaC {
    //% blockId=cmk_open_area_c block="きいろエリアの $color ゲートをひらく"
    //% color.defl=ZoneColor.Red
    //% weight=100
    export function open(color: ZoneColor): void {
        sendZoneCommand("C", color, true)
    }

    //% blockId=cmk_close_area_c block="きいろエリアの $color ゲートをとじる"
    //% color.defl=ZoneColor.Red
    //% weight=90
    export function close(color: ZoneColor): void {
        sendZoneCommand("C", color, false)
    }
}

//% color="#2ECC71" weight=84 block="みどりエリア"
namespace AreaD {
    //% blockId=cmk_open_area_d block="みどりエリアの $color ゲートをひらく"
    //% color.defl=ZoneColor.Red
    //% weight=100
    export function open(color: ZoneColor): void {
        sendZoneCommand("D", color, true)
    }

    //% blockId=cmk_close_area_d block="みどりエリアの $color ゲートをとじる"
    //% color.defl=ZoneColor.Red
    //% weight=90
    export function close(color: ZoneColor): void {
        sendZoneCommand("D", color, false)
    }
}

//% color="#0071BC" weight=89 block="ミッション"
namespace Missions {
    let currentMissionNumber = MissionNumber.Mission1
    let currentMissionTrigger = 0
    let missionResult = 0

    //% blockId=cmk_on_remaining_time
    //% block="のこり $triggerSec びょうになったとき"
    //% blockHidden=true
    //% triggerSec.defl=30 triggerSec.min=0
    //% weight=110
    export function onRemainingTime(triggerSec: number, handler: () => void): void {
        player.onTellCommand("remaining_" + triggerSec, function () {
            currentMissionTrigger = triggerSec
            missionResult = 0
            handler()
        })
        sendCommand("scriptevent cmk:register_remaining " + triggerSec)
    }

    //% blockId=cmk_mission_duration block="$seconds びょう"
    //% seconds.defl=10 seconds.min=1
    //% blockHidden=true
    export function missionDuration(seconds: number): number {
        return seconds
    }

    //% blockId=cmk_mission_settings
    //% block="ミッション $missionNumber をせっていしてかいしする|ないようをひょうじ $message|しゅるい $missionType|クリアにひつようなにんずう $requiredPlayers|せいげんじかん $durationSec"
    //% missionNumber.defl=MissionNumber.Mission1
    //% message.defl="ボタンをおそう"
    //% missionType.defl=MissionType.Button
    //% requiredPlayers.defl=1 requiredPlayers.min=1 requiredPlayers.max=5
    //% durationSec.shadow=cmk_mission_duration
    //% inlineInputMode=external
    //% weight=100
    export function missionSettings(
        missionNumber: MissionNumber,
        message: string,
        missionType: MissionType,
        requiredPlayers: number,
        durationSec: number
    ): void {
        runMission(missionNumber, message, missionType, requiredPlayers, durationSec)
    }

    //% blockId=cmk_on_mission_finished
    //% block="ミッション $missionNumber が終わったとき"
    //% missionNumber.defl=MissionNumber.Mission1
    //% weight=98
    export function onMissionFinished(missionNumber: MissionNumber, handler: () => void): void {
        player.onTellCommand("mission_success_" + missionNumber, function () {
            currentMissionNumber = missionNumber
            missionResult = 1
            handler()
        })
        player.onTellCommand("mission_fail_" + missionNumber, function () {
            currentMissionNumber = missionNumber
            missionResult = 2
            handler()
        })
    }

    function runMission(
        missionNumber: MissionNumber,
        message: string,
        missionType: MissionType,
        requiredPlayers: number,
        durationSec: number
    ): void {
        currentMissionNumber = missionNumber
        missionResult = 0

        player.onTellCommand("mission_success_" + missionNumber, function () {
            missionResult = 1
        })
        player.onTellCommand("mission_fail_" + missionNumber, function () {
            missionResult = 2
        })

        sendCommand("scoreboard players set @s g_mission_trigger " + currentMissionTrigger)
        sendCommand("scoreboard players set @s g_mission_number " + currentMissionNumber)
        sendCommand("scoreboard players set @s g_mission_type " + missionType)
        sendCommand("scoreboard players set @s g_mission_duration " + durationSec)
        sendCommand("scriptevent cmk:mission_register " + missionNumber + "|" + currentMissionTrigger + "|" + missionType + "|" + durationSec + "|" + requiredPlayers + "|" + message)

        while (missionResult == 0) {
            loops.pause(100)
        }
    }

    //% blockId=cmk_mission_succeeded
    //% block="ミッションにせいこうした"
    //% weight=97
    export function missionSucceeded(): boolean {
        return missionResult == 1
    }

    //% blockId=cmk_mission_failed
    //% block="ミッションにしっぱいした"
    //% weight=96
    export function missionFailed(): boolean {
        return missionResult == 2
    }

    //% blockId=cmk_effect_slow block="$target にスピードていか $level を $seconds びょうつける"
    //% blockHidden=true
    //% level.defl=HunterLevel.Lv1
    //% seconds.defl=10 seconds.min=1
    //% weight=49
    export function giveSlowness(target: EffectTarget, level: HunterLevel, seconds: number): void {
        sendCommand("say effect_slow:" + target + ":" + level + ":" + seconds)
    }

}

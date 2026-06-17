let _timelimit = 5
let _lives = 3
let _bountyStart = 0
let _bountyInc = 5
let _countdown = 0

function sendCommand(command: string): void {
    player.execute(command)
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
    Button = 0,
    //% block="タイムアタック"
    TimeAttack = 1,
    //% block="サバイバル"
    Survival = 2
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
    //% block="🔴あか"
    Red = 0,
    //% block="🔵あお"
    Blue = 1,
    //% block="🟡きいろ"
    Yellow = 2,
    //% block="🟢みどり"
    Green = 3
}

enum ZoneSection {
    //% block="ぜんいき"
    All = 0,
    //% block="1"
    S1 = 1,
    //% block="2"
    S2 = 2,
    //% block="3"
    S3 = 3,
    //% block="4"
    S4 = 4,
    //% block="5"
    S5 = 5,
    //% block="6"
    S6 = 6,
    //% block="7"
    S7 = 7,
    //% block="8"
    S8 = 8,
    //% block="9"
    S9 = 9,
    //% block="10"
    S10 = 10,
    //% block="11"
    S11 = 11,
    //% block="12"
    S12 = 12,
    //% block="13"
    S13 = 13,
    //% block="14"
    S14 = 14,
    //% block="15"
    S15 = 15,
    //% block="16"
    S16 = 16
}

enum TargetPlayer {
    //% block="ぜんいん"
    All = 0,
    //% block="じぶん"
    Self = 1,
    //% block="ミッションせいこうした人"
    MissionSuccess = 2,
    //% block="ミッションしっぱいした人"
    MissionFail = 3,
    //% block="せんせい"
    Teacher = 4,
    //% block="スペクテイター"
    Spectator = 5
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
    //% weight=110
    export function extensionVersion(): string {
        return "1.0.7"
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
    //% value.defl=0 value.min=0 value.max=100000
    //% weight=80
    export function setBountyStart(value: number): void {
        _bountyStart = value
        sendCommand("scoreboard players set @s g_bounty_start " + value)
    }

    //% blockId=cmk_set_bounty_increment block="1びょうあたりのしょうきんを $value にする"
    //% value.defl=5 value.min=0 value.max=1000
    //% weight=70
    export function setBountyIncrement(value: number): void {
        _bountyInc = value
        sendCommand("scoreboard players set @s g_bounty_inc " + value)
    }

    //% blockId=cmk_start_game block="カウントダウン $countdown びょうで|ゲームをかいしする"
    //% countdown.defl=0 countdown.min=0 countdown.max=30
    //% inlineInputMode=external
    //% weight=59
    export function startGame(countdown: number): void {
        _countdown = countdown
        sendCommand("scoreboard players set @s g_countdown " + countdown)
        sendCommand("scriptevent cmk:start " + _timelimit + "|" + _countdown)
    }

    //% blockId=cmk_pause_game block="ゲームを一時停止する"
    //% weight=58
    export function pauseGame(): void {
        sendCommand("scriptevent cmk:pause")
    }

    //% blockId=cmk_on_player_caught block="プレイヤーがつかまったとき"
    //% weight=57
    export function onPlayerCaught(handler: () => void): void {
        player.onTellCommand("player_caught", handler)
    }

    //% blockId=cmk_every_seconds block="$seconds びょうごとにじっこう"
    //% seconds.defl=1 seconds.min=1 seconds.max=600
    //% weight=56
    export function everySeconds(seconds: number, handler: () => void): void {
        loops.forever(function () {
            loops.pause(seconds * 1000)
            handler()
        })
    }

    //% blockId=cmk_add_timelimit block="ゲームじかんを $value びょうふやす"
    //% value.defl=10 value.min=0 value.max=600
    //% weight=55
    export function addTimeLimit(value: number): void {
        _timelimit = _timelimit + value
        sendCommand("scriptevent cmk:timer_add " + value)
    }

    //% blockId=cmk_subtract_timelimit block="ゲームじかんを $value びょうへらす"
    //% value.defl=10 value.min=0 value.max=600
    //% weight=54
    export function subtractTimeLimit(value: number): void {
        _timelimit = Math.max(0, _timelimit - value)
        sendCommand("scriptevent cmk:timer_subtract " + value)
    }

    //% blockId=cmk_add_lives_setting block="ざんきを $value ふやす"
    //% value.defl=1 value.min=0 value.max=10
    //% weight=53
    export function addLives(value: number): void {
        _lives = _lives + value
        sendCommand("scriptevent cmk:lives_add " + value)
    }

    //% blockId=cmk_subtract_lives_setting block="ざんきを $value へらす"
    //% value.defl=1 value.min=0 value.max=10
    //% weight=52
    export function subtractLives(value: number): void {
        _lives = Math.max(0, _lives - value)
        sendCommand("scriptevent cmk:lives_subtract " + value)
    }

    //% blockId=cmk_add_bounty_setting block="しょうきんを $value ふやす"
    //% value.defl=100 value.min=0 value.max=100000
    //% weight=51
    export function addBounty(value: number): void {
        _bountyStart = _bountyStart + value
        sendCommand("scriptevent cmk:bounty_add " + value)
    }

    //% blockId=cmk_subtract_bounty_setting block="しょうきんを $value へらす"
    //% value.defl=100 value.min=0 value.max=100000
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

    //% blockId=cmk_get_half_timelimit block="ゲームじかん ÷ 2"
    //% weight=30
    export function halfTimeLimit(): number {
        return Math.floor(_timelimit / 2)
    }

    //% blockId=cmk_get_quarter_timelimit block="ゲームじかん ÷ 4"
    //% weight=20
    export function quarterTimeLimit(): number {
        return Math.floor(_timelimit / 4)
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

    //% blockId=cmk_resume_hunters block="ハンターをさいかいする"
    //% weight=79
    export function resumeHunters(): void {
        sendCommand("scriptevent cmk:resume_hunters")
    }
}

//% color="#0071BC" weight=80 block="ミッション"
namespace Missions {
    let currentMissionNumber = MissionNumber.Mission1
    let currentMissionTrigger = 0
    let missionResult = 0
    let isDefiningMission = false
    let missionMessages = ["", "", ""]
    let missionTypes = [MissionType.Button, MissionType.Button, MissionType.Button]
    let missionDurations = [10, 10, 10]
    let missionDefined = [false, false, false]
    let missionDefinitionClaimed = [false, false, false]

    //% blockId=cmk_create_mission
    //% block="ミッション $missionNumber をつくる"
    //% missionNumber.defl=MissionNumber.Mission1
    //% weight=120
    export function createMission(missionNumber: MissionNumber, handler: () => void): void {
        const missionIndex = missionNumber - 1
        if (missionDefinitionClaimed[missionIndex]) {
            return
        }

        missionDefinitionClaimed[missionIndex] = true
        const previousMissionNumber = currentMissionNumber
        currentMissionNumber = missionNumber
        isDefiningMission = true
        handler()
        isDefiningMission = false
        currentMissionNumber = previousMissionNumber
    }

    //% blockId=cmk_on_remaining_time
    //% block="のこり $triggerSec びょうになったとき"
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
    //% block="ミッションをせってい|ないようをひょうじ $message|しゅるい $missionType|せいげんじかん $durationSec"
    //% message.defl="ボタンをおそう"
    //% missionType.defl=MissionType.Button
    //% durationSec.shadow=cmk_mission_duration
    //% inlineInputMode=external
    //% weight=100
    export function missionSettings(
        message: string,
        missionType: MissionType,
        durationSec: number
    ): void {
        if (isDefiningMission) {
            const missionIndex = currentMissionNumber - 1
            missionMessages[missionIndex] = message
            missionTypes[missionIndex] = missionType
            missionDurations[missionIndex] = durationSec
            missionDefined[missionIndex] = true
            return
        }

        runMission(currentMissionNumber, message, missionType, durationSec)
    }

    //% blockId=cmk_start_mission
    //% block="ミッション $missionNumber をかいしする"
    //% missionNumber.defl=MissionNumber.Mission1
    //% weight=99
    export function startMission(missionNumber: MissionNumber): void {
        const missionIndex = missionNumber - 1
        if (!missionDefined[missionIndex]) {
            return
        }

        runMission(
            missionNumber,
            missionMessages[missionIndex],
            missionTypes[missionIndex],
            missionDurations[missionIndex]
        )
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
        sendCommand("scriptevent cmk:mission_register " + missionNumber + "|" + currentMissionTrigger + "|" + missionType + "|" + durationSec + "|" + message)

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

    //% blockId=cmk_open_zone block="くかく $color $section をひらく"
    //% weight=90
    export function openZone(color: ZoneColor, section: ZoneSection): void {
        sendCommand("say zone_open:" + color + ":" + section)
    }

    //% blockId=cmk_close_zone block="くかく $color $section をとじる"
    //% weight=89
    export function closeZone(color: ZoneColor, section: ZoneSection): void {
        sendCommand("say zone_close:" + color + ":" + section)
    }

    //% blockId=cmk_multiply_bounty block="しょうきんを $value ばいにする"
    //% value.defl=2 value.min=0
    //% weight=80
    export function multiplyBounty(value: number): void {
        sendCommand("scriptevent cmk:bounty_multiply " + value)
    }

    //% blockId=cmk_add_bounty block="しょうきんを $value ふやす"
    //% value.defl=100
    //% weight=79
    export function addBounty(value: number): void {
        sendCommand("scriptevent cmk:bounty_add " + value)
    }

    //% blockId=cmk_subtract_bounty block="しょうきんを $value へらす"
    //% value.defl=100 value.min=0
    //% weight=78
    export function subtractBounty(value: number): void {
        sendCommand("scriptevent cmk:bounty_subtract " + value)
    }

    //% blockId=cmk_set_bounty_increment_action block="1びょうごとのしょうきんを $value にする"
    //% value.defl=5 value.min=0
    //% weight=77
    export function setBountyIncrement(value: number): void {
        _bountyInc = value
        sendCommand("scriptevent cmk:bounty_increment " + value)
    }

    //% blockId=cmk_add_lives block="$target のざんきを $value ふやす"
    //% value.defl=1 value.min=0
    //% weight=70
    export function addLives(target: TargetPlayer, value: number): void {
        sendCommand("say lives_add:" + target + ":" + value)
    }

    //% blockId=cmk_subtract_lives block="$target のざんきを $value へらす"
    //% value.defl=1 value.min=0
    //% weight=69
    export function subtractLives(target: TargetPlayer, value: number): void {
        sendCommand("say lives_sub:" + target + ":" + value)
    }

    //% blockId=cmk_make_hunter block="$target をハンターにする"
    //% weight=60
    export function makeHunter(target: HunterTarget): void {
        sendCommand("say role_hunter:" + target)
    }

    //% blockId=cmk_spawn_hunter_mob block="ハンターを $x $y $z にスポーンさせる"
    //% x.defl=0 y.defl=0 z.defl=0
    //% weight=59
    export function spawnHunterMob(x: number, y: number, z: number): void {
        sendCommand("scriptevent cmk:spawn_hunter " + x + "|" + y + "|" + z)
    }

    //% blockId=cmk_effect_speed block="$target にスピード $level を $seconds びょうつける"
    //% level.defl=HunterLevel.Lv1
    //% seconds.defl=10 seconds.min=1
    //% weight=50
    export function giveSpeed(target: EffectTarget, level: HunterLevel, seconds: number): void {
        sendCommand("say effect_speed:" + target + ":" + level + ":" + seconds)
    }

    //% blockId=cmk_effect_slow block="$target にスピードていか $level を $seconds びょうつける"
    //% level.defl=HunterLevel.Lv1
    //% seconds.defl=10 seconds.min=1
    //% weight=49
    export function giveSlowness(target: EffectTarget, level: HunterLevel, seconds: number): void {
        sendCommand("say effect_slow:" + target + ":" + level + ":" + seconds)
    }

    //% blockId=cmk_stop_game block="ゲームをとめる"
    //% weight=40
    export function stopGame(): void {
        sendCommand("scriptevent cmk:stop")
        sendCommand("say game_stop")
    }
}

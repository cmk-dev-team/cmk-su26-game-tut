let _timelimit = 60
let _lives = 3
let _bountyStart = 100
let _bountyInc = 5
let _countdown = 5

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

//% color="#E6952C" weight=100 block="🟧 ゲームのせってい"
namespace GameSettings {
    //% blockId=cmk_set_timelimit block="ゲームじかんを $value にする"
    //% value.defl=60 value.min=1
    //% weight=100
    export function setTimeLimit(value: number): void {
        _timelimit = value
        sendCommand("scoreboard players set @s g_timelimit " + value)
    }

    //% blockId=cmk_set_lives block="ざんきを $value にする"
    //% value.defl=3 value.min=0
    //% weight=90
    export function setLives(value: number): void {
        _lives = value
        sendCommand("scoreboard players set @s g_lives_default " + value)
    }

    //% blockId=cmk_set_bounty_start block="しょうきんを $value にする"
    //% value.defl=100 value.min=0
    //% weight=80
    export function setBountyStart(value: number): void {
        _bountyStart = value
        sendCommand("scoreboard players set @s g_bounty_start " + value)
    }

    //% blockId=cmk_set_bounty_increment block="しょうきんUPを $value にする"
    //% value.defl=5 value.min=0
    //% weight=70
    export function setBountyIncrement(value: number): void {
        _bountyInc = value
        sendCommand("scoreboard players set @s g_bounty_inc " + value)
    }

    //% blockId=cmk_set_countdown block="カウントダウンを $value にする"
    //% value.defl=5 value.min=0
    //% weight=60
    export function setCountdown(value: number): void {
        _countdown = value
        sendCommand("scoreboard players set @s g_countdown " + value)
    }

    //% blockId=cmk_get_timelimit block="ゲームじかん"
    //% weight=50
    export function timeLimit(): number {
        return _timelimit
    }

    //% blockId=cmk_get_half_timelimit block="ゲームじかん ÷ 2"
    //% weight=40
    export function halfTimeLimit(): number {
        return Math.floor(_timelimit / 2)
    }

    //% blockId=cmk_get_quarter_timelimit block="ゲームじかん ÷ 4"
    //% weight=30
    export function quarterTimeLimit(): number {
        return Math.floor(_timelimit / 4)
    }

    //% blockId=cmk_get_lives block="ざんき"
    //% weight=20
    export function lives(): number {
        return _lives
    }

    //% blockId=cmk_get_bounty_start block="しょうきん"
    //% weight=10
    export function bountyStart(): number {
        return _bountyStart
    }
}

//% color="#D94F4F" weight=90 block="🟥 ハンターのせってい"
namespace HunterSettings {
    //% blockId=cmk_set_hunter_speed block="ハンターのすばやさを $level にする"
    //% level.defl=HunterLevel.Lv2
    //% weight=100
    export function setSpeed(level: HunterLevel): void {
        sendCommand("scoreboard players set @s g_hunter_spd " + level)
    }

    //% blockId=cmk_set_hunter_strength block="ハンターのつよさを $level にする"
    //% level.defl=HunterLevel.Lv2
    //% weight=90
    export function setStrength(level: HunterLevel): void {
        sendCommand("scoreboard players set @s g_hunter_str " + level)
    }
}

//% color="#4F7BD9" weight=80 block="🟦 ミッション"
namespace Missions {
    let currentMissionTrigger = 0
    let missionResult = 0

    //% blockId=cmk_on_remaining_time
    //% block="のこり $triggerSec びょうになったとき"
    //% triggerSec.defl=30 triggerSec.min=0
    //% weight=110
    export function onRemainingTime(triggerSec: number, handler: () => void): void {
        player.onChat("remaining_" + triggerSec, function () {
            currentMissionTrigger = triggerSec
            missionResult = 0
            handler()
        })
    }

    //% blockId=cmk_mission_settings
    //% block="ミッションのせってい|ないようをひょうじ $message|しゅるい $missionType|せいげんじかん $durationSec びょう"
    //% message.defl="ボタンをおそう"
    //% missionType.defl=MissionType.Button
    //% durationSec.defl=10 durationSec.min=1
    //% inlineInputMode=external
    //% weight=100
    export function missionSettings(
        message: string,
        missionType: MissionType,
        durationSec: number
    ): void {
        missionResult = 0

        player.onChat("mission_success_" + currentMissionTrigger, function () {
            missionResult = 1
        })
        player.onChat("mission_fail_" + currentMissionTrigger, function () {
            missionResult = 2
        })

        sendCommand("scoreboard players set @s g_mission_trigger " + currentMissionTrigger)
        sendCommand("scoreboard players set @s g_mission_type " + missionType)
        sendCommand("scoreboard players set @s g_mission_duration " + durationSec)
        sendCommand("say mission_register:" + currentMissionTrigger + ":" + missionType + ":" + durationSec + ":" + message)

        while (missionResult == 0) {
            loops.pause(100)
        }
    }

    //% blockId=cmk_mission_succeeded
    //% block="ミッションにせいこうした"
    //% weight=99
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
        sendCommand("say bounty_multiply:" + value)
    }

    //% blockId=cmk_add_bounty block="しょうきんに $value たす"
    //% value.defl=100
    //% weight=79
    export function addBounty(value: number): void {
        sendCommand("say bounty_add:" + value)
    }

    //% blockId=cmk_subtract_bounty block="しょうきんを $value へらす"
    //% value.defl=100 value.min=0
    //% weight=78
    export function subtractBounty(value: number): void {
        sendCommand("say bounty_sub:" + value)
    }

    //% blockId=cmk_set_bounty_increment_action block="1びょうごとのUPを $value にする"
    //% value.defl=5 value.min=0
    //% weight=77
    export function setBountyIncrement(value: number): void {
        _bountyInc = value
        sendCommand("scoreboard players set @s g_bounty_inc " + value)
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

    //% blockId=cmk_spawn_hunter_mob block="ハンターモブを $x $y $z にスポーンさせる"
    //% x.defl=0 y.defl=0 z.defl=0
    //% weight=59
    export function spawnHunterMob(x: number, y: number, z: number): void {
        sendCommand("say spawn_mob:" + x + ":" + y + ":" + z)
    }

    //% blockId=cmk_effect_speed block="$target にスピード $level を $seconds びょうつける"
    //% level.defl=HunterLevel.Lv1
    //% seconds.defl=10 seconds.min=1
    //% weight=50
    export function giveSpeed(target: EffectTarget, level: HunterLevel, seconds: number): void {
        sendCommand("say effect_speed:" + target + ":" + level + ":" + seconds)
    }

    //% blockId=cmk_effect_slow block="$target にスロウネス $level を $seconds びょうつける"
    //% level.defl=HunterLevel.Lv1
    //% seconds.defl=10 seconds.min=1
    //% weight=49
    export function giveSlowness(target: EffectTarget, level: HunterLevel, seconds: number): void {
        sendCommand("say effect_slow:" + target + ":" + level + ":" + seconds)
    }

    //% blockId=cmk_stop_game block="ゲームをとめる"
    //% weight=40
    export function stopGame(): void {
        sendCommand("say game_stop")
    }
}

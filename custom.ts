let _timelimit = 5
let _lives = 3
let _bountyStart = 0
let _bountyIncrement = 0
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

enum HunterSightRange {
    //% block="16"
    Range16 = 16,
    //% block="32"
    Range32 = 32,
    //% block="48"
    Range48 = 48,
    //% block="64"
    Range64 = 64,
    //% block="80"
    Range80 = 80
}

enum MissionType {
    //% block="ボタンを おす"
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
    //% jres=ZoneIcon.white
    White = 0,
    //% block="オレンジ"
    //% jres=ZoneIcon.orange
    Orange = 1,
    //% block="あかむらさき"
    //% jres=ZoneIcon.magenta
    Magenta = 2,
    //% block="そらいろ"
    //% jres=ZoneIcon.lightBlue
    LightBlue = 3,
    //% block="きいろ"
    //% jres=ZoneIcon.yellow
    Yellow = 4,
    //% block="きみどり"
    //% jres=ZoneIcon.lime
    Lime = 5,
    //% block="ピンク"
    //% jres=ZoneIcon.pink
    Pink = 6,
    //% block="はいいろ"
    //% jres=ZoneIcon.gray
    Gray = 7,
    //% block="うすいはいいろ"
    //% jres=ZoneIcon.lightGray
    LightGray = 8,
    //% block="あおみどり"
    //% jres=ZoneIcon.cyan
    Cyan = 9,
    //% block="むらさき"
    //% jres=ZoneIcon.purple
    Purple = 10,
    //% block="あお"
    //% jres=ZoneIcon.blue
    Blue = 11,
    //% block="ちゃいろ"
    //% jres=ZoneIcon.brown
    Brown = 12,
    //% block="みどり"
    //% jres=ZoneIcon.green
    Green = 13,
    //% block="あか"
    //% jres=ZoneIcon.red
    Red = 14,
    //% block="くろ"
    //% jres=ZoneIcon.black
    Black = 15
}

enum TargetPlayer {
    //% block="じぶん"
    Self = 1,
    //% block="ぜんいん"
    All = 0,
    //% block="ミッションに せいこうした 人"
    MissionSuccess = 2,
    //% block="ミッションに しっぱいした 人"
    MissionFail = 3
}

enum BountyChange {
    //% block="ふやす"
    Increase = 1,
    //% block="へらす"
    Decrease = 0
}

enum HunterTarget {
    //% block="じぶん"
    Self = 1,
    //% block="ミッションに しっぱいした 人"
    MissionFail = 3,
    //% block="せんせい"
    Teacher = 4,
    //% block="スペクテイター"
    Spectator = 5
}

enum EffectTarget {
    //% block="にげる 人 ぜんいん"
    AllRunner = 0,
    //% block="ハンター ぜんいん"
    AllHunter = 1,
    //% block="じぶん"
    Self = 2
}

//% color="#E86D26" weight=100 block="ゲームの せってい"
namespace GameSettings {
    //% blockId=cmk_extension_version block="れんけい バージョン"
    //% blockHidden=true
    //% weight=110
    export function extensionVersion(): string {
        return "1.0.16"
    }

    //% blockId=cmk_set_timelimit block="ゲーム じかんを $value びょうに する"
    //% value.defl=5 value.min=1 value.max=600
    //% weight=100
    export function setTimeLimit(value: number): void {
        _timelimit = value
        sendCommand("scoreboard players set @s g_timelimit " + value)
    }

    //% blockId=cmk_set_lives block="ざんきを $value に する"
    //% value.defl=3 value.min=0 value.max=10
    //% weight=90
    export function setLives(value: number): void {
        _lives = value
        sendCommand("scoreboard players set @s g_lives_default " + value)
    }

    //% blockId=cmk_set_bounty_start block="しょうきんを $value に する"
    //% value.defl=0
    //% weight=80
    export function setBountyStart(value: number): void {
        _bountyStart = value
        sendCommand("scoreboard players set @s g_bounty_start " + value)
    }

    //% blockId=cmk_start_game block="カウントダウン $countdown びょうで|ゲームを かいしする"
    //% countdown.defl=0 countdown.min=0 countdown.max=20
    //% weight=59
    export function startGame(countdown: number): void {
        _countdown = countdown
        sendCommand("scoreboard players set @s g_countdown " + countdown)
        sendCommand("scriptevent cmk:start " + _timelimit + "|" + _countdown)
    }

    //% blockId=cmk_pause_game block="ゲームを いちじ ていしする"
    //% weight=58
    export function pauseGame(): void {
        sendCommand("scriptevent cmk:pause")
    }

    //% blockId=cmk_end_game block="ゲームを しゅうりょうする"
    //% weight=57
    export function endGame(): void {
        sendCommand("scriptevent cmk:stop")
    }

    //% blockId=cmk_on_player_caught block="プレイヤーが つかまった とき"
    //% weight=56
    export function onPlayerCaught(handler: () => void): void {
        player.onTellCommand("player_caught", handler)
    }

    //% blockId=cmk_on_remaining_time
    //% block="のこり $triggerSec びょうに なった とき"
    //% triggerSec.defl=30 triggerSec.min=0
    //% weight=55
    export function onRemainingTime(triggerSec: number, handler: () => void): void {
        Missions.onRemainingTime(triggerSec, handler)
    }

    //% blockId=cmk_add_timelimit block="ゲーム じかんを $value びょう ふやす"
    //% value.defl=10 value.min=0 value.max=30
    //% weight=54
    export function addTimeLimit(value: number): void {
        _timelimit = _timelimit + value
        sendCommand("scriptevent cmk:timer_add " + value)
    }

    //% blockId=cmk_subtract_timelimit block="ゲーム じかんを $value びょう へらす"
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

    //% blockId=cmk_add_lives_target block="$target の ざんきを $value ふやす"
    //% target.defl=TargetPlayer.Self
    //% value.defl=1 value.min=0 value.max=10
    //% weight=53
    export function addLivesTo(target: TargetPlayer, value: number): void {
        _lives = _lives + value
        sendCommand("scriptevent cmk:lives_add " + target + "|" + value)
    }

    //% blockId=cmk_subtract_lives_target block="$target の ざんきを $value へらす"
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

    //% blockId=cmk_set_bounty_increment block="1びょうごとの しょうきんを $mode $value に する"
    //% mode.defl=BountyChange.Increase
    //% value.defl=100 value.min=0 value.max=10000
    //% weight=51
    export function setBountyIncrement(mode: BountyChange, value: number): void {
        _bountyIncrement = mode == BountyChange.Increase ? value : -value
        sendCommand("scoreboard players set @s g_bounty_inc " + _bountyIncrement)
        sendCommand("scriptevent cmk:bounty_increment " + _bountyIncrement)
    }

    //% blockId=cmk_subtract_bounty_setting block="しょうきんを $value へらす"
    //% value.defl=100
    //% weight=50
    export function subtractBounty(value: number): void {
        _bountyStart = Math.max(0, _bountyStart - value)
        sendCommand("scriptevent cmk:bounty_subtract " + value)
    }

    //% blockId=cmk_get_timelimit block="ゲーム じかん"
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

    //% blockId=cmk_get_bounty_increment block="1びょうごとの しょうきん"
    //% weight=8
    export function bountyIncrement(): number {
        return _bountyIncrement
    }
}

//% color="#E74C3C" weight=90 block="ハンター"
namespace HunterSettings {
    //% blockId=cmk_set_hunter_speed block="ハンターの すばやさを $level に する"
    //% level.defl=HunterLevel.Lv1
    //% weight=100
    export function setSpeed(level: HunterLevel): void {
        sendCommand("scriptevent cmk:set_hunter_speed " + level)
    }

    //% blockId=cmk_set_hunter_strength block="ハンターの しかいの はんいを $range ブロックに する"
    //% range.defl=HunterSightRange.Range16
    //% weight=90
    export function setStrength(range: HunterSightRange): void {
        sendCommand("scriptevent cmk:set_hunter_sight " + range)
    }

    //% blockId=cmk_stop_hunters block="ハンターを ていしさせる"
    //% weight=80
    export function stopHunters(): void {
        sendCommand("scriptevent cmk:stop_hunters")
    }

    //% blockId=cmk_resume_hunters block="ハンターを うごかす"
    //% weight=79
    export function resumeHunters(): void {
        sendCommand("scriptevent cmk:resume_hunters")
    }

    //% blockId=cmk_make_hunter block="$target を ハンターに する"
    //% blockHidden=true
    //% weight=70
    export function makeHunter(target: HunterTarget): void {
        sendCommand("say role_hunter:" + target)
    }

    //% blockId=cmk_spawn_hunter_mob block="ハンターを $x $y $z に スポーンさせる"
    //% x.defl=0 y.defl=0 z.defl=0
    //% weight=69
    export function spawnHunterMob(x: number, y: number, z: number): void {
        sendCommand("scriptevent cmk:spawn_hunter " + x + "|" + y + "|" + z)
    }
}

function sendZoneCommand(area: string, color: ZoneColor, open: boolean): void {
    sendCommand("scriptevent cmk:zone_" + (open ? "open" : "close") + " " + area + "|" + color)
}

//% color="#E74C3C" weight=87 block="あか エリア"
namespace AreaA {
    //% blockId=cmk_open_area_a block="あか エリアの $color ゲートを ひらく"
    //% color.defl=ZoneColor.Red
    //% color.fieldEditor="imagedropdown"
    //% color.fieldOptions.columns=4
    //% weight=100
    export function open(color: ZoneColor): void {
        sendZoneCommand("A", color, true)
    }

    //% blockId=cmk_close_area_a block="あか エリアの $color ゲートを とじる"
    //% color.defl=ZoneColor.Red
    //% color.fieldEditor="imagedropdown"
    //% color.fieldOptions.columns=4
    //% weight=90
    export function close(color: ZoneColor): void {
        sendZoneCommand("A", color, false)
    }
}

//% color="#3498DB" weight=86 block="あお エリア"
namespace AreaB {
    //% blockId=cmk_open_area_b block="あお エリアの $color ゲートを ひらく"
    //% color.defl=ZoneColor.Red
    //% color.fieldEditor="imagedropdown"
    //% color.fieldOptions.columns=4
    //% weight=100
    export function open(color: ZoneColor): void {
        sendZoneCommand("B", color, true)
    }

    //% blockId=cmk_close_area_b block="あお エリアの $color ゲートを とじる"
    //% color.defl=ZoneColor.Red
    //% color.fieldEditor="imagedropdown"
    //% color.fieldOptions.columns=4
    //% weight=90
    export function close(color: ZoneColor): void {
        sendZoneCommand("B", color, false)
    }
}

//% color="#F1C40F" weight=85 block="きいろ エリア"
namespace AreaC {
    //% blockId=cmk_open_area_c block="きいろ エリアの $color ゲートを ひらく"
    //% color.defl=ZoneColor.Red
    //% color.fieldEditor="imagedropdown"
    //% color.fieldOptions.columns=4
    //% weight=100
    export function open(color: ZoneColor): void {
        sendZoneCommand("C", color, true)
    }

    //% blockId=cmk_close_area_c block="きいろ エリアの $color ゲートを とじる"
    //% color.defl=ZoneColor.Red
    //% color.fieldEditor="imagedropdown"
    //% color.fieldOptions.columns=4
    //% weight=90
    export function close(color: ZoneColor): void {
        sendZoneCommand("C", color, false)
    }
}

//% color="#2ECC71" weight=84 block="みどり エリア"
namespace AreaD {
    //% blockId=cmk_open_area_d block="みどり エリアの $color ゲートを ひらく"
    //% color.defl=ZoneColor.Red
    //% color.fieldEditor="imagedropdown"
    //% color.fieldOptions.columns=4
    //% weight=100
    export function open(color: ZoneColor): void {
        sendZoneCommand("D", color, true)
    }

    //% blockId=cmk_close_area_d block="みどり エリアの $color ゲートを とじる"
    //% color.defl=ZoneColor.Red
    //% color.fieldEditor="imagedropdown"
    //% color.fieldOptions.columns=4
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
    //% block="のこり $triggerSec びょうに なった とき"
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
    //% block="ミッション $missionNumber を せっていして かいしする|ないようを ひょうじ $message|しゅるい $missionType|クリアに ひつような にんずう $requiredPlayers|せいげん じかん $durationSec"
    //% missionNumber.defl=MissionNumber.Mission1
    //% message.defl="ボタンを おそう"
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
    //% block="ミッション $missionNumber が おわった とき"
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
    //% block="ミッションに せいこうした"
    //% weight=97
    export function missionSucceeded(): boolean {
        return missionResult == 1
    }

    //% blockId=cmk_mission_failed
    //% block="ミッションに しっぱいした"
    //% weight=96
    export function missionFailed(): boolean {
        return missionResult == 2
    }

    //% blockId=cmk_effect_slow block="$target に スピード ていか $level を $seconds びょう つける"
    //% blockHidden=true
    //% level.defl=HunterLevel.Lv1
    //% seconds.defl=10 seconds.min=1
    //% weight=49
    export function giveSlowness(target: EffectTarget, level: HunterLevel, seconds: number): void {
        sendCommand("say effect_slow:" + target + ":" + level + ":" + seconds)
    }

}

let _timelimit = 5
let _lives = 3
let _bountyStart = 0
let _bountyIncrement = 0
let _countdown = 0

function sendCommand(command: string): void {
    player.execute(command)
}

function getMinecraftGameModeCommand(mode: MinecraftGameMode): string {
    switch (mode) {
        case MinecraftGameMode.Creative:
            return "creative"
        case MinecraftGameMode.Adventure:
            return "adventure"
        case MinecraftGameMode.Spectator:
            return "spectator"
        default:
            return "survival"
    }
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

enum ButtonType {
    //% block="オーク"
    Oak = 0,
    //% block="トウヒ"
    Spruce = 1,
    //% block="シラカバ"
    Birch = 2,
    //% block="ジャングル"
    Jungle = 3,
    //% block="アカシア"
    Acacia = 4,
    //% block="ダークオーク"
    DarkOak = 5,
    //% block="マングローブ"
    Mangrove = 6,
    //% block="サクラ"
    Cherry = 7,
    //% block="竹"
    Bamboo = 8,
    //% block="石"
    Stone = 9
}

enum MissionJudgeTiming {
    //% block="ボタンを おしたら すぐ"
    Immediate = 0,
    //% block="じかんぎれに なったら"
    OnTimeout = 1
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

enum GateState {
    //% block="とおれる"
    Open = 1,
    //% block="とおれない"
    Closed = 0
}

enum BuildingMarker {
    //% block="ペールオーク"
    //% jres=BuildingIcon.paleOak
    PaleOak = 0,
    //% block="あおみどりいろのようもう"
    //% jres=BuildingIcon.cyanWool
    CyanWool = 1,
    //% block="ネザーレンガ"
    //% jres=BuildingIcon.netherBricks
    NetherBricks = 2,
    //% block="いしレンガ"
    //% jres=BuildingIcon.stoneBricks
    StoneBricks = 3
}

enum BuildingType {
    //% block="白い家"
    WhiteHouse = 0,
    //% block="青い家"
    BlueHouse = 1,
    //% block="赤い家"
    RedHouse = 2,
    //% block="石の塔"
    StoneTower = 3
}

enum TargetPlayer {
    //% block="じぶん"
    Self = 1,
    //% block="ぜんいん"
    All = 0,
    //% block="ミッションに せいこうした 人"
    MissionSuccess = 2,
    //% block="ミッションに しっぱいした 人"
    MissionFail = 3,
    //% block="つかまった 人"
    Caught = 4
}

enum BountyChange {
    //% block="ふやす"
    Increase = 1,
    //% block="へらす"
    Decrease = 0
}

enum MinecraftGameMode {
    //% block="クリエイティブ"
    Creative = 0,
    //% block="アドベンチャー"
    Adventure = 1,
    //% block="サバイバル"
    Survival = 2,
    //% block="スペクテイター"
    Spectator = 3
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

enum HunterRemoveTarget {
    //% block="すべてのハンター"
    All = 0,
    //% block="ハンターA"
    HunterA = 1,
    //% block="ハンターB"
    HunterB = 2,
    //% block="ハンターC"
    HunterC = 3,
    //% block="ハンターD"
    HunterD = 4,
    //% block="ハンターE"
    HunterE = 5
}

enum EffectTarget {
    //% block="にげる 人 ぜんいん"
    AllRunner = 0,
    //% block="ハンター ぜんいん"
    AllHunter = 1,
    //% block="じぶん"
    Self = 2
}

//% color="#E04A3A" weight=98 block="ゲームしんこう" groups='["げーむ"]'
namespace GameSettings {
    //% blockId=cmk_extension_version block="れんけい バージョン"
    //% blockHidden=true
    //% weight=110
    export function extensionVersion(): string {
        return "1.0.28"
    }
}

//% color="#CC4BC3" weight=99 block="へんすう" groups='["せってい", "へんこう", "あたい"]'
namespace VariableBlocks {
    //% blockId=cmk_set_timelimit block="ゲーム じかんを $value びょうに する"
    //% value.defl=5 value.min=1 value.max=600
    //% group="せってい"
    //% weight=100
    export function setTimeLimit(value: number): void {
        _timelimit = value
        sendCommand("scriptevent cmk:timer_set " + value)
    }
}

//% color="#175BB4" weight=100 block="プレイヤー" groups='["せってい", "いべんと", "すぽーん"]'
namespace PlayerBlocks {
    //% blockId=cmk_set_game_mode block="ゲームモードを $mode に する"
    //% group="せってい"
    //% weight=95
    export function setGameMode(mode: MinecraftGameMode): void {
        sendCommand("gamemode " + getMinecraftGameModeCommand(mode) + " @s")
    }
}

namespace VariableBlocks {
    //% blockId=cmk_set_lives block="ざんきを $value に する"
    //% value.defl=3 value.min=0 value.max=10
    //% group="せってい"
    //% weight=90
    export function setLives(value: number): void {
        _lives = value
        sendCommand("scoreboard players set @s g_lives_default " + value)
    }

    //% blockId=cmk_set_bounty_start block="しょうきんを $value に する"
    //% value.defl=0
    //% group="せってい"
    //% weight=80
    export function setBountyStart(value: number): void {
        _bountyStart = value
        sendCommand("scoreboard players set @s g_bounty_start " + value)
    }
}

namespace GameSettings {
    //% blockId=cmk_start_game block="カウントダウン $countdown びょうで|ゲームを かいしする"
    //% countdown.defl=0 countdown.min=0 countdown.max=20
    //% group="げーむ"
    //% weight=59
    export function startGame(countdown: number): void {
        _countdown = countdown
        sendCommand("scoreboard players set @s g_countdown " + countdown)
        sendCommand("scriptevent cmk:start " + _timelimit + "|" + _countdown)
    }

    //% blockId=cmk_pause_game block="ゲームを いちじ ていしする"
    //% group="げーむ"
    //% weight=58
    export function pauseGame(): void {
        sendCommand("scriptevent cmk:pause")
    }

    //% blockId=cmk_end_game block="ゲームを しゅうりょうする"
    //% group="げーむ"
    //% weight=57
    export function endGame(): void {
        sendCommand("scriptevent cmk:stop")
    }
}

namespace PlayerBlocks {
    //% blockId=cmk_on_player_caught block="プレイヤーが つかまった とき"
    //% group="いべんと"
    //% weight=56
    export function onPlayerCaught(handler: () => void): void {
        player.onTellCommand("player_caught", handler)
    }

    //% blockId=cmk_on_chat_command block="チャットコマンド $command を にゅうりょくした とき"
    //% command.defl="start"
    //% group="いべんと"
    //% weight=55
    export function onChatCommand(command: string, handler: () => void): void {
        player.onChat(command, handler)
    }

    //% blockId=cmk_player_on_remaining_time
    //% block="のこり $triggerSec びょうに なった とき"
    //% triggerSec.defl=30 triggerSec.min=0
    //% group="いべんと"
    //% weight=54
    export function onRemainingTime(triggerSec: number, handler: () => void): void {
        Missions.onRemainingTime(triggerSec, handler)
    }

    //% blockId=cmk_player_position block="じぶんのばしょ"
    //% group="すぽーん"
    //% weight=53
    export function currentPosition(): Position {
        return player.position()
    }
}

namespace GameSettings {
    //% blockId=cmk_on_remaining_time
    //% block="のこり $triggerSec びょうに なった とき"
    //% blockHidden=true
    //% triggerSec.defl=30 triggerSec.min=0
    //% weight=55
    export function onRemainingTime(triggerSec: number, handler: () => void): void {
        Missions.onRemainingTime(triggerSec, handler)
    }
}

namespace VariableBlocks {
    //% blockId=cmk_add_timelimit block="ゲーム じかんを $value びょう ふやす"
    //% value.defl=10 value.min=0 value.max=30
    //% group="へんこう"
    //% weight=54
    export function addTimeLimit(value: number): void {
        _timelimit = _timelimit + value
        sendCommand("scriptevent cmk:timer_add " + value)
    }

    //% blockId=cmk_subtract_timelimit block="ゲーム じかんを $value びょう へらす"
    //% value.defl=10 value.min=0 value.max=30
    //% group="へんこう"
    //% weight=54
    export function subtractTimeLimit(value: number): void {
        _timelimit = Math.max(0, _timelimit - value)
        sendCommand("scriptevent cmk:timer_subtract " + value)
    }

    //% blockId=cmk_add_lives_setting block="ざんきを $value ふやす"
    //% blockHidden=true
    //% value.defl=1 value.min=0 value.max=10
    //% group="へんこう"
    //% weight=53
    export function addLives(value: number): void {
        _lives = _lives + value
        sendCommand("scriptevent cmk:lives_add " + value)
    }

    //% blockId=cmk_subtract_lives_setting block="ざんきを $value へらす"
    //% blockHidden=true
    //% value.defl=1 value.min=0 value.max=10
    //% group="へんこう"
    //% weight=52
    export function subtractLives(value: number): void {
        _lives = Math.max(0, _lives - value)
        sendCommand("scriptevent cmk:lives_subtract " + value)
    }

    //% blockId=cmk_add_lives_target block="$target の ざんきを $value ふやす"
    //% target.defl=TargetPlayer.Self
    //% value.defl=1 value.min=0 value.max=10
    //% group="へんこう"
    //% weight=53
    export function addLivesTo(target: TargetPlayer, value: number): void {
        _lives = _lives + value
        sendCommand("scriptevent cmk:lives_add " + target + "|" + value)
    }

    //% blockId=cmk_subtract_lives_target block="$target の ざんきを $value へらす"
    //% target.defl=TargetPlayer.Self
    //% value.defl=1 value.min=0 value.max=10
    //% group="へんこう"
    //% weight=52
    export function subtractLivesFrom(target: TargetPlayer, value: number): void {
        _lives = Math.max(0, _lives - value)
        sendCommand("scriptevent cmk:lives_subtract " + target + "|" + value)
    }

    //% blockId=cmk_add_bounty_setting block="しょうきんを $value ふやす"
    //% value.defl=100
    //% group="へんこう"
    //% weight=51
    export function addBounty(value: number): void {
        _bountyStart = _bountyStart + value
        sendCommand("scriptevent cmk:bounty_add " + value)
    }

    //% blockId=cmk_set_bounty_increment block="1びょうごとの しょうきんを $mode $value に する"
    //% mode.defl=BountyChange.Increase
    //% value.defl=100 value.min=0 value.max=10000
    //% group="せってい"
    //% weight=51
    export function setBountyIncrement(mode: BountyChange, value: number): void {
        _bountyIncrement = mode == BountyChange.Increase ? value : -value
        sendCommand("scoreboard players set @s g_bounty_inc " + _bountyIncrement)
        sendCommand("scriptevent cmk:bounty_increment " + _bountyIncrement)
    }

    //% blockId=cmk_subtract_bounty_setting block="しょうきんを $value へらす"
    //% value.defl=100
    //% group="へんこう"
    //% weight=50
    export function subtractBounty(value: number): void {
        _bountyStart = Math.max(0, _bountyStart - value)
        sendCommand("scriptevent cmk:bounty_subtract " + value)
    }

    //% blockId=cmk_get_timelimit block="ゲーム じかん"
    //% group="あたい"
    //% weight=40
    export function timeLimit(): number {
        return _timelimit
    }

    //% blockId=cmk_get_lives block="ざんき"
    //% group="あたい"
    //% weight=10
    export function lives(): number {
        return _lives
    }

    //% blockId=cmk_get_bounty_start block="しょうきん"
    //% group="あたい"
    //% weight=9
    export function bountyStart(): number {
        return _bountyStart
    }

    //% blockId=cmk_get_bounty_increment block="1びょうごとの しょうきん"
    //% group="あたい"
    //% weight=8
    export function bountyIncrement(): number {
        return _bountyIncrement
    }
}

//% color="#303030" weight=90 block="ハンター" groups='["せってい", "そうさ", "すぽーん", "さくじょ"]'
namespace HunterSettings {
    //% blockId=cmk_set_hunter_speed block="ハンターの すばやさを $level に する"
    //% level.defl=HunterLevel.Lv1
    //% group="せってい"
    //% weight=100
    export function setSpeed(level: HunterLevel): void {
        sendCommand("scriptevent cmk:set_hunter_speed " + level)
    }

    //% blockId=cmk_set_hunter_strength block="ハンターの みつける ひろさを $range ブロックに する"
    //% range.defl=HunterSightRange.Range16
    //% group="せってい"
    //% weight=90
    export function setStrength(range: HunterSightRange): void {
        sendCommand("scriptevent cmk:set_hunter_sight " + range)
    }

    //% blockId=cmk_stop_hunters block="$target を ていしさせる"
    //% target.defl=HunterRemoveTarget.All
    //% group="そうさ"
    //% weight=80
    export function stopHunters(target: HunterRemoveTarget): void {
        sendCommand("scriptevent cmk:stop_hunters " + target)
    }

    //% blockId=cmk_resume_hunters block="$target を きどうする"
    //% target.defl=HunterRemoveTarget.All
    //% group="そうさ"
    //% weight=79
    export function resumeHunters(target: HunterRemoveTarget): void {
        sendCommand("scriptevent cmk:resume_hunters " + target)
    }

    //% blockId=cmk_make_hunter block="$target を ハンターに する"
    //% blockHidden=true
    //% group="せってい"
    //% weight=70
    export function makeHunter(target: HunterTarget): void {
        sendCommand("say role_hunter:" + target)
    }

    //% blockId=cmk_spawn_hunter_at block="ハンターを $position に スポーンさせる"
    //% position.shadow=cmk_player_position
    //% group="すぽーん"
    //% weight=69
    export function spawnHunterAt(position: Position): void {
        sendCommand("scriptevent cmk:spawn_hunter " + position.getValue(Axis.X) + "|" + position.getValue(Axis.Y) + "|" + position.getValue(Axis.Z))
    }

    //% blockId=cmk_spawn_hunter_mob block="ハンターを $x $y $z に スポーンさせる"
    //% blockHidden=true
    //% x.defl=0 y.defl=0 z.defl=0
    //% group="すぽーん"
    //% weight=68
    export function spawnHunterMob(x: number, y: number, z: number): void {
        sendCommand("scriptevent cmk:spawn_hunter " + x + "|" + y + "|" + z)
    }

    //% blockId=cmk_remove_hunter block="$target を さくじょする"
    //% target.defl=HunterRemoveTarget.All
    //% group="さくじょ"
    //% weight=67
    export function removeHunter(target: HunterRemoveTarget): void {
        sendCommand("scriptevent cmk:remove_hunter " + target)
    }
}

function sendZoneCommand(area: string, color: ZoneColor, open: boolean): void {
    sendCommand("scriptevent cmk:zone_" + (open ? "open" : "close") + " " + area + "|" + color)
}

//% color="#CF7475" weight=87 block="チーム オオカミ" groups='["げーと"]'
namespace AreaA {
    //% blockId=cmk_set_area_a_gate block="エリア $color いろ ゲートブロックを $state ようにする"
    //% color.defl=ZoneColor.Red
    //% color.fieldEditor="imagedropdown"
    //% color.fieldOptions.columns=4
    //% state.defl=GateState.Open
    //% group="げーと"
    //% weight=100
    export function setGate(color: ZoneColor, state: GateState): void {
        sendZoneCommand("A", color, state == GateState.Open)
    }

    //% blockId=cmk_open_area_a block="エリア「$color」ゲートブロックを とおれる ようにする"
    //% blockHidden=true
    //% color.defl=ZoneColor.Red
    //% color.fieldEditor="imagedropdown"
    //% color.fieldOptions.columns=4
    //% weight=100
    export function open(color: ZoneColor): void {
        sendZoneCommand("A", color, true)
    }

    //% blockId=cmk_close_area_a block="エリア「$color」ゲートブロックを とおれない ようにする"
    //% blockHidden=true
    //% color.defl=ZoneColor.Red
    //% color.fieldEditor="imagedropdown"
    //% color.fieldOptions.columns=4
    //% weight=90
    export function close(color: ZoneColor): void {
        sendZoneCommand("A", color, false)
    }
}

//% color="#567D43" weight=86 block="チーム クリーパー" groups='["げーと"]'
namespace AreaB {
    //% blockId=cmk_set_area_b_gate block="エリア $color いろ ゲートブロックを $state ようにする"
    //% color.defl=ZoneColor.Red
    //% color.fieldEditor="imagedropdown"
    //% color.fieldOptions.columns=4
    //% state.defl=GateState.Open
    //% group="げーと"
    //% weight=100
    export function setGate(color: ZoneColor, state: GateState): void {
        sendZoneCommand("B", color, state == GateState.Open)
    }

    //% blockId=cmk_open_area_b block="エリア「$color」ゲートブロックを とおれる ようにする"
    //% blockHidden=true
    //% color.defl=ZoneColor.Red
    //% color.fieldEditor="imagedropdown"
    //% color.fieldOptions.columns=4
    //% weight=100
    export function open(color: ZoneColor): void {
        sendZoneCommand("B", color, true)
    }

    //% blockId=cmk_close_area_b block="エリア「$color」ゲートブロックを とおれない ようにする"
    //% blockHidden=true
    //% color.defl=ZoneColor.Red
    //% color.fieldEditor="imagedropdown"
    //% color.fieldOptions.columns=4
    //% weight=90
    export function close(color: ZoneColor): void {
        sendZoneCommand("B", color, false)
    }
}

//% color="#CF9450" weight=85 block="チーム アレックス" groups='["げーと"]'
namespace AreaC {
    //% blockId=cmk_set_area_c_gate block="エリア $color いろ ゲートブロックを $state ようにする"
    //% color.defl=ZoneColor.Red
    //% color.fieldEditor="imagedropdown"
    //% color.fieldOptions.columns=4
    //% state.defl=GateState.Open
    //% group="げーと"
    //% weight=100
    export function setGate(color: ZoneColor, state: GateState): void {
        sendZoneCommand("C", color, state == GateState.Open)
    }

    //% blockId=cmk_open_area_c block="エリア「$color」ゲートブロックを とおれる ようにする"
    //% blockHidden=true
    //% color.defl=ZoneColor.Red
    //% color.fieldEditor="imagedropdown"
    //% color.fieldOptions.columns=4
    //% weight=100
    export function open(color: ZoneColor): void {
        sendZoneCommand("C", color, true)
    }

    //% blockId=cmk_close_area_c block="エリア「$color」ゲートブロックを とおれない ようにする"
    //% blockHidden=true
    //% color.defl=ZoneColor.Red
    //% color.fieldEditor="imagedropdown"
    //% color.fieldOptions.columns=4
    //% weight=90
    export function close(color: ZoneColor): void {
        sendZoneCommand("C", color, false)
    }
}

//% color="#7C5582" weight=84 block="チーム エンダーマン" groups='["げーと"]'
namespace AreaD {
    //% blockId=cmk_set_area_d_gate block="エリア $color いろ ゲートブロックを $state ようにする"
    //% color.defl=ZoneColor.Red
    //% color.fieldEditor="imagedropdown"
    //% color.fieldOptions.columns=4
    //% state.defl=GateState.Open
    //% group="げーと"
    //% weight=100
    export function setGate(color: ZoneColor, state: GateState): void {
        sendZoneCommand("D", color, state == GateState.Open)
    }

    //% blockId=cmk_open_area_d block="エリア「$color」ゲートブロックを とおれる ようにする"
    //% blockHidden=true
    //% color.defl=ZoneColor.Red
    //% color.fieldEditor="imagedropdown"
    //% color.fieldOptions.columns=4
    //% weight=100
    export function open(color: ZoneColor): void {
        sendZoneCommand("D", color, true)
    }

    //% blockId=cmk_close_area_d block="エリア「$color」ゲートブロックを とおれない ようにする"
    //% blockHidden=true
    //% color.defl=ZoneColor.Red
    //% color.fieldEditor="imagedropdown"
    //% color.fieldOptions.columns=4
    //% weight=90
    export function close(color: ZoneColor): void {
        sendZoneCommand("D", color, false)
    }
}

//% color="#C58B45" weight=83 block="けんちく" groups='["たてる", "さくじょ"]'
namespace BuildingBlocks {
    //% blockId=cmk_build_structure block="あしもとに $marker ブロックがあったら たてもの $building をたてる"
    //% marker.defl=BuildingMarker.PaleOak
    //% marker.fieldEditor="imagedropdown"
    //% marker.fieldOptions.columns=4
    //% building.defl=BuildingType.WhiteHouse
    //% group="たてる"
    //% weight=110
    export function build(marker: BuildingMarker, building: BuildingType): void {
        sendCommand("scriptevent cmk:building_place " + marker + "|" + building)
    }

    //% blockId=cmk_build_white_house block="あしもとに ペールオーク ブロックがあったら たてもの 白い家 をたてる"
    //% blockHidden=true
    //% group="たてる"
    //% weight=100
    export function buildWhiteHouse(): void {
        sendCommand("scriptevent cmk:building_place 0")
    }

    //% blockId=cmk_build_blue_house block="あしもとに あおみどりいろのようもう ブロックがあったら たてもの 青い家 をたてる"
    //% blockHidden=true
    //% group="たてる"
    //% weight=90
    export function buildBlueHouse(): void {
        sendCommand("scriptevent cmk:building_place 1")
    }

    //% blockId=cmk_build_red_house block="あしもとに ネザーレンガ ブロックがあったら たてもの 赤い家 をたてる"
    //% blockHidden=true
    //% group="たてる"
    //% weight=80
    export function buildRedHouse(): void {
        sendCommand("scriptevent cmk:building_place 2")
    }

    //% blockId=cmk_build_stone_tower block="あしもとに いしレンガ ブロックがあったら たてもの 石の塔 をたてる"
    //% blockHidden=true
    //% group="たてる"
    //% weight=70
    export function buildStoneTower(): void {
        sendCommand("scriptevent cmk:building_place 3")
    }

    //% blockId=cmk_remove_selected_building block="あしもとに $marker ブロックがあったら たてものを さくじょする"
    //% marker.defl=BuildingMarker.PaleOak
    //% marker.fieldEditor="imagedropdown"
    //% marker.fieldOptions.columns=4
    //% group="さくじょ"
    //% weight=100
    export function removeSelectedBuilding(marker: BuildingMarker): void {
        sendCommand("scriptevent cmk:building_remove " + marker)
    }

    //% blockId=cmk_remove_building block="あしもとに けんちくブロックがあったら たてものを さくじょする"
    //% blockHidden=true
    export function removeBuilding(): void {
        sendCommand("scriptevent cmk:building_remove")
    }
}

//% color="#2FB3D0" weight=89 block="ミッション" groups='["いべんと", "せってい", "けっか"]'
namespace Missions {
    let currentMissionNumber = MissionNumber.Mission1
    let currentMissionTrigger = 0
    let missionResult = 0
    let missionTimeout1 = false
    let missionTimeout2 = false
    let missionTimeout3 = false
    let oakButtonPressed = false
    let spruceButtonPressed = false
    let birchButtonPressed = false
    let jungleButtonPressed = false
    let acaciaButtonPressed = false
    let darkOakButtonPressed = false
    let mangroveButtonPressed = false
    let cherryButtonPressed = false
    let bambooButtonPressed = false
    let stoneButtonPressed = false

    function resetMissionFlags(missionNumber: MissionNumber): void {
        if (missionNumber == MissionNumber.Mission1) {
            missionTimeout1 = false
        } else if (missionNumber == MissionNumber.Mission2) {
            missionTimeout2 = false
        } else {
            missionTimeout3 = false
        }
        resetButtonFlags()
    }

    function resetButtonFlags(): void {
        oakButtonPressed = false
        spruceButtonPressed = false
        birchButtonPressed = false
        jungleButtonPressed = false
        acaciaButtonPressed = false
        darkOakButtonPressed = false
        mangroveButtonPressed = false
        cherryButtonPressed = false
        bambooButtonPressed = false
        stoneButtonPressed = false
    }

    function setMissionTimedOut(missionNumber: MissionNumber): void {
        if (missionNumber == MissionNumber.Mission1) {
            missionTimeout1 = true
        } else if (missionNumber == MissionNumber.Mission2) {
            missionTimeout2 = true
        } else {
            missionTimeout3 = true
        }
    }

    function getButtonTypeKey(buttonType: ButtonType): string {
        if (buttonType == ButtonType.Oak) {
            return "oak"
        } else if (buttonType == ButtonType.Spruce) {
            return "spruce"
        } else if (buttonType == ButtonType.Birch) {
            return "birch"
        } else if (buttonType == ButtonType.Jungle) {
            return "jungle"
        } else if (buttonType == ButtonType.Acacia) {
            return "acacia"
        } else if (buttonType == ButtonType.DarkOak) {
            return "dark_oak"
        } else if (buttonType == ButtonType.Mangrove) {
            return "mangrove"
        } else if (buttonType == ButtonType.Cherry) {
            return "cherry"
        } else if (buttonType == ButtonType.Bamboo) {
            return "bamboo"
        }
        return "stone"
    }

    function setButtonPressed(buttonType: ButtonType): void {
        if (buttonType == ButtonType.Oak) {
            oakButtonPressed = true
        } else if (buttonType == ButtonType.Spruce) {
            spruceButtonPressed = true
        } else if (buttonType == ButtonType.Birch) {
            birchButtonPressed = true
        } else if (buttonType == ButtonType.Jungle) {
            jungleButtonPressed = true
        } else if (buttonType == ButtonType.Acacia) {
            acaciaButtonPressed = true
        } else if (buttonType == ButtonType.DarkOak) {
            darkOakButtonPressed = true
        } else if (buttonType == ButtonType.Mangrove) {
            mangroveButtonPressed = true
        } else if (buttonType == ButtonType.Cherry) {
            cherryButtonPressed = true
        } else if (buttonType == ButtonType.Bamboo) {
            bambooButtonPressed = true
        } else {
            stoneButtonPressed = true
        }
    }

    function hasMissionTimedOut(missionNumber: MissionNumber): boolean {
        if (missionNumber == MissionNumber.Mission1) {
            return missionTimeout1
        } else if (missionNumber == MissionNumber.Mission2) {
            return missionTimeout2
        }
        return missionTimeout3
    }

    function hasButtonPressed(buttonType: ButtonType): boolean {
        if (buttonType == ButtonType.Oak) {
            return oakButtonPressed
        } else if (buttonType == ButtonType.Spruce) {
            return spruceButtonPressed
        } else if (buttonType == ButtonType.Birch) {
            return birchButtonPressed
        } else if (buttonType == ButtonType.Jungle) {
            return jungleButtonPressed
        } else if (buttonType == ButtonType.Acacia) {
            return acaciaButtonPressed
        } else if (buttonType == ButtonType.DarkOak) {
            return darkOakButtonPressed
        } else if (buttonType == ButtonType.Mangrove) {
            return mangroveButtonPressed
        } else if (buttonType == ButtonType.Cherry) {
            return cherryButtonPressed
        } else if (buttonType == ButtonType.Bamboo) {
            return bambooButtonPressed
        }
        return stoneButtonPressed
    }

    //% blockId=cmk_on_remaining_time
    //% block="のこり $triggerSec びょうに なった とき"
    //% blockHidden=true
    //% triggerSec.defl=30 triggerSec.min=0
    //% group="いべんと"
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
    //% group="せってい"
    export function missionDuration(seconds: number): number {
        return seconds
    }

    //% blockId=cmk_mission_settings
    //% block="ミッション $missionNumber を せっていして かいしする|ないようを ひょうじ $message|しゅるい $missionType|クリアに ひつような にんずう $requiredPlayers|せいげん じかん $durationSec|クリア はんてい $judgeTiming"
    //% missionNumber.defl=MissionNumber.Mission1
    //% message.defl="ボタンを おそう"
    //% missionType.defl=MissionType.Button
    //% requiredPlayers.defl=1 requiredPlayers.min=1 requiredPlayers.max=5
    //% durationSec.shadow=cmk_mission_duration
    //% judgeTiming.defl=MissionJudgeTiming.Immediate
    //% inlineInputMode=external
    //% group="せってい"
    //% weight=100
    export function missionSettings(
        missionNumber: MissionNumber,
        message: string,
        missionType: MissionType,
        requiredPlayers: number,
        durationSec: number,
        judgeTiming: MissionJudgeTiming
    ): void {
        runMission(missionNumber, message, missionType, requiredPlayers, durationSec, judgeTiming)
    }

    //% blockId=cmk_on_mission_timeout
    //% block="ミッション $missionNumber が じかんぎれの とき"
    //% missionNumber.defl=MissionNumber.Mission1
    //% group="いべんと"
    //% weight=99
    export function onMissionTimeout(missionNumber: MissionNumber, handler: () => void): void {
        player.onTellCommand("mission_timeout_" + missionNumber, function () {
            currentMissionNumber = missionNumber
            setMissionTimedOut(missionNumber)
            handler()
        })
    }

    //% blockId=cmk_on_mission_button_pressed
    //% block="$buttonType の ボタンを おした とき"
    //% buttonType.defl=ButtonType.Oak
    //% group="いべんと"
    //% weight=98
    export function onButtonPressed(buttonType: ButtonType, handler: () => void): void {
        player.onTellCommand("button_pressed_" + getButtonTypeKey(buttonType), function () {
            setButtonPressed(buttonType)
            handler()
        })
    }

    //% blockId=cmk_on_mission_finished
    //% block="ミッション $missionNumber が おわった とき"
    //% missionNumber.defl=MissionNumber.Mission1
    //% group="いべんと"
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
        durationSec: number,
        judgeTiming: MissionJudgeTiming
    ): void {
        currentMissionNumber = missionNumber
        missionResult = 0
        resetMissionFlags(missionNumber)

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
        sendCommand("scriptevent cmk:mission_register " + missionNumber + "|" + currentMissionTrigger + "|" + missionType + "|" + durationSec + "|" + requiredPlayers + "|" + judgeTiming + "|" + message)

        while (missionResult == 0) {
            loops.pause(100)
        }
    }

    //% blockId=cmk_mission_succeeded
    //% block="ミッションに せいこうした"
    //% group="けっか"
    //% weight=97
    export function missionSucceeded(): boolean {
        return missionResult == 1
    }

    //% blockId=cmk_mission_failed
    //% block="ミッションに しっぱいした"
    //% group="けっか"
    //% weight=96
    export function missionFailed(): boolean {
        return missionResult == 2
    }

    //% blockId=cmk_mission_timed_out
    //% block="ミッション $missionNumber が じかんぎれに なった"
    //% missionNumber.defl=MissionNumber.Mission1
    //% group="けっか"
    //% weight=94
    export function missionTimedOut(missionNumber: MissionNumber): boolean {
        return hasMissionTimedOut(missionNumber)
    }

    //% blockId=cmk_button_was_pressed
    //% block="$buttonType の ボタンが おされた"
    //% buttonType.defl=ButtonType.Oak
    //% group="けっか"
    //% weight=93
    export function buttonWasPressed(buttonType: ButtonType): boolean {
        return hasButtonPressed(buttonType)
    }

    //% blockId=cmk_effect_slow block="$target に スピード ていか $level を $seconds びょう つける"
    //% blockHidden=true
    //% level.defl=HunterLevel.Lv1
    //% seconds.defl=10 seconds.min=1
    //% group="けっか"
    //% weight=49
    export function giveSlowness(target: EffectTarget, level: HunterLevel, seconds: number): void {
        sendCommand("say effect_slow:" + target + ":" + level + ":" + seconds)
    }

}

let _timelimit = 5
let _lives = 1
let _bountyStart = 0
let _bountyIncrement = 0
let _countdown = 0
let localGameGeneration = 0
let localGameTimerWatchEnabled = false

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

enum BuildingType {
    //% block="あかいコンビニ"
    //% jres=BuildingIcon.connbini_a
    RedConvenienceStore = 0,
    //% block="みどりのコンビニ"
    //% jres=BuildingIcon.connbini_b
    GreenConvenienceStore = 1,
    //% block="そらいろテラコッタのビル"
    //% jres=BuildingIcon.building_a
    LightBlueTerracottaBuilding = 2,
    //% block="あかいテラコッタのビル"
    //% jres=BuildingIcon.building_b
    RedTerracottaBuilding = 3,
    //% block="あかいいえ"
    //% jres=BuildingIcon.house_red
    RedHouse = 4,
    //% block="みどりのいえ"
    //% jres=BuildingIcon.house_green
    GreenHouse = 5,
    //% block="レンガのめいろ"
    //% jres=BuildingIcon.brick_maze
    BrickMaze = 6,
    //% block="おり（タワー）"
    //% jres=BuildingIcon.prison_tower
    PrisonTower = 7,
    //% block="おり（しかく）"
    //% jres=BuildingIcon.prison_square
    PrisonSquare = 8,
    //% block="いけ"
    //% jres=BuildingIcon.pond
    Pond = 9,
    //% block="しげみ"
    //% jres=BuildingIcon.sigemi
    Bushes = 10,
    //% block="トンネル"
    //% jres=BuildingIcon.tunnel
    Tunnel = 11,
    //% block="まるいしタワー"
    //% jres=BuildingIcon.tower_cobble
    CobblestoneTower = 12,
    //% block="しぜん"
    //% jres=BuildingIcon.nature
    Nature = 13,
    //% block="エンダーマンのぞう"
    //% jres=BuildingIcon.enderman
    EndermanStatue = 14,
    //% block="おおきなさぎょうだい"
    //% jres=BuildingIcon.crafting_table
    LargeCraftingTable = 15
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

enum PlayerSelector {
    //% block="じぶん"
    Self = 1,
    //% block="ミッションに せいこうした 人"
    MissionSuccess = 2,
    //% block="ミッションに しっぱいした 人"
    MissionFail = 3,
    //% block="ぜんいん"
    All = 0,
    //% block="ランダム"
    Random = 4
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
    //% block="ハンターA（ゾンビ）"
    HunterA = 1,
    //% block="ハンターB（スケルトン）"
    HunterB = 2,
    //% block="ハンターC（クリーパー）"
    HunterC = 3,
    //% block="ハンターD（スティーブ）"
    HunterD = 4,
    //% block="ハンターE（ピグリン）"
    HunterE = 5
}

enum HunterType {
    //% block="ハンターA（ゾンビ）"
    HunterA = 1,
    //% block="ハンターB（スケルトン）"
    HunterB = 2,
    //% block="ハンターC（クリーパー）"
    HunterC = 3,
    //% block="ハンターD（スティーブ）"
    HunterD = 4,
    //% block="ハンターE（ピグリン）"
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

//% color="#E04A3A" weight=98 block="ゲームしんこう" groups='["ゲーム"]'
namespace GameSettings {
    //% blockId=cmk_extension_version block="れんけい バージョン"
    //% blockHidden=true
    //% weight=110
    export function extensionVersion(): string {
        return "1.0.71"
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

    //% blockId=cmk_set_countdown block="カウントダウンを $value びょうに する"
    //% blockHidden=true
    //% value.defl=0 value.min=0 value.max=20
    //% group="せってい"
    //% weight=95
    export function setCountdown(value: number): void {
        _countdown = value
        sendCommand("scoreboard players set @s g_countdown " + value)
    }
}

//% color="#175BB4" weight=100 block="プレイヤー" groups='["せってい", "ひょうじ", "イベント", "スポーン", "テレポート", "セレクター", "ゲームモード"]'
namespace PlayerBlocks {
    //% blockId=cmk_set_game_mode block="ゲームモードを $mode に する"
    //% group="ゲームモード"
    //% weight=1
    export function setGameMode(mode: MinecraftGameMode): void {
        sendCommand("gamemode " + getMinecraftGameModeCommand(mode) + " @s")
    }

    //% blockId=cmk_send_message block="メッセージ $message を おくる"
    //% blockHidden=true
    //% message.defl="こんにちは"
    //% group="ひょうじ"
    //% weight=90
    export function sendMessage(message: string): void {
        player.say(message)
    }

    //% blockId=cmk_show_title block="タイトル $title を ひょうじする"
    //% blockHidden=true
    //% title.defl="スタート"
    //% group="ひょうじ"
    //% weight=89
    export function showTitle(title: string): void {
        sendCommand("title @s title " + title)
    }

    //% blockId=cmk_send_message_v2 block="$target に メッセージ $message を おくる"
    //% target.shadow=cmk_player_selector
    //% message.defl="こんにちは"
    //% group="ひょうじ"
    //% weight=90
    export function sendMessageTo(target: number, message: string): void {
        sendCommand("scriptevent cmk:send_message " + target + "|" + message)
    }

    //% blockId=cmk_show_title_v2 block="$target に タイトル $title を ひょうじする"
    //% target.shadow=cmk_player_selector
    //% title.defl="スタート"
    //% group="ひょうじ"
    //% weight=89
    export function showTitleTo(target: number, title: string): void {
        sendCommand("scriptevent cmk:show_title " + target + "|" + title)
    }
}

namespace VariableBlocks {
    //% blockId=cmk_set_lives block="ざんきを $value に する"
    //% value.defl=1 value.min=1 value.max=10
    //% group="せってい"
    //% weight=90
    export function setLives(value: number): void {
        _lives = Math.max(1, value)
        sendCommand("scoreboard players set @s g_lives_default " + _lives)
    }

    //% blockId=cmk_set_bounty_start block="しょうきんを $value に する"
    //% value.defl=0
    //% group="せってい"
    //% weight=80
    export function setBountyStart(value: number): void {
        _bountyStart = Math.max(0, value)
        sendCommand("scriptevent cmk:bounty_set " + _bountyStart)
    }
}

namespace GameSettings {
    //% blockId=cmk_start_game block="ゲームを かいしする||カウントダウンを せってい $countdown びょう"
    //% countdown.defl=0 countdown.min=0 countdown.max=20
    //% expandableArgumentMode="enabled"
    //% inlineInputMode=external
    //% group="ゲーム"
    //% weight=59
    export function startGame(countdown?: number): void {
        if (countdown !== undefined) {
            _countdown = countdown
        }
        localGameGeneration++
        const startingGeneration = localGameGeneration
        localGameTimerWatchEnabled = false
        sendCommand("scoreboard players set @s g_countdown " + _countdown)
        sendCommand(
            "scriptevent cmk:start "
            + player.name() + "|"
            + _timelimit + "|"
            + _countdown + "|"
            + _bountyStart + "|"
            + _bountyIncrement
        )
        loops.runInBackground(function () {
            loops.pause(250)
            if (localGameGeneration == startingGeneration) {
                localGameTimerWatchEnabled = true
            }
        })
    }

    //% blockId=cmk_pause_game block="ゲームを いちじ ていしする"
    //% group="ゲーム"
    //% weight=58
    export function pauseGame(): void {
        sendCommand("scriptevent cmk:pause")
    }

    //% blockId=cmk_end_game block="ゲームを しゅうりょうする"
    //% group="ゲーム"
    //% weight=57
    export function endGame(): void {
        localGameTimerWatchEnabled = false
        sendCommand("scriptevent cmk:stop")
    }
}

namespace PlayerBlocks {
    //% blockId=cmk_on_player_caught block="プレイヤーが つかまった とき"
    //% group="イベント"
    //% weight=56
    export function onPlayerCaught(handler: () => void): void {
        player.onTellCommand("player_caught", handler)
    }

    //% blockId=cmk_on_chat_command block="チャットコマンド $command を にゅうりょくした とき"
    //% command.defl="go"
    //% group="イベント"
    //% weight=55
    export function onChatCommand(command: string, handler: () => void): void {
        player.onChat(command, handler)
    }

    //% blockId=cmk_player_on_remaining_time
    //% block="のこり $triggerSec びょうに なった とき"
    //% triggerSec.defl=30 triggerSec.min=0
    //% group="イベント"
    //% weight=54
    export function onRemainingTime(triggerSec: number, handler: () => void): void {
        Missions.onRemainingTime(triggerSec, handler)
    }

    //% blockId=cmk_player_position block="じぶんのばしょ"
    //% group="スポーン"
    //% weight=53
    export function currentPosition(): Position {
        return player.position()
    }

    //% blockId=cmk_world_position block="ワールド $x $y $z"
    //% x.defl=0 y.defl=0 z.defl=0
    //% group="スポーン"
    //% weight=52
    export function worldPosition(x: number, y: number, z: number): Position {
        return world(x, y, z)
    }

    //% blockId=cmk_player_selector block="$target"
    //% target.defl=PlayerSelector.Self
    //% group="セレクター"
    //% weight=51
    export function selector(target: PlayerSelector): number {
        return target
    }

    //% blockId=cmk_teleport_players block="$target を $position に テレポートさせる"
    //% target.shadow=cmk_player_selector
    //% position.shadow=cmk_world_position
    //% group="テレポート"
    //% weight=50
    export function teleport(target: number, position: Position): void {
        sendCommand(
            "scriptevent cmk:teleport_players "
            + target + "|"
            + position.getValue(Axis.X) + "|"
            + position.getValue(Axis.Y) + "|"
            + position.getValue(Axis.Z)
        )
    }
}

namespace GameSettings {
    //% blockId=cmk_game_settings_on_remaining_time_legacy
    //% block="のこり $triggerSec びょうに なった とき"
    //% blockHidden=true
    //% triggerSec.defl=30 triggerSec.min=0
    //% weight=55
    export function onRemainingTime(triggerSec: number, handler: () => void): void {
        Missions.onRemainingTime(triggerSec, handler)
    }
}

namespace VariableBlocks {
    //% blockId=cmk_change_timelimit block="ゲーム じかんを $value びょう $mode"
    //% value.defl=10 value.min=0 value.max=30
    //% mode.defl=BountyChange.Increase
    //% group="へんこう"
    //% weight=60
    export function changeTimeLimit(value: number, mode: BountyChange): void {
        if (mode == BountyChange.Increase) {
            _timelimit = _timelimit + value
            sendCommand("scriptevent cmk:timer_add " + value)
        } else {
            _timelimit = Math.max(0, _timelimit - value)
            sendCommand("scriptevent cmk:timer_subtract " + value)
        }
    }

    //% blockId=cmk_add_timelimit block="ゲーム じかんを $value びょう ふやす"
    //% blockHidden=true
    //% value.defl=10 value.min=0 value.max=30
    //% group="へんこう"
    //% weight=54
    export function addTimeLimit(value: number): void {
        _timelimit = _timelimit + value
        sendCommand("scriptevent cmk:timer_add " + value)
    }

    //% blockId=cmk_subtract_timelimit block="ゲーム じかんを $value びょう へらす"
    //% blockHidden=true
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

    //% blockId=cmk_change_lives_target block="$target の ざんきを $value $mode"
    //% target.defl=TargetPlayer.Self
    //% value.defl=1 value.min=0 value.max=10
    //% mode.defl=BountyChange.Increase
    //% group="へんこう"
    //% weight=55
    export function changeLives(target: TargetPlayer, value: number, mode: BountyChange): void {
        const amount = mode == BountyChange.Increase ? value : -value
        _lives = Math.max(0, _lives + amount)
        sendCommand(
            "scriptevent cmk:"
            + (mode == BountyChange.Increase ? "lives_add " : "lives_subtract ")
            + target + "|" + value
        )
    }

    //% blockId=cmk_add_lives_target block="$target の ざんきを $value ふやす"
    //% blockHidden=true
    //% target.defl=TargetPlayer.Self
    //% value.defl=1 value.min=0 value.max=10
    //% group="へんこう"
    //% weight=53
    export function addLivesTo(target: TargetPlayer, value: number): void {
        _lives = _lives + value
        sendCommand("scriptevent cmk:lives_add " + target + "|" + value)
    }

    //% blockId=cmk_subtract_lives_target block="$target の ざんきを $value へらす"
    //% blockHidden=true
    //% target.defl=TargetPlayer.Self
    //% value.defl=1 value.min=0 value.max=10
    //% group="へんこう"
    //% weight=52
    export function subtractLivesFrom(target: TargetPlayer, value: number): void {
        _lives = Math.max(0, _lives - value)
        sendCommand("scriptevent cmk:lives_subtract " + target + "|" + value)
    }

    //% blockId=cmk_change_bounty_setting block="しょうきんを $value $mode"
    //% value.defl=100 value.min=0
    //% mode.defl=BountyChange.Increase
    //% group="へんこう"
    //% weight=52
    export function changeBounty(value: number, mode: BountyChange): void {
        if (mode == BountyChange.Increase) {
            _bountyStart = _bountyStart + value
            sendCommand("scriptevent cmk:bounty_add " + value)
        } else {
            _bountyStart = Math.max(0, _bountyStart - value)
            sendCommand("scriptevent cmk:bounty_subtract " + value)
        }
    }

    //% blockId=cmk_add_bounty_setting block="しょうきんを $value ふやす"
    //% blockHidden=true
    //% value.defl=100
    //% group="へんこう"
    //% weight=51
    export function addBounty(value: number): void {
        _bountyStart = _bountyStart + value
        sendCommand("scriptevent cmk:bounty_add " + value)
    }

    //% blockId=cmk_set_bounty_increment block="1びょうごとの しょうきんを $value $mode"
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
    //% blockHidden=true
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

//% color="#5B2A86" weight=90 block="ハンター" groups='["せってい", "そうさ", "スポーン", "セレクター", "さくじょ"]'
namespace HunterSettings {
    //% blockId=cmk_set_hunter_speed block="$target の すばやさを $level に する"
    //% level.defl=HunterLevel.Lv1
    //% target.defl=HunterRemoveTarget.All
    //% group="せってい"
    //% weight=100
    export function setSpeed(level: HunterLevel, target: HunterRemoveTarget = HunterRemoveTarget.All): void {
        sendCommand("scriptevent cmk:set_hunter_speed " + target + "|" + level)
    }

    //% blockId=cmk_set_hunter_strength block="$target の みつける ひろさを $range ブロックに する"
    //% range.defl=HunterSightRange.Range16
    //% target.defl=HunterRemoveTarget.All
    //% group="せってい"
    //% weight=90
    export function setStrength(range: HunterSightRange, target: HunterRemoveTarget = HunterRemoveTarget.All): void {
        sendCommand("scriptevent cmk:set_hunter_sight " + target + "|" + range)
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

    //% blockId=cmk_hunter_spawn_target block="$target"
    //% blockHidden=true
    //% target.defl=PlayerSelector.Self
    //% group="セレクター"
    //% weight=75
    export function spawnTarget(target: PlayerSelector): number {
        return target
    }

    //% blockId=cmk_spawn_hunter_at_target block="$hunterType を $target の ばしょに スポーンさせる"
    //% hunterType.defl=HunterType.HunterA
    //% target.shadow=cmk_player_selector
    //% group="スポーン"
    //% weight=70
    export function spawnHunterAtTarget(hunterType: HunterType, target: number): void {
        sendCommand("scriptevent cmk:spawn_hunter_target " + hunterType + "|" + target)
    }

    //% blockId=cmk_spawn_hunter_at block="$hunterType を $position に スポーンさせる"
    //% hunterType.defl=HunterType.HunterA
    //% position.shadow=cmk_world_position
    //% group="スポーン"
    //% weight=69
    export function spawnHunterAt(hunterType: HunterType, position: Position): void {
        sendCommand("scriptevent cmk:spawn_hunter " + hunterType + "|" + position.getValue(Axis.X) + "|" + position.getValue(Axis.Y) + "|" + position.getValue(Axis.Z))
    }

    //% blockId=cmk_spawn_hunter_mob block="ハンターを $x $y $z に スポーンさせる"
    //% blockHidden=true
    //% x.defl=0 y.defl=0 z.defl=0
    //% group="スポーン"
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

//% color="#CF7475" weight=87 block="チーム オオカミ" groups='["ゲート"]'
namespace AreaA {
    //% blockId=cmk_set_area_a_gate block="$color いろ ゲートブロックを $state ようにする"
    //% color.defl=ZoneColor.Red
    //% color.fieldEditor="imagedropdown"
    //% color.fieldOptions.columns=4
    //% state.defl=GateState.Open
    //% group="ゲート"
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

//% color="#567D43" weight=86 block="チーム クリーパー" groups='["ゲート"]'
namespace AreaB {
    //% blockId=cmk_set_area_b_gate block="$color いろ ゲートブロックを $state ようにする"
    //% color.defl=ZoneColor.Red
    //% color.fieldEditor="imagedropdown"
    //% color.fieldOptions.columns=4
    //% state.defl=GateState.Open
    //% group="ゲート"
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

//% color="#CF9450" weight=85 block="チーム アレックス" groups='["ゲート"]'
namespace AreaC {
    //% blockId=cmk_set_area_c_gate block="$color いろ ゲートブロックを $state ようにする"
    //% color.defl=ZoneColor.Red
    //% color.fieldEditor="imagedropdown"
    //% color.fieldOptions.columns=4
    //% state.defl=GateState.Open
    //% group="ゲート"
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

//% color="#7C5582" weight=84 block="チーム エンダーマン" groups='["ゲート"]'
namespace AreaD {
    //% blockId=cmk_set_area_d_gate block="$color いろ ゲートブロックを $state ようにする"
    //% color.defl=ZoneColor.Red
    //% color.fieldEditor="imagedropdown"
    //% color.fieldOptions.columns=4
    //% state.defl=GateState.Open
    //% group="ゲート"
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
    //% blockId=cmk_build_structure block="あしもとに あかいネザーレンガブロック があったら|たてもの $building をたてる"
    //% building.defl=BuildingType.RedConvenienceStore
    //% building.fieldEditor="imagedropdown"
    //% building.fieldOptions.columns=4
    //% inlineInputMode="external"
    //% group="たてる"
    //% weight=110
    export function build(building: BuildingType): void {
        sendCommand("scriptevent cmk:building_place " + building)
    }

    //% blockId=cmk_build_white_house block="あしもとに ペールオーク ブロックがあったら たてもの しろいいえ をたてる"
    //% blockHidden=true
    //% group="たてる"
    //% weight=100
    export function buildWhiteHouse(): void {
        sendCommand("scriptevent cmk:building_place 16")
    }

    //% blockId=cmk_build_blue_house block="あしもとに あおみどりいろのようもう ブロックがあったら たてもの あおいいえ をたてる"
    //% blockHidden=true
    //% group="たてる"
    //% weight=90
    export function buildBlueHouse(): void {
        sendCommand("scriptevent cmk:building_place 17")
    }

    //% blockId=cmk_build_red_house block="あしもとに あかいネザーレンガ ブロックがあったら たてもの あかいいえ をたてる"
    //% blockHidden=true
    //% group="たてる"
    //% weight=80
    export function buildRedHouse(): void {
        sendCommand("scriptevent cmk:building_place 18")
    }

    //% blockId=cmk_build_stone_tower block="あしもとに いしレンガ ブロックがあったら たてもの いしのとう をたてる"
    //% blockHidden=true
    //% group="たてる"
    //% weight=70
    export function buildStoneTower(): void {
        sendCommand("scriptevent cmk:building_place 19")
    }

    //% blockId=cmk_remove_selected_building block="あしもとに あかいネザーレンガブロック があったら|そのばしょの たてものを さくじょする"
    //% inlineInputMode="external"
    //% group="さくじょ"
    //% weight=100
    export function removeSelectedBuilding(): void {
        sendCommand("scriptevent cmk:building_remove")
    }

    //% blockId=cmk_remove_building block="あしもとに けんちくブロックがあったら たてものを さくじょする"
    //% blockHidden=true
    export function removeBuilding(): void {
        sendCommand("scriptevent cmk:building_remove")
    }
}

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
        sendCommand("scriptevent cmk:reset_btn")
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

    function watchScoreToggle(objectiveId: string, handler: () => void): void {
        let lastValue = player.execute("scoreboard players test @s " + objectiveId + " 1 1")
        loops.forever(function () {
            const currentValue = player.execute("scoreboard players test @s " + objectiveId + " 1 1")
            if (currentValue != lastValue) {
                lastValue = currentValue
                handler()
            }
            loops.pause(100)
        })
    }

    function setButtonPressed(buttonType: ButtonType, pressed: boolean): void {
        if (buttonType == ButtonType.Oak) {
            oakButtonPressed = pressed
        } else if (buttonType == ButtonType.Spruce) {
            spruceButtonPressed = pressed
        } else if (buttonType == ButtonType.Birch) {
            birchButtonPressed = pressed
        } else if (buttonType == ButtonType.Jungle) {
            jungleButtonPressed = pressed
        } else if (buttonType == ButtonType.Acacia) {
            acaciaButtonPressed = pressed
        } else if (buttonType == ButtonType.DarkOak) {
            darkOakButtonPressed = pressed
        } else if (buttonType == ButtonType.Mangrove) {
            mangroveButtonPressed = pressed
        } else if (buttonType == ButtonType.Cherry) {
            cherryButtonPressed = pressed
        } else if (buttonType == ButtonType.Bamboo) {
            bambooButtonPressed = pressed
        } else {
            stoneButtonPressed = pressed
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
    //% group="イベント"
    //% weight=110
    export function onRemainingTime(triggerSec: number, handler: () => void): void {
        let triggeredGeneration = -1
        loops.forever(function () {
            if (
                localGameTimerWatchEnabled
                && triggeredGeneration != localGameGeneration
                && player.execute(
                    // Keep the condition true after the threshold is crossed so
                    // delayed polling cannot permanently miss the event.
                    "scoreboard players test @s g_timer 0 "
                    + triggerSec
                )
            ) {
                triggeredGeneration = localGameGeneration
                currentMissionTrigger = triggerSec
                missionResult = 0
                handler()
            }
            loops.pause(100)
        })
    }

    //% blockId=cmk_mission_duration block="$seconds びょう"
    //% seconds.defl=10 seconds.min=1
    //% blockHidden=true
    //% group="せってい"
    export function missionDuration(seconds: number): number {
        return seconds
    }

    //% blockId=cmk_mission_settings
    //% block="ミッション $missionNumber を せっていして かいしする|ミッションを せいこうに する ボタンの しゅるい： $buttonType|せいげん じかん $durationSec||ないようを ひょうじ $message|クリアに ひつような にんずう $requiredPlayers"
    //% missionNumber.defl=MissionNumber.Mission1
    //% buttonType.defl=ButtonType.Oak
    //% durationSec.shadow=cmk_mission_duration
    //% message.defl="ボタンを おそう"
    //% requiredPlayers.defl=1 requiredPlayers.min=1 requiredPlayers.max=5
    //% expandableArgumentMode="enabled"
    //% inlineInputMode=external
    //% blockHidden=true
    //% group="せってい"
    //% weight=100
    export function missionSettings(
        missionNumber: MissionNumber,
        buttonType: any,
        durationSec: number,
        message?: any,
        requiredPlayers?: number
    ): void {
        if (typeof buttonType == "string") {
            runMission(
                missionNumber,
                buttonType,
                MissionType.Button,
                -1,
                typeof message == "number" ? message : 1,
                requiredPlayers || 10
            )
            return
        }

        runMission(
            missionNumber,
            message || "ボタンを おそう",
            MissionType.Button,
            -1,
            requiredPlayers || 1,
            durationSec
        )
    }

    //% blockId=cmk_mission_settings_v2
    //% block="ミッション $missionNumber を せっていして かいしする|ミッションを せいこうに する ボタンの しゅるい： $buttonType|せいげん じかん $durationSec||ないようを ひょうじ $message|クリアに ひつような にんずう $requiredPlayers"
    //% missionNumber.defl=MissionNumber.Mission1
    //% buttonType.defl=ButtonType.Oak
    //% durationSec.shadow=cmk_mission_duration
    //% message.defl="ボタンを おそう"
    //% requiredPlayers.defl=1 requiredPlayers.min=1 requiredPlayers.max=5
    //% expandableArgumentMode="enabled"
    //% inlineInputMode=external
    //% blockHidden=true
    //% group="せってい"
    //% weight=100
    export function missionSettingsWithButton(
        missionNumber: MissionNumber,
        buttonType: ButtonType,
        durationSec: number,
        message?: string,
        requiredPlayers?: number
    ): void {
        runMission(
            missionNumber,
            message || "ボタンを おそう",
            MissionType.Button,
            -1,
            requiredPlayers || 1,
            durationSec
        )
    }

    //% blockId=cmk_mission_settings_v3
    //% block="ミッション $missionNumber を せっていして かいしする|せいげん じかん $durationSec||ないようを ひょうじ $message|クリアに ひつような にんずう $requiredPlayers"
    //% missionNumber.defl=MissionNumber.Mission1
    //% durationSec.shadow=cmk_mission_duration
    //% message.defl="ボタンを おそう"
    //% requiredPlayers.defl=1 requiredPlayers.min=1 requiredPlayers.max=5
    //% expandableArgumentMode="enabled"
    //% inlineInputMode=external
    //% blockHidden=true
    //% group="せってい"
    //% weight=100
    export function missionSettingsWithoutButton(
        missionNumber: MissionNumber,
        durationSec: number,
        message?: string,
        requiredPlayers?: number
    ): void {
        runMission(
            missionNumber,
            message || "ボタンを おそう",
            MissionType.Button,
            -1,
            requiredPlayers || 1,
            durationSec
        )
    }

    //% blockId=cmk_on_mission_timeout
    //% block="ミッション $missionNumber が じかんぎれに なった とき"
    //% missionNumber.defl=MissionNumber.Mission1
    //% blockHidden=true
    //% group="イベント"
    //% weight=99
    export function onMissionTimeout(missionNumber: MissionNumber, handler: () => void): void {
        watchScoreToggle("g_evt_mt" + missionNumber, function () {
            currentMissionNumber = missionNumber
            setMissionTimedOut(missionNumber)
            handler()
        })
    }

    //% blockId=cmk_on_mission_button_pressed
    //% block="$buttonType の ボタンを おした とき"
    //% buttonType.defl=ButtonType.Oak
    //% blockHidden=true
    //% group="イベント"
    //% weight=98
    export function onButtonPressed(buttonType: ButtonType, handler: () => void): void {
        const buttonTypeKey = getButtonTypeKey(buttonType)
        watchScoreToggle("g_evt_" + buttonTypeKey, function () {
            setButtonPressed(buttonType, true)
            handler()
        })
    }

    //% blockId=cmk_mission_success block="ミッションの せいこうを $target に おしらせする"
    //% target.shadow=cmk_player_selector
    //% blockHidden=true
    //% group="けっか"
    //% weight=100
    export function succeed(target: number = PlayerSelector.Self): void {
        sendCommand("scriptevent cmk:mission_success " + target)
    }

    //% blockId=cmk_mission_fail block="ミッションの しっぱいを $target に おしらせする"
    //% target.shadow=cmk_player_selector
    //% blockHidden=true
    //% group="けっか"
    //% weight=99
    export function fail(target: number = PlayerSelector.Self): void {
        sendCommand("scriptevent cmk:mission_fail " + target)
    }

    //% blockId=cmk_mission_if block="もし $condition なら"
    //% blockHidden=true
    //% condition.shadow=cmk_button_was_pressed
    //% handlerStatement=1
    //% group="けっか"
    //% weight=98
    export function ifCondition(condition: boolean, handler: () => void): void {
        if (condition) {
            handler()
        }
    }

    //% blockId=cmk_on_mission_finished
    //% block="ミッション $missionNumber が おわった とき"
    //% blockHidden=true
    //% missionNumber.defl=MissionNumber.Mission1
    //% group="イベント"
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
        buttonType: number,
        requiredPlayers: number,
        durationSec: number
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
        sendCommand("scriptevent cmk:mission_register " + missionNumber + "|" + currentMissionTrigger + "|" + missionType + "|" + durationSec + "|" + requiredPlayers + "|" + buttonType + "|" + message)

        while (missionResult == 0) {
            loops.pause(100)
        }
    }

    //% blockId=cmk_mission_timed_out
    //% block="ミッション $missionNumber が じかんぎれに なった"
    //% missionNumber.defl=MissionNumber.Mission1
    //% blockHidden=true
    //% group="けっか"
    //% weight=94
    export function missionTimedOut(missionNumber: MissionNumber): boolean {
        return hasMissionTimedOut(missionNumber)
    }

    //% blockId=cmk_button_was_pressed
    //% block="$buttonType の ボタンが おされていた"
    //% buttonType.defl=ButtonType.Oak
    //% blockHidden=true
    //% group="けっか"
    //% weight=93
    export function buttonWasPressed(buttonType: ButtonType): boolean {
        return hasButtonPressed(buttonType)
    }

    //% blockId=cmk_reset_button_state
    //% block="$buttonType の ボタンの じょうたいを リセットする"
    //% buttonType.defl=ButtonType.Oak
    //% blockHidden=true
    //% group="けっか"
    //% weight=92
    export function resetButtonState(buttonType: ButtonType): void {
        setButtonPressed(buttonType, false)
        sendCommand("scriptevent cmk:reset_btn " + getButtonTypeKey(buttonType))
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

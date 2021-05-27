/**
 * Declare Variables
 */
/**
 * doing gravity this way allows us to apply it to multiple sprites if we need to.
 */
// add and control bounce of player
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (!(player1.isHittingTile(CollisionDirection.Top))) {
        // add this first
        player1.vy = bounce
    }
})
// on overlap
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeScoreBy(1)
    tiles.placeOnRandomTile(gem, sprites.castle.tileDarkGrass3)
    tiles.placeOnRandomTile(gem, assets.tile`myTile`)
})
let gem: Sprite = null
let player1: Sprite = null
let bounce = 0
tiles.setTilemap(tilemap`level1`)
let gravity = 200
// change bounce
bounce = -100
// set game score and startCountdown
info.setScore(0)
info.startCountdown(60)
// create player
player1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 8 8 8 8 8 8 8 8 . . . . 
    . . . . 8 1 8 8 8 8 1 8 . . . . 
    . . . . 8 1 8 8 8 8 1 8 . . . . 
    . . . . 8 1 8 8 8 8 1 8 . . . . 
    . . . . 8 8 8 8 8 8 8 8 . . . . 
    . . . . 8 8 8 8 8 8 8 8 . . . . 
    . . . . 8 2 2 2 2 2 2 8 . . . . 
    . . . . 8 2 2 2 2 2 2 8 . . . . 
    . . . . 8 2 2 2 2 2 2 8 . . . . 
    . . . . 8 2 2 2 2 2 2 8 . . . . 
    . . . . 8 8 8 8 8 8 8 8 . . . . 
    `, SpriteKind.Player)
// set player position
player1.setPosition(100, 100)
// create collectible
gem = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . . 5 1 1 1 1 1 1 5 . . . . 
    . . . . 5 1 5 5 5 5 1 5 . . . . 
    . . . . 5 1 5 . . 5 1 5 . . . . 
    . . . . 5 1 5 . . 5 1 5 . . . . 
    . . . . 5 1 5 . . 5 1 5 . . . . 
    . . . . 5 1 5 5 5 5 1 5 . . . . 
    . . . . 5 1 1 1 1 1 1 5 . . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
// move player
controller.moveSprite(player1, 80, 0)
scene.cameraFollowSprite(player1)
// set players gravity
player1.ay = gravity
// place gem
tiles.placeOnRandomTile(gem, assets.tile`myTile`)
tiles.placeOnRandomTile(gem, sprites.castle.tileDarkGrass3)

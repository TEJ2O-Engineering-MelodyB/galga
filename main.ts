controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart0`, SpacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let projectile: Sprite = null
let SpacePlane: Sprite = null
SpacePlane = sprites.create(assets.image`galgaPlane1`, SpriteKind.Player)
controller.moveSprite(SpacePlane, 200, 200)
SpacePlane.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    bogey = sprites.create(assets.image`galgaEnemy1`, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(60, randint(5, 115))
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})

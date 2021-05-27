// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202030303020202020202020202020202020202020202020202020202020303020202020203030303030303030302020202020202020202020202020202020202020303020202020202020202020202030302020203030302020202020303030202020202020202020303030202020202020202020202020202020202030303020201010101010101010101010101010101010303030101010103030301010101010101010101030301010101010101010101010101010101010101010303030101010303030301010101010101010101010101010101010103030303010101010101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
2 2 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 2 . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
2 2 . . . . . . . . . . . . 2 2 
. . . 2 2 2 . . . . . 2 2 2 . . 
. . . . . . . 2 2 2 . . . . . . 
. . . . . . . . . . . 2 2 2 . . 
. . . . . . . . . . . . . . . . 
. 2 2 2 . . . . 2 2 2 . . . . . 
. . . . . 2 2 . . . . . . . . . 
. . . . . . . . . . . 2 2 2 . . 
. 2 2 2 2 . . . . . . . . . . . 
. . . . . . . 2 2 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileDarkGrass3,myTiles.tile1,sprites.dungeon.floorLight0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

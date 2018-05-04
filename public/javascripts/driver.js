'use strict';

const path = require('path'),
    Player = require(path.resolve('player.js')),
    Floor = require(path.resolve('floor.js')),
    enums = require(path.resolve('enums.js')),
    utils = require(path.resolve('utils.js')),
    Key = require(path.resolve('key.js')),
    characterCreator = require(path.resolve('characterCreator.js'));

function main() {


    let floor1 = new Floor(5, 3);
    floor1.id = 1;
    floor1.entrance = [0, 1];
    floor1.setWallState(0, 0, enums.DIRECTIONS.SOUTH, enums.WALL_STATES.OPEN);
    floor1.setWallState(0, 0, enums.DIRECTIONS.EAST, enums.WALL_STATES.OPEN);
    floor1.setWallState(0, 1, enums.DIRECTIONS.EAST, enums.WALL_STATES.OPEN);
    floor1.setWallState(2, 2, enums.DIRECTIONS.NORTH, enums.WALL_STATES.OPEN);
    floor1.setWallState(1, 1, enums.DIRECTIONS.SOUTH, enums.WALL_STATES.OPEN);
    floor1.setWallState(2, 1, enums.DIRECTIONS.EAST, enums.WALL_STATES.OPEN);
    floor1.setWallState(4, 1, enums.DIRECTIONS.NORTH, enums.WALL_STATES.OPEN);
    floor1.setWallState(4, 0, enums.DIRECTIONS.WEST, enums.WALL_STATES.OPEN);
    floor1.setWallState(2, 1, enums.DIRECTIONS.NORTH, enums.WALL_STATES.OPEN);
    floor1.setWallState(2, 1, enums.DIRECTIONS.WEST, enums.WALL_STATES.OPEN);
    floor1.setWallState(2, 0, enums.DIRECTIONS.EAST, enums.WALL_STATES.OPEN);
    floor1.setWallState(2, 1, enums.DIRECTIONS.NORTH, enums.WALL_STATES.LOCKED);

    let floor2 = new Floor(3, 3);
    floor2.id = 2;
    floor2.entrance = [0, 0];
    floor2.setWallState(0, 0, enums.DIRECTIONS.EAST, enums.WALL_STATES.OPEN);
    floor2.setWallState(1, 1, enums.DIRECTIONS.NORTH, enums.WALL_STATES.OPEN);
    floor2.setWallState(1, 1, enums.DIRECTIONS.EAST, enums.WALL_STATES.OPEN);
    floor2.setWallState(1, 1, enums.DIRECTIONS.SOUTH, enums.WALL_STATES.OPEN);
    floor2.setWallState(1, 1, enums.DIRECTIONS.WEST, enums.WALL_STATES.OPEN);

    floor1.exit = {x: 1, y: 0, nextFloor: floor2};
    floor2.exit = {x: 1, y: 2, nextFloor: null};

    let testPlayer = new Player();

    return characterCreator.createCharacter(floor1, testPlayer).then(() => {
        let key1 = new Key();
        floor1.addVisibleItemToRoom(1, 2, key1);
        key1.matchingDoorCoords = [floor1.id, 2, 1, 0];
    });
}

main();
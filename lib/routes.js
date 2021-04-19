const config = require("../config.json")
const moves = require("./moves.js")

module.exports = {
	handleIndex: (request, response) => {
		var battlesnakeInfo = {
			apiversion: config.apiversion,
			author: config.author,
			color: config.color,
			head: config.head,
			tail: config.tail
		}
		response.status(200).json(battlesnakeInfo)
	},

	handleMove: (request, response) => {
		var gameData = request.body
		var snakeData = gameData.board.snakes
		var width = gameData.board.width
		var height = gameData.board.height
		var head = gameData.you.head
		var neck = gameData.you.body[1]
		var body = gameData.you.body
		var body1 = gameData.you.body[2]
		var health = gameData.you.health
		var length = gameData.you.length
		var possibleMoves = ['up', 'down', 'left', 'right']
		var x = head.x
		var y = head.y

		//{
		// 	"snakes": [
		// 		{"id": "snake-one", ... },
		// 		{"id": "snake-two", ... },
		// 		{"id": "snake-three", ... }
		// 	]
		// }


		// if (x + 1 == )

		if (!moves.canMoveUpWall(height, head.y)) {
			possibleMoves = possibleMoves.filter(dir => dir != "up")
		}

		if (!moves.canMoveRightWall(width, head.x)) {
			possibleMoves = possibleMoves.filter(dir => dir != "right")
		}

		if (!moves.canMoveDownWall(height, head.y)) {
			possibleMoves = possibleMoves.filter(dir => dir != "down")
		}

		if (!moves.canMoveLeftWall(width, head.x)) {
			possibleMoves = possibleMoves.filter(dir => dir != "left")
		}

		if (!moves.cantCollideDown(neck.y, head.y)) {
			possibleMoves = possibleMoves.filter(dir => dir != "up")
		}

		if (!moves.cantCollideLeft(neck.x, head.x)) {
			possibleMoves = possibleMoves.filter(dir => dir != "right")
		}

		if (!moves.cantCollideRight(neck.x, head.x)) {
			possibleMoves = possibleMoves.filter(dir => dir != "left")
		}

		if (!moves.cantCollideUp(neck.y, head.y)) {
			possibleMoves = possibleMoves.filter(dir => dir != "down")
		}
		// if (!moves.canAvoidBodyRight(body1.x, head.x)) {
		//   possibleMoves = possibleMoves.filter(dir => dir != "left")
		// }
		// if (!moves.canAvoidBodyLeft(body1.x, head.x)) {
		//   possibleMoves = possibleMoves.filter(dir => dir != "right")
		// }
		// if (!moves.canAvoidBodyUp(body1.y, head.y)) {
		//   possibleMoves = possibleMoves.filter(dir => dir != "down")
		// }
		// if (!moves.canAvoidBodyDown(body1.y, head.y)) {
		// //   possibleMoves = possibleMoves.filter(dir => dir != "up")
		// }
		// if (!moves.canGetFood(health)) {
		//   possibleMoves = ["up"]
		// }
		// if (!moves.canGetFood1(health, head.y)) {
		//   possibleMoves = ["down"]
		// }
		body.forEach(
			section => {
				if (head.x == section.x - 1 && head.y == section.y) {
					possibleMoves = possibleMoves.filter(dir => dir != "right")
				}
			}
		)
		body.forEach(
			section => {
				if (head.x == section.x + 1 && head.y == section.y) {
					possibleMoves = possibleMoves.filter(dir => dir != "left")
				}
			}
		)
		body.forEach(
			section => {
				if (head.y == section.y - 1 && head.x == section.x) {
					possibleMoves = possibleMoves.filter(dir => dir != "up")
				}
			}
		)
		body.forEach(
			section => {
				if (head.y == section.y + 1 && head.x == section.x) {
					possibleMoves = possibleMoves.filter(dir => dir != "down")
				}
			}
		)
		//0000000000000
		body.forEach(
			section => {
				if (head.x == section.x - 2 && head.y == section.y) {
					possibleMoves = possibleMoves.filter(dir => dir != "right")
				}
			}
		)

		body.forEach(
			section => {
				if (head.x == section.x + 2 && head.y == section.y) {
					possibleMoves = possibleMoves.filter(dir => dir != "left")
				}
			}
		)

		body.forEach(
			section => {
				if (head.y == section.y - 2 && head.x == section.x) {
					possibleMoves = possibleMoves.filter(dir => dir != "up")
				}
			}
		)
		body.forEach(
			section => {
				if (head.y == section.y + 2 && head.x == section.x) {
					possibleMoves = possibleMoves.filter(dir => dir != "down")
				}
			}
		)
		///stop wall loop on self
		//.rightside down
		body.forEach(
			section => {
				if (head.x == section.x + 1 && section.y == 1 &&
					head.x == width - 1) {
					possibleMoves = possibleMoves.filter(dir => dir != "down", "right")
				}
			}
		)
		//.leftside down
		body.forEach(
			section => {
				if (head.x == section.x - 1 && section.y == 1 &&
					head.x == 1) {
					possibleMoves = possibleMoves.filter(dir => dir != "down", "left")
				}
			}
		)
		//.rightside up
		body.forEach(
			section => {
				if (head.x == section.x + 1 && section.y == height - 1 &&
					head.x == width - 1) {
					possibleMoves = possibleMoves.filter(dir => dir != "up", "right")
				}
			}
		)
		//.leftside up
		body.forEach(
			section => {
				if (head.x == section.x - 1 && section.y == 1 &&
					head.x == 1) {
					possibleMoves = possibleMoves.filter(dir => dir != "up", "left")
				}
			}
		)
		///tttttt
		// body.forEach(
		//   section => {
		//     if (head.x == section.x + 2 && section.y == 1 &&
		//       head.x == width - 1) {
		//       possibleMoves = possibleMoves.filter(dir => dir != "down")
		//     }
		//   }
		// )
		// //.leftside down
		// body.forEach(
		//   section => {
		//     if (head.x == section.x - 2 && section.y == 1 &&
		//       head.x == 1) {
		//       possibleMoves = possibleMoves.filter(dir => dir != "down")
		//     }
		//   }
		// )
		// //.rightside up
		// body.forEach(
		//   section => {
		//     if (head.x == section.x + 2 && section.y == height - 1 &&
		//       head.x == width - 1) {
		//       possibleMoves = possibleMoves.filter(dir => dir != "up")
		//     }
		//   }
		// )
		// //.leftside up
		// body.forEach(
		//   section => {
		//     if (head.x == section.x - 2 && section.y == 1 &&
		//       head.x == 1) {
		//       possibleMoves = possibleMoves.filter(dir => dir != "down")
		//     }
		//   }
		// )
		/////iuii
		//sideways avoidance
		body.forEach(
			section => {
				if (head.y == section.y + 1 && section.x > head.x &&
					height - 1 == head.y) {
					possibleMoves = possibleMoves.filter(dir => dir != "right", "up")
				}
			}
		)

		body.forEach(
			section => {
				if (head.y == section.y + 1 && section.x < head.x && height - 1 == head.y) {
					possibleMoves = possibleMoves.filter(dir => dir != "left", "up")
				}
			}
		)
		body.forEach(
			section => {
				if (head.y == section.y - 1 && section.x < head.x && 1 == head.y) {
					possibleMoves = possibleMoves.filter(dir => dir != "left", "down")
				}
			}
		)
		body.forEach(
			section => {
				if (head.y == section.y - 1 && section.x > head.x && 1 == head.y) {
					possibleMoves = possibleMoves.filter(dir => dir != "right", "down")
				}
			}
		)
		//0000000000000
		snakeData.forEach(
			section => {
				if (head.y == section.y + 1 && head.x == section.x) {
					possibleMoves = possibleMoves.filter(dir => dir != "down")
				}
			}
		)
		snakeData.forEach(
			section => {
				if (head.y == section.y - 1 && head.x == section.x) {
					possibleMoves = possibleMoves.filter(dir => dir != "up")
				}
			}
		)
		snakeData.forEach(
			section => {
				if (head.x == section.x + 1 && head.y == section.y) {
					possibleMoves = possibleMoves.filter(dir => dir != "left")
				}
			}
		)
		snakeData.forEach(
			section => {
				if (head.x == section.x + 1 && head.y == section.y) {
					possibleMoves = possibleMoves.filter(dir => dir != "right")
				}
			}
		)

		// console.log('x:' + snakeData.x + 'y:' + snakeData.y)
		console.log(possibleMoves)



		var random = Math.floor(Math.random() * possibleMoves.length)
		var move = possibleMoves[random]

		console.log('MOVE: ' + move)
		response.status(200).send({
			move: move
		})
	},

	handleGameData: (request, response) => {
		var gameData = request.body
		var snakeData = gameData.board.snakes

		if (config.logStartEnd) {
			console.log(gameData)
		}
		if (config.logStartEnd) {
			console.log(snakeData)
		}
		response.status(200).send('ok')
	}
	// handleSnakeData: (request, response) => {
	//   var snakeData = request.snakes

	//   if (config.logStartEnd) {
	//     console.log(snakeData)
	//   }
	//   response.status(200).send('ok')
	// }
}
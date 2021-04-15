// module.exports = {
//   move: () => {
//     body + 1
//   },
//   turnLeft: () => {
//     //
//   },
//   turnRight: () => {
//     //
//   }
// }
module.exports = {
  canGetFood: (health) => {
    if (health == 20) {
      return false
    }
    return true;
  },
  canGetFood1: (health) => {
    if (health == 10) {
      return false
    }
    return true;
  },
  canMoveUpWall: (boardHeight, snakeY) => {
    if (boardHeight - 1 == snakeY) {
      return false;
    }
    return true;
  },
  canMoveRightWall: (boardWidth, snakeX) => {
    if (boardWidth - 1 == snakeX) {
      return false;
    }
    return true;
  },
  canMoveLeftWall: (boardWidth, snakeX) => {
    if (0 == snakeX) {
      return false;
    }
    return true;
  },
  canMoveDownWall: (boardHeight, snakeY) => {
    if (0 == snakeY) {
      return false;
    }
    return true;
  },
  cantCollideLeft: (neckX, headX) => {
    if (neckX - 1 == headX) {
      return false
    }
    return true;
  },
  cantCollideRight: (neckX, headX) => {
    if (neckX + 1 == headX) {
      return false
    }
    return true;
  },
  cantCollideDown: (neckY, headY) => {
    if (neckY - 1 == headY) {
      return false
    }
    return true;
  },
  cantCollideUp: (neckY, headY) => {
    if (neckY + 1 == headY) {
      return false
    }
    return true;
  },
  canAvoidBodyUp: (body1Y, headY) => {
    if (body1Y - 1 == headY) {
      return false
    }
    return true;
  },

  canAvoidBodyRight: (body1X, headX) => {
    if (body1X - 1 == headX) {
      return false
    }
    return true;
  },
  canAvoidBodyDown: (body1Y, headY) => {
    if (body1Y + 1 == headY) {
      return false
    }
    return true;
  },
  canAvoidBodyLeft: (body1X, headX) => {
    if (body1X + 1 == headX) {
      return false
    }
    return true;
  }
  // goAroundBoard: (length) => {
  //   if (length > 5) {
  //     return false
  //   }
  //   return true;
  // }
}
// module.exports = {
// 	canMoveRight: (boardWidth, snakeX) => {
// 		if (boardWidth - 1 == snakeX) {
// 			return false;
// 		}
// 		return true;
// 	}
// }

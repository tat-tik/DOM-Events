import goblin from '../img/goblin.png';
import Board from './board';
import cursor from './cursor';

export default class HitCounter {
  constructor(board) {
    this.board = board;
    this.timerId = null;
  }

  init() {
    this.board.startGame();
    this.startRandom();

    this.board.cells.forEach((cell) => {
      cell.addEventListener('mousedown', (event) => {
        event.preventDefault();
        const imgInCell = cell.querySelector('img');

        if (imgInCell) {
          this.board.setHitNumber(Number.parseInt(this.board.getHitNumber(), 10) + 1);
          this.board.setCursor(cursor.hammer);
          imgInCell.remove();
          setTimeout(() => this.board.setCursor(cursor.auto), 200);
        }
      });
    });
  }

  startRandom() {
    const imgEl = document.createElement('img');
    imgEl.src = goblin;
    let randomIndex;

    this.timerId = setInterval(() => {
      for (const cell of this.board.cells) {
        const imgCell = cell.querySelector('img');
        if (imgCell) {
          imgCell.remove();
          this.board.setMissNumber(Number.parseInt(this.board.getMissNumber(), 10) + 1);
        }
      }

      if (Number.parseInt(this.board.getMissNumber(), 10) === 5) {
        this.gameRestart();
        return;
      }

      const randomNumber = HitCounter.getRandomInt(0, (this.board.cells.length - 1));

      if (randomNumber === randomIndex) {
        if (randomNumber === this.board.cells.length - 1) {
          randomIndex -= 1;
        } else {
          randomIndex += 1;
        }
      } else {
        randomIndex = randomNumber;
      }

      this.board.cells[randomIndex].append(imgEl);
    }, 1000);
  }

  gameRestart() {
    this.board.setMissNumber(0);
    this.board.setHitNumber(0);
    this.board.deselectAll();
    clearInterval(this.timerId);
    Board.showMessage('Игра окончена!');
    this.startRandom();
  }

  static getRandomInt(min, max) {
    const min0 = Math.ceil(min);
    const max0 = Math.floor(max);
    return Math.floor(Math.random() * (max0 - min0) + min0);
  }
}
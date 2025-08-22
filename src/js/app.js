import Board from './startGame';
import HitCounter from './hitCounter';

const board = new Board(4);
board.bindToDOM(document.querySelector('#game-container'));

const hitcounter = new HitCounter(board);
hitcounter.init();
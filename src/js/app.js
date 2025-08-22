import Board from './board';
import HitCounter from './hitCounter';

const board = new Board(4);
board.bindToDOM(document.querySelector('#game-container'));

const hitcount = new HitCounter(board);
hitcount.init();
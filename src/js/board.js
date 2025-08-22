export default class Board {
  constructor(size) {
    this.size = size;
    this.container = null;
    this.boardEl = null;
    this.cells = [];
  }

  startGame() {
      this.container.innerHTML = `
      <div class="board-container">
        <><div class="controls">
          <div class="counter hit-counter">Попаданий:
            <div class="number hit-number">0</div>
          </div>
          <div class="counter miss-counter">Промахов:
            <div class="number miss-number">0</div>
          </div>
        </div><div data-id="board" class="board"></div></>
      </div>
    `;
    this.container.style.userSelect = 'none';
    this.boardEl = this.container.querySelector('[data-id=board]');
    this.boardEl.setAttribute('style', `grid-template-columns: repeat(${this.size}, 1fr)`);
   
   
    for (let i = 0; i < this.size ** 2; i += 1) {
      const cellEl = document.createElement("div");
      cellEl.classList = "cell";
      this.boardEl.appendChild(cellEl);
    }

    
    this.cells = Array.from(this.boardEl.children);
    this.hitEl = document.querySelector('.hit-number');
    this.missEl = document.querySelector('.miss-number');
  }

  getHitNumber() {
    return this.hitEl.innerText;
  }

  setHitNumber(number) {
    this.hitEl.innerText = number;
  }

  getMissNumber() {
    return this.missEl.innerText;
  }

  setMissNumber(number) {
    this.missEl.innerHTML = number;
  }

  static showMessage(message) {
    alert(message);
  }

  deselectAll() {
    for (const cell of this.cells) {
      cell.innerHTML = '';
    }
  }

  setCursor(cursor) {
    this.boardEl.style.cursor = cursor;
  }



//     const cellList = document.getElementsByClassName("cell");
//     let index;
//     let lastIndex = 0;
//     const min = 0;
//     const max = this.size ** 2 - 1;
//     setInterval(() => {
//       index = Math.floor(min + Math.random() * (max + 1 - min));
//       if (index === lastIndex) {
//         index += 1;
//         if (index >= max) {
//           index = 0;
//         }
//       }
//       cellList[index].innerHTML = '<img src="img/goblin.svg">';
//       cellList[lastIndex].innerHTML = "";
//       lastIndex = index;
//     }, 800);
//   }
}


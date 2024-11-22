// 1. A click on the Party Parrot increases the counter by 1

const state = {
  clickCount: 0, // # of clicks
  clicked: false // whether the click me box is in its clicked state
};

// we could add references to the various elements to our state
// add look them up only once, rather than every time each
// function is called!

const updateClickCount = () => {
  const parrotCountContainer = document.getElementById('parrot-count');
  state.clickCount += 1;
  parrotCountContainer.textContent = state.clickCount;

  const parrot = document.querySelector('#parrot');
  if (state.clickCount >= 10) {
    parrot.classList.add('large');
  }
};

const resetClickCount = () => {
  state.clickCount = 0;
  const parrotCountContainer = document.getElementById('parrot-count');
  parrotCountContainer.textContent = state.clickCount;

  const parrot = document.querySelector('#parrot');
  parrot.classList.remove('large');
};

// Which portions of updateClickCount and resetClickCount are shared
// in common? What refactoring could we do to DRY up the code?

// Look for other opportunities to DRY our code!

// What other data in the project could be stored in state?
// What could be stored in constants?

//Extra:
// Box 1
const mouseoverEffect = (event) => {
  const mouseoverEffect = document.querySelector('#box-one');
  mouseoverEffect.classList.add('over-box');
  console.log('mouseover?');
};

const mouseleaveEffect = (event) => {
  const mouseoverEffect = document.querySelector('#box-one');
  mouseoverEffect.classList.remove('over-box');
  console.log('mouseleave?');
};

// Box 2
const spacebarEffect = (event) => {
  console.log('space');
  const spacebarBox = document.querySelector('#box-two p');

  if (event.keyCode === 32) {
    // 32 is the keyCode for the space bar
    spacebarBox.textContent = '🍮';
    spacebarBox.classList.add('pressed');
  }
};

const keyUpEffect = (event) => {
  const spacebarBox = document.querySelector('#box-two p');

  if (event.keyCode === 32) {
    spacebarBox.classList.remove('pressed');
    spacebarBox.textContent = 'press space';
  }
};

// Box 3

const clickEffect = (event) => {
  const clickBox = document.querySelector('#box-three');
  if (!state.clicked) {
    clickBox.classList.add('clicked');
    state.clicked = true;
  } else {
    clickBox.classList.remove('clicked');
    state.clicked = false;
  }
};

// Box 4
const dblClickEffect = (event) => {
  alert('It\'s time to party! ');
};

// Register all events
const registerEventHandlers = () => {
  const parrot = document.getElementById('parrot');
  parrot.addEventListener('click', updateClickCount);
  const reset = document.getElementById('reset-button');
  reset.addEventListener('click', resetClickCount);

  //Extra
  const mouseoverBox = document.querySelector('#box-one');
  const clickBox = document.querySelector('#box-three');
  const dblClickBox = document.querySelector('#box-four');
  clickBox.addEventListener('click', clickEffect);
  dblClickBox.addEventListener('dblclick', dblClickEffect);

  mouseoverBox.addEventListener('mouseenter', mouseoverEffect);
  mouseoverBox.addEventListener('mouseleave', mouseleaveEffect);

  // Key handlers
  document.addEventListener('keydown', spacebarEffect);
  document.addEventListener('keyup', keyUpEffect);
};

// DOM listener
document.addEventListener('DOMContentLoaded', registerEventHandlers);

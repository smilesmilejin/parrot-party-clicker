// Add javascript code to Party Parrot Clicker such that:

// 1. A click on the Party Parrot increases the counter by 1

// 2. Add a button called ‘reset’ that will reset the
//    click count to ‘0’.

// 3. Add an effect whenever the clickCount
//    reaches a specific number.
//    (Ex: make parrot bigger, smaller, change the text/emoji,
//    etc.)

// <button id="add-click-button'">Add Click</button>
// <h1>Clicks: <span id="click-count-label">0</span></h1>
console.log('loaded')
const state = {
    addClickButton: null, 
    clickCountLabel: null,
    clickCount: 0,
    parrot: null,
    boxOne: null,
    boxTwo: null,
    boxTwoText: null,
    boxThree: null, 
    boxFour: null,
};

const handleAddButtonClicked = (event) => {
    ++state.clickCount;
    // state.clickCountLabel.textContent = state.clickCount;
    // this worked!
    // if (state.clickCount === 5) {
    //     state.clickCountLabel.textContent = 'Reached 5!'
    // } else {
    //     state.clickCountLabel.textContent = state.clickCount;
    // }

    if (state.clickCount % 5 === 0) {
        state.clickCountLabel.textContent = `Reached ${state.clickCount}! Multiple of 5`
        // state.parrot.style.width = '200px';
        state.parrot.classList.add('enlarged');
    } else {
        state.clickCountLabel.textContent = state.clickCount;
        // state.parrot.style.width = '100px';
        state.parrot.classList.remove('enlarged');
    }
};

const handleResetButtonClicked = (event) => {
    state.clickCount = 0;
    state.clickCountLabel.textContent = state.clickCount;
    // state.parrot.style.width = '100px';
    state.parrot.classList.remove('enlarged');
};

// Handle Box One Hover
const handleBoxOneHover = (event) => {
    state.boxOne.style.backgroundColor = 'pink';
};

const handleBoxOneMouseLeave = (event) => {
    state.boxOne.style.backgroundColor = '';
};

// Handle Box Two
const handleBoxTwoSpacekeyDown = (event) => {
    console.log(event.code);

    if (event.code == 'Space') {
        console.log('Space key pressed!');
        // state.boxTwo.style.backgroundColor = 'black';
        state.boxTwoText.textContent = '🍮';
    }
};

const handleBoxTwoSpacekeyUp = (event) => {
    // state.boxOne.style.backgroundColor = '';
    if (event.code === 'Space') {
        console.log('Space key released!');
        // state.boxTwo.style.backgroundColor = '';
        state.boxTwoText.textContent = 'press space'; // rest the text
  }
};

// Handle Box Three
const handleBoxThreeClicked = (event) => {
  // this works, but the parrot is no longer in the middle
//   if (parrot.style.display === 'none') {
//     parrot.style.display = 'block';
//   } else {
//     parrot.style.display = 'none';
//   }
    // this also works! parrot is in the middle
    // parrot: This is a reference to an HTML element (in this case, your Party Parrot image).
    // .classList: This is a special property of an element that lets you read or manipulate the list of CSS classes applied to it.
    // .toggle('hidden'): This method checks if the class 'hidden' is currently applied to the element.
    // If the class is present, .toggle() removes it.
    // If the class is NOT present, .toggle() adds it.
    parrot.classList.toggle('hidden');
};


// Handle Box Four
const handleBoxFourDoubleClicked = (event) => {
    alert('Box 4 was double clicked!');
}

const registerEvents = () => {
    state.addClickButton.addEventListener ('click', handleAddButtonClicked);
    state.resetClickButton.addEventListener('click', handleResetButtonClicked);
    state.boxOne.addEventListener('mouseenter', handleBoxOneHover);
    state.boxOne.addEventListener('mouseleave', handleBoxOneMouseLeave);

    // this need to focue on boxTwo
    // state.boxTwo.addEventListener('keydown', handleBoxSpacekeyDown);
    // state.boxTwo.addEventListener('mouseleave', handleBoxSpacekeyUp);
    document.addEventListener('keydown', handleBoxTwoSpacekeyDown);
    document.addEventListener('keyup', handleBoxTwoSpacekeyUp);

    state.boxThree.addEventListener('click', handleBoxThreeClicked);

    state.boxFour.addEventListener('dblclick', handleBoxFourDoubleClicked);
};

const onLoaded = () => {
    loadedControls();
    registerEvents();
};

const loadedControls = () => {
    state.addClickButton = document.getElementById('add-click-button');
    state.clickCountLabel = document.getElementById('click-count-label');
    state.resetClickButton = document.getElementById('reset-click-button');
    state.parrot = document.getElementById('parrot');
    state.boxOne = document.getElementById('box-one');
    state.boxTwo = document.getElementById('box-two');
    state.boxTwoText = document.getElementById('box-two-text');
    state.boxThree = document.getElementById('box-three');
    state.boxFour = document.getElementById('box-four');
};


onLoaded();



// Extra:
// // Box 1: When the mouse hovers over Box 1, switch the background to pink
// Box 2: When the spacebar is pressed down, make the text in Box 2 turn into a flan emoji
// Box 3: When Box 3 is clicked on, make Party Parrot appear and disappear
// Box 4: When Box 4 is double clicked, an alert shows up

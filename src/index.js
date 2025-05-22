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
}
const registerEvents = () => {
    state.addClickButton.addEventListener ('click', handleAddButtonClicked);
    state.resetClickButton.addEventListener('click', handleResetButtonClicked);
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
};


onLoaded();



// Extra:
// // Box 1: When the mouse hovers over Box 1, switch the background to pink
// Box 2: When the spacebar is pressed down, make the text in Box 2 turn into a flan emoji
// Box 3: When Box 3 is clicked on, make Party Parrot appear and disappear
// Box 4: When Box 4 is double clicked, an alert shows up

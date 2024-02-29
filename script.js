const sliderInput = document.querySelector('input[type=range]');
const sliderLabel = document.querySelector('.slider p');

sliderInput.addEventListener('input', (e) => {
    sliderLabel.textContent = `${e.target.value} x ${e.target.value}`;
});

let size = 16;
sliderInput.addEventListener('change', (e) => {
    size = e.target.value
    generateBoard();
});

const container = document.querySelector('.container');

let mousedown = false;
window.addEventListener('mousedown', () => {
    mousedown = true;
});

window.addEventListener('mouseup', () => {
    mousedown = false;
});


function generateBoard() {
    container.replaceChildren();

    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let i = 0; i < size; i++) {
            const cell = document.createElement('div');
            cell.style['flex-grow'] = '1';

            cell.addEventListener('mouseover', (e) => {
                if (mousedown) {

                    if (mode === "default") {
                        e.target.style['background-color'] = "black";

                    } else if (mode === "rainbow") {
                        const red = Math.floor(Math.random() * 256);
                        const green = Math.floor(Math.random() * 256);
                        const blue = Math.floor(Math.random() * 256);

                        e.target.style['background-color'] = `rgb(${red}, ${green}, ${blue})`;
                    }
                }
            });


            row.appendChild(cell);
        }

        container.appendChild(row);
    }
}

const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', () => {
    generateBoard();
});


let mode = "default";

const defaultBtn = document.querySelector('.default');
defaultBtn.addEventListener('click', () => {
    mode = "default";
});

const rainbowBtn = document.querySelector('.rainbow');
rainbowBtn.addEventListener('click', () => {
    mode = "rainbow";
});


generateBoard();
console.log('script attached to html ;)');

const hexColors = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const simpleColors = [
    'aqua',
    'blue',
    'fuchsia',
    'gray',
    'green',
    'lime',
    'maroon',
    'navy',
    'olive',
    'purple',
    'red',
    'silver',
    'teal',
    'yellow',
];
const changeColor = document.querySelector('.btn-change-color');
const btnSimple = document.querySelector('.btn-simple');
const btnHex = document.querySelector('.btn-hex');
const presentColor = document.getElementById('changeColor');

const randomHexNumbers = () => Math.floor(Math.random() * 6) + 1;

const randomSimpleNumbers = () => {
    return simpleColors[Math.trunc(Math.random() * simpleColors.length)];
};

const hexRandomColor = () => {
    let hex = '#';
    let i = 0;
    while (i < 6) {
        i++;
        hex += hexColors[randomHexNumbers()];
    }
    return hex;
};

const activeBtnHex = simpleOrHex => {
    document.querySelector('body').style.backgroundColor = simpleOrHex;
    presentColor.textContent = simpleOrHex;
};

btnSimple.addEventListener('click', () => {
    btnSimple.classList.add('active');
    btnHex.classList.remove('active');
});

btnHex.addEventListener('click', () => {
    btnSimple.classList.remove('active');
    btnHex.classList.add('active');
});

changeColor.addEventListener('click', () => {
    const simpleColor = randomSimpleNumbers();
    const hexColor = hexRandomColor();
    btnHex.classList.contains('active')
        ? activeBtnHex(hexColor)
        : activeBtnHex(simpleColor);
});

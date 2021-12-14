let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    firstLine = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    secondLine = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'enter'],
    thirdLine = ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    mainLine = ['alt', 'space', 'ctrl'];

for (i = 5; i >= 1; i--) {
    let a = document.createElement('div');
    a.classList.add('out-11');
    a.id = `id${i}`;
    document.querySelector(`.i-11`).after(a);
}
function arrayLine(arr1, lineNumber) {
    for (key in arr1) {
        let a = document.createElement('div');
        a.setAttribute('data', `${arr1[key]}`)
        a.textContent = `${arr1[key]}`;
        a.classList.add('keyboard');
        document.querySelector(`#id${lineNumber}`).append(a);
    }
}
arrayLine(numbers, 1);
arrayLine(firstLine, 2);
arrayLine(secondLine, 3);
arrayLine(thirdLine, 4);
arrayLine(mainLine, 5);

let keyboard = document.querySelectorAll('.keyboard');
function t11(event) {
    for (i = 0; i < keyboard.length; i++) {
        keyboard[i].classList.remove('active');
    }
    let key = event.key, secondary = { Enter: 'enter', Alt: 'alt', Control: 'ctrl', ' ': 'space' };
    document.querySelector('.keyCode').innerHTML = event.keyCode;
    document.querySelector('.eventKey').innerHTML = event.key;

    for (item in secondary) {
        if (key === item) {
            key = secondary[item];
            console.log(item);
            break;
        }
    }
    let button = document.querySelector(`.keyboard[data="${key}"]`);
    button.classList.add('active');
}
document.querySelector('.i-11').onkeydown = t11;


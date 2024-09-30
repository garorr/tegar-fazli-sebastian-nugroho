function toggleLamp() {
    const lamp = document.getElementById('lamp');
    if (lamp.classList.contains('off')) {
        lamp.classList.remove('off');
        lamp.classList.add('on');
    } else {
        lamp.classList.remove('on');
        lamp.classList.add('off');
    }
}

function toggleback() {
    const body = document.getElementById('body');
    if (body.classList.contains('off')) {
        body.classList.remove('off');
        body.classList.add('on');
    } else {
        body.classList.remove('on');
        body.classList.add('off');
    }
}
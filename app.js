var container = document.getElementById('container');
function countdown(initial, final, interval) {
    if (final === void 0) { final = 0; }
    var current = initial;
    while (current > final) {
        container.innerHTML = current;
        current -= interval;
    }
}
countdown(10, 0, 1);

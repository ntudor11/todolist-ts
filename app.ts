var container = document.getElementById('container');

function countdown(initial, final = 0, interval) {

  var current = initial;

  while (current > final) {
    container.innerHTML = current;
    current -= interval;
  }
}

countdown(10, 0, 1)

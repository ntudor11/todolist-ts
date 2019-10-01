var container = document.getElementById('container');
function calculate(action) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
        var value = values_1[_a];
        switch (action) {
            case 'add':
                total += value;
                break;
            case 'subtract':
                total -= value;
                break;
        }
    }
    return total;
}
var list = [1, 2, 3];
var toAdd = [4, 5, 6];
list.push.apply(list, toAdd);
console.log(list);
console.log(calculate('subtract', 1, 2, 3, 4, 5));
// var array = [
//   "pick up drycleaning",
//   "clean batcave",
//   "save Gotham"
// ];
//
// for (var value of array) {
//   console.log(`${value}`);
// }
// var todo = {
//   id: 123,
//   name: "pick up drycleaning",
//   completed: true
// }
// container.innerHTML = `
// <div id='${todo.id}' class="list-group-item}">
//     <i class="${todo.completed ? "" : "hidden" } text-success glyphicon glyphicon-ok"></i>
//     <span class="name">${todo.name}</span>
// </div>
// `
// function countdown(initial, final = 0, interval) {
//
//   var current = initial;
//
//   while (current > final) {
//     container.innerHTML = current;
//     current -= interval;
//   }
// }
//
// countdown(10, 0, 1)

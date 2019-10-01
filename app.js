var container = document.getElementById('container');
var todo = {
    id: 123,
    name: "pick up drycleaning",
    completed: true
};
container.innerHTML = "\n<div id='" + todo.id + "' class=\"list-group-item}\">\n    <i class=\"" + (todo.completed ? "" : "hidden") + " text-success glyphicon glyphicon-ok\"></i>\n    <span class=\"name\">" + todo.name + "</span>\n</div>\n";
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

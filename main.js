$(document).ready(function () {
    var arrayFromJSON = loadFromLocalStorage();
    var toDoListToday = arrayFromJSON[0];
    var toDoListTomorrow = arrayFromJSON[1];
    var toDoListSetAside = arrayFromJSON[2];
    var toDoListDone = arrayFromJSON[3];
   
    for (var i = 0; i < toDoListToday.todos.length; i++) {
        addToDoItemToHTML(toDoListToday.todos[i], 'js_today');
    }

    for (var i = 0; i < toDoListTomorrow.todos.length; i++) {
        addToDoItemToHTML(toDoListTomorrow.todos[i], 'js_tomorrow');
    }

    for (var i = 0; i < toDoListSetAside.todos.length; i++) {
        addToDoItemToHTML(toDoListSetAside.todos[i], 'js_set_aside');
    }

    for (var i = 0; i < toDoListDone.todos.length; i++) {
        addToDoItemToHTML(toDoListDone.todos[i], 'js_done');
    }

    addEventListener(arrayFromJSON);
});

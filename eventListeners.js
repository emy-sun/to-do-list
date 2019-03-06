function addEventListener(arrayFromJSON) {
    //add elements by click or onkeypress
    document.getElementById('js_add').onclick = function () {
        var selectedText = $("#js_selectDays").find("option:selected").text();
        console.log("Selected Text: " + selectedText);
        var searchResult = arrayFromJSON.find(
            function (element) {
                if (element.title === selectedText)
                    return true;
                else return false;
            }
        );

        console.log('​document.getElementById -> searchResult', searchResult);

        var objectList = {
            todo: document.getElementById('js_text').value,
            checked: false
        };
        searchResult.todos.push(objectList);
        console.log('​document.getElementById -> searchResult', searchResult);

        switch (selectedText) {
            case ("Today"):
                addToDoItemToHTML(objectList, 'js_today');
                break;

            case ("Tomorrow"):
                addToDoItemToHTML(objectList, 'js_tomorrow');
                break;

            case ("Set aside"):
                addToDoItemToHTML(objectList, 'js_set_aside');
                break;

            case ("Done"):
                addToDoItemToHTML(objectList, 'js_done');
                break;
        }

        document.getElementById("js_text").value = "";
    }
    document.getElementById('js_text').onkeypress = function (e) {
        if (e.key === 'Enter') {
            var selectedText = $("#js_selectDays").find("option:selected").text();
            console.log("Selected Text: " + selectedText);
            var searchResult = arrayFromJSON.find(
                function (element) {
                    if (element.title === selectedText)
                        return true;
                    else return false;
                }
            );

            console.log('​document.getElementById -> searchResult', searchResult);

            var objectList = {
                todo: document.getElementById('js_text').value,
                checked: false
            };
            searchResult.todos.push(objectList);
            console.log('​document.getElementById -> searchResult', searchResult);

            switch (selectedText) {
                case ("Today"):
                    addToDoItemToHTML(objectList, 'js_today');
                    break;

                case ("Tomorrow"):
                    addToDoItemToHTML(objectList, 'js_tomorrow');
                    break;

                case ("Set aside"):
                    addToDoItemToHTML(objectList, 'js_set_aside');
                    break;

            }

            document.getElementById("js_text").value = "";
        }
    }

    //save to local storage
    document.getElementById('js_save_button').onclick = function () {
        localStorage.setItem('myStorage', JSON.stringify({ toDoList: arrayFromJSON }));
    }

    //remove from local storage
    document.getElementById('js_clear_button').onclick = function () {
        localStorage.clear();
        arrayFromJSON = [];
        document.getElementById('js_today').innerHTML = '';
        document.getElementById('js_tomorrow').innerHTML = '';
        document.getElementById('js_set_aside').innerHTML = '';
        document.getElementById('js_done').innerHTML = '';
    }

    var checkboxes = document.getElementsByClassName('checkbox');
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('click', function (event) {
            var checked = event.target.checked;
            var label = event.target.labels[0].innerText;

            for (var i = 0; i < arrayFromJSON.length-1; i++) {
                var currentArrayOfTodos = arrayFromJSON[i].todos;
                var searchResult = currentArrayOfTodos.find(function (todoItem) {
                    return todoItem.todo === label;
                });
                
                if (searchResult) {
                    console.log(searchResult);
                    searchResult.checked = checked;
                    var copy = Object.assign({}, searchResult);
                    arrayFromJSON[3].todos.push(copy);
                    currentArrayOfTodos.splice(searchResult, 1);                                    
                };
            };
            console.log(arrayFromJSON);
        });
    }
};

var colors = [];
colors.push('url(https://images.wallpaperscraft.com/image/sea_distance_sunrise_91509_1920x1080.jpg)');
colors.push('url(https://img3.akspic.ru/image/105396-pejzazhi_gor-peyzash-ekosistema-ukraina-priroda-1920x1080.jpg)');
colors.push('url(https://wallpaperbro.com/img/573270.jpg)');
colors.push('url(http://www.masterdmc.com/wp-content/uploads/2015/02/albania-landscapes.jpg)');
colors.push('url(https://i.pinimg.com/originals/b8/c5/12/b8c512f5b27e81b6c6bc5346b5677461.jpg)');

console.log(colors);
var i = 1;

$("#js_changeColor").click(function(){ 
    $("#js_colouring").css("background", colors[i++]);
    if (i >= colors.length)
        i = 0;

});


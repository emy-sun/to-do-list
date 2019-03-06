function loadFromLocalStorage() {
    var arrayFromJSON;
    var localStorageData = JSON.parse(localStorage.getItem('myStorage')); //получаем и читаем данные из localStorage
    if (!localStorageData) {
        arrayFromJSON = JSON.parse('{"toDoList":[{"title":"Today","todos":[]},{"title":"Tomorrow","todos":[]},{"title":"Set aside","todos":[]},{"title":"Done","todos":[]}]}').toDoList; //если localStorage пустой, читаем из строки пустой массив
    } else {
        arrayFromJSON = localStorageData.toDoList; 
    }
    return arrayFromJSON;
}; 
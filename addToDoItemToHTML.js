var uniqIndex = 0;

function addToDoItemToHTML(objectList, targetElementID) {
  var out = document.createElement("div");
  out.className = 'hover';
  out.id = 'hover' + uniqIndex;
  out.innerHTML += `<div class='to_do_in_list'><input type="checkbox" id="${'ckeckbox-' + uniqIndex}" class='checkbox' ${objectList.checked ? 'checked' : ''}>
              <label for="${'ckeckbox-' + uniqIndex}">${objectList.todo}</label></div>`;
  document.getElementById(targetElementID).appendChild(out);
  var closeIcon = document.createElement('div');
  closeIcon.id = 'closeIcon' + uniqIndex;
  closeIcon.className = 'closeIcon';
  out.appendChild(closeIcon);
  $('#closeIcon' + uniqIndex).click(function () {
    this.parentElement.remove();
  });

  //remove task from list
  document.getElementById('ckeckbox-' + uniqIndex).onclick = function () {
    var task = this.parentNode;
    var doneTask = document.getElementById('js_done');
    task.remove();
    doneTask.appendChild(task);
  };

  uniqIndex++;
};


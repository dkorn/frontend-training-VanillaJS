var todos = [];

window.onload = () => {
  document.getElementById('new-todo').addEventListener('keypress', (e) => {
      var key = e.which || e.keyCode;
      var todoInput = e.currentTarget;
      var todo = todoInput.value;
      if (key === 13 && !/^\s*$/.test(todo)) { // 13 is enter
        var newLI = document.createElement('li');
        e.preventDefault();

        newLI.appendChild(document.createTextNode(todo));
        document.getElementById('todo-list').appendChild(newLI);

        todoInput.value = '';
        todos.push(e.currentTarget.value);
      }
  });
};
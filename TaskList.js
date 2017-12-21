// document.getElementById()
console.log(document.getElementById('task-title'));

// Get things from the element 
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

// change Styling 
// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.padding = '#333';

// Change content 
document.getElementById('task-title').textContent = 'Task list';


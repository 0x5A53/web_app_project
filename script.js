const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
    ${taskText}
    <button class="delete-btn">X</button>
  `;

  li.querySelector('.delete-btn').addEventListener('click', () => {
    li.remove();
  });

  list.appendChild(li);
  input.value = '';
});

function createListItem(task) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <div class="task-item">
      <div class="task-item__checkbox">
        <input type="checkbox" id="task-${task.index}" ${task.completed ? 'checked' : ''}>
        <label for="task-${task.index}"></label>
      </div>
      <div class="task-item__description ${task.completed ? 'completed' : ''}">
        ${task.description}
      </div>
      <div class="task-item__actions">
        <button class="edit-button" data-index="${task.index}">
          <i class="fas fa-edit"></i>
        </button>
        <button class="delete-button" data-index="${task.index}">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  `;

  const checkbox = listItem.querySelector('input[type="checkbox"]');
  checkbox.addEventListener('change', () => {
    const index = Number(checkbox.id.replace('task-', ''));
    const task = tasks.find((task) => task.index === index);
    task.completed = checkbox.checked;
    renderTaskList();
  });

  const editButton = listItem.querySelector('.edit-button');
  editButton.addEventListener('click', () => {
    const descriptionElem = listItem.querySelector('.task-item__description');
    const inputElem = document.createElement('input');
    inputElem.type = 'text';
    inputElem.value = descriptionElem.innerText;
    inputElem.addEventListener('blur', () => {
      task.description = inputElem.value;
      descriptionElem.innerText = inputElem.value;
    });
    descriptionElem.innerText = '';
    descriptionElem.appendChild(inputElem);
    inputElem.focus();
  });

  return listItem;
}
export {createListItem};
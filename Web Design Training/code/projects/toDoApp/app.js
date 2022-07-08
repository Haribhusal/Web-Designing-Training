let textInput = document.querySelector('.textInput');
let addTaskBtn = document.querySelector('.addTaskBtn');
let tasks = document.querySelector('.tasks')

addTaskBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let listItem = document.createElement('li')
    listItem.classList.add('task')
    let taskText = document.createElement('span');
    listItem.appendChild(taskText)
    tasks.appendChild(listItem)
    taskText.innerText = textInput.value
    textInput.value = ''
})


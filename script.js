//Initialize empty array element called task
let tasks = []

//add on click event listener
document.getElementById('addTaskBtn').addEventListener('click', function(){
    //Get Value of the input box and store in a variable called task input
    let taskInput = document.getElementById('taskInput').value

    //Check if taskInput has value
    if (taskInput){
        tasks.push(taskInput)

        document.getElementById('taskInput').value = ''

        displayTasks()
    }
})

//function to display tasks in a list
function displayTasks() {
    let taskList = document.getElementById('taskList')

    taskList.innerHTML = ''

    tasks.forEach((task, index ) => {
       let li = document.createElement('li')

       li.classList.add(
        'list-group-item',
        'd-flex',
        'justify-content-between',
        'align-items-center'
       )     
       li.innerHTML = `${task} <button class='btn btn-dark btn-sm' onclick='removeTask(${index})'> √ </button>`

       taskList.appendChild(li)
    })
}
function removeTask(index){
    tasks.splice(index, 1)

    displayTasks()
}
document.getElementById('clearTasksBtn').addEventListener('click', function(){
    tasks = []
    displayTasks()
})


document.querySelector('#add').onclick = function(){
    if(document.querySelector('#new input').value.length == 0){
        alert("Enter Task Name")
    }

    else{
        document.querySelector('#lists').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#new input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt">Remove</i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}
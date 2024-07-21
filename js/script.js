let todo = []
        let input = document.getElementById("todo-input");
        let submit = document.getElementById("todo-btn");
        let dTodo = document.getElementById("displaytodo");
        let classPopup = document.getElementById("popup");
        let editText = document.getElementById("editText");

        submit.addEventListener('click', addTodo);

        function addTodo(){
            let ntodo = input.value;
            todo.push(ntodo)
            input.value = " ";
            showTodo()
        }

        function showTodo(){
            
            var li = document.createElement("li");
            let todoDiv = document.createElement("div");
            let span = document.createElement("span");
            let todoBtn = document.createElement("div");
            


            dTodo.appendChild(li);
            todoDiv.appendChild(span)
            li.appendChild(todoDiv)
            
            for(let i = 0; i<todo.length; i++)
            var todoText = document.createTextNode(todo[i]);
            span.appendChild(todoText);
            
            li.appendChild(todoBtn)
            let editBtn = document.createElement("button");
            editBtn.innerHTML = "Edit";
            todoBtn.appendChild(editBtn);

            let saveBtn = document.createElement("button");
            saveBtn.innerHTML = "Save";
            todoBtn.appendChild(saveBtn);
            saveBtn.style.display = "none"


            let deleteBtn = document.createElement("button");
            deleteBtn.innerHTML = "Delete";
            todoBtn.appendChild(deleteBtn);
            todoBtn.classList.add("todoBtn");


            editBtn.addEventListener('click', editTodo)

            function editTodo(){
            
                span.setAttribute("contenteditable", "true");
                span.classList.add("editTodo");
                editBtn.style.display = "none";
                saveBtn.style.display = "block";

            }

            saveBtn.addEventListener('click', saveText)

            function saveText(){
                span.setAttribute("contenteditable", "false")
                saveBtn.style.display = "none";
                editBtn.style.display = "block";
                span.classList.remove("editTodo");
                
            }


            deleteBtn.addEventListener('click', deleteTodo)

            function deleteTodo(){
                li.remove();
            }

            
            
        }
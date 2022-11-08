class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        // Your code here
        todo={
           "title": "PSD",
           "description": "Fall-2022",
           "done":true 
        }
        console.log("Prior to adding: ",this.todos)
        this.todos.todo.push(todo)
        console.log("After adding: ",this.todos)
        return this.todos
    }

     delete_todo(id){
        id=2
        console.log("Prior to deleting : ",this.todos)
        this.todos.todo.splice(id)
        console.log("After successful deletion : ",this.todos)
        return this.todos
    }

}


module.exports= todoservice;

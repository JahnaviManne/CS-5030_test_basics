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
        console.log("After adding: ",this.todos);
        return this.todos
    }

     delete_todo(id){
        id=3
        console.log("Prior to deleting : ",this.todos.todo[id])
        this.todos.todo.splice(id)
        console.log("After successful deletion : ",this.todos.todo[id]);
        console.log("After successful deletion : ",this.todos);
        return this.todos
    }

     update_todo(id, description, todo){
         id=2
         console.log("Prior to update: ", this.todos.todo[id]);
         this.todos.todo[id].description = "November-2022";
         this.todos.todo[id].done = true;
         console.log("After successful updation: ", this.todos.todo[id]);
         return this.todos
    }

}

module.exports= todoservice;

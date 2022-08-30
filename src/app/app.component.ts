import { Component, OnInit } from '@angular/core';

class ToDo {
  id?: number;
  text?: string;
  isCompleted?: boolean = false;
  isEdit?: boolean = false
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  title = 'TO DO';

  ngOnInit() {
    this.toDoList = [{ id: 1, text: 'md:text-clipmd:text-clipmd:text-clipmd:text-clipmd:text-clipmd:text-clipmd:text-clipmd:text-clip', isCompleted: false, isEdit: false }]
  }
  toDoText = ''
  toDoList: ToDo[] = []
  clonedTodo: any = {}

  addTask() {
    debugger
    if (this.toDoText != '') {
      const newToDo = { id: Math.floor(Math.random() * 100000), text: this.toDoText, isCompleted: false, isEdit: false }
      this.toDoList = [newToDo, ...this.toDoList]
      console.log(this.toDoList)
      this.toDoText = ''
    } else {
      //toastr
    }
  }

  deleteTask(taskId: any) {
    this.toDoList = this.toDoList.filter(task => task.id != taskId)
    console.log(this.toDoList)
  }

  editTask(todo: ToDo) {
    if (todo.isEdit == true) {
      todo.isEdit = false
    } else {
      todo.isEdit = true
      this.clonedTodo = { ...todo }
    }
  }

  cancelEdit(todo: ToDo) {
    debugger
    todo.isEdit = false
    todo.text = this.clonedTodo.text
    delete this.clonedTodo
  }

  onCompleted(todo: ToDo) {
    console.log("completed", todo)

    const app = document.getElementById("todoText");
    console.log(app)

    todo.isCompleted = !todo.isCompleted
  }



}

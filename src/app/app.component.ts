import { Component } from '@angular/core';
import { Itodo } from './models/todos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-crud';

  todoArr:Array<Itodo> = [
    {
      todoItem:"JS",
      todoId:'101'
    },
    {
      todoItem:"TS",
      todoId:'102'
    },
     {
      todoItem:"CSS",
      todoId:'103'
    }
  ]

  trackById(index:number,todo:Itodo){
    return todo.todoId
  }

}

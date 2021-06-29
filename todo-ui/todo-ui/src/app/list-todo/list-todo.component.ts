import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';


@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  todoResult : any;
  todoList : any;

  constructor(private TodoService : TodoService) { }

  ngOnInit(): void {
    this.getTodoList();
  }

  getTodoList(){
      this.TodoService.getTodos().subscribe((data: any[])=>{
      this.todoResult = data;
      this.todoList = this.todoResult.results;
    });
    
  }

  getInProgressTodos(){
    this.TodoService.getInProgressTodos().subscribe((data: any[])=>{
      this.todoResult = data;
      this.todoList = this.todoResult.results;
    });
  }

  getCompletedTodos(){
    this.TodoService.getCompletedTodos().subscribe((data: any[])=>{
      this.todoResult = data;
      this.todoList = this.todoResult.results;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  addTodoForm: FormGroup;
  todoResult: any;
  name: string;
  description: string;
  time: string;
  status: string;

  constructor(
    private TodoService: TodoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addTodo() {
    
    let body = {
      name: this.name,
      description: this.description,
      time: this.time,
      status: this.status
    }

    this.TodoService.addTodos(body).subscribe((data: any[]) => {
      this.todoResult = data;
      alert('Todo task added successfully!');
      this.router.navigateByUrl('todolist');
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosService } from '../../services/todos.service';
import { Todos } from '../../interfaces/todos';
import { TodosComponent } from '../../components/todos/todos.component';

@Component({
  selector: 'app-list-todo',
  standalone: true,
  imports: [CommonModule, TodosComponent],
  templateUrl: './list-todo.component.html',
  providers: [TodosService],
})
export class ListTodoComponent implements OnInit {
  todoService;
  todos: Todos[] = [];

  constructor(todoService: TodosService) {
    this.todoService = todoService;
  }

  ngOnInit(): void {
    this.getListTodo();
  }

  async getListTodo() {
    try {
      (await this.todoService.getTodos()).subscribe((value) => {
        this.todos = value;
      });
    } catch (error) {
      console.log(error);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TodosComponent } from '../../components/todos/todos.component';
import { Todos } from '../../interfaces/todos';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todo-detail',
  standalone: true,
  imports: [CommonModule, TodosComponent],
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.scss',
})
export class TodoDetailComponent implements OnInit {
  todo!: Todos;

  constructor(
    private activateRoute: ActivatedRoute,
    private route: Router,
    private todoService: TodosService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((param) => {
      if (param['id']) {
        this.getATodo(param['id']);
      }
    });
  }

  async getATodo(id: Todos['id'] | undefined) {
    try {
      (await this.todoService.getTodoById(id)).subscribe((value) => {
        this.todo = value;
      });
    } catch (error) {
      this.route.navigate(['not-found']);
    }
  }
}

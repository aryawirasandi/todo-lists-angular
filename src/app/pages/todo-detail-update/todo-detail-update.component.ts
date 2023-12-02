import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorBadgeComponent } from '../create-todo/create-todo.component';
import { TodosService } from '../../services/todos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todos } from '../../interfaces/todos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-detail-update',
  standalone: true,
  imports: [CommonModule, ErrorBadgeComponent, FormsModule],
  templateUrl: './todo-detail-update.component.html',
  styleUrl: './todo-detail-update.component.scss',
})
export class TodoDetailUpdateComponent implements OnInit {
  router: Router;
  selectedId!: string;
  todos: Todos = {
    title: '',
    description: '',
    status: false,
    createdAt: `${new Date()}`,
  };

  todosService: TodosService;

  ngOnInit(): void {
    this.activateRoute.params.subscribe((param) => {
      if (param['id']) {
        this.getATodo(param['id']);
        this.selectedId = param['id'];
      }
    });
  }

  async getATodo(id: Todos['id'] | undefined) {
    try {
      (await this.todosService.getTodoById(id)).subscribe((value) => {
        this.todos = value;
      });
    } catch (error) {
      this.router.navigate(['not-found']);
    }
  }

  constructor(
    todosService: TodosService,
    router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.todosService = todosService;
    this.router = router;
  }

  async onUpdate() {
    (await this.todosService.updateTodo(this.selectedId, this.todos)).subscribe(
      () => {
        console.log('success');
      }
    );
    this.router.navigate(['/']);
  }
}

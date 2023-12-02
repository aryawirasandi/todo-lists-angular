import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todos } from '../../interfaces/todos';
import { TodosService } from '../../services/todos.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-error-badge-component',
  standalone: true,
  template: `
    <div [hidden]="hidden">
      <div class="alert alert-error rounded-none my-4 text-white">
        {{ message }}
      </div>
    </div>
  `,
})
export class ErrorBadgeComponent {
  @Input({
    required: true,
  })
  hidden!: boolean;
  @Input() message: string = 'default message here!';
}
@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [CommonModule, FormsModule, ErrorBadgeComponent],
  styleUrl: './create-todo.component.scss',
  templateUrl: './create-todo.component.html',
})
export class CreateTodoComponent {
  router: Router;

  todos: Todos = {
    title: '',
    description: '',
    status: false,
    createdAt: `${new Date()}`,
  };

  todosService: TodosService;

  constructor(todosService: TodosService, router: Router) {
    this.todosService = todosService;
    this.router = router;
  }

  async onSubmit() {
    (await this.todosService.createTodo(this.todos)).subscribe(() => {
      console.log('success');
    });
    this.router.navigate(['/']);
  }
}

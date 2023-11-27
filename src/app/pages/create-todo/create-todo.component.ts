import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todos } from '../../interfaces/todos';

@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrl: './create-todo.component.scss',
  templateUrl: './create-todo.component.html',
})
export class CreateTodoComponent {
  todos: Todos = {
    title: '',
    description: '',
    status: false,
    createdAt: `${new Date()}`,
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}

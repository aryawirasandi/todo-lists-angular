import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todos } from '../../interfaces/todos';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-todo-component',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent {
  @Input({
    required: true,
  })
  todo!: Todos;
}

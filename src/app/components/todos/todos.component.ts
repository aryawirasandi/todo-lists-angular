import { Component, Input, Output, EventEmitter } from '@angular/core';
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

  @Output() deleteTodo = new EventEmitter<string>();

  triggerDeleteTodo(id: string | undefined) {
    if (typeof id !== 'undefined') {
      this.deleteTodo.emit(id);
    } else {
      alert('failed to delete there is no id here!');
    }
  }
}

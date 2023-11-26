import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-todo.component.html',
})
export class CreateTodoComponent {}

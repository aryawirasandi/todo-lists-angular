import { Routes } from '@angular/router';
import { ListTodoComponent } from './pages/list-todo/list-todo.component';
import { CreateTodoComponent } from './pages/create-todo/create-todo.component';
import { TodoDetailComponent } from './pages/todo-detail/todo-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: ListTodoComponent,
    title: 'Home',
  },
  {
    path: 'create',
    component: CreateTodoComponent,
    title: 'Create A Todo',
  },
  {
    path: 'todo/:id',
    component: TodoDetailComponent,
    title: 'Show Todo',
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    title: 'Oops, Not Found',
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

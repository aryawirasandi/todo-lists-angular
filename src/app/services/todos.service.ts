import { Injectable } from '@angular/core';
import { Todos } from '../interfaces/todos';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  httpClient: HttpClient;

  constructor(HttpClient: HttpClient) {
    this.httpClient = HttpClient;
  }

  async getTodos() {
    return this.httpClient.get<Todos[]>('http://localhost:3000/todos');
  }

  async getTodoById(id: string | undefined) {
    return this.httpClient.get<Todos>('http://localhost:3000/todos/' + id);
  }

  async updateTodo(id: string, payload: Todos) {}

  async removeTodo(id: string) {}
}

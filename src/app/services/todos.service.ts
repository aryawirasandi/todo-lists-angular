import { Injectable } from '@angular/core';
import { Todos } from '../interfaces/todos';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  httpClient: HttpClient;
  baseUrl = 'http://localhost:3000';

  constructor(HttpClient: HttpClient) {
    this.httpClient = HttpClient;
  }

  async getTodos() {
    return this.httpClient.get<Todos[]>(`${this.baseUrl}/todos/`);
  }

  async getTodoById(id: string | undefined) {
    return this.httpClient.get<Todos>(`${this.baseUrl}/todos/` + id);
  }

  async createTodo(payload: Todos) {
    return this.httpClient.post<Todos>(`${this.baseUrl}/todos`, payload);
  }

  async updateTodo(id: string, payload: Todos) {}

  async removeTodo(id: string) {}
}

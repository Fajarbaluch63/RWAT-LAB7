import { Injectable } from '@angular/core';
import { Todo } from './models/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private storageKey = 'todos'; // Local Storage key for todos

  // Fetch all todos from Local Storage
  async getTodos(): Promise<Todo[]> {
    const todosJson = localStorage.getItem(this.storageKey);
    return todosJson ? JSON.parse(todosJson) : [];
  }

  // Add a new todo to Local Storage
  async addTodo(content: string): Promise<void> {
    const todos = await this.getTodos();
    const newTodo: Todo = {
      id: Date.now(), // Unique ID based on the timestamp
      content,
      completed: false,
    };
    todos.push(newTodo);
    localStorage.setItem(this.storageKey, JSON.stringify(todos));
  }

  // Toggle the completion status of a todo in Local Storage
  async toggleTodoCompletion(id: number): Promise<void> {
    const todos = await this.getTodos();
    const todo = todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      localStorage.setItem(this.storageKey, JSON.stringify(todos));
    }
  }

  // Delete a todo from Local Storage
  async deleteTodo(id: number): Promise<void> {
    const todos = await this.getTodos();
    const updatedTodos = todos.filter(todo => todo.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(updatedTodos));
  }
}

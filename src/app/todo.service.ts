import { Injectable } from '@angular/core';
import { Todo } from './models/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  url = 'http://localhost:3000/todos'; // Ensure this URL points to your JSON server

  // Fetch all todos
  async getTodos(): Promise<Todo[]> {
    const response = await fetch(this.url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const todos: Todo[] = await response.json();
    return todos;
  }

  // Add a new todo
  async addTodo(content: string): Promise<void> {
    const newTodo: Todo = {
      id: Date.now(), // Use a unique ID based on the current timestamp
      content,
      completed: false,
    };

    await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    });
  }

  async toggleTodoCompletion(id: number): Promise<void> {
    console.log("Attempting to toggle completion for ID:", id);
    
    const todos = await this.getTodos();
    const existingTodo = todos.find((todo) => todo.id === id);
    
    if (existingTodo) {
        existingTodo.completed = !existingTodo.completed;
        const response = await fetch(`${this.url}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ completed: existingTodo.completed }),
        });
        
        if (!response.ok) {
            console.error(`Failed to update todo with ID ${id}. Status: ${response.statusText}`);
        }
    } else {
        console.error(`Todo with ID ${id} not found.`);
    }
}


async deleteTodo(id: number): Promise<void> {
  const response = await fetch(`http://localhost:3000/todos/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    console.error(`Error deleting todo with ID ${id}:`, response.statusText);
  } else {
    console.log(`Todo with ID ${id} deleted successfully.`);
  }
}



}
